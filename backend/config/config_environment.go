package config

import (
	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	
	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/logger"
)

func initializeEnvironmentFile() {
	err := godotenv.Load(".env")
	if err != nil {
		logger.Fatal("Failed to load environment file", logger.Field("error", err))
	}
}

type envSpecification struct {
	Port int    `required:"true"`
	TZ   string `required:"true"`
}

func initializeEnvironmentVariableCheck() {
	var envSpec envSpecification
	err := envconfig.Process("", &envSpec)
	if err != nil {
		logger.Fatal(err.Error())
	}
}
