


var number = 1;
var img = document.querySelector(".")


function leftImg(num) {

    if(num > 1 && num < 5){
        num--;
    }
    newImage(num);
}


function rightImg(num) {

    if(num > 1 && num <= 5){
        num++;
    }else if(num > 5){
        num = 1 ;
    }
    newImage(num);
    
}


function newImage(num) {
    var img = new Image(400,450);
    img.src = `image/${num}.jpg`
    var img__div = document.querySelector(".img__div");
    img__div.appendChild(img);
    img.classList.add("imgChange");

}

function init() {
    newImage(number);
}
init();