INSTALL GUIDE
=====================

## Install dependencies
```shell
npm i
```

## Install database
> This server is shipped with a docker compose file

You will need docker installed on this machine.

Once docker is installed, you can run the docker compose file:

```shell
docker-compose up -d
```

Next, go to the phpmyadmin interface and login with the "root" username.
Root password is defined inside the docker-compose.yml file, default is "root_password_dev".

Create a database which match the one in the .env file and give it access to the discord mysql user.


## Edit .env file

Edit the .env config file to match your needs and database credentials

## Install database structure

```shell
npm run prisma-db
```

This will create all your table needed in order to make the application work


RUN GUIDE
=====================
```shell
npm run serve
```