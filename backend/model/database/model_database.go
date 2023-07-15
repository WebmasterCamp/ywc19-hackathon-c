package modelDatabase

import (
	"time"

	"github.com/google/uuid"

	utilsDatabase "github.com/WebmasterCamp/ywc19-hackathon-c/backend/utils/database"
)

type EnumList struct {
	AccountRoles            any `enumName:"account_roles_enum" enumValue:"user,admin" enumTable:"account" enumColumn:"account_roles"`
}

type Account struct {
	UUID          uuid.UUID `gorm:"column:account_uuid;type:uuid;primary_key;not null"`
	Name          string    `gorm:"column:account_name;not null"`
	Email         string    `gorm:"column:account_email;not null"`
	Password      string    `gorm:"column:account_password;not null"`
	Roles         string    `gorm:"column:account_roles;type:account_roles_enum;default:normal;not null"`
	CreatedAt     time.Time `gorm:"column:account_created_at;type:timestamp;not null"`
	UpdatedAt     time.Time `gorm:"column:account_updated_at;type:timestamp;not null"`
}

func (Account) TableName() string {
	return utilsDatabase.GenerateTableName("account")
}