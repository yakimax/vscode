function animal(animalName, punctuation = '.') {
    const name = animalName.charAt(0).toUpperCase() + animalName.slice(1);
  
    console.log(`${name}${punctuation}`);
  }
  
  const animalTimer = setTimeout(animal, 800, 'shark', '!');
  
  setTimeout(() => {
    clearTimeout(animalTimer);
  }, 250);