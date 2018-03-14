#!/usr/bin/env bash

if [ -z "$1" ]
  then
    echo "run ./run_labtester-worker.sh DOTOKEN"
    exit
fi

echo "Running labtester-master"
cd ../labtester-master
./run_labtester-master.sh

echo "Running labtester-worker"
cd ../labtester-worker
./run_labtester-worker.sh "$1"

echo "Running labtester-frontend"
cd ../labtester-frontend
./run_labtester-frontend.sh
