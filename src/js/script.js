

/**/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}



/*
function openProject() {
  $(document).ready(()=>{
    $('#button').click(()=>{
        $('section').
        children().remove();
    });
  });
}

--------------------------

function openProject() {
  alert("inizio");
  $( "section" ).remove();
  alert("mezzo");
  $( "#projects" ).load( "01_pininfarina.html" );
  alert("fine");
}

$(document).ready(function(){
  $("#button").click(function() {
   $( "#projects" ).load( "/projects/01_pininfarina.html #proj-page" );
 });
});

//Loading project
function openProject() {
     alert('1');
    $( "section" ).empty();
      alert('2');
   $( "section" ).load( "/projects/01_pininfarina.htm #proj-page" );
      alert('3');
    //document.getElementById('projects').innerHTML='<object type="text/html" data="projects/01_pininfarina.html" ></object>';
    /*
    $(function() {
      $( "#projects" ).empty();
      $( "#projects" ).load( "01_pininfarina.html" );
   });
   
   $(document).ready(function(){
   $("#button").click(function() {
    $( "#projects" ).load( "/projects/01_pininfarina.html" );
  });
});
   
}*/



 /*
function openProject() {
    alert('inici');
  $( "section" ).empty();
  $("#button").click(function(){
        alert('dentro funzion 3');
          $( "#projects" ).load( "/projects/01_pininfarina.html" );
          alert('fine dentro');
        });
}
*/

/*
  //$( "#proj-page" ).load( "/projects/01_pininfarina.html" );
    alert('fine');
 //document.getElementById('projects').innerHTML='<object type="text/html" data="projects/01_pininfarina.html" ></object>';

 $(function() {
   $( "#projects" ).empty();
   $( "#projects" ).load( "01_pininfarina.html" );
});

$(document).ready(function(){
$("#button").click(function() {
 $( "#projects" ).load( "/projects/01_pininfarina.html" );
});
});

}
*/


//Adding date
let myDate = document.querySelector( "#datee" );

const yes = new Date().getFullYear();
myDate.innerHTML = yes;


