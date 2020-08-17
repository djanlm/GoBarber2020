# GoBarber2020
Project developed with typescript using nodejs, reactjs and react-native. 
In this application the user can provide a barber ou hairdresser service while other users can make appointments with those service providers. 

## Requirements
To open and run this project you will need:
* [git](https://git-scm.com/download/win) *this link is for windows*
* [nodejs](https://nodejs.org/)
* [yarn](https://classic.yarnpkg.com/)
* [postgres](https://www.postgresql.org/)
* [mongodb](https://www.youtube.com/watch?v=FwMwO8pXfq0)
* redis

In order to run and open react-native projects you will need to setup the enviroment and install some dependencies. You might follow their very well explained getting started tutorial in the following link: 
* [getting started with react-native](https://reactnative.dev/docs/0.61/getting-started)

## Getting Started

* Create or choose a folder where you gonna clone the project.
* Clone the repository with the command `git clone https://github.com/djanlm/GoBarber2020.git`.
* Run `yarn` to install all dependencies in each folder.

#### Backend

You will need all your databases running to be able to store and fetch data from them. Postgres was used to store Appointments and users information. Redis was used to cache data so that we have faster responses.
Instead of installing all those database management system in your machine you can use docker and install them there. 

Run the migrations.

Configure your own .env file. In the repository there's an .env.example that can be used as a model. You might need to switch localhost for your ip address in the following line:
`APP_API_URL = http://localhost:3333`

To run the backend server, go to the backend folder and run the command `yarn dev:server`. It will run on port 3333.

#### Web
To run the frontend part developed for web using reactJS, go to the *gobarber_web* folder and run `yarn start`

#### App 
To be able to run the app for cellphone, you'll need an emulator. I'd recommend android studio emulator. As mentioned before you might follow the react-native [getting started tutorial](https://reactnative.dev/docs/0.61/getting-started).

Once you have your emulator running, go to *gobarbermobile* folder and run the command `npx react-native run-android`

You might need to switch the code on the api.js file depending on which emulator you're using to run your mobile app:

```
  baseURL: "http://10.0.2.2:3333", // android studio
  baseURL: 'http://10.0.3.2:3333', // genymotion
  baseURL: 'http://localhost:3333', // ios
  baseURL: 'http://network_ip_address:3333', // via usb
```


## Preview and Usage

### Web

The web application in this project should be used by service providers only. Here they can see a list with all his appointments by date. They can also update their profiles.

Login Page:

That's the first page of the application, if the user already have an account, he should insert an e-mail and password and press the button. In case he doesn't have an account he can click on the create account link.
If he have an account but forgot his password, click on *forgot password*

![login](https://github.com/djanlm/GoBarber2020/blob/master/login_page.png?raw=true)

In the signup page the user should insert his name, email and password in order to create a new account.

![signup](https://github.com/djanlm/GoBarber2020/blob/master/register_page.png?raw=true)

If you forgot your password insert your registered e-mail

![forgot password](https://github.com/djanlm/GoBarber2020/blob/master/forgot_password_page.png?raw=true)

Here, providers can see a list with all their appointments of the day. They can also pick another day to check their appointments in any future date.

![dashboard](https://github.com/djanlm/GoBarber2020/blob/master/dashboard_web.png?raw=true)

Here, users can update their profile and send a picture.

![edit profile](https://github.com/djanlm/GoBarber2020/blob/master/edit_profile_web.png?raw=true)


### Mobile App

The mobile app is supposed to be used by clients of the service providers. Here they will be able to pick a day and time to make an appointment. They will also be able to update their profile and insert a picture.


That's the first page of the application, if the user already have an account, he should insert an e-mail and password and press the button. In case he doesn't have an account he can click on the create account link.

![login mobile](https://github.com/djanlm/GoBarber2020/blob/master/login_mobile.png?raw=true)

In the signup page the user should insert his name, email and password in order to create a new account.

![signup](https://github.com/djanlm/GoBarber2020/blob/master/register_mobile.png?raw=true)

After clicking in one of the provider, the user can choose a date and a time for his appointment and then confirm. 

![appointment page](https://github.com/djanlm/GoBarber2020/blob/master/appointment_mobile.png?raw=true)   
![date picker](https://github.com/djanlm/GoBarber2020/blob/master/datepicker_mobile.png?raw=true)

Confirmation page showing that the appointment was made.

![appointment confirmation](https://github.com/djanlm/GoBarber2020/blob/master/appointment_confirmation_mobile.png?raw=true)

Hope you enjoy it. :heart_eyes:
