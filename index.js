let part1 = ["http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part1x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part1x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/monkey_part1x1.jpg"];
let part2 = ["http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part2x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part2x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/monkey_part2x1.jpg"];
let part3 = ["http://demo.codegym.vn/8/puzzlegame/img/monkey_part3x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part3x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part3x1.jpg"];
let part4 = ["http://demo.codegym.vn/8/puzzlegame/img/monkey_part4x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part4x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part4x1.jpg"];
let part5 = ["http://demo.codegym.vn/8/puzzlegame/img/monkey_part5x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/panda_swap_part5x1.jpg", "http://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part5x1.jpg"];

let img1 = document.getElementById("img1");
img1.addEventListener("click", show1);

let img2 = document.getElementById("img2");
img2.addEventListener("click", show2);

let img3 = document.getElementById("img3");
img3.addEventListener("click", show3);

let img4 = document.getElementById("img4");
img4.addEventListener("click", show4);

let img5 = document.getElementById("img5");
img5.addEventListener("click", show5);

function show1() {
    let ran = Math.floor(Math.random() * 3);
    img1.src = part1[ran];
    xuly();

}
function show2() {
    let ran = Math.floor(Math.random() * 3);
    img2.src = part2[ran];
    xuly();

}
function show3() {
    let ran = Math.floor(Math.random() * 3);
    img3.src = part3[ran];
    xuly();

}
function show4() {
    let ran = Math.floor(Math.random() * 3);
    img4.src = part4[ran];
    xuly();

}
function show5() {
    let ran = Math.floor(Math.random() * 3);
    img5.src = part5[ran];
    xuly();

}
function xuly() {
    let imgName = [];
    let startIndex1 = img1.src.search("/img/");
    let endIndex1 = img1.src.search("_part");
    imgName[0] = img1.src.slice(startIndex1, endIndex1);

    let startIndex2 = img2.src.search("/img/");
    let endIndex2 = img2.src.search("_part");
    imgName[1] = img2.src.slice(startIndex2, endIndex2);

    let startIndex3 = img3.src.search("/img/");
    let endIndex3 = img3.src.search("_part");
    imgName[2] = img3.src.slice(startIndex3, endIndex3);

    let startIndex4 = img4.src.search("/img/");
    let endIndex4 = img4.src.search("_part");
    imgName[3] = img4.src.slice(startIndex4, endIndex4);

    let startIndex5 = img5.src.search("/img/");
    let endIndex5 = img5.src.search("_part");
    imgName[4] = img5.src.slice(startIndex5, endIndex5);

    let newImgName = new Set(imgName);
    let resultImgName = [...newImgName];
    if (resultImgName.length == 1) {
        img1.style.boxShadow = "5px 10px red";
        img2.style.boxShadow = "5px 10px red";
        img3.style.boxShadow = "5px 10px red";
        img4.style.boxShadow = "5px 10px red";
        img5.style.boxShadow = "5px 10px red";
    } else {
        img1.style.boxShadow = "5px 10px #888888";
        img2.style.boxShadow = "5px 10px #888888";
        img3.style.boxShadow = "5px 10px #888888";
        img4.style.boxShadow = "5px 10px #888888";
        img5.style.boxShadow = "5px 10px #888888";
    }
}