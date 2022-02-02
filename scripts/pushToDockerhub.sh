#!/bin/bash

docker build --platform linux/amd64 . -t=superj80820/messfar-line-service
docker push superj80820/messfar-line-service