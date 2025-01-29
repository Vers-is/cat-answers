//////////////// COLOR
const RED = "#FC1A44";
const ORANGE = "#FFA51F";
const BLUE = "#A6BFFF";
const GREEN = "#7DCEBF";
const PINK = "#EFB1CD";
const PURPLE = "#D3B5E6";
////////////////////////

document.querySelectorAll('.color-element').forEach(circle => {
    const color = circle.getAttribute('data-color');
    circle.style.backgroundColor = color;

    circle.addEventListener('click', function () {
        const button = document.getElementById('targetButton');
        const input = document.getElementById('targetInput');
        const cat = document.getElementById('targetCat');

        document.documentElement.style.setProperty('--current-color', color);  

        button.style.backgroundColor = color;
        button.style.borderColor = color;
        input.style.color = color;
        cat.style.backgroundColor = color;
    });
});

