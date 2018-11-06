/**
 * Created by Administrator on 2018/7/26.
 */
    var OH2 = document.getElementsByClassName("h2");
    var OH4 = document.getElementsByClassName("h4");
    var OH5 = document.getElementsByClassName("h5");
    var OUl1 = document.getElementById("ul1");
    var OUl2 = document.getElementById("ul2");
    var OUl3 = document.getElementById("ul3");

    OH2[0].onmouseover = function(){
        OUl1.style.display="block";
        OUl1.classList.add("d1");
    };
    OH2[0].onmouseout = function(){
        OUl1.style.display="none"
    };

    OH4[0].onmouseover = function(){
        OUl2.style.display="block";
        OUl2.classList.add("d2");
    };
    OH4[0].onmouseout = function(){
        OUl2.style.display="none"
    };


    OH5[0].onmouseover = function(){
        OUl3.style.display="block"
        OUl3.classList.add("d2");
    };
    OH5[0].onmouseout = function(){
        OUl3.style.display="none"
    }
