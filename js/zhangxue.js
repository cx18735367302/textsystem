
var oBoxB = document.getElementById("boxB");
var oLunbo = document.getElementById("lunbo");
var oLunboDiv = oLunbo.getElementsByClassName("div11");
var oBoxTSpan = document.getElementsByClassName("one");
var oBtnB = document.getElementsByClassName("donext")[0];
var oMask = document.getElementById("mask");

var H =parseInt(getStyle(oBoxB,"height")) ;
console.log(H);
console.log(oBtnB);
function getStyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

setTimeout(function () {
    // oMask.style.height = 0+"px"

    $("#mask").animate({"height":"0"},500);
    //鼠标滚轮方向
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                //事件

                // alert("上滚")
                xiagun();
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                //事件
                // alert("下滚")
                shanggun();


            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                //事件
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                //事件
            }
        }
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;

},5000)


var index = 0;
var len = oLunboDiv.length;
console.log(len);

//上按钮
//oBtnT.onclick = function (ev) {
//    shanggun()
//};
function shanggun(){
    if ($("#lunbo").is(':animated')) {
        return;
    }
    index++;
    if(index>=4){
        index=4;
    }
    $("#lunbo").animate({"top":-H*index+"px"},500)


    for (var j = 0; j < len; j++) {
        oBoxTSpan[j].classList.remove('now');
    }

    oBoxTSpan[index].classList.add('now');

}

//下按钮
oBtnB.onclick = function (ev) {
    shanggun();
}

function xiagun(){

    if ($("#lunbo").is(':animated')) {
        return;
    }
    index--;
    if(index<=0){
        index=0;
    }
    $("#lunbo").animate({"top":-H*index+"px"},500)

    for (var j = 0; j < len; j++) {
        oBoxTSpan[j].classList.remove('now');
    }

    oBoxTSpan[index].classList.add('now');

}

//小点点的事件
//oBoxTSpan[0].style.background = "pink"
for (var i = 0; i <len ; i++) {
    oBoxTSpan[i].number = i;
    oBoxTSpan[i].onclick = function () {

        for (var j = 0; j < len; j++) {
            oBoxTSpan[j].classList.remove('now');
        }

        this.classList.add('now');

        index = this.number;

        $("#lunbo").animate({"top":-H*index+"px"},500)

    }
}

/**
 * Created by Administrator on 2018/7/30.
 */
