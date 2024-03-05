function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

let projects = [
  {
    title: "Community Science Museum",
    image: "images/CSM.jpg",
    description:
      "The brief for this project was to make a website for an interactive science museum called the Community Science Museum, with a core target audience of kids/teens 7-15 as well as their parents. This site is built with HTML and CSS.",
    github: "https://github.com/AndreasYager/SP1-Community-Science-Museum",
    live: "https://chipper-cactus-f27e23.netlify.app",
  },
  {
    title: "Rainy Days",
    image: "images/RD.jpg",
    description:
      "This project is meant to fetch products from a Wordpress API and display them on my site. The site is designed with HTML and CSS. Required Javascript was fetching products, functioning cart, and form validation.",
    github: "https://github.com/AndreasYager/Rainy-Days-4.1",
    live: "https://symphonious-dieffenbachia-ce7925.netlify.app",
  },
  {
    title: "Oslo Ironworks",
    image: "images/OI.jpg",
    description:
      "The brief for this project was to make a blog. Required javascript functions were fetching posts from Wordpress API, a slider displaying posts, and form validation.",
    github: "https://github.com/AndreasYager/Oslo-Ironworks",
    live: "https://wondrous-bubblegum-1beecb.netlify.app",
  },
  {
    title: "Yager's Auction House",
    image: "images/YAH.jpg",
    description: "The breif for this project was to create an auction site using Noroff API. Required features were users being able to add items as well as bid on items.",
    github: "https://github.com/AndreasYager/SP2",
    live: "https://lovely-beignet-816ad2.netlify.app",
 
    
    
  }
];

window.onload = function () {
  displayProjects();
};

function displayProjects() {
  let projectsContainer = document.getElementById("projects");
  projectsContainer.classList.add("row", "g-4"); // Bootstrap row with gutters

  projects.forEach((project) => {
    let projectElement = document.createElement("div");
    projectElement.classList.add("col-md-4", "project-container"); // Bootstrap column class

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image-container");

    let projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectImage.classList.add("img-fluid"); // Bootstrap responsive image class
    projectImage.addEventListener("click", function () {
      window.open(project.image, "_blank");
    });
    imageDiv.appendChild(projectImage);

    let textDiv = document.createElement("div");
    textDiv.classList.add("text-center"); // Bootstrap text centering class
    textDiv.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.github}" class="btn btn-outline-secondary me-2">Github Repo</a> 
            <a href="${project.live}" class="btn btn-primary">Live Site</a> 
        `;

    projectElement.appendChild(imageDiv);
    projectElement.appendChild(textDiv);

    projectsContainer.appendChild(projectElement);
  });
}
