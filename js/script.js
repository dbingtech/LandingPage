//Global Variables

//creates a element and assigns to listItemHref
const listItemHref = document.createElement('a');
//assigns #nav_list or ul to variable navList
const navList = document.querySelector('#nav_list');
//creates array from id's in section elements
const sectionIds = Array.from(document.getElementsByTagName('section'));

//Given to me by Mentor, 'Mohammad A' with some edits.
//For loop to find innerHTML and attributes from sections
for (section of sectionIds){
    //creates a <li> element for each section name
    const listItem = document.createElement('li');
    //creates an <a> element for each section name
    const listItemHref = document.createElement('a');
    //sets the "href" for each <a> element
    listItemHref.setAttribute("href", "#" + section.id);
    //sets the class attribute to "line_item"
    listItem.setAttribute("class", "line_item");
    //Adds the attributes to the <a> element
    listItem.appendChild(listItemHref);
    //Adds the <li> element to id="nav_list"
    navList.appendChild(listItem);
    
    const h2 = section.querySelector('h2');
    listItemHref.innerText = h2.innerText;    
}

//smooth scrolling function
//with help from StackOverFlow - https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += "active";
    });
});
// document.querySelectorAll('a[href*="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         document.querySelector(this.getAttribute('href')).classList.add('active');

//     });
// });
// activeLink.forEach((li) => {
//     li.classList.remove('active');
//     if (li.classList.contains()) {
//         li.classList.add('active');
//     }
// })
// console.log(navList);
// const activeLink = document.querySelectorAll('line_item');
// // console.log(navList);
// for (var i=0;i <activeLink.length;i++) {
//     activeLink[i].addEventListener('click', function(){
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }
// // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element
// const selectClass = document.querySelectorAll('a[href*="#"]');
// const clickableLink = document.querySelector('href'));
// const activeLink = querySelectorAll("a");
// for (var i = 0; i < activeSection.length; i++) {
//   activeLink[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }





// const active_section = document.querySelectorAll("section");
//   forEach(section => {
//     if(section.addEventListener("click", function(){
//       this.classList.add("active");
//     }));
//   });




// const activeSection = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').
// forEach(link => {
//   if(link.href.includes(`${activeSection}`)){
//     link.classList.add('active');
//   }
// })



//add footer, social icons, and copyright