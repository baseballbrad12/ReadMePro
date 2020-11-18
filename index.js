var fs = require("fs");
var inquirer = require("inquirer");
var markDown = require("./utils/generateMarkdown.js");
var api = require("./utils/api.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please include a description of your project.",
        name: "Description"
    },
    {
        type: "input",
        message: "Please include steps for installation.",
        name: "install"
    },
    {
        type: "input",
        message: "What will this project be used for?",
        name: "Usage"
    },
    {
        type: "input",
        message: "Please include troubleshooting instructions.",
        name: "Troubleshooting"
    },
    {
        type: "list",
        message: "Please select any relevant licenses.",
        name: "License",
        choices: [
            "Apache License",
            "BSD License",
            "MIT License",
        ]
    },
    {
        type: "input",
        message: "Please document all those who have contributed.",
        name: "Contributors"
    },
    {
        type: "input",
        message: "Please enter you GitHub Username.",
        name: "GitHubUser"
    },
    {
        type: "input",
        message: "What is your professional email that is associated with GitHub?",
        name: "Email"
    }
];

function init(){
    inquirer

    .prompt(questions)
    .then(function(response){
        console.log(response.Licenses);
        var inputData = { ...response };

        if (response.Licenses === "Apache License") {
          inputData.Badge =
            "[![License: APA](https://img.shields.io/badge/license-Apache-green)]";
        } else if (response.Licenses === "BSD License") {
            inputData.Badge =
        "[![License: BSD](https://img.shields.io/badge/license-BSD-orange)]";
        } else (response.Licenses == "MIT License"); {
            inputData.Badge = 
            "[![License: MIT](https://img.shields.io/badge/license-MIT-red)]";
        }
    
      api(response.github)
      .then(githubUser=>{
          console.log(githubUser)
        inputData.avatar = githubUser.data.avatar_url;
        console.log(inputData);
      writeToFile("readme.md", markDown(inputData));
      })  
      
    });
    
    
}


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("ReadMe File generated.");
  });
}

// function to initialize program
init();
