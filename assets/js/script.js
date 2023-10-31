'use strict';

// try typing


var txt1 = `Welcome to my digital space!
I'm Linh Cao, a third-year Computer Science student at Drexel University, with
a concentration in AI and Machine Learning and a minor in Mathematics.`; /* The text */
var txt2 = `I believe in the power of innovation and the potential of technology to transform the way we live and work.
My academic journey has equipped me with the skills to tackle complex challenges and the vision to shape a
smarter, more connected future.`;
var txt3 = `As an inquisitive explorer in the tech world, I'm always on the lookout for fresh and exciting opportunities
to collaborate, learn, and make an impact. Let's connect, explore, and embark on the next technological
adventure together.`;
var speed = 20; /* The speed/duration of the effect in milliseconds */
let i = 0;
let j = 0;
let k = 0;
function typeWriter() {

  if (i < txt1.length) {
    document.getElementById("typing-demo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    typeWriter2()
  }
}

function typeWriter2() {
  if (j < txt2.length) {

    document.getElementById("typing-demo2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
  else {
    document.getElementById("avatar-img").src = "./assets/images/memoji2.GIF";

    typeWriter3()
  }
}
function typeWriter3() {
  if (k < txt3.length) {

    document.getElementById("typing-demo3").innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter3, speed);
  }

}


window.onload = function () {
  typeWriter();


}



// try typing

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// projects variables
const projectsItem = document.querySelectorAll("[data-projects-item]");


const modalContainerProj = document.querySelector("[data-modal-container]");
const modalCloseBtnProj = document.querySelector("[data-modal-close-btn]");
const overlayProj = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[modal-img-wrapper]");

const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalGit = document.querySelector("[data-modal-git]");
// modal toggle function
const projectsModalFunc = function () {
    
  modalContainerProj.classList.toggle("active");
  overlayProj.classList.toggle("active");
}
const projectsModalFuncClose = function () {
  modalContainerProj.classList.remove("active");
  overlayProj.classList.remove("active");
  
}
// add click event to all modal items
for (let i = 0; i < projectsItem.length; i++) {
  projectsItem[i].addEventListener("click", function () {
  
    // img
    // get the link
    const linkList = projectsItem[i].querySelector("#linkList");

    // Select all the <a> elements within the <ul>
    const links = linkList.querySelectorAll(".imgUrl");
    // Initialize an array to store the href values
    const linkArray = [];

    // Loop through the links and collect their href values
    links.forEach(link => {
      const href = link.getAttribute("href");
      linkArray.push(href);
    });

    // linkArray now contains the href values as an array of strings
    console.log(linkArray);
    modalImg.innerHTML = ""
    for (let j = 0; j < linkArray.length; j++) {
      const paragraph = document.createElement("div");
      paragraph.innerHTML = `<figure class="modal-avatar-box">
      <img style=" width: 100% ;border-radius: 14px; margin-bottom: 15px;" src="${linkArray[j]}"  data-modal-img>
    </figure>`;

      // Append the paragraph element to the modal container
      modalImg.appendChild(paragraph);
    }
    // img
    modalText.innerHTML = this.querySelector("[data-projects-text]").innerHTML;
    modalGit.href = this.querySelector("[data-projects-git]").innerHTML;
    projectsModalFunc();
  })
};

// add click event to modal close button
modalCloseBtnProj.addEventListener("click", projectsModalFuncClose);
overlayProj.addEventListener("click", projectsModalFunc);






