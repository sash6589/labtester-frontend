#!/usr/bin/env bash

pkill node
pkill java
docker stop $(docker ps -a -q)