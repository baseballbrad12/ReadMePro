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
  ------------------------------------------
  ## Usage
  ${data.Usage}
  ------------------------------------------
  ## License
  ${data.License}
  ------------------------------------------
  ## Contributors
  ${data.Contributors}
  ------------------------------------------
  ## Troubleshoot Instructions
  ${data.Troubleshooting}
  ------------------------------------------
  ## Questions
  ![profile-picture](${data.avatar}=250x)
  ${data.Email}
  `;
}

module.exports = generateMarkdown;
