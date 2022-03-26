//Global Variables

//creates a element and assigns to listItemHref
const listItemHref = document.createElement('a');
//assigns #nav_list or ul to variable navList
const navList = document.querySelector('#nav_ul');
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
    });
});

//assign Active Class  https://youtu.be/AuwKkezuhS8 - Study Web Today
const li = document.querySelectorAll('.line_item');
const active_section = document.querySelectorAll('section');

function activeMenu() {
    let l = active_section.length;
    while (--l && window.scrollY + 97 < active_section[l].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[l].classList.add('active');
}
activeMenu()
window.addEventListener('scroll', activeMenu);

//Home button to get back to top
var mybutton = document.getElementById("buttontotop"); //creates Home button

window.onscroll = function() {scrollFunction()}; //Button shows when scrolling down

function scrollFunction() { //function to display button once below 10 px
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}
function topFunction() { //when clicked, goes to top of page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
