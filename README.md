# Webb Client for SparkRentals Project
## Content
- [About](#about)
- [Download](#download)
- [Usage](#usage)
- [License and Tools](#license-and-Tools)
## About
This project is created by 4 students who attend Blekinge Institute of Technology in web programming. We were given the task of creating a system for a scooter company where we would, among other things, create a mobile-adapted web app for the customer, administrative web interface, a simulation program for the electric scooters, an intelligence program in the bicycle and a Rest API that distributes and retrieves information from the entire system and stores the information on a database.

The entire project is available at: https://github.com/FalkenDev/V-Team-SparkRentals
### Background
The web client for the user will be a website that primarily gives the customer an overview of their account, must allow the customer to edit their information, and to be able to top up their balance with prepaid cards. In addition to this, the customer must also be able to see all their travel history and also be able to navigate into specific trips to see details about it. The client will be built with ReactJs and retrieve data from our REST API. Tailwind will be used as CSS framework for the style.

## Download
### Required environment variables
    # Webb client API
    REACT_APP_WEBB_CLIENT_API_URL="http://localhost:8393/v1"
    REACT_APP_WEBB_CLIENT_API="8c5cfe9194754709dfc16c613b39ea6a"
    REACT_APP_GOOGLE_LOGIN_API_URL="http://localhost:8393/v1/auth/login/google"

### Run it localy
- Fork the project / donwload the project.

>npm install

- Create .env file and insert the environment variables and change the inputs.

>npm start

### Run it on Docker
***OPS! Don't forget to send your env file in docker run command***
> docker run -it falkendev/spark-rentals-webb-client:latest

## Usage
To use the webb client: http://localhost:3000

## License and Tools
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/FalkenDev/SparkRentals-Webb-Client/badges/quality-score.png?b=dev)](https://scrutinizer-ci.com/g/FalkenDev/SparkRentals-Webb-Client/?branch=dev) [![Build Status](https://scrutinizer-ci.com/g/FalkenDev/SparkRentals-Webb-Client/badges/build.png?b=dev)](https://scrutinizer-ci.com/g/FalkenDev/SparkRentals-Webb-Client/build-status/dev)
