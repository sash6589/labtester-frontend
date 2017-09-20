#!/usr/bin/env bash

echo "Running labtester-worker"
../labtester-worker/run_labtester-worker.sh

echo "Running labtester-master"
../labtester-master/run_labtester-master.sh

echo "Running labtester-frontend"
./run_labtester-frontend.sh
