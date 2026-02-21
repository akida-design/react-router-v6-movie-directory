# Basic Routes Lab

## Demo screenshot
<img width="1850" height="1053" alt="Screenshot from 2026-02-21 19-07-00" src="https://github.com/user-attachments/assets/c48aab19-d056-48fc-b9a9-625260dffcf1" />

## Lab Overview
The application allows users to:

* View a list of directors.
* Add a new director.
* Click on a director to see their details and a list of their movies.
* Click on a movie to see its details.
* Add a new movie to a director’s list and be redirected to the new movie’s detail page after submission.


## Setup

The `src` folder contains the following JavaScript files:

```txt
src/
├── components/
    ├── NavBar.jsx
    ├── NavBar.css
└── pages/
    ├── About.jsx
    ├── DirectorCard.jsx
    ├── DirectorContainer.jsx
    ├── DirectorForm.jsx
    ├── DirectorList.jsx
    ├── Home.jsx
    ├── MovieCard.jsx
    ├── MovieForm.jsx
├── App.jsx
├── index.css
├── main.jsx
```


To start up the app, first run `npm install`, as per usual. Then install react router: `npm install react-router-dom@6`. Then run `npm run server` to start your `json-server` and `npm run dev` to open the application in the browser.


