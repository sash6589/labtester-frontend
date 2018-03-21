#!/usr/bin/env bash

if [ -z "$1" ]
  then
    echo "run ./run_labtester-worker.sh DOTOKEN"
    exit
fi

echo "Running labtester-worker"
cd ../labtester-worker
. ./run_labtester-worker.sh "$1"

echo "Configuring"
cd ../labtester-frontend
host=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')
sudo sed -i "s/\"host\": \"\",/\"host\": \"http:\/\/${host}\",/g" ./config.json
sudo sed -i "s/host.ip=/host.ip=${host}/g" ../labtester-master/src/main/resources/application.properties
sudo sed -i "s/worker.ip=/worker.ip=${LABTESTERWORKER}/g" ../labtester-master/src/main/resources/application.properties

echo "Running labtester-master"
cd ../labtester-master
./run_labtester-master.sh

echo "Running labtester-frontend"
cd ../labtester-frontend
./run_labtester-frontend.sh
