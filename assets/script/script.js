const skillCard = document.getElementById('skill');

let skills = [
    {
        title: "HTML",
        img: "assets/icon/html.png"
    },
    {
        title: "CSS",
        img: "assets/icon/css.png"
    },
    {
        title: "PHP",
        img: "assets/icon/php.png"
    },
    {
        title: "JavaScript",
        img: "assets/icon/javascript.png"
    },
    {
        title: "Tailwind CSS",
        img: "assets/icon/tailwind.png"
    },
    {
        title: "Bootstrap",
        img: "assets/icon/Bootstrap.png"
    },
    {
        title: "Laravel",
        img: "assets/icon/laravel.png"
    },
    {
        title: "React JS",
        img: "assets/icon/react.png"
    },
    {
        title: "Photoshop",
        img: "assets/icon/photoshop.png"
    },
    {
        title: "Figma",
        img: "assets/icon/figma.png"
    },
];

let htmlString = "";

skills.map((skill) => {
    htmlString += `                
    <div class="skill-card">
        <img src=${skill.img} alt="">
        <p>${skill.title}</p>
    </div>`
});

skillCard.innerHTML = htmlString;