# Trap-Talk 💬

![alt text](/client/src/images/traptalk-yellow.png)



## Table of Contents 📖

* [ Description ](#description-📝)
* [ Application Preview ](#application-preview-⭐)
* [ Installation ](#installation-🛠️)
* [ Usage ](#usage-💡)
* [ Technologies ](#technologies-🔧)
* [ Notable Features ](#notable-features-⚡️)
* [ Contributors ](#contributors-🙌)
* [ License ](#license-🔑)

## Description 📝

Trap Talk is a secret messaging application that is protected by 2-step authentication. It is a app where you can message other users that you have added as a friend and know that your messages are protected, EVEN if your login credentials get into the wrong hands. 

Your 4-digit pin is the key to revealing your real messages. If the user was to login with just username and password, a decoy landing page will be revealed with wholesome generic message. Only the real owner of the account will know where the easter egg on the page is to reveal the 4-digit pin modal to enter their pin and access the real messages.

This application has the ability to send and receive messages and add and remove friends. It is designed to be accessible through desktop or mobile phone.

## Application Preview ⭐

![alt text](/client/src/images/Trap%20Talk.gif)

## Installation 🛠️

Deployed Link: https://arcane-escarpment-44917.herokuapp.com/

In order to install this application on your local machine, navigate to the code repo [here](https://github.com/Sophtron5000/trap-talk). Fork the repo, copy the SSH link, and clone it down to your local machine using the `git clone` command in your terminal. 

Then run `npm install` to install necessary node modules.

Then run `npm run develop` to start the app.

## Usage 💡

When presented with the login screen, select the `create account` button to be directed to the create account form. Then create a user. The required credentials that will be requested are `username` `password` and `4-digit` pin. Once your account has been created you will be taken to a screen with a set of decoy messages.

The only way to have access to the application is to enter your 4-digit pin at the trigger of the easter egg. The triggering easter egg feature is the text that says `sent yesterday` on one of the messages. When selected, the pin modal will appear where the pin can be entered and the user will be authenticated.

The real messages screen will then display. If you are a new user, there should be no messages and no friends. You will be able to search and add friends by username and only once they add you will you be able to send and receive messages. 

When done messaging, be sure to logout of the app to ensure messages are protected.

## Technologies 🔧

### Front End

* Tailwind CSS
* daisyUI
* React

### Back End

* Express.js
* NPM
* Node.js
* MongoDB


## Notable Features ⚡️

* 2-step authentication utilizing a 4-digit pin after credential entry
* Decoy message landing page with special easter egg to trigger 4-digit pin modal
* In-app messaging
* Ability to add friends

## Contributors 🙌

**Maya Morales** - [LinkedIn](https://www.linkedin.com/in/maya-morales-1191351bb/) - [GitHub](https://github.com/mayaimorales) - [Email](mayainomorales@gmail.com)

**Richard Ferry** - [LinkedIn](https://www.linkedin.com/in/richard-ferry-83120514b/) - [GitHub](https://github.com/rich-f-p) - [Email](richardfpro864@gmail.com)

**Sophia Custodia** - [LinkedIn](https://www.linkedin.com/in/sophia-custodia/) - [GitHub](https://github.com/Sophtron5000) - [Email](sophtron@gmail.com)

## License 🔑

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)