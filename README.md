- This project is used [Materialize CSS](https://materializecss.com/getting-started.html), React, Redux, and Firebase.
![Image of Materialize](https://camo.githubusercontent.com/226e0b50bb6083d78ceffd4d03be2ad4d49757b7/68747470733a2f2f6a6f6e617468616e6b61626c616e2e6769746875622e696f2f696d616765732f6d6174657269616c697a652e706e67)
![Image of React and Redux](https://veryaustinwriting.s3.amazonaws.com/2017/Apr/React___Redux-1491929487363.png)
![Image of Firebase](https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png)
```
<!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```
- import BrowserRouter from 'react-router-dom' 
> npm install react-router-dom

- import React-Redux
> npm install redux react-redux

- In index.js file:
```
import {createStore} from 'redux';

const store = createStore();
```

- import [Redux Thunk](https://github.com/reduxjs/redux-thunk)
> npm install redux-thunk

- import Firebase (Firestore is a NoSQL database)
> npm install firebase
> npm install react-redux-firebase redux-firestore

- import [Moment.js](http://momentjs.com/)
> npm install moment

- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/rules-structure)
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{project} {
      allow read, write: if request.auth.uid != null
    }
    match /users/{userId} {
    	allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
      allow delete: if request.auth.uid == userId
    }
  }
}
```

- Cloud Functions
```
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```