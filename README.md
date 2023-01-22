# Welcome to TimeSheets

This is a full-stack web application that uses [React](https://reactjs.org/) (version 8.3.1) for the frontend and [Rails](https://rubyonrails.org/) (version 5.2.8.1) for the backend. 

## Getting Started

These instructions assume  you are using MacOS Monterey as your build environment and that you have basic understanding of using the terminal. <br> If you don't, email me at [alaina.noel.8@gmail.com](alaina.noel.8@gmail.com) and I'll walk you through it. 

You will need Ruby, Rails, Node, Rbenv, and React installed. <br>

To check that you have Node installed run ```node -v``` in your terminal. If nothing is there, [install Node](https://nodejs.org/en/download/).

run ```npm install```

To check that you have Ruby installed run ```ruby -v``` in your terminal. If nothing is there, install Ruby [by following these directions](https://www.ruby-lang.org/en/documentation/installation/).

To check that you have Rails installed run ```rails -v``` in your terminal. If nothing is there, install Rails [by following these directions](https://rubyonrails.org/)

To download rbenv [follow the instructions here](https://github.com/rbenv/rbenv#installation)

Now you'll need to clone both repositories.

1. Clone the frontend repository with this command:

```
git clone git@github.com:Alaina-Noel/time_sheets_fe.git
```

1. Clone the backend repository with this command:

```
git clone git@github.com:Alaina-Noel/time_sheets_be.git
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
rails s -p 5000
```
1. In a second tab in your terminal, without closing the first, cd into the frontend app and run
```
npm start
```
A browser should pop up where you can view the data that already exists in the database as well as add new entries.

If a browser doesn't pop up, Once both servers are running, you can access the application by visiting [http://localhost:3000](http://localhost:3000).

Note: backend runs on port 5000 and frontend on 3000


[Link to the Backend Repo](https://github.com/Alaina-Noel/time_sheets_be)