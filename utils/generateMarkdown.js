// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseInput = license
  let yourLicense = ''
  if (licenseInput == 'MIT') {
    yourLicense = '![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (licenseInput == 'GPLv3') {
    yourLicense = '![GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (licenseInput == 'GPLv2') {
    yourLicense = '![GPLv2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
  } else {
    yourLicense = ''
  }
  return yourLicense;
};
// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'N/A') {
    return `[License](#license)`;
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'N/A') {
    return `
    ## License
    ${license}`
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
Created by: ${data.name}
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- ${renderLicenseLink(data.license)}
- [Links](#links)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Links
- [GitHub-Repo](${data.repoLink})
- [Live-Site](${data.liveLink})
    `;

}

module.exports = generateMarkdown;
