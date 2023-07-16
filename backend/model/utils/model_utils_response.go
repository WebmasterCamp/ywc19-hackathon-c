package modelUtils

type JsonResponseStruct struct {
	ResponseCode int
	Detail       JsonResponseStructDetail
}

type JsonResponseStructDetail struct {
	Data      interface{} `json:"data"`
	Error     interface{} `json:"error"`
}