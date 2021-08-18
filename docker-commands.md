# commands

## create docker network

docker network create amsterdam

## start mongodb

docker run -d \
 -p 27017:27017 \
 -e MONGO_INITDB_ROOT_USERNAME=abhishek \
 -e MONGO_INITDB_ROOT_PASSWORD=happysoul \
 --name mongodb \
 --net amsterdam \
 mongo


 ## start mongo-express

docker run -d  \
-p 8081:8081 \
-e  ME_CONFIG_MONGODB_ADMINUSERNAME=abhishek \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=happysoul \
--net amsterdam \
--name mongo-express-new \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
mongo-express

## command to start yaml file

docker-compose -f mongo.yaml up


## command to shutdown the containers

docker-compose -f mongo.yaml down

## build image from a docker file

docker build -t my-app:1.0 .

## remove a docker image
delete the container first

docker ps -a | grep container_name
docker rm container_name/container_id

docker rmi container_name/container_id


