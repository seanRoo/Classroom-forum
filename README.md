# Classroom-forum
A classroom forum application created as part of the HMH TSG-Hackathon

## Problem summary
As a learning aid, classroom forums have shown to stimulate critical thinking, improve communication skills, foster a sense of community among students, and encourage collaborative problem solving. Classroom forums enable students to work together on projects and participate in evocative dialogues centered on course content. With proper management, a classroom forum can dramatically enhance the student learning experience.

## Solution summary
Currently the Ed learning platform doesn’t contain any kind of classroom forum. To change that, the idea is to create a classroom forum which could be implemented in the Ed. Classroom forum can have multiple benefits for both teachers and students. 
Some of the benefits include:
  *	Teachers:
    -	can create forum discussions to support course or project efforts
    -	can easily update/modify project goals by group or individual
    -	links to specific resources can be shared individually or with the group
    -	can help students to answer specific questions which students have after class
  *	Students:
    -	can learn to communicate collaboratively and form relationships around academic goals
    -	active forum participation can improve writing and communicative skills
    -	can increase individual knowledge and understanding through shared student abilities and reasoning
    -	can be empowering for reserved students who prefer more "space" to formulate responses and opinions
    -	can brainstorm together, plan future projects, share research ideas and rough drafts, and study as a group for future exams
    
## Technical solution overview
In order to develop a classroom forum that allows fluid and fast environment of the application, the main technologies which were used are:
  -	Node.js – as an asynchronous event-driven JavaScript runtime, Node is designed to build scalable network applications,
  -	Express – is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications,
  -	MongoDB – stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time,
  -	React - A JavaScript library for building user interfaces
  -	Material UI - React UI framework for faster and easier web development

The development platform contains backend and frontend (client) sides of the application. The backend is developed with Node.js using JavaScript language and Express framework. The server storing data in the MongoDB database and is hosted at MongoDB Atlas. To communicate with MongoDB database application using mongoose. The frontend is developed using React and Material UI.

## Run on local machine

1.  Clone repository to local machine using:

```
git clone https://github.com/seanRoo/Classroom-forum.git
```

2.  Go into the application folder:

```
cd Classroom-forum
```

3.  Install dependencies using`npm` command line tool:

```
npm install
```

4.  Run the application, again using `npm`:

```
npm start
```

This will open a new browser tab/window with the application running.
