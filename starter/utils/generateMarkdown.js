// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.Contributing}

  ## Testing
  ${data.test}

  ## Questions
  visit [github/${data.github}](https:www.github.com/${data.github}) for source code
  if you have additional questions, kindly email me at: ${data.email} 

`
};

module.exports = generateMarkdown;
