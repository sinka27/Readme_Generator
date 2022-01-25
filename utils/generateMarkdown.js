// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.licensing; 
  console.log(licenseType);
  let yourLicense = ''
  for(let i=0; i<licenseType.length; i++) {
    if(licenseType[i] === 'Apache') {
      yourLicense += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) `
    } else if (licenseType[i] === 'MIT') {
      yourLicense += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) `
    } else if (licenseType[i] === 'BSD 3-Clause License') {
      yourLicense += `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) `
    } else if (licenseType[i] === 'BSD 2-Clause License') {
      yourLicense += `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) `
    } else if (licenseType[i] === 'GNU GPL v3') {
      yourLicense += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) `
    } else if (licenseType[i] === 'GNU LGPL v3') {
      yourLicense += `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) `
    } else if (licenseType[i] === 'Mozilla Public License 2.0') {
      yourLicense += `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) `
    } else if (licenseType[i] === 'None') {
      yourLicense += ``
    } else {
      yourLicense += ``
    }
  }
  
  return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  `+renderLicenseBadge(data)+`
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact Info](#contact-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## License:
  ${data.licensing}

  ## Contact Information:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;

}

module.exports = generateMarkdown;
