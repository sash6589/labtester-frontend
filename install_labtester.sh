#!/usr/bin/env bash

host=$1

sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update

echo "Installing java8"
sudo apt-get install oracle-java8-installer

echo "Installing gradle"
sudo apt-get install gradle

echo "Installing npm"
sudo apt-get install npm
sudo apt-get install nodejs-legacy

echo "Installing pep8"
sudo apt-get install pep8

echo "Installing postgres"
sudo apt-get install postgresql postgresql-contrib
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/9.5/main/postgresql.conf
echo "host all all all md5" >> /etc/postgresql/9.5/main/pg_hba.conf
sudo -u postgres psql postgres -c "ALTER USER postgres WITH PASSWORD 'labtester';"
sudo invoke-rc.d postgresql reload
sudo service postgresql restart

echo "Configuring"
sudo sed -i "s/\"host\": \"\",/\"host\": \"http:\/\/${host}\",/g" ./config.json
sudo sed -i "s/host.ip = /host.ip = ${host}/g" ../labtester-master/src/main/resources/application.properties

echo "Installing docker"
sudo curl -sSL https://get.docker.com/ | sh

./enable_swap.sh