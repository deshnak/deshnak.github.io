/* .js files add interaction to your website */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps. As a student, my learning now depends on my access to the internet. For example, " + learning + ". Please support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps.";
}


//Move these variables to the top
var factList = [
  "We cannot be separated in interest or divided in purpose. We stand together until the end. – Woodrow T. Wilson", 
  "So powerful is the light of unity that it can illuminate the whole earth.  – Baha’U’Llah", 
  "The first step toward change is awareness. The second step is acceptance.” ~ Nathaniel Branden", 
  "No person is your friend who demands your silence, or denies your right to grow.” ~ Alice Walker", 
  "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences. -- Audre Lorde",  
"If we cannot now end our differences, at least we can help make the world safe for diversity. ~John F. Kennedy",
    "We come in many different shapes and sizes, and we need to support each other and our differences. Our beauty is in our differences. ~Carre Otis",
    "All differences in this world are of degree, and not of kind, because oneness is the secret of everything. ~Swami Vivekananda"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
