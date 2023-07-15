package routes

import (
	"github.com/gin-gonic/gin"

	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/handler"
)

func configApiRoutes(router *gin.Engine) {
	router.NoRoute(handler.NoRouteHandler)
}