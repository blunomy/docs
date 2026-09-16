Blunomy has modified some configuration in this package to enable an entirely serverless deployment for the containers, as well as integration with NeonDB.

# Concise steps
Refer to the blunomy-reference repo for the deployment of this app onto our infra. We need to publish these modified base images to our artifact repository such that it can interface with GCS, and the other deployed components.

Run these commands in the root.

Frontend image;

```shell
docker build -f src/frontend/Dockerfile --target frontend-production --build-arg PUBLISH_AS_MIT=false --build-arg API_ORIGIN=https://reference.blunomy.app -t docs-frontend:latest .

docker tag docs-frontend:latest europe-west1-docker.pkg.dev/prj-p-oth-suitedoc-tzmf/modified-frontend-eu/docs-frontend:latest

docker push europe-west1-docker.pkg.dev/prj-p-oth-suitedoc-tzmf/modified-frontend-eu/docs-frontend:latest
```

Backend image;
```shell
docker build --target backend-production --build-arg DOCKER_USER=1000 -t impress-backend:local .

docker tag impress-backend:local europe-west1-docker.pkg.dev/prj-p-oth-suitedoc-tzmf/modified-backend-eu/impress-backend:latest

docker push europe-west1-docker.pkg.dev/prj-p-oth-suitedoc-tzmf/modified-backend-eu/impress-backend:latest
```