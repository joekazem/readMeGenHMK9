 var inquirer = require('inquirer');
 const fs = require("fs");
 const path = require("path");
 const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');
 // array of questions for user
 const questions = [

     {
         type: "input",
         name: "title",
         message: "What is your project's name?"
     },
     {
         type: "input",
         name: "github",
         message: "What is your GitHub username?"
     } ,{
         type: "input",
         name: "email",
         message: "What is your email address?"
     },
     {
         type: "input",
         name: "description",
         message: "Please type a description for your project"
     },
     {
         type: "list",
         name: "license",
         message: "please choose license",
         choices: ["mit", "GPLV2", "apache", "bsd"],
         
     },
     {
        type: "input",
        name: "installation",
        message: "installation",
     },
     {
         type: "usage",
         name: "usage",
         messages: "Usage",
     },
         
 ];

 // function to write README file
 function writeToFile(fileName, data) {
     // look  up later..
     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }

 // function to initialize program
 function init() {

     inquirer
         .prompt(questions)
         .then(answers => {
             console.log("creating README.md.....")
             writeToFile("README.md", generateMarkdown(answers))
         })
         .catch(error => {
             if (error.isTtyError) {
                 // Prompt couldn't be rendered in the current environment
             } else {
                 // Something else when wrong
             }
         });
 }

 // function call to initialize program
 init();