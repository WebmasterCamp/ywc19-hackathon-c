package database

import (
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	PTGUdatabase "github.com/parinyapt/golang_utils/database/v1"
	
	modelDatabase "github.com/WebmasterCamp/ywc19-hackathon-c/backend/model/database"
	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/logger"
)

var DB *gorm.DB

func initializeConnectPostgreSQL() {

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=%s",
    os.Getenv("DATABASE_POSTGRESQL_HOST"),
		os.Getenv("DATABASE_POSTGRESQL_USERNAME"),
		os.Getenv("DATABASE_POSTGRESQL_PASSWORD"),
		os.Getenv("DATABASE_POSTGRESQL_DBNAME"),
		os.Getenv("DATABASE_POSTGRESQL_PORT"),
		os.Getenv("TZ"),
	)
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		logger.Fatal("Failed to connect postgresql database", logger.Field("error", err))
	}

	// Set the global time zone for the database connection
	err = database.Exec(fmt.Sprintf("SET TIME ZONE '%s';",os.Getenv("TZ"))).Error
	if err != nil {
		logger.Fatal("Failed to set postgresql global time zone", logger.Field("error", err))
	}

	// Create PostgreSQL Enum
	var enumStruct modelDatabase.EnumList
	sqlcmdEnumAutoMigrate, err := PTGUdatabase.PostgresqlGenerateAutoMigrateEnum(os.Getenv("DATABASE_TABLE_PREFIX"), enumStruct)
	if err != nil {
		logger.Fatal("Failed to generate SQL command for auto migrate enum", logger.Field("error", err))
	}
	err = database.Exec(sqlcmdEnumAutoMigrate).Error
	if err != nil {
		logger.Fatal("Failed to auto migrate enum", logger.Field("error", err))
	}

	// AutoMigrate database
	err = database.AutoMigrate(
		&modelDatabase.Account{},
	)
	if err != nil {
		logger.Fatal("Failed to AutoMigrate database", logger.Field("error", err))
	}

	DB = database

	logger.Info("Initialize PostgreSQL Database Success")
}