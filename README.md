# TO-DO

Project created with aim of study about microservices concepts application with an API Gateway

## 1. Development Stack

A list of used tools to create the project concept

Backend stack:

- [NestJS](https://nestjs.com/): To create the microservices and the API Gateway
- [Typeorm](https://typeorm.io/): To deal with entities and database integratio
- SQLite: To be the project database
- Docker and docker-compose: To create the network with the micrservices and consume by TCP connection by the API Gateway that will be accessed by HTTP connection
- [MailCatcher](https://mailcatcher.me/)

Frontend stack:

- [NextJS](https://nextjs.org/): To create react project with server side render

## 2. Requirements

The requirements that was implemented in this project with the conception proof of microservices architecture

### 2.1 User requirements

Basic User requirements for the prject

User fields:

- Name
- Email (unique)
- Password

Microservice implementations:

1. Create user account
2. Find user
3. Validate user password

### 2.2 Auth requirements

Microservice implementations:

1. Login
2. Logout
3. Access Token (JWT/Bearer Token)
4. Password recovery (by E-mail link)

### 2.3 Project requirements

Project fields:

- Owner
- Title
- List of Issues

Microservice implementations:

1. Create project
2. List projects
3. Edit Project
4. Delete Project
5. Start Project
6. Finish Project

### 2.4 Issues requirements

Issue fields:

- Project
- Title
- Status (TODO/IN_PROGRESS/DONE)
- Start Date
- End Date
- Issue duration time

Microservice implementation:

1. Create project issue (Status default: TODO)
2. List project issues
3. Edit project issue (Only if it's not DONE)
4. Delete project issue (Only if it's not DONE)
5. Start issue (Status default: IN_PROGRESS)
6. Finish issue (Status default: DONE)

**OBS:**

1. Issues that was done can't be undone and can't be removed.
2. Done issues only can be removed when the related project is being removed.
