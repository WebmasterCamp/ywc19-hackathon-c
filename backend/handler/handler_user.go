package handler

import (
	"github.com/gin-gonic/gin"

	PTGUvalidator "github.com/parinyapt/golang_utils/validator/v1"

	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/controller"
	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/logger"
	modelDatabase "github.com/WebmasterCamp/ywc19-hackathon-c/backend/model/database"
	modelUtils "github.com/WebmasterCamp/ywc19-hackathon-c/backend/model/utils"
	utilsResponse "github.com/WebmasterCamp/ywc19-hackathon-c/backend/utils/response"
)

type RequestCreateUserHandler struct {
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required,min=8"`
	Name     string `json:"name" validate:"required"`
	Email    string `json:"email" validate:"required,email"`
}

type ResponseCreateUserHandler struct {
	Username string `json:"username"`
	Name     string `json:"name"`
	Email    string `json:"email"`
}

func CreateUserHandler(c *gin.Context) {
	var request RequestCreateUserHandler
	var response ResponseCreateUserHandler

	if err := c.ShouldBindJSON(&request); err != nil {
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Bad request",
			},
		})
		return
	}

	isValidatePass, errorFieldList, validatorError := PTGUvalidator.Validate(request)
	if validatorError != nil {
		logger.Error("[Handler][CreateUserHandler()]->Error Validate Data", logger.Field("error", validatorError.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Internal server error",
			},
		})
		return
	}
	if !isValidatePass {
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: errorFieldList,
			},
		})
		return
	}

	createUser, err := controller.CreateUser(controller.ParamCreateUser{
		Username: request.Username,
		Password: request.Password,
		Name:     request.Name,
		Email:    request.Email,
	})
	if err != nil {
		logger.Error("[Handler][CreateUserHandler()]->Error Create User", logger.Field("error", err.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Internal server error",
			},
		})
		return
	}

	response.Username = createUser.Username
	response.Name = createUser.Name
	response.Email = createUser.Email

	utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
		ResponseCode: 200,
		Detail: modelUtils.JsonResponseStructDetail{
			Data:  response,
			Error: nil,
		},
	})
}

type QueryParamGetAllUserHandler struct {
	Roles string `form:"roles" validate:"required,oneof=user admin"`
}

type ResponseGetAllUserHandler struct {
	Count int `json:"count"`
	Roles string `json:"roles"`
	Users []modelDatabase.Account `json:"users"`
}

func GetAllUserHandler(c *gin.Context) {
	var queryParam QueryParamGetAllUserHandler
	var response ResponseGetAllUserHandler

	if err := c.ShouldBind(&queryParam); err != nil {
		logger.Error("[Handler][GetAllUserHandler()]->Error Bind Data", logger.Field("error", err.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Bad request",
			},
		})
		return
	}

	isValidatePass, errorFieldList, validatorError := PTGUvalidator.Validate(queryParam)
	if validatorError != nil {
		logger.Error("[Handler][GetAllUserHandler()]->Error Validate Data", logger.Field("error", validatorError.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Internal server error",
			},
		})
		return
	}
	if !isValidatePass {
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: errorFieldList,
			},
		})
		return
	}

	getAllUser, err := controller.GetAllUser(controller.ParamGetAllUser{
		UserRoles: "user",
	})
	if err != nil {
		logger.Error("[Handler][GetAllUserHandler()]->Error Get All User", logger.Field("error", err.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Internal server error",
			},
		})
		return
	}

	response.Count = getAllUser.Rows
	response.Roles = queryParam.Roles
	response.Users = getAllUser.Data

	utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
		ResponseCode: 200,
		Detail: modelUtils.JsonResponseStructDetail{
			Data:  response,
			Error: nil,
		},
	})
}

type UriParamsGetUserUUID struct {
	UUID string `uri:"uuid" validate:"required,uuid"`
}

func GetUserByUUIDHandler(c *gin.Context) {
	var uriParam UriParamsGetUserUUID

	if err := c.ShouldBindUri(&uriParam); err != nil {
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Bad request",
			},
		})
		return
	}

	isValidatePass, errorFieldList, validatorError := PTGUvalidator.Validate(uriParam)
	if validatorError != nil {
		logger.Error("[Handler][GetUserByUUIDHandler()]->Error Validate Data", logger.Field("error", validatorError.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: errorFieldList,
			},
		})
		return
	}
	if !isValidatePass {
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: errorFieldList,
			},
		})
		return
	}

	getUserByUUID, err := controller.GetUserByUUID(controller.ParamGetUserByUUID{
		AccountUUID: uriParam.UUID,
	})
	if err != nil {
		logger.Error("[Handler][GetUserByUUIDHandler()]->Error Get User By UUID", logger.Field("error", err.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Internal server error",
			},
		})
		return
	}

	utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
		ResponseCode: 200,
		Detail: modelUtils.JsonResponseStructDetail{
			Data:  getUserByUUID,
			Error: nil,
		},
	})
}

func DeleteUserHandler(c *gin.Context) {
	var uriParam UriParamsGetUserUUID

	if err := c.ShouldBindUri(&uriParam); err != nil {
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Bad request",
			},
		})
		return
	}

	isValidatePass, errorFieldList, validatorError := PTGUvalidator.Validate(uriParam)
	if validatorError != nil {
		logger.Error("[Handler][DeleteUserHandler()]->Error Validate Data", logger.Field("error", validatorError.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: errorFieldList,
			},
		})
		return
	}
	if !isValidatePass {
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 400,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: errorFieldList,
			},
		})
		return
	}

	deleteUser, err := controller.DeleteUser(controller.ParamDeleteUser{
		AccountUUID: uriParam.UUID,
	})
	if err != nil {
		logger.Error("[Handler][DeleteUserHandler()]->Error Delete User", logger.Field("error", err.Error()))
		utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
			ResponseCode: 500,
			Detail: modelUtils.JsonResponseStructDetail{
				Data:  nil,
				Error: "Internal server error",
			},
		})
		return
	}

	utilsResponse.JsonResponse(c, modelUtils.JsonResponseStruct{
		ResponseCode: 200,
		Detail: modelUtils.JsonResponseStructDetail{
			Data:  deleteUser,
			Error: nil,
		},
	})

}
