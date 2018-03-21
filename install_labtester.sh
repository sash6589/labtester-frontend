#!/usr/bin/env bash

host=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')

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

echo "Installing docker"
sudo curl -sSL https://get.docker.com/ | sh

./enable_swap.sh


curl -L https://github.com/docker/machine/releases/download/v0.13.0/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine && sudo install /tmp/docker-machine /usr/local/bin/docker-machine

