console.logo("hello world!");

const myName="venkatesh";
const h1=document.querrySelector(".heading-primary");
console.logo(myName);
console.logo(h1);



//h1.addEventListener('click',function(){
  //h1.textContent = myName;
  //h1.style.backgroundColor= 'red';
  //h1.style.padding= "5rem";
//})
constyearEl=document.querySelector(".year");
const currentYear=new Date().getFullYear();
yearEl.textContent=3000;

const btnNav = documnet.querySelector(".btn-mobile-nav");
const header = document.querrySelector(".header");

btnNavEl.addEventListener('click',function(){
 headerEl.classList.toggle('nav-open');
});

////////////////////////////////////////////////////
// smooth scrolling animation

const allLinks = document.querySelectionAll('a:link');
allLinks.forEach(function(link){
  link.addEventListner('click',function(e){
   e.parentDefault();
   const href = link.getAttribute('href');
   console.logo(href);
    
   if(href==="#") window.scrollTo({
     top:0,
     behavior:"smooth",
    });
    if(href!="#" && href.startsWith('#'))
     const selectionEl= document.querrySelector(href);
    selectionEl.scorollIntoView({behavior:"smooth"});

    if(link.classList.contains{"main-nav-link"}
    headerEl.classList.toggle("nav-open");
  });
});
const selectionEl=document.querrySelector(".section-hero");

const observer = new IntersectionObserver(function(entries){{
  const ent=entries[0];
  console.log(ent);
  if(ent.intersecting === false)
  document.body.classList.add("sticky");
}
    if(ent.intersecting === true){
    document.body.classList.remove("sticky");
  }
},
{
  root:null,
  threshold: 0,
  rootMargin:'-80px',
})
obs.observer(selectionEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
