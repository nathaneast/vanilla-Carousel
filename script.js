var number = 1;
// 이미지파일 넘버

var imgView = document.querySelector(".img");
//이미지 넣을 div

var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
//버튼 값을 가져옴

var img = new Image(400, 450);
//이미지 생성

function leftImg() {
        //left 버튼일때
        if (number > 1 && number <= 5) {
            //넘버가 1보다 크고 , 5보다 같거나 클때 
            number--;
            newImg();
        } else {
            //1번일때
            img.classList.remove("img-fadeIn");
            // 애니메이션 class 제거
        }
    }
    
function rightImg(){
        //right 버튼일떄
        if (number >= 1 && number < 5) {
            //넘버가 1보다 같거나 크고 , 5보다 적을때
            number++;
        } else {
            //넘버가 5 보다 커지면
            number = 1;
        }
        newImg();
    }

function newImg() {
    img.src = `image/${number}.jpg`;
    //이미지를 넘버 값으로 변경
    imgView.appendChild(img);
    //img__div 자식 img로 추가
    img.classList.add("img-fadeIn");
    //애니메이션 적용할 클래스 추가
}

function init() {
    newImg();
}
init();

btn1.addEventListener("click", leftImg);
btn2.addEventListener("click", rightImg);


//수업

// function foo (a, b) {
    //     return a + b;
    // }

// foo(1, 2);
// console.log(a); // error

// false && true;
// 123 && 456;

// 345 || 456;
// "" || "";

// 123 || 456 && 0;

// // falsy
// 0, -0, NaN, undefined, null, '', "", false;

// var a = [ 1, 2, 3 ];
// var b = [ 1, 2, 3 ];

// var c = [ a, b ];
// var d = [ a, b ];

// console.log(c[0] === d[0]);