package utilsUUID

import "github.com/google/uuid"

func ParseUUIDfromString(uuidStr string) (uuid.UUID) {
	parsedUUID, err := uuid.Parse(uuidStr)
	if err != nil {
		return uuid.UUID{}
	}
	return parsedUUID 
}