# React-Deploy Assessment

## How To Use This Project

This is a React project, but unlike standard React, that you may get from a `create-react-app`, we utilize Parcel as our bundler and build framework.

With that, we have a lot of features, most notably fast, and small build size, as well as full control over dependencies.

This project is already setup for you to start using, so long as you follow a few guidelines:

1. **DO NOT EDIT index.js OR index.html UNLESS YOU KNOW WHAT YOU ARE DOING**
2. **Avoid class components** - The Fast Refresh or "Hot Reload" that we all know and love, only works with function based components. You may use arrow functions (`const myComponent = () => {}`) or functional components (`function myComponent() {}`). It will also work with Hooks, which is a good note to take.
3. **Export only React Components** - If a file exports a mix of React components and other types of values, its state will be reset whenever it changes. To preserve state, only export React components and move other exports to a different file if possible.
4. **Keep entry components in their own files** - Entry components should be in a separate file from the one that calls `ReactDOM.render` or they will be remounted on every change. (See guideline #1)
5. **Type safety will save your life** - Perhaps not literally, but in this project we will be strictly enforcing the usage of Typescript. If you are unfamiliar with how to use Typescript see this [link](https://typeofnan.dev/your-first-react-typescript-project-todo-app/)
6. **Yarn not NPM** - In this template we utilize Yarn as our defacto package manager. If you are not sure what a package manager is, then you should probably do some research into what a package manager is, and what their purpose is.
7. **Styles, Styles, Styles...** - We, at RevLogical, utilize [TailwindCSS](https://tailwindcss.com/docs) to keep our styling consistent across our applications.

## Getting Setup

In order to use this project you will need a few things to get started:

- Node.js
- Yarn
- Git

To run the project you can use `yarn start`, to start the development server for this project.

To run tests you can use `yarn test`, In order for a `Task` to be recognized as complete it should have a corresponding test, that passes with an appropriate description.

## Tasks

We do not expect that you will complete every task defined below. Each task will be defined as a typical user story that you would see at RevLogical. As an applicant, it is just as important that you are able to set up your own development environment, as well as read and understand typical user stories and their requirements, as it is to know how to develop. This "assessment" will test your knowledge and understanding of tools that we use at RevLogical, and how we define user stories. 

There will be only two required tasks, and multiple optional tasks. You will have 72 hours, from the point that you receive the email with the link to this repository to complete the required tasks and as many optional tasks as you can manage.

After completing each task, create a commit with an appropriate commit message.

### Required Tasks

1. **Bug** COUNT-1; When accessing the website, I am presented with a blank screen.

    > As a user of the Revlogical website, I should be presented with a counter app upon arrival at `localhost:1234`. However, currently, I am instead presented with a blank screen with no indication that the page is even loading.

    - Conditions of Satisfaction
      - When arriving at `localhost:1234`, the end-user should be presented with a counter app.
      - The counter app should have an increment, decrement, and async buttons.
      - The `count` should increment, decrement, or increment/decrement asynchronously depending on the button pressed.
      - Once the bug is found, it should be fixed, and a unit test created for it in the appropriate test file.
      - When `yarn test` is run, we should see a test with the appropriate description for the bug, and that it tests what it should, and passes.

2. **Deploy** COUNT-2;  

    > As a DevOps engineer, I need to deploy the React application in a production container orchestration tool. 

    - Conditions of Satisfaction
      - A Dockerfile
      - A [draw.io](https://draw.io) deployment architecture

### Optional Tasks

For Optional tasks, create a new branch called `Optional-Tasks`. Like above each task should have its own commit with an appropriate commit message.

1. **Explanation** Explain your solution to tasks 1 and 2. You should create a new `.md` file named `OptionalTask1.md` that contains the explanation to your solutions. If you would prefer you can just take notes on your own and do this optional task during the follow-up to this assessment.
2. **Style** Use `tailwind-css` to style the app to show off your frontend skills. (Use [this](https://tailwindcss.com/docs) to help you get started with `tailwind-css`)
3. **Logic** There is never a single way to do anything in software engineering. Show us your engineering skills by either reorganizing the assessment project to be more "logical" to you. Alternatively, you can create a new branch called `Logic` where you may recreate the counter app, using the same tooling we have chosen here (Typescript, Parcel, React, Redux, Jest), to show us how you would have done this.
4. **Feature** Add a login screen for this simple application that takes in a username and password (use `username = Test, password = 123456`), that has validation errors, as well as redirects the user to the counter app after successful login. If you decide to complete this task, you must also add all appropriate tests with `jest`.
5. **Deployment** Describe a monitoring strategy for the application. What metrics would you observe to monitor the application's availability and alarm on performance degradation? 
6. **Orchestration** With your container image, develop a container deployment in a container orchestrator of your choosing.
