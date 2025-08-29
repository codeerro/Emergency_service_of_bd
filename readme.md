Question Answers:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll given below : 
These methods are basically used to select elements from the HTML document object model in JavaScript. but each of them has different purpose of using.  
getElementById: we use getElementById to select a single element based on its unique id. It is most the specific selection method to select a specific item.
getElementsByClassName: it is very useful to selects multiple items together. For example, when we have many object that will function similar, we can give them similar class name then we can access it by calling the class name. So, we don't need to write for every single element.it is a live HTML collection which is like array but not exactly same. It automatically updates if the DOM changes
querySelector: returns the first element that matches a given css selector. For example, id, class, tag. it is very flexible because it accepts full CSS syntax
querySelectorAll: it returns all elements that match a CSS selector. The return type is Node-list, which is static. It does not change automatically if DOM updates.
2. How do you **create and insert a new element into the DOM**?
Answer: In JavaScript, new elements can be created and inserted into the DOM dynamically. This process is usually done in three main steps.
First of all, create the element to create to new element of the desired type, for example, div, p or li(these are tag). At this stage, the element exists in memory but not visible on the webpage. Then, after creating the element, we can assign content by using innerText or textContent method. This step allows us to define the purpose and style the new element before inserting it. And lastly, the element must be placed inside an existing parent node to appear on the page. For including to data we use appendChild(), it add at the end of a parent and there is another method called prepend() which will add it at the beginning. 
3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is a concept in the javaScript event model where an event starts from the target element and then propagates upwards through its ancestors in the DOM tree, until it reaches the root. 
It works when an event for example clicking on a button occurs on a child element, the event is first handles by that element. After that, the same event automatically propagates to its parent, then to the grandparent, and so on, until reaches the document object. This allows parent elements to listen for events that happen on their elements without attaching separate listeners to every child. 
4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is a JavaScript technique where instead of attaching event listener to multiple child element individually, a single event listener is attached to a parent element. The parent then listens for events that bubble up from its children, and identifies which child triggered the event.
It is a very useful method as it reduces the number of event listener in the DOM which helps to improve performance while handling many child elements. It is used for to cleaner the code so that we do not have to write code many times. 
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: In javaScript, when working with events, two common methods are preventDefault() and stopPropagation(). Although both are used to control the behavior of events, they serve different purposes. 
The preventDefault() method is used to stop the browser's default action associated with an event. For example, when a user clicks on a hyperlink, the default action of the browser is to navigate to the linked page. Similarly, when a form is submitted, the default action is to reload or send data to the server. By calling the preventDefault(), these automatic actions can be prevented and allows developers to implement custom behavior.
On the other hand, the stopPropagation() method is used to prevent the event from propagating further through the DOM. Normally, events in JavaScript follows a bubbling phase, where the event starts at the target element and then travels upward to its parent, grandparent and so on, until reaching the root of the document. 
So, in summary we can say, these two methods although used together sometimes but their purposes are different. One controls the default action, while the other controls the flow of the event.  


