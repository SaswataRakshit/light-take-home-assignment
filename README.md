# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Code Flow

Code Flow:
### App.js -> Layout

In Layout all the other components are getting called.
User preference mock data is getting stored in localstorage.

### Header component

Representational component, showing the application header.

### User Details component

In this component, 3 API call is happening on initialisation of the component.
* user details api - which will give username, displayname, email of the user
* get ip address - which will give the ip address of the user
* get location api - using ip address, we can fetch the location of the user.

In this component, all the above collected details are shown.

### User Preference component

In this component, user preference data is fetched from local storage and displayed.

On editing the data, adding one more localstorage key with updated keyword. If we reload the screen, updated data will be displayed.