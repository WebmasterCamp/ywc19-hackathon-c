package main

import (
	"os"

	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/config"
	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/database"
	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/logger"
	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/routes"
)

func main() {
	config.InitializeDeployModeFlag()

	logger.InitializeLogger(os.Getenv("DEPLOY_MODE"))
	config.InitializeConfig()
	database.InitializeDatabase()
	routes.InitializeRoutes()
}