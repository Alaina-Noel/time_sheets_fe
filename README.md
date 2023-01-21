# Welcome to TimeSheets

This is a full-stack web application that uses [React](https://reactjs.org/) (version 8.3.1) for the frontend and [Rails](https://rubyonrails.org/) (version 5.2.8.1) for the backend.

## Getting Started

These instructions assume  you are using MacOS as your build environment and that you have basic understanding of using the terminal. <br> If you don't, email me at [alaina.noel.8@gmail.com](alaina.noel.8@gmail.com) and I'll walk you through it. 

To get started, you'll need to fork and clone both repositories.

1. Fork & Clone the frontend repository by clicking the "Fork" button at the top right of [this page](https://github.com/Alaina-Noel/time_sheets_fe).<br> Click Create Fork. And then run the following command in your terminal:

```
git clone git@github.com:YOUR-USERNAME/time_sheets_fe.git
```

1. Fork & Clone the backend repository by clicking the "Fork" button at the top right of [this page](https://github.com/Alaina-Noel/time_sheets_be). Click Create Form. And then run the following command in your terminal:

```
git clone git@github.com:YOUR-USERNAME/time_sheets_be.git
```

Now you'll need to run both servers at the same time.

1. To set up and run the backend server run the following commands from the terminal:

```
cd time_sheets_be
```
```
bundle install
```
```
rails db:{create,migrate}
```
```
rake load:all
```
```
rails -p 5000
```
1. In a second tab in your terminal, without closing the first, cd into the frontend app and run
```
npm start
```
A browser should pop up where you can view the data that already exists in the database as well as add new entries.

If a browser doesn't pop up, Once both servers are running, you can access the application by visiting [http://localhost:3000](http://localhost:3000).

Note: backend runs on port 5000 and frontend on 3000