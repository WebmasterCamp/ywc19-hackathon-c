package routes

import (
	"github.com/gin-gonic/gin"

	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/handler"
)

func configApiRoutes(router *gin.Engine) {
	router.NoRoute(handler.NoRouteHandler)

	v1 := router.Group("/v1")
	{
		user := v1.Group("/user")
		{
			user.POST("", handler.CreateUserHandler)
			user.GET("", handler.GetAllUserHandler)
			user.GET("/:uuid", handler.GetUserByUUIDHandler)
			user.DELETE("/:uuid", handler.DeleteUserHandler)
		}
	}
}
