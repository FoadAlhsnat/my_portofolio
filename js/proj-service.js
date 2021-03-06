'use strict';


var gProjs;


function generateProjs() {
    gProjs = [
        {
            por: 1,
            id: "proshop",
            name: "proShop",
            title: "eCommerce",
            desc: "A  eCommerce application with user authentication, allows the users to review the items they purchased",
            url: "https://github.com/FoadAlhsnat/EcommerceWebsite.git",
            labels: "eCommerce",
            techs: "React, Redux, Node.js, MongoDB, Bootstrab"
        },
        {
            por: 0,
            id: "minecraft",
            name: "minecraft",
            title: "minecraft clone",
            desc: "minecraft game.",
            url: "https://github.com/FoadAlhsnat/mincraft-weekend.git",
            labels: "minecraft game",
            techs: "javaScript,html,css"
        },

        // {
        //     por: 5,
        //     id: "appsus",
        //     name: "Appsus",
        //     title: "Notes and Mailbox",
        //     desc: "Google keep alike and Mail application.",
        //     url: "https://yonatanmiz963.github.io/Appsus/#/",
        //     labels: "Notes and Mailbox",
        //     techs: "Vue"
        // },
        // {
        //     por: 1,
        //     id: "bitcoin",
        //     name: "Mister-Bitcoin",
        //     title: "Coin Trade",
        //     desc: "Bitcoin trade application, transfer coins to your contacts.",
        //     url: "https://yonatanmiz963.github.io/bitcoin/#/signup",
        //     labels: "Coin Trade",
        //     techs: "React"
        // },
        // {
        //     por: 1,
        //     id: "missbook",
        //     name: "MissBook",
        //     title: "Books Stock",
        //     desc: "A book stock allowing you to explore new books, review them and even search and add new books to the stock.",
        //     url: "https://yonatanmiz963.github.io/miss-book/#/",
        //     labels: "Books Stock",
        //     techs: "Vue"
        // },
        // {
        //     por: 1,
        //     id: "designtolive",
        //     name: "Design to live",
        //     title: "Responsive Design",
        //     desc: "A pixel perfect responsive design projcet.",
        //     url: "https://yonatanmiz963.github.io/design-to-live/#",
        //     labels: "Responsive Design",
        //     techs: "CSS, HTML5"
        // },
        // {
        //     por: 1,
        //     id: "meme",
        //     name: "MemeGen",
        //     title: "Meme Generator",
        //     desc: "A meme generator application allowing you to create custom memes, download them or share them with facebook.",
        //     url: "https://yonatanmiz963.github.io/Meme-Generator/",
        //     labels: "Meme Generator",
        //     techs: "CSS, HTML5, Vanila, MVC"
        // },
        //     {
        //         por: 3,
        //         id: "pacman",
        //         name: "Pacman",
        //         title: "The first video game",
        //         desc: "During this project we have created the legendary Pacman game, learning alot about logic, and the concept of update model and then rendering to DOM. ",
        //         url: "https://yonatanmiz963.github.io/Pacman/",
        //         labels: "Matrixes"
        //     },
        //     {
        //         por: 4,
        //         id: "ballboard",
        //         name: "Ball-Board",
        //         title: "Get all the balls!",
        //         desc: "In this project I have learnt alot about logic, matrixes as models and rendering to DOM. ",
        //         url: "https://yonatanmiz963.github.io/Ball-Board/",
        //         labels: "Materixes"
        //     },
    ]
}

function getProjects() {
    return gProjs;
}

function getProjectById(id) {
    var project = gProjs.find(function (proj) {
        return proj.id === id;
    })
    return project;
}