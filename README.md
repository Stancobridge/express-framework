### As I learn NodeJS, I will be Building this mini framework that is based in Express
>> There is no limit to what our brain can do
>> I want to expand what mine can do, am making a simple framework on top of express
>> that ease the way we work with Express, while still making everything simple
>> still harness the power of express and in be more powerful, yet easy

To install
`npm install`

No script has been setted up for this to run you use nodemon
`nodemon index.js or node index.js`


## Project Purpose
Express is a rout/middleware package for NodeJS for building websites, Express
comes with a lot of features we use daily in our project, that what makes express outstanding. But using express alone is a bit tideous, each time you have to set up the Project folder, the routes, the app middlewares, sometime you need to look at some of your old NodeJS project to get full knowledge of what you have done in the past so you can repeat same in the current project. The major purpose of this project is to solve the issue of always creating new Project scalfolding everytime for a new project, this Project brings everything in one place, all you need to do is to focus on building what you want to build.

## How to Use
The major Plan of this project is that it becomes a Pure OOP based platform for Express, while encapsulating the express architecture under the hood, it exposes an OOP interface for building applications, meaning the developers have to write their codes in OOP in which express does not provide. Not just writing your code in OOP, it also makes your work easy as it will introduce a better architecture for building huge projects and maintaining them.

## An Example of what we want to end up with
```js
  // Routing passing functions to a route and naming a route
  Route.get('/home', (req, resp) => {
    req.send('back'); // return the request back to the same route
    req.send('login'); // return the request back to the login route
    return `
      <h1>${req.url}</h1>
    `
  }, 'home')

  Route.all('/user', (req, resp) => {
    Route.get('/details') // route for get /user/details
  })


```