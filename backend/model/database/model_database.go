package modelDatabase

import (
	"time"

	"github.com/google/uuid"

	utilsDatabase "github.com/WebmasterCamp/ywc19-hackathon-c/backend/utils/database"
)

type EnumList struct {
	AccountRoles any `enumName:"account_roles_enum" enumValue:"user,admin" enumTable:"account" enumColumn:"account_roles"`
	ProductSector any `enumName:"product_sector_enum" enumValue:"handcraft,fasion,food,none" enumTable:"product" enumColumn:"product_sector"`
}

type Account struct {
	UUID      uuid.UUID `gorm:"column:account_uuid;type:uuid;primary_key;not null"`
	Name      string    `gorm:"column:account_name;not null"`
	Email     string    `gorm:"column:account_email;not null"`
	Password  string    `gorm:"column:account_password;not null"`
	Roles     string    `gorm:"column:account_roles;type:account_roles_enum;default:user;not null"`
	CreatedAt time.Time `gorm:"column:account_created_at;type:timestamp;not null"`
	UpdatedAt time.Time `gorm:"column:account_updated_at;type:timestamp;not null"`
}

func (Account) TableName() string {
	return utilsDatabase.GenerateTableName("account")
}

type Bill struct {
	UUID        uuid.UUID `gorm:"column:bill_uuid;type:uuid;primary_key;not null"`
	AccountUUID string    `gorm:"column:bill_account_uuid;not null"`
	CreatedAt   time.Time `gorm:"column:bill_created_at;type:timestamp;not null"`
	UpdatedAt   time.Time `gorm:"column:bill_updated_at;type:timestamp;not null"`
}

func (Bill) TableName() string {
	return utilsDatabase.GenerateTableName("bill")
}

type BillItem struct {
	ID        int       `gorm:"column:bill_item_id;primary_key;autoIncrement;not null"`
	BillUUID  string    `gorm:"column:bill_item_bill_uuid;not null"`
	ProductID int       `gorm:"column:bill_item_product_id;not null"`
	Quantity  int       `gorm:"column:bill_item_quantity;not null"`
	CreatedAt time.Time `gorm:"column:bill_item_created_at;type:timestamp;not null"`
	UpdatedAt time.Time `gorm:"column:bill_item_updated_at;type:timestamp;not null"`
}

func (BillItem) TableName() string {
	return utilsDatabase.GenerateTableName("bill_item")
}

type Product struct {
	ID          int       `gorm:"column:product_id;primary_key;autoIncrement;not null"`
	Name        string    `gorm:"column:product_name;not null"`
	Description string    `gorm:"column:product_description;not null"`
	Price       int       `gorm:"column:product_price;not null"`
	Sector      string    `gorm:"column:product_sector;type:product_sector_enum;default:none;not null"`
	CreatedAt   time.Time `gorm:"column:product_created_at;type:timestamp;not null"`
	UpdatedAt   time.Time `gorm:"column:product_updated_at;type:timestamp;not null"`
}

func (Product) TableName() string {
	return utilsDatabase.GenerateTableName("product")
}
