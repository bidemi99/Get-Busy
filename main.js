
let suggestion = document.querySelector('#suggestion');
let suggestionText = document.querySelector('#suggestion-text');


let randomActivityButton = document.querySelector('#random');
randomActivityButton.addEventListener('click', loadActivity);

function loadActivity(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.boredapi.com/api/activity', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            suggestion.innerHTML = `${data.activity}`;
    
                suggestion.style.display = 'block';
    }
    else {
        this.onerror = onerror();
    }
        }
    xhr.send();
}

function onerror(){
    suggestion.textContent = 'There was an error!';  
}






let busyworkBtn = document.querySelector('#busywork');
let charityBtn = document.querySelector('#charity');
let cookingBtn = document.querySelector('#cooking');
let diyBtn = document.querySelector('#diy');
let educationBtn = document.querySelector('#education');
let relaxationBtn = document.querySelector('#relaxation');


let info = document.querySelector('#select-text');


//busywork activities
busyworkBtn.addEventListener('click', loadBusy);

function loadBusy(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.boredapi.com/api/activity?type=busywork', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            info.innerHTML =  `${data.activity}`;
    
            info.style.display = 'block';
    }
    else {
        this.onerror = onerror();
    }
        }
    xhr.send();
}
function onerror(){
    info.textContent = 'There was an error!';  
}


//charity activities

charityBtn.addEventListener('click', loadCharity);

function loadCharity(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.boredapi.com/api/activity?type=charity', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            info.innerHTML = `${data.activity}`;
    
            info.style.display = 'block';
    }
    else {
        this.onerror = onerror();
    }
        }
    xhr.send();
}

function onerror(){
    info.textContent = 'There was an error!';  
}

 //cooking activity

cookingBtn.addEventListener('click', loadCooking);

function loadCooking(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.boredapi.com/api/activity?type=cooking', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            info.innerHTML = `${data.activity}`;
    
            info.style.display = 'block';
    }
    else {
        this.onerror = onerror();
    }
        }
    xhr.send();
}

function onerror(){
    info.textContent = 'There was an error!';  
}

   //diy code

diyBtn.addEventListener('click', loadDiy);

function loadDiy(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.boredapi.com/api/activity?type=diy', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            info.innerHTML = `${data.activity}`;
    
            info.style.display = 'block';
    }
    else {
        this.onerror = onerror();
    }
        }
    xhr.send();
}

function onerror(){
    info.textContent = 'There was an error!';  
}


// education activities

educationBtn.addEventListener('click', loadEducation);

function loadEducation(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.boredapi.com/api/activity?type=education', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            info.innerHTML = `${data.activity}`;
    
            info.style.display = 'block';
    }
    else {
        this.onerror = onerror();
    }
        }
    xhr.send();
}

function onerror(){
    info.textContent = 'There was an error!';  
}

// relaxation activities

relaxationBtn.addEventListener('click', loadRelaxation);

function loadRelaxation(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.boredapi.com/api/activity?type=relaxation', true);

    xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            info.innerHTML = `${data.activity}`;
    
            info.style.display = 'block';
    }
    else {
        this.onerror = onerror();
    }
        }
    xhr.send();
}

function onerror(){
    info.textContent = 'There was an error!';  
}










































































































































