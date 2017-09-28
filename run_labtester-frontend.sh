#!/usr/bin/env bash

rm log.txt

npm install
npm start >> log.txt &