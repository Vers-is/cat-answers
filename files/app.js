//////////////// COLOR
const RED = "#FC1A44";
const ORANGE = "#FFA51F";
const BLUE = "#A6BFFF";
const GREEN = "#7DCEBF";
const PINK = "#EFB1CD";
const PURPLE = "#D3B5E6";
//////////////////////// 


///////////////////////// CUSTOMIZING
document.querySelectorAll('.color-element').forEach(circle => {
    const color = circle.getAttribute('id');

    circle.style.backgroundColor = `var(--${color})`;

    circle.addEventListener('click', function () {
        document.querySelectorAll('.color-element').forEach(c => {
            c.classList.remove('active');
            c.style.backgroundColor = `var(--${c.id})`;  
        });
        
        circle.classList.add('active');
        circle.style.backgroundColor = 'white';  

        document.documentElement.style.setProperty('--current-color', `var(--${color})`);
        
        const input = document.querySelector('input');
        input.style.color = `var(--${color})`;
    });
});

const defaultCircle = document.getElementById('orange');
defaultCircle.classList.add('active');
defaultCircle.style.backgroundColor = 'white';
document.documentElement.style.setProperty('--current-color', 'var(--orange)');  

//////////////////////// 



///////////////////////// RANDOMIZER

const answers = [
    { text: "Конечно, что за вопрос!", mood: "absolute_yes" },
    { text: "Наверное ;3", mood: "yes" }, 
    { text: "Да-да!", mood: "yes" }, 
    { text: "Нет, ужас какой.", mood: "absolute_no" }, 
    { text: "Надеюсь ...", mood: "no" }, 
    { text: "Мур-р-р-нет!", mood: "very_no" },   
    { text: "Очевидно!", mood: "very_yes" },  
    { text: "Ты глупый такое спрашивать", mood: "very_no" },
    { text: "Нет, конечно, а ты как думал ><", mood: "absolute_no" },
    { text: "Да нет, наверное ^__^", mood: "no" },
    { text: "Мяу-да!", mood: "very_yes" },
    { text: "Абсолютно точно!", mood: "absolute_yes" },
    { text: "Может быть…", mood: "no" },
    { text: "Ну... как сказать...", mood: "no" },
    { text: "Я уверена на 1146%!", mood: "absolute_yes" },
    { text: "Да, если поверить в себя!", mood: "yes" },
    { text: "Никогда в жизни! >:(", mood: "absolute_no" },
    { text: "Хороший вопрос!", mood: "no" },
    { text: "Пф, разумеется", mood: "yes" },
    { text: "Кошечка разрешает", mood: "very_yes" },
    { text: "Не-а", mood: "very_no" },
    { text: "А чего ты меня то спрашиваешь", mood: "no" },
    { text: "Хм... хм...", mood: "no" },
    { text: "Определённо нет!", mood: "absolute_no" },
    { text: "Ага! Но это не точно", mood: "no" },
    { text: "Эм... что? :)", mood: "yes" },
    { text: "Это секрет!", mood: "absolute_yes" },
    { text: "А что мне за это будет?", mood: "very_yes" },
    { text: "Может быть... если хорошенько попросишь :3", mood: "yes" },
    { text: "Я глупенькая кошечка, я не несу ответственности за свои слова", mood: "no" },
    { text: "Конечно-конечно!", mood: "absolute_yes" },
    { text: "Точно-точно!", mood: "very_yes" },
    { text: "Звучит сомнительно, но допустим", mood: "no" },
    { text: "А давай притворимся, что это правда!", mood: "absolute_yes" },
    { text: "Я бы ответила, но сейчас у меня лапки!", mood: "no" },
    { text: "А вот и нет!", mood: "very_no" },
    { text: "Нет, но было б классно!", mood: "yes" },
    { text: "Вот и я не знаю", mood: "no" },
    { text: "Как карта ляжет!", mood: "very_yes" },
];

const catSprites = {
    absolute_yes: "../sprites/sprite-7.PNG",
    very_yes: "../sprites/sprite-6.PNG",
    yes: "../sprites/sprite-5.PNG",
    no: "../sprites/sprite-3.PNG",
    very_no: "../sprites/sprite-2.PNG",
    absolute_no: "../sprites/sprite-1.PNG"
};

//////////////  CASH IMAGES
const spriteUrls = ["../sprites/sprite-7.PNG", "../sprites/sprite-6.PNG", "../sprites/sprite-5.PNG", "../sprites/sprite-3.PNG", "../sprites/sprite-2.PNG", "../sprites/sprite-1.PNG"];

spriteUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

/////////////////////////////

document.getElementById('targetButton').addEventListener('click', function () {
    const input = document.getElementById('targetInput');
    const answerBubble = document.querySelector('.answer-bubble');
    const cat = document.getElementById('targetCat');

    if (input.value.trim() === "") return; 

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerBubble.textContent = randomAnswer.text;

    cat.className = "cat"; 
    cat.classList.add(randomAnswer.mood); 
    input.value = "";

});

document.getElementById('targetInput').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        document.getElementById('targetButton').click();
    }
});
//////////////////////// 



/////////////////////////  GREETING MESSAGE
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("welcomeModal");
    const closeModal = document.getElementById("closeModal");
    const closeButton = document.getElementById("closeButton");

    modal.style.display = "flex"; 

    const closeModalFunc = () => {
        modal.style.display = "none";
    };

    closeModal?.addEventListener("click", closeModalFunc);
    closeButton?.addEventListener("click", closeModalFunc);

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModalFunc();
        }
    });
});

////////////////////////



///////////////////////// YOU MADE CAT SAD \ PURRING

let clickCount = 0;
let clickTimeout;
let holdTimeout;
let isAngry = false;
let isHeld = false;

const answerBubble = document.querySelector('.answer-bubble');
const cat = document.getElementById('targetCat');

cat.addEventListener('click', function () {
    if (isAngry || isHeld) {
        this.style.backgroundImage = "";
        answerBubble.textContent = "Хе-хе";
        isAngry = false;
        isHeld = false;
        return;
    }

    clickCount++;

    if (clickTimeout) {
        clearTimeout(clickTimeout);
    }

    if (clickCount >= 5) {
        this.style.backgroundImage = "url('../sprites/sprite-1.PNG')";
        answerBubble.textContent = "Прекрати!";

        setTimeout(() => {
            this.style.backgroundImage = "url('../sprites/sprite-2.PNG')";
            answerBubble.textContent = "Погладь...";
            isAngry = true;
        }, 3000);

        clickCount = 0;
    }

    clickTimeout = setTimeout(() => {
        clickCount = 0;
    }, 2000);
});

cat.addEventListener('mousedown', function () {
    holdTimeout = setTimeout(() => {
        this.style.backgroundImage = "url('../sprites/sprite-7.PNG')";
        answerBubble.textContent = "Пр-р-р~";
        isHeld = true;
    }, 1000); 
});

cat.addEventListener('mouseup', function () {
    if (isHeld) return;
    clearTimeout(holdTimeout);
});

cat.addEventListener('mouseleave', function () {
    clearTimeout(holdTimeout);
});

/////////////////////////////