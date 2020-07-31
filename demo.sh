docker stop zoomongo
docker stop zooapi
docker stop zooapp

cd containers
docker-compose up -d --build --remove-orphans