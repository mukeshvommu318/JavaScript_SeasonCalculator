
const images ={
    spring : document.getElementById("springImage"),
    summer : document.getElementById("summerImage"),
    autumn : document.getElementById("autumnImage"),
    winter : document.getElementById("winterImage")
}

const actions ={
    spring : document.getElementById("springac"),
    summer : document.getElementById("summerac"),
    autumn : document.getElementById("autumnac"),
    winter : document.getElementById("winterac")
}

function hideAll(){
    for (let key in images){
        images[key].style.display="none"
    }
}

const blackfont = "black"
const whitefont = "white"

function activeAll(){
    Object.values(actions).forEach(each=> (each.style.background=whitefont))
     Object.values(actions).forEach(each=> (each.style.color=blackfont))
}
function spring(){
    hideAll();
    activeAll();
    images.spring.style.display = "block";
    images.spring.style.width="400px"
    images.spring.style.height = "600px";
    actions.spring.style.backgroundColor="lightgreen"
    actions.spring.style.color="white"
}

function summer(){
    hideAll();
     activeAll();
    images.summer.style.display = "block";
    images.summer.style.width="400px"
    images.summer.style.height = "600px";
    actions.summer.style.backgroundColor="yellow"
    actions.summer.style.color="white"
}

function autum(){
    hideAll();
     activeAll();
    images.autumn.style.display = "block";
    images.autumn.style.width="400px"
    images.autumn.style.height = "600px";
    actions.autumn.style.backgroundColor="red"
    actions.autumn.style.color="white"
    
}

function winter(){
    hideAll();
     activeAll();
    images.winter.style.display = "block";
    images.winter.style.width="400px"
    images.winter.style.height = "600px";
     actions.winter.style.backgroundColor="green"
    actions.winter.style.color="white"
}