set dotenv-load
port := "3000"

build:
    docker build -t $IMAGE_NAME .

alias b := build

run:
    docker run -p "{{ port }}":"{{ port }}" $IMAGE_NAME

alias r := run

push:
    docker push $IMAGE_NAME 
    https POST $WEBHOOK_URL

alias p := push