// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



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
  visit [github/${data.creator}](https:www.github.com/${data.github}) for source code
  if you have additional questions, kindly email me at: ${data.email} 

`
};

module.exports = generateMarkdown;
