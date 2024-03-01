document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
    const allBreeds = dogBreedsList.querySelectorAll("li");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
       
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching images:", error));
    
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      for (const breed in data.message) {
        const li = document.createElement("li");
        li.textContent = breed;
        dogBreedsList.appendChild(li);
      }
    })
    .catch(error => console.error("Error fetching breeds:", error));

    dogBreedsList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        console.log(event.target.tagName)
        event.target.style.color = "red"; 
      }
    });
    breedDropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        const allBreeds = dogBreedsList.querySelectorAll("li");
    
        allBreeds.forEach(breed => {
          const firstLetter = breed.textContent.charAt(0);
          if (firstLetter === selectedLetter) {
            breed.style.display = "block"; 
          } else {
            breed.style.display = "none"; 
          }})
})
})
