package config

import (
	"os"

	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/logger"
)

func InitializeConfig() {
	if os.Getenv("DEPLOY_MODE") == "development" {
		initializeEnvironmentFile()
	}
	if os.Getenv("DEPLOY_MODE") == "production" {
		initializeSetGinReleaseMode()
	}
	// initializeEnvironmentVariableCheck()
	initializeGlobalTimezone()

	logger.Info("Initialize Config Success")
}