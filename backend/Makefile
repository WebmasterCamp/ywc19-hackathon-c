install:
	go mod tidy

run:
	go run cmd/main.go -mode=development

runprod:
	go run cmd/main.go -mode=production

dockerbuild:
	docker build -t ywc19-c-api .