const developers = [
    { name: 'John', age: 30, profession: 'developer' },
    { name: 'Jane', age: 28, profession: 'admin' },
    
  ];
  
  function PrintDeveloper() {
    const developersInfo = developers.map(developer => `${developer.name} - Age: ${developer.age}, Profession: ${developer.profession}`).join('<br>');
    document.getElementById('output').innerHTML = `<p>Developers:</p><p>${developersInfo}</p>`;
    console.log(developersInfo);
  }
  
  function addData() {
    const name = prompt('Enter name:');
    const age = parseInt(prompt('Enter age:'));
    const profession = prompt('Enter profession:');
  
    developers.push({ name, age, profession });
  
    const updatedArray = developers.map(developer => `${developer.name} - Age: ${developer.age}, Profession: ${developer.profession}`).join('<br>');
    console.log(updatedArray);
    document.getElementById('output').innerHTML = `<p>Updated array after adding data:</p><p>${updatedArray}</p>`;
  }



  function removeAdmin() {
    const filteredDevelopers = developers.filter(developer => developer.profession !== 'admin');
    developers.length = 0;
    developers.push(...filteredDevelopers);
  
    const updatedArray = developers.map(developer => `${developer.name} - Age: ${developer.age}, Profession: ${developer.profession}`).join('<br>');
    console.log(updatedArray);
    document.getElementById('output').innerHTML = `<p>Updated array after removing admins:</p><p>${updatedArray}</p>`;
  }
  




  function concatenateArray() {
    const dummyArray = [
      { name: 'Doe', age: 25, profession: 'developer' },
      { name: 'Smith', age: 35, profession: 'admin' },
    ];
  
    const concatenatedArray = developers.concat(dummyArray);
  
    const concatenatedArrayInfo = concatenatedArray.map(developer => `${developer.name} - Age: ${developer.age}, Profession: ${developer.profession}`).join('<br>');
    console.log(concatenatedArrayInfo);
    document.getElementById('output').innerHTML = `<p>Concatenated array:</p><p>${concatenatedArrayInfo}</p>`;
  }
  
  function averageAge() {
    const totalAge = developers.reduce((sum, developer) => sum + developer.age, 0);
    const average = totalAge / developers.length;
    console.log(average);
    document.getElementById('averageAgeOutput').innerHTML = `<p>Average Age: ${average}</p>`;
  }
  
  function checkAgeAbove25() {
    const isAbove25 = developers.some(developer => developer.age > 25);
      console.log(isAbove25)
    document.getElementById('output').innerHTML = `<p>Is there anyone above 25? ${isAbove25}</p>`;
  }
  
  function uniqueProfessions() {
    const professions = [...new Set(developers.map(developer => developer.profession))];
    console.log(professions);
    document.getElementById('uniqueProfessionsOutput').innerHTML = `<p>Unique Professions: ${professions.join(', ')}</p>`;
  }
  
  function sortByAge() {
    developers.sort((a, b) => a.age - b.age);
  
    const sortedArrayInfo = developers.map(developer => `${developer.name} - Age: ${developer.age}, Profession: ${developer.profession}`).join('<br>');
    console.log(sortedArrayInfo);
    document.getElementById('output').innerHTML = `<p>Sorted array by age:</p><p>${sortedArrayInfo}</p>`;
  }
  
  function updateJohnsProfession() {
    const john = developers.find(developer => developer.name === 'John');
    if (john) {
      john.profession = 'manager';
    }
  
    const updatedArray = developers.map(developer => `${developer.name} - Age: ${developer.age}, Profession: ${developer.profession}`).join('<br>');
    console.log(updatedArray);
    document.getElementById('output').innerHTML = `<p>Updated array after changing John's profession:</p><p>${updatedArray}</p>`;
  }
  
  function getTotalProfessions() {
    const developerCount = developers.filter(developer => developer.profession === 'developer').length;
    const adminCount = developers.filter(developer => developer.profession === 'admin').length;
    console.log(adminCount);
    document.getElementById('output').innerHTML = `<p>Total Developers: ${developerCount}</p><p>Total Admins: ${adminCount}</p>`;
  }
  
  window.PrintDeveloper = PrintDeveloper;
  window.addData = addData;
  window.removeAdmin = removeAdmin;
  window.concatenateArray = concatenateArray;
  window.averageAge = averageAge;
  window.checkAgeAbove25 = checkAgeAbove25;
  window.uniqueProfessions = uniqueProfessions;
  window.sortByAge = sortByAge;
  window.updateJohnsProfession = updateJohnsProfession;
  window.getTotalProfessions = getTotalProfessions;