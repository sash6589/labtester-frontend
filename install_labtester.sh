#!/usr/bin/env bash

sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update

echo "Installing java9"
sudo apt-get install oracle-java8-installer

echo "Installing gradle"
sudo apt-get install gradle

echo "Installing npm"
sudo apt-get install npm
sudo apt-get install nodejs-legacy

echo "Installing postgres"
sudo apt-get install postgresql postgresql-contrib
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/9.5/main/postgresql.conf
echo "host all all all md5" >> /etc/postgresql/9.5/main/pg_hba.conf
sudo invoke-rc.d postgresql reload
sudo service postgresql restart
echo "Postgres has installed successful. You need change password for postgres user in postgres."

echo "Installing java"
