# Flights search 

First of all we will be using the mysql for database purpose. We are using sequelize and sequelize cli for our database access and query purpose.

> npm i sequelize // for installing sequelize
> npm i sequelize-cli // for cli purpose

now we will run the followinf command 
```npm
npx sequelize -cli init 
```
> the above command will create the following folders

* config - this folder tells how the cli will be connecting to the database
* models - this constains all the models for our projects
* migrations- this willacts as vcs
* seeders - conatains all seed files

```ultree
flightsAndSearch
├── config
├── package-lock.json
├── package.json
├── readme.md
└── src
    ├── config
    │   ├── config.json
    │   ├── db.js
    │   └── serverConfig.js
    ├── controllers
    ├── index.js
    ├── middlewares
    ├── migrations
    │   ├── 20240927171621-create-city.js
    │   ├── 20240927172300-updated-db.js
    │   ├── 20240927172417-again-changes.js
    │   ├── 20240927172631-failed.js
    │   └── 20240927172841-maybe.js
    ├── models
    │   ├── city.js
    │   └── index.js
    ├── repository
    ├── seeders
    ├── services
    └── utils
```

> lets see what does config have 

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }, 
//   the above part of the json file database name and the other user details 
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

after runnig the above command now we will run 
```npm
npx sequelize db:create
```

this command will look in the config file and create the database we have defined here 

```sql
SHOW DATABASES;
```
This command will show the availble databse.

> Creating the table in database using the sequelize

```bash
# step1 - generating migration 
npx sequelize migration:generate --name create-city
# step2 - Define the migration i.e. define any changes to be done in the migration file in migration folder
# step3 - run the migration
npx sequelize db:migrate

# after all these steps we can see the table denfined in the database we just created

```


