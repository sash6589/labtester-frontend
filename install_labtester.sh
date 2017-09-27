#!/usr/bin/env bash

echo "Installing postgres"
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/9.5/main/postgresql.conf
echo "host all all all md5" >> /etc/postgresql/9.5/main/pg_hba.conf
invoke-rc.d postgresql reload
sudo service postgresql restart
echo "Postgres has installed successful. You need change password for postgres user in postgres."