// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */


setTitle = string => {
    const headerone = document.querySelector("h1");
    headerone.innerText = string;
};


/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */


 appendToTitle = string => {
    const appT = document.querySelector("h1").innerText += string;
 };

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */

prependToTitle = string => {

    const h1 = document.querySelector("h1");
    h1.innerText = string + h1.innerText;
}


/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should be the tag name
 * passed into the function
 */

setInnerHTMLForDiv = (tagName, text) => {
    const div = document.querySelector("div");
    div.innerHTML = `<${tagName}>${text}</${tagName}>`;
};

/**
 * Exercise 5
 * create a function {addPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

pushPtoDivWithText = string => {

    const div = document.querySelector("div");
    const newP = document.createElement("p");

    newP.innerHTML = string;
    div.append(newP);
}


/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */

setSrcToImage = (url, imagedesc) => {

    const img = document.querySelector("img");

    img.src = url;
    img.alt = imagedesc;

};

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */

 setCodersInHoodsLink = (url, text) => {
 
    const a = document.querySelector("a");
    a.href = url;
    a.innerText = text;
    a.target = "_blank";
 }

/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

disableResetBtn = () => {
    const ResetBtn = document.querySelector(".reset");
    ResetBtn.disabled = true;
}


 /**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

 
 disableBtns = classname => {
     const dButtons = document.querySelectorAll(`.${classname}`);
     dButtons.forEach(button => {
     button.disabled = true;    
     });
 }
 
/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

addClassToLi = () => {

    const li = document.querySelectorAll(".list > .list_item");

    for (let i = 0; i < li.length; i++) {
        li[i].setAttribute("class", "list_item_" + i);
        
    } 
}


/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */


 removeListItemClass = () => {
    const allLis = document.querySelectorAll("li");
    
    allLis.forEach((li) => {

        if (li.classList.contains("list_item")) {
            li.classList.remove("list_item");
        }

    })
} 


/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

 const addId = (id, selector) => {
    const selected = document.querySelectorAll(selector);
    
    selected.forEach((element) => {
        element.id = id
    });
 }

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */

 setStyles = (propertyName, propertyValue, selector) => {

    const selected = document.querySelectorAll(selector);

    selected.forEach(element => {
        element.style[propertyName] = propertyValue;
    })
 }