const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Add event listeners in capturing phase
grandparent.addEventListener(
    'click',
    () => {
        console.log('Grandparent - Capturing');
    },
    true // Use capturing phase
);

parent.addEventListener(
    'click',
    () => {
        console.log('Parent - Capturing');
    },
    true
);

child.addEventListener(
    'click',
    () => {
        console.log('Child - Capturing');
    },
    true
);

// Add event listeners in bubbling phase (default)
grandparent.addEventListener('click', () => {
    console.log('Grandparent - Bubbling');
});

parent.addEventListener('click', () => {
    console.log('Parent - Bubbling');
});

child.addEventListener('click', () => {
    console.log('Child - Bubbling');
});