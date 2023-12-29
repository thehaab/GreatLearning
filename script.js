// Import the projects array from projects.js
import projects from './projects';

// Now you can use the 'projects' array in this file
console.log(projects);


function loadProjects() {
  // Clear existing projects before reloading
  document.getElementById("projects").innerHTML = "";

  // Loop over the array of projects
  for (var i = 0; i < projects.length; i++) {
    // Create a new card element
    var card = document.createElement("div");
    card.classList.add("card");

    // Add the project title to the card
    var title = document.createElement("h2");
    title.innerHTML = projects[i].title;
    card.appendChild(title);

    // Add the project description to the card
    var description = document.createElement("p");
    description.innerHTML = projects[i].description;
    card.appendChild(description);

    // Add the project image to the card
    var image = document.createElement("img");
    image.src = projects[i].image;
    image.alt = projects[i].title + " Image";
    card.appendChild(image);

    // Add the card to the projects div
    document.getElementById("projects").appendChild(card);
  }
}

function saveNewProject() {
  // Get the new project details by using the DOM elements
  var title = document.getElementById("title").value;
  var description = document.getElementById("desc").value;
  var image = document.getElementById("image").value;

  // Check if essential details are provided
  if (!title || !description || !image) {
    alert("Please provide all project details.");
    return;
  }

  // Create a new project object
  var project = {
    title: title,
    description: description,
    image: image
  };

  // Add the new project object to the projects array
  projects.push(project);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
