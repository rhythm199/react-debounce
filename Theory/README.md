## What is Debouncing?
Debounce function basically force a function to wait a certain amount of time before running it again and the function is built basically to limit the number of time a function is called so I don't want on every key of my this function should run instead of calling that function on every key up I I just want to limit its execution.

Debouncing in JavaScript is a technique used to limit the rate at which a function is executed. It ensures that a function is only called once after a certain amount of time has passed since the last time it was invoked. This is particularly useful for optimizing performance in scenarios where an event might be triggered repeatedly in quick succession (e.g., window resizing, scrolling, or keypress events).

## How Debouncing Works
When a debounced function is called, a timer is started.
If the function is called again before the timer expires, the previous timer is cleared and a new timer is started.
The function will only execute after the timer has expired, without any new calls in between.
This helps reduce the frequency of function executions and prevents the function from being called excessively in quick succession.

## Example Use Cases
* Input Search Suggestions*: When typing in a search bar, a debounced function can prevent making API requests on every keystroke. Instead, it will wait for the user to stop typing for a specified period (e.g., 300ms) before making a request.
* Window Resize Events: Instead of triggering a resize handler continuously during resizing, debouncing can delay the handler until resizing has stopped.
* Scroll Events: Debouncing can prevent continuously firing scroll events while scrolling.

## Debouncing Example
Here's a simple implementation of debouncing in JavaScript:

```javascript
function debounce(func, delay) {
  let timer;
  
  return function(...args) {
    const context = this;
    clearTimeout(timer); // Clear the previous timer if the function is called again
    
    // Set a new timer
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
```

Example Usage
Debouncing an API call on input change:
```javascript
const handleInput = debounce((event) => {
  console.log('API call with value:', event.target.value);
}, 300);

document.getElementById('searchInput').addEventListener('input', handleInput);
```
In this example, the handleInput function is debounced with a delay of 300ms. This means the function will only execute after the user stops typing for 300ms.

## Debouncing a window resize event:
```javascript
const handleResize = debounce(() => {
  console.log('Window resized');
}, 200);

window.addEventListener('resize', handleResize);
```
The handleResize function will only be executed once the user has stopped resizing the window for 200ms.

## Benefits of Debouncing
* Performance Optimization: Reduces the number of times a function is executed, which is especially useful when working with events that can fire rapidly.
* Better User Experience: Prevents excessive function calls, which can slow down the user interface or cause unnecessary API requests.

## Conclusion
Debouncing is a crucial technique in scenarios where events are triggered frequently. By delaying function execution, it ensures that the function is only invoked after the activity has paused, improving performance and preventing redundant actions.

## Passing arguments to callback function
With the help of rest parameter, we are getting all the parameter to pass it to function.

```html
<input type="text" onkeyup="betterFunction()"/>
```

```javascript
// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
    args = arguments; // if betterFunction had arguments it could have been passed as rest parameter or you wouldn't need to keep the reference of 'this' and 'arg' unnecessarily, It would have automatically keeps the outer function params value intact. ( That's what closure does).
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);
```

simpler to understand
```javascript
// debounce method
const debounceRequests = (fn, delay) => {
  let timer;
  return function() {
    // clearing timeout
    if(timer) {
      clearTimeout(timer);
    }
    // setting timeout
    timer = setTimeout(fn, delay);// no need to use apply method and creating context  since already passing an function as callback
  }
}

// normal function to fectch data on key press event
let counter = 0;
const fetchData = () => {
  console.log(counter++ + ' fetching data.. ');
}

const makeDebounceReq = debounceRequests(fetchData, 300);
```
