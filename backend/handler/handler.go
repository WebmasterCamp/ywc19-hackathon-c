package handler

import (
	"github.com/gin-gonic/gin"

	utilsResponse "github.com/WebmasterCamp/ywc19-hackathon-c/backend/utils/response"
	modelUtils "github.com/WebmasterCamp/ywc19-hackathon-c/backend/model/utils"
)

func NoRouteHandler(c *gin.Context) {
	utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
		ResponseCode: 404,
		Detail: modelUtils.JsonResponseStructDetail{
			Data:      nil,
			Error:     "Not found",
		},
	})
}