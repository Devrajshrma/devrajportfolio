var projects = [
    {value : "PROJECT 1", name :"Great Jones Clone", img :"./img/1.png", a:"https://devgreatjones.netlify.app/"},
    {value : "PROJECT 2", name :"Netflix Clone", img :"./img/2.png", a:"https://devrajshrma.github.io/nxui/"},
    {value : "PROJECT 3", name :"Amazone Clone", img :"./img/3.png", a:"https://devzon.netlify.app/"},
    {value : "PROJECT 4", name :"Pinterest Clone", img :"./img/4.png", a:"https://devtrest.netlify.app/"},
    {value : "PROJECT 5", name :"Fitness Freak Collaboration", img :"./img/last.png", a:"https://devfitnessfreak.netlify.app/"}
]

function showProjects(){
    var dev = ""
    projects.forEach(function(val) {
        dev += `<div class="pro">
        <div class="pro-value">${val.value}</div>
        <div class="pro-name">${val.name}</div>
        <div class="pro-img"><a href="${val.a}" target="_blank"><img src="${val.img}" alt=""></a></div>
        </div>`
    });

    document.querySelector("section").innerHTML=dev
}

showProjects()
