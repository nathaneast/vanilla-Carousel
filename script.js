


var number = 1;
// 이미지파일 넘버

var img__div = document.querySelector(".img__div");
//이미지 넣을 div

var img = new Image(400, 450);
//이미지 생성


function changeImg(btn) {
    if (btn === btn1) {
        //left 버튼일때
        console.log("left", number);

        if (number > 1 && number <= 5) {
            //넘버가 1보다 크고 , 5보다 같거나 클때 
            number--;
        }
        img.src = `image/${number}.jpg`;
    } else {
        //right 버튼일떄
        console.log("right", number);

        if (number >= 1 && number < 5) {
            //넘버가 1보다 같거나 크고 , 5보다 적을때
            number++;
        } else {
            //넘버가 5 보다 커지면
            number = 1;
        }

        img.src = `image/${number}.jpg`;

    }

}


function newImage() {
    img.src = `image/${number}.jpg`;
    //이미지를 1로
    img__div.appendChild(img);
    //이미지 div 자식 img
    img.classList.add("imgChange");
    // img.classList.add("img-effect");
    //클래스 추가

}

function init() {
    newImage();
}
init();