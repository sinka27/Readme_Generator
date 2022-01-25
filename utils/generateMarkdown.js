// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.licensing; 
  console.log(licenseType);
  let yourLicense = ''
  for(let i=0; i<licenseType.length; i++) {
    if(licenseType[i] === 'Apache') {
      yourLicense += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](`+renderLicenseLink(licenseType[i])+`) `
    } else if (licenseType[i] === 'MIT') {
      yourLicense += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](`+renderLicenseLink(licenseType[i])+`) `
    } else if (licenseType[i] === 'BSD 3-Clause License') {
      yourLicense += `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](`+renderLicenseLink(licenseType[i])+`) `
    } else if (licenseType[i] === 'BSD 2-Clause License') {
      yourLicense += `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](`+renderLicenseLink(licenseType[i])+`) `
    } else if (licenseType[i] === 'GNU GPL v3') {
      yourLicense += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](`+renderLicenseLink(licenseType[i])+`) `
    } else if (licenseType[i] === 'GNU LGPL v3') {
      yourLicense += `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](`+renderLicenseLink(licenseType[i])+`) `
    } else if (licenseType[i] === 'Mozilla Public License 2.0') {
      yourLicense += `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](`+renderLicenseLink(licenseType[i])+`) `
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
function renderLicenseLink(licenseType) {
  
  if(licenseType === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (licenseType === 'MIT') {
    return `https://opensource.org/licenses/MIT `
  } else if (licenseType === 'BSD 3-Clause License') {
    return `https://opensource.org/licenses/BSD-3-Clause `
  } else if (licenseType === 'BSD 2-Clause License') {
    return `https://opensource.org/licenses/BSD-2-Clause `
  } else if (licenseType === 'GNU GPL v3') {
    return `https://www.gnu.org/licenses/gpl-3.0 `
  } else if (licenseType === 'GNU LGPL v3') {
    return `https://www.gnu.org/licenses/lgpl-3.0 `
  } else if (licenseType === 'Mozilla Public License 2.0') {
    return `https://opensource.org/licenses/MPL-2.0 `
  } else if (licenseType === 'None') {
    return ``
  } else {
    return ``
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## Licensing:
  `+renderLicenseBadge(license)+``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  `+renderLicenseSection(data)+`
  
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
