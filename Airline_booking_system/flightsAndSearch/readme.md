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
