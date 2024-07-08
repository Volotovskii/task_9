
window.onload = function()
{  
    const womanImages = [
        "images/wom_1.jpg",
        "images/wom_2.jpg",
        "images/wom_3.jpg"

    ];

    const manImages = [
        "images/man_1.png",
        "images/man_2.png",
        "images/man_3.jpg",
        "images/man_4.jpg"

    ];


    const card = document.getElementById('card');

    function resetPerson() {
        persImg.src = "images/reset.jpg"; 
        firstNameOutputFront.textContent = "";
        surnameOutputFront.textContent = "";
        PatronymicFront.textContent = "";
        genderOutputFront.textContent = "";
        dataFront.textContent = "";
        ProfessionFront.textContent = "";

        persImgBack.src = "images/reset.jpg"; 
        firstNameOutputBack.textContent = "";
        surnameOutputBack.textContent = "";
        PatronymicBack.textContent = "";
        genderOutputBack.textContent = "";
        dataBack.textContent = "";
        ProfessionBack.textContent = "";
    }


    const generatePerson = () => {

        const initPerson = personGenerator.getPerson();

        function getRandomImage() {
            if (initPerson.gender === "Женщина") {
                const randomIndex = Math.floor(Math.random() * womanImages.length);
                return womanImages[randomIndex];
            } else if (initPerson.gender ===  "Мужчина") {
                const randomIndex = Math.floor(Math.random() * manImages.length);
                return manImages[randomIndex];
            } else {
                return "images/reset.jpg";
            }
        }
        const randomImage = getRandomImage();
        persImg.src = randomImage;

   
    document.getElementById('firstNameOutputFront').innerText = initPerson.firstName;

    document.getElementById('surnameOutputFront').innerText = initPerson.Surname;
    document.getElementById('PatronymicFront').innerText = initPerson.Patronymic;

    document.getElementById('genderOutputFront').innerText = "Пол: " + initPerson.gender;
 
    document.getElementById('ProfessionFront').innerText = initPerson.Profession;
    
    document.getElementById('dataFront').innerText = initPerson.data;

    
    
    card.classList.toggle('flipped');

 // Обновляем текст на оборотной стороне после переворота
 setTimeout(() => {

    const randomImage = getRandomImage();
    persImgBack.src = randomImage;
    document.getElementById('firstNameOutputBack').innerText = initPerson.firstName;

    document.getElementById('surnameOutputBack').innerText = initPerson.Surname;
    document.getElementById('PatronymicBack').innerText = initPerson.Patronymic;

    document.getElementById('genderOutputBack').innerText = "Пол: " + initPerson.gender;
 
    document.getElementById('ProfessionBack').innerText = initPerson.Profession;
    
    document.getElementById('dataBack').innerText = initPerson.data;
}, 400); 

    }


    
    const persImg = document.getElementById("pers_img");
    const persImgBack = document.getElementById("pers_img_back");

    const generateButton = document.getElementById('generate-button');
    generateButton.addEventListener('click', generatePerson);

    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener('click', resetPerson);
   
};


