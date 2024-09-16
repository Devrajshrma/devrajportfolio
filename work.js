var projects = [
    {value : "PROJECT 1", name :"Netflix Clone", img :"./img/2.png", a:"https://devrajshrma.github.io/nxui/", button:"<button>HTML</button><button>CSS</button><button>MediaQuery</button>"},
    {value : "PROJECT 2", name :"Great Jones Clone", img :"./img/1.png", a:"https://devgreatjones.netlify.app/", button:"<button>HTML</button><button>CSS</button><button>MediaQuery</button>"},
    {value : "PROJECT 3", name :"Amazone Clone", img :"./img/3.png", a:"https://amvion-ecommerce.netlify.app/", button:"<button>HTML</button><button>CSS</button><button>MediaQuery</button><button>JS</button>"},
    {value : "PROJECT 4", name :"Pinterest Clone", img :"./img/4.png", a:"https://devtrest.netlify.app/", button:"<button>HTML</button><button>Tailwind</button><button>JS</button>"},
    {value : "PROJECT 5", name :"Fitness Freak Collaboration", img :"./img/last.png", a:"https://devfitnessfreak.netlify.app/", button:"<button>HTML</button><button>CSS</button><button>Bootstrap</button>"}
]

function showProjects(){
    var dev = ""
    projects.forEach(function(val) {
        dev += `<div class="pro">
                <div class="pro-value">${val.value}</div>
                <div class="pro-name">${val.name}</div>
                <div class="pro-img"><a href="${val.a}" target="_blank"><img src="${val.img}" alt=""></a></div>
                <div class="buttons">
                    ${val.button}
                </div>
            </div>`
    });

    document.querySelector("section").innerHTML=dev
}

showProjects()
