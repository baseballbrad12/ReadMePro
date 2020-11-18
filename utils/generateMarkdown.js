// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${data.Badge}
  ---------------------------------------
  ## Description
  ${data.Description}
  ---------------------------------------
  ## Installation
  ${data.install}
  ---------------------------------------
  ## Usage
  ${data.Usage}
  ---------------------------------------
  ## License
  ${data.License}
  ---------------------------------------
  ## Contributing
  ${data.Contributors}
  ---------------------------------------
  ## Tests
  ${data.Troubleshooting}
  ---------------------------------------
  ## Questions
  ${data.github}
  ${data.Email}
  ---------------------------------------
  ## Table of Contents
1) Title (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#)
2) Description (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#description)
3) Installation (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#installation)
4) Usage (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#usage)
5) Licenses (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#licenses)
6) Contributing (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#contributing)
7) Test Instructions (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#test-instructions)
8) Questions (https://github.com/baseballbrad12/ReadMePro/blob/main/ReadMe.md#questions)
  `;
}

module.exports = generateMarkdown;
