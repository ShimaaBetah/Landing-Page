/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 
*/
const sectionsList = document.querySelectorAll("section");
const list = document.querySelector("ul");

/**
 const 
 * End Global Variables
 * Start Helper Functions
 * 
*/

function buildNav(){
    let fragment = document.createDocumentFragment();
    for (let item of sectionsList){
        let anchorText = item.getAttribute("data-nav");
        let anchorHref = item.getAttribute("id");
        let listItem = document.createElement("li");
        let anchorItem = document.createElement("a");
        anchorItem.setAttribute("class","menu__link");
        anchorItem.setAttribute("href","#"+anchorHref);
        anchorItem.addEventListener("click",(event)=>{
            event.preventDefault();
            item.scrollIntoView({behavior:"smooth"});
        })
        anchorItem.textContent = anchorText;
        listItem.appendChild(anchorItem);
        fragment.appendChild(listItem);
        
    }
    list.appendChild(fragment);
}
//function to remove class active fromm all items sections and nav items
function removeActiveclass(){
    for(sec of sectionsList){
        sec.classList.remove("your-active-class");
    }
    for(link of links){
        link.classList.remove("your-active-class");
    }
}
//function to set active class to item in view port and its corresponding nav link  using getBoundingClientRect
function addactive(){
 for(let sec of sectionsList){
     const rect = sec.getBoundingClientRect();
     if(rect.top>0&&rect.top<300){
         removeActiveclass();
         sec.classList.add("your-active-class");
         for(let link of links){
             if(link.textContent===sec.getAttribute("data-nav")){
                 link.classList.add("your-active-class");
             }
         }
     }
 }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//main function
buildNav();
const links = document.querySelectorAll(".menu__link");

//events
window.addEventListener("scroll",addactive);







