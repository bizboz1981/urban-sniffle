// Get the <h1> element
const heading = document.querySelector('h1');

// Add an event listener for the 'mouseover' event
heading.addEventListener('mouseover', () => {
    // Change the color of the <h1> element on hover
    heading.style.color = 'teal';
});

// Add an event listener for the 'mouseout' event
heading.addEventListener('mouseout', () => {
    // Reset the color of the <h1> element when the mouse is no longer hovering over it
    heading.style.color = '';
});

const tsbb = document.getElementById('tsbb');

tsbb.addEventListener('mousedown', () => {
    tsbb.style.color = 'red';
});

tsbb.addEventListener('mouseup', () => {    
    tsbb.style.color = '';
});
