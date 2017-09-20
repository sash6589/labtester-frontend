#!/usr/bin/env bash

echo "Running labtester-worker"
cd ../labtester-worker
./run_labtester-worker.sh

echo "Running labtester-master"
cd ../labtester-master
./run_labtester-master.sh

echo "Running labtester-frontend"
cd ../labtester-frontend
./run_labtester-frontend.sh
