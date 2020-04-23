// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */


createDOMElement = tagName => {
    
    const element = document.createElement(tagName);
    return element;
}

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

addPTag = text => {

    const pTag = document.createElement("p");
    pTag.innerText = text;

    document.body.appendChild(pTag);
    //pTag.append("body");
}


/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

 addElementWithClass = (tagName, text, className) => {

    const element = document.createElement(tagName);
    element.innerText = text;

    element.classList.add(className);

    document.body.appendChild(element);
 }

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

addElementWithMultipleClasses = (tagname, text, array) => {

    const element = document.createElement(tagname);
    element.innerText = text;

    array.forEach(className => {
        element.classList.add(className);
    });

    document.body.appendChild(element);
}

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

buildAList = (listType, className, quantity) => {
    let list = document.createElement(listType);
    list.className = className;
    document.body.append(list);
  
    for (let i = 0; i < quantity; i++) {
      
    let li = document.createElement("li");
    li.innerText = "Item " + (i + 1);
    list.appendChild(li);
    
    }
  };


/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */


 prependLiToList = (text, className) => {

    let list = document.querySelector("ul");
    let item = document.createElement("li");
    
    item.innerText = text;
    item.className = className;
    list.prepend(item);
  };


/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

pushToSelectedPosition = (text, cName, index) => {

    let list = document.querySelector("ul");
    let item = document.createElement("li");
    
    item.innerText = text;
    item.className = cName;

    list.insertBefore(item, list.childNodes[index]);
  };

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

deleteChildrenElements = (pSelector, eSelector) => {

    const parent = document.querySelector(pSelector);

    const ancestor = parent.closest(parent);
    
    
}

deleteSelectedElements = (pSelector, eSelector) => {
    
    const parent = document.querySelector(pSelector);
    const childNodes = document.querySelectorAll(eSelector);

    childNodes.forEach((child) => {
     parent.removeChild(child);
    });
  };
