# jump-backend-task
API exposes methods to interact with a cache. Use MongoDB capped collection feature.
- Copy .env.example to .env
- run `yarn start` or `yarn test`
- pre-commit & pre-push hooks were added for pretify and tests
  
# End-points
- `/` GET - Health check route.
- `/api/v1/register` POST -  Register route to received auth token on email payload: {email: <string> }
- `/api/v1/service/key` Post route payload: {key: <string> } header: {JUMP-AUTH-TOKEN: <string> }
 
# Setup MongoDB with Docker (Optional)
- `docker run --name mongo -e MONGO_INITDB_ROOT_USERNAME=danyal -e MONGO_INITDB_ROOT_PASSWORD=bismIllah -d -p 27017:27017 mongo`
- Access to container `docker exec -it mongo bash`
- Use mongo shell client `mongosh -u danyal -p bismIllah`

