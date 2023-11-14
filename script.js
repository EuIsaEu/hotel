var paris = 0;
var marte = 0;
var rio = 0;
var dc = 0;


const elements = document.querySelectorAll(".oferta")

elements.forEach(element => {
    element.addEventListener('click', () =>{
        if(element.dataset.local == "paris"){
            paris += 1;
        }
        if(element.dataset.local == "marte"){
            marte += 1;
        }
        if(element.dataset.local == "rio"){
            rio += 1;
        }
        if(element.dataset.local == "DC"){
            dc += 1;
            alert(dc)
        }
    })
});
