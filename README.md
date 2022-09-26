# jump-backend-task

# Setup MongoDB with Docker
- `docker run --name mongo -e MONGO_INITDB_ROOT_USERNAME=danyal -e MONGO_INITDB_ROOT_PASSWORD=bismIllah -d -p 27017:27017 mongo`
- Access to container `docker exec -it mongo bash`
- Use mongo shell client `mongosh -u danyal -p bismIllah`