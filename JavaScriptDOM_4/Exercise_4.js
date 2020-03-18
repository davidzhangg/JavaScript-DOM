/*
Exercise 1
--------------
Move the contents of the two paragraphs into one single <p> tag.  Ensure there are no empty <p> tags left on the page.
*/
const paragraphs = document.querySelectorAll("p");
paragraphs[1].insertAdjacentHTML("afterbegin", paragraphs[0].innerText);
paragraphs[0].remove();

/*
Exercise 2
--------------
Reduce the font-size of the paragraph text to be half the size of the menu text.
*/
const menuItem = document.querySelector(".menu ul li");
//parseInt converts string into a number
const menuItemFontSize = parseInt(
  window.getComputedStyle(menuItem).getPropertyValue("font-size")
);
document.querySelector("p").style["font-size"] = `${menuItemFontSize / 2}px`;

/*
Exercise 3
--------------
Move the ‘Services’ menu item to be before the ‘About’ menu item (after Home).
*/
const services = document.querySelector(" .menu ul li:nth-child(3)");
const about = document.querySelector(" .menu ul li:nth-child(2)");
services.insertAdjacentElement("afterend", about);
/*
  Exercise 04
  -----------
  Create the following new entries in the menu: FAQs, Pricing
*/
const menu = document.querySelector(".menu ul");
const faqElem = document.createElement("li");
const pricingElem = document.createElement("li");
faqElem.innerText = "FAQs";
pricingElem.innerText = "Pricing";
menu.appendChild(faqElem);
menu.appendChild(pricingElem);

/*
Exercise 5
--------------
Add a hover effect to the menu items so when the user hovers over them the background and font-size change.  (Must be done with JavaScript!)
*/
//function called when we hover over the element on the menu bar
const hoverEffect = event => {
  const elem = event.target;
  elem.style["background-color"] = "#f2f2f2";
  elem.style["font-size"] = "20px";
};

//function for when mouse does not hover over element on menu bar
const normalEffect = event => {
  const elem = event.target;
  elem.style["background-color"] = "#fff";
  elem.style["font-size"] = "16px";
};

Array.from(document.querySelectorAll(" .menu ul li")).forEach(elem => {
  elem.addEventListener("mouseover", hoverEffect);
  elem.addEventListener("mouseleave", normalEffect);
});
