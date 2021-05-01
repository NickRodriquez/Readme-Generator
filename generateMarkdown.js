function generateMarkdown(userResponses, userInfo) {

  
  let draftTable = `## Table of Contents`;

  if (userResponses.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftTable += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftTable += `
  * [Tests](#tests)` };
  
 
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor) 
  
  
  ## Description 
  
  
  ${userResponses.description}
  `
  // table of contents 
  draftMarkdown += draftTable;
  
  // license 
  draftMarkdown += `
  * [License](#license)`;

  // installation s
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  ${userResponses.installation}`
  };

  // usage 
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
   
  ${userResponses.usage}`
  };
  
  // contribution 
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
  
  
  ${userResponses.contributing}`
  };

  // tests 
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}`
  };

  //userResponses 
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;

  // Questions 
  let draftDeveloper = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  
  if (userInfo.email !== null) {
  
  draftDeveloper +=
  `
  Email: ${userInfo.email}
  `};

 
  draftMarkdown += draftDeveloper;

  
  return draftMarkdown;
};

// Export markdown module
module.exports = generateMarkdown;