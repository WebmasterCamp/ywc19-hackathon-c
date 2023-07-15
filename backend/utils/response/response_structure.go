package utilsResponse

import (
	"github.com/gin-gonic/gin"

	modelUtils "github.com/WebmasterCamp/ywc19-hackathon-c/backend/model/utils"
)

func JsonResponse(c *gin.Context, param modelUtils.JsonResponseStruct) {
	c.JSON(param.ResponseCode, modelUtils.JsonResponseStructDetail{
		Data:      param.Detail.Data,
		Error:     param.Detail.Error,
	})
}