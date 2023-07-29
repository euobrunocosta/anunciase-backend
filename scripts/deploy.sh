docker rm -f server-container
docker image rm server-image
docker build ./ -t server-image
docker run -p 4000:4000 -d --name server-container server-image