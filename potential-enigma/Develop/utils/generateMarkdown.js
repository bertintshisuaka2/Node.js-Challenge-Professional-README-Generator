const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index'); 

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if(license === 'MIT') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if (license === 'GNU 2.0') {
    licenseBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
  }
  else if (license === 'GNU 3.0') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  else {
    licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  }
  else if (licenseLink === 'GNU 2.0') {
    licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
  }
  else if (licenseLink === 'GNU 3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else if (licenseLink === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  }
  else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let theLicenseSection = '';

  if(license === 'No License'){
    theLicenseSection = '';
  }
  else {
    theLicenseSection = `License: ${license} `;
  }
  return theLicenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Credits](#credits)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributing}
  ## Testing
  ${data.tests}
  ## Licenses
  ${renderLicenseSection(data.licenses)} 
  ${renderLicenseBadge(data.licenses)}
  ${renderLicenseLink(data.licenses)}
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  ## Credits
  ${data.name}
`;
}  

//export
module.exports = generateMarkdown;