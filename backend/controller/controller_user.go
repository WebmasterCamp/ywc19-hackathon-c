package controller

import (
	"github.com/google/uuid"
	PTGUpassword "github.com/parinyapt/golang_utils/password/v1"
	"github.com/pkg/errors"

	"github.com/WebmasterCamp/ywc19-hackathon-c/backend/database"
	modelDatabase "github.com/WebmasterCamp/ywc19-hackathon-c/backend/model/database"

	utilsUUID "github.com/WebmasterCamp/ywc19-hackathon-c/backend/utils/uuid"
)

type ParamCreateUser struct {
	Username string
	Password string
	Name     string
	Email    string
}

type ReturnCreateUser struct {
	Username string
	Name     string
	Email    string
}

func CreateUser(param ParamCreateUser) (returnData ReturnCreateUser, err error) {
	accountUUID := uuid.New()

	passwordHash, err := PTGUpassword.HashPassword(param.Password, 14)
	if err != nil {
		return returnData, errors.Wrap(err, "[Controller][CreateUser()]->Fail to hash password")
	}

	resultDB := database.DB.Create(&modelDatabase.Account{
		UUID:     accountUUID,
		Username: param.Username,
		Password: passwordHash,
		Name:     param.Name,
		Email:    param.Email,
		Roles:    "user",
	})
	if resultDB.Error != nil {
		return returnData, errors.Wrap(resultDB.Error, "[Controller][CreateUser()]->Fail to create user")
	}

	returnData.Username = param.Username
	returnData.Name = param.Name
	returnData.Email = param.Email

	return returnData, nil
}

type ParamGetAllUser struct {
	UserRoles string
}

type ReturnGetAllUser struct {
	Rows int
	Data []modelDatabase.Account
}

func GetAllUser(param ParamGetAllUser) (returnData ReturnGetAllUser, err error) {
	resultDB := database.DB.Where(&modelDatabase.Account{Roles: param.UserRoles}).Find(&returnData.Data)
	if resultDB.Error != nil {
		return returnData, errors.Wrap(resultDB.Error, "[Controller][GetAllUser()]->Fail to get all user")
	}

	if resultDB.RowsAffected == 0 {
		return returnData, nil
	}

	returnData.Rows = int(resultDB.RowsAffected)
	return returnData, nil
}

type ParamGetUserByUUID struct {
	AccountUUID string
}

type ReturnGetUserByUUID struct {
	IsFound bool
	Data    modelDatabase.Account
}

func GetUserByUUID(param ParamGetUserByUUID) (returnData ReturnGetUserByUUID, err error) {
	accountUUID := utilsUUID.ParseUUIDfromString(param.AccountUUID)

	resultDB := database.DB.Where(&modelDatabase.Account{UUID: accountUUID}).Limit(1).Find(&returnData.Data)
	if resultDB.Error != nil {
		return returnData, errors.Wrap(resultDB.Error, "[Controller][GetUserByUUID()]->Fail to get user by uuid")
	}
	if resultDB.RowsAffected == 0 {
		returnData.IsFound = false
		return returnData, nil
	}

	returnData.IsFound = true

	return returnData, nil
}

type ParamDeleteUser struct {
	AccountUUID string
}

type ReturnDeleteUser struct {
	IsFound bool
}

func DeleteUser(param ParamDeleteUser) (returnData ReturnDeleteUser, err error) {
	accountUUID := utilsUUID.ParseUUIDfromString(param.AccountUUID)

	resultDB := database.DB.Where(&modelDatabase.Account{UUID: accountUUID}).Delete(&modelDatabase.Account{})
	if resultDB.Error != nil {
		return returnData, errors.Wrap(resultDB.Error, "[Controller][DeleteUser()]->Fail to delete user")
	}

	if resultDB.RowsAffected == 0 {
		return returnData, errors.Wrap(resultDB.Error, "[Controller][DeleteUser()]->Fail to delete user")
	}

	returnData.IsFound = true
	return returnData, nil
}
