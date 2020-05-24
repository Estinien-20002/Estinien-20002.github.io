let all = document.getElementById("big-box")
let ulSelectPosition = document.getElementById("select-position"); //ul
let ulSelectWork = document.getElementById("select-work"); //ul
let selectLine = document.getElementById("select-line"); //div
let firstSelect = document.querySelector(".position");
let secondSelect = document.getElementById("second-select");
let pSelectPosition = document.querySelector(".position-select-position"); //p
let pSelectWork = document.getElementById("p-second-select"); //p
let selectPositionBoxClickTimes = 0;
let selectWorkBoxClickTimes = 0;
let firstSelectValue = ''; //获取第一次选择的数据
let firstToSecond = ''; //用以检测是否相同，免得第二个select乱跳
let secontSelectValue = '';

let dataBox = document.getElementById("input-data-box");
let buttonBox = document.getElementById("button-box");





all.addEventListener('click', function (event) {
    let target = event.target;

    if (target.classList.contains("position-select-position") && target.classList.contains("click-one")) {
        ulSelectPosition.classList.remove("disappear");
        firstSelect.classList.remove("no-append");
        pSelectPosition.classList.remove("click-one");
        firstSelect.classList.add("append");
        pSelectPosition.classList.add("click-two")

    } else if ( (target.classList.contains("position-select-position") && target.classList.contains("click-two")) || target.id != "p-first-select") {
        ulSelectPosition.classList.add("disappear");
        firstSelect.classList.remove("append");
        pSelectPosition.classList.remove("click-two");
        firstSelect.classList.add("no-append");
        pSelectPosition.classList.add("click-one");
    }

    if (target.classList.contains("position-select-work") && target.classList.contains("click-one")) {
        ulSelectWork.classList.remove("disappear");
        secondSelect.classList.remove("no-append");
        pSelectWork .classList.remove("click-one");
        secondSelect.classList.add("append");
        pSelectWork .classList.add("click-two");
    } else if ( (target.classList.contains("position-select-work") && target.classList.contains("click-two")) || target.id != "p-second-select") {
        ulSelectWork.classList.add("disappear");
        secondSelect.classList.remove("append");
        pSelectWork .classList.remove("click-two");
        secondSelect.classList.add("no-append");
        pSelectWork .classList.add("click-one");
    }
})

ulSelectPosition.addEventListener('click', function (event) {
    let target = event.target;
    let lis = document.querySelectorAll(".li-work");
    //firstToSecond = '';
    for (var i = 0; i < lis.length; i++)
        lis[i].remove();

    if (target.classList.contains("li-position")) {
        firstSelectValue = target.innerHTML;
        pSelectPosition.innerHTML = firstSelectValue;
        ulSelectPosition.classList.add("disappear");
        secondSelect.classList.remove("disappear"); //注意这里是remove了
        firstSelect.classList.remove("append");
        firstSelect.classList.add("no-append");
        pSelectPosition.classList.remove("click-two");
        pSelectPosition.classList.add("click-one");
        pSelectWork.innerHTML = '选择职业';
    }

    if (target.innerHTML == '坦克') {
        //firstToSecond = '坦克';
        var lw1 = document.createElement("li");
        lw1.innerHTML = '战士';
        lw1.classList.add("li-work");
        var lw2 = document.createElement("li");
        lw2.innerHTML = '暗黑骑士';
        lw2.classList.add("li-work");
        var lw3 = document.createElement("li");
        lw3.innerHTML = '骑士';
        lw3.classList.add("li-work");
        var lw4 = document.createElement("li");
        lw4.innerHTML = '绝枪战士'
        lw4.classList.add("li-work");

        ulSelectWork.appendChild(lw1);
        ulSelectWork.appendChild(lw2);
        ulSelectWork.appendChild(lw3);
        ulSelectWork.appendChild(lw4);
    }

    if (target.innerHTML == '奶妈') {
        var lw1 = document.createElement("li");
        lw1.innerHTML = '白魔法师';
        lw1.classList.add("li-work");
        var lw2 = document.createElement("li");
        lw2.innerHTML = '学者';
        lw2.classList.add("li-work");
        var lw3 = document.createElement("li");
        lw3.innerHTML = '占星术士';
        lw3.classList.add("li-work");

        ulSelectWork.appendChild(lw1);
        ulSelectWork.appendChild(lw2);
        ulSelectWork.appendChild(lw3);
    }

    if (target.innerHTML == '近战') {

        var lw1 = document.createElement("li");
        lw1.innerHTML = '武僧';
        lw1.classList.add("li-work");
        var lw2 = document.createElement("li");
        lw2.innerHTML = '龙骑士';
        lw2.classList.add("li-work");
        var lw3 = document.createElement("li");
        lw3.innerHTML = '忍者';
        lw3.classList.add("li-work");
        var lw4 = document.createElement("li");
        lw4.innerHTML = '武士'
        lw4.classList.add("li-work");

        ulSelectWork.appendChild(lw1);
        ulSelectWork.appendChild(lw2);
        ulSelectWork.appendChild(lw3);
        ulSelectWork.appendChild(lw4);
    }

    if (target.innerHTML == '远敏') {
        var lw1 = document.createElement("li");
        lw1.innerHTML = '吟游诗人';
        lw1.classList.add("li-work");
        var lw2 = document.createElement("li");
        lw2.innerHTML = '机工士';
        lw2.classList.add("li-work");
        var lw3 = document.createElement("li");
        lw3.innerHTML = '舞者';
        lw3.classList.add("li-work");

        ulSelectWork.appendChild(lw1);
        ulSelectWork.appendChild(lw2);
        ulSelectWork.appendChild(lw3);
    }

    if (target.innerHTML == '法d') {
        var lw1 = document.createElement("li");
        lw1.innerHTML = '黑魔法师';
        lw1.classList.add("li-work");
        var lw2 = document.createElement("li");
        lw2.innerHTML = '召唤师';
        lw2.classList.add("li-work");
        var lw3 = document.createElement("li");
        lw3.innerHTML = '赤魔法师';
        lw3.classList.add("li-work");

        ulSelectWork.appendChild(lw1);
        ulSelectWork.appendChild(lw2);
        ulSelectWork.appendChild(lw3);
    }


})

ulSelectWork.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains("li-work")) {
        secontSelectValue = target.innerHTML;
        pSelectWork.innerHTML = secontSelectValue;
        secondSelect.classList.remove("append");
        secondSelect.classList.add("no-append");
        ulSelectWork.classList.add("disappear");
        pSelectWork.classList.remove("click-two");
        pSelectWork.classList.add("click-one");
        $(".ani-input").fadeIn("slow");
    }
})

//材料计算
let f1Html = document.getElementById("f1");//f1 = 愈疮木木材
let f1 = 0;
let f1Hnum = document.getElementById("f1-num");
let f1G2Num = document.querySelectorAll(".f1-G2num");//这个数字是让所有f1下二级的该数字与f1相同
let f1Snum = document.querySelectorAll(".f1-snum");//二级的乘数
let f1G2Fnum = document.querySelectorAll(".f1-G2Finalnum");//这个是二级×f1的最后数字


let c1Html = document.getElementById("c1");//c1 = 火之晶簇
let c1 = 0;
let c1HNum = document.getElementById("c1-num");
let c2Html = document.getElementById("c2");//c2 = 冰之晶簇
let c2 = 0;
let c2HNum = document.getElementById("c2-num");
let c3Html = document.getElementById("c3");//c3 = 风之晶簇
let c3 = 0;
let c3HNum = document.getElementById("c3-num");
let c4Html = document.getElementById("c4");//c4 = 土之晶簇
let c4 = 0;
let c4HNum = document.getElementById("c4-num");
let c5Html = document.getElementById("c5");//c5 = 雷之晶簇
let c5 = 0;
let c5HNum = document.getElementById("c5-num");
let c6Html = document.getElementById("c6");//c6 = 水之晶簇
let c6 = 0;
let c6HNum = document.getElementById("c6-num");

let f2Html = document.getElementById("f2");//f2 = メルバウ材
let f2 = 0;
let f2Hnum = document.getElementById("f2-num");
let f2G2Num = document.querySelectorAll(".f2-G2num");//这个数字是让所有f2下二级的该数字与f1相同
let f2Snum = document.querySelectorAll(".f2-snum");
let f2G2Fnum = document.querySelectorAll(".f2-G2Finalnum");//这个是二级×f2的最后数字

let f3Html = document.getElementById("f3");
let f3 = 0;
let f3Hnum = document.getElementById("f3-num");

let f4Html = document.getElementById("f4");
let f4 = 0;
let f4Hnum = document.getElementById("f4-num");

let f5Html = document.getElementById("f5");
let f5 = 0;
let f5Hnum = document.getElementById("f5-num");

let f6Html = document.getElementById("f6");//f6 = プルプラビーズ
let f6 = 0;
let f6Hnum = document.getElementById("f6-num");
let f6G2Num = document.querySelectorAll(".f6-G2num");//这个数字是让所有f6下二级的该数字与f6相同
let f6Snum = document.querySelectorAll(".f6-snum");
let f6G2Fnum = document.querySelectorAll(".f6-G2Finalnum");//这个是二级×f6的最后数字

let f7Html = document.getElementById("f7");//f7 = 矮人银块
let f7 = 0;
let f7Hnum = document.getElementById("f7-num");
let f7G2Num = document.querySelectorAll(".f7-G2num");//这个数字是让所有f7下二级的该数字与f6相同
let f7Snum = document.querySelectorAll(".f7-snum");
let f7G2Fnum = document.querySelectorAll(".f7-G2Finalnum");//这个是二级×f7的最后数字

let f8Html = document.getElementById("f8");//f8 = 矮人银锭
let f8 = 0;
let f8Hnum = document.getElementById("f8-num");
let f8G2Num = document.querySelectorAll(".f8-G2num");
let f8Snum = document.querySelectorAll(".f8-snum");
let f8G2Fnum = document.querySelectorAll(".f8-G2Finalnum");

let f9Html = document.getElementById("f9");//f9 = コバルトアロイインゴット
let f9 = 0;
let f9Hnum = document.getElementById("f9-num");
let f9G2Num = document.querySelectorAll(".f9-G2num");
let f9Snum = document.querySelectorAll(".f9-snum");
let f9G2Fnum = document.querySelectorAll(".f9-G2Finalnum");

let f10Html = document.getElementById("f10");//f10 = 紫根布
let f10 = 0;
let f10Hnum = document.getElementById("f10-num");
let f10G2Num = document.querySelectorAll(".f10-G2num");
let f10Snum = document.querySelectorAll(".f10-snum");
let f10G2Fnum = document.querySelectorAll(".f10-G2Finalnum");

let f11Html = document.getElementById("f11");//f11 = 矮人棉布
let f11 = 0;
let f11Hnum = document.getElementById("f11-num");
let f11G2Num = document.querySelectorAll(".f11-G2num");
let f11Snum = document.querySelectorAll(".f11-snum");
let f11G2Fnum = document.querySelectorAll(".f11-G2Finalnum");

let f12Html = document.getElementById("f12");//f12 = 海燕革
let f12 = 0;
let f12Hnum = document.getElementById("f12-num");
let f12G2Num = document.querySelectorAll(".f12-G2num");
let f12Snum = document.querySelectorAll(".f12-snum");
let f12G2Fnum = document.querySelectorAll(".f12-G2Finalnum");

let f13Html = document.getElementById("f13");//f13 = メガラニアレザー
let f13 = 0;
let f13Hnum = document.getElementById("f13-num");
let f13G2Num = document.querySelectorAll(".f13-G2num");
let f13Snum = document.querySelectorAll(".f13-snum");
let f13G2Fnum = document.querySelectorAll(".f13-G2Finalnum");

let f14Html = document.getElementById("f14");//f14 = 活力の幻水G3
let f14 = 0;
let f14Hnum = document.getElementById("f14-num");
let f14G2Num = document.querySelectorAll(".f14-G2num");
let f14Snum = document.querySelectorAll(".f14-snum");
let f14G2Fnum = document.querySelectorAll(".f14-G2Finalnum");

let f15Html = document.getElementById("f15");//f15 = 剛力の幻水G3
let f15 = 0;
let f15Hnum = document.getElementById("f15-num");
let f15G2Num = document.querySelectorAll(".f15-G2num");
let f15Snum = document.querySelectorAll(".f15-snum");
let f15G2Fnum = document.querySelectorAll(".f15-G2Finalnum");

let f16Html = document.getElementById("f16");//f16 = 眼力の幻水G3
let f16 = 0;
let f16Hnum = document.getElementById("f16-num");
let f16G2Num = document.querySelectorAll(".f16-G2num");
let f16Snum = document.querySelectorAll(".f16-snum");
let f16G2Fnum = document.querySelectorAll(".f16-G2Finalnum");

let f17Html = document.getElementById("f17");//f17 = 知力の幻水G3
let f17 = 0;
let f17Hnum = document.getElementById("f17-num");
let f17G2Num = document.querySelectorAll(".f17-G2num");
let f17Snum = document.querySelectorAll(".f17-snum");
let f17G2Fnum = document.querySelectorAll(".f17-G2Finalnum");

let f18Html = document.getElementById("f18");//f18 = 心力の幻水G3
let f18 = 0;
let f18Hnum = document.getElementById("f18-num");
let f18G2Num = document.querySelectorAll(".f18-G2num");
let f18Snum = document.querySelectorAll(".f18-snum");
let f18G2Fnum = document.querySelectorAll(".f18-G2Finalnum");

let f19Html = document.getElementById("f19");//f19 = 暗银附魔墨水
let f19 = 0;
let f19Hnum = document.getElementById("f19-num");
let f19G2Num = document.querySelectorAll(".f19-G2num");
let f19Snum = document.querySelectorAll(".f19-snum");
let f19G2Fnum = document.querySelectorAll(".f19-G2Finalnum");

f1Html.addEventListener('click',function(event){
    if (f1Html.classList.contains("click-one"))
    {
        $("#f1-G2").slideDown("slow");
        f1Html.classList.remove("noappend-2");
        f1Html.classList.remove("click-one");
        f1Html.classList.add("append-2");
        f1Html.classList.add("click-two");
    }else if (f1Html.classList.contains("click-two"))
    {
        $("#f1-G2").slideUp("slow");
        f1Html.classList.remove("append-2");
        f1Html.classList.remove("click-two");
        f1Html.classList.add("noappend-2");
        f1Html.classList.add("click-one");
    }
})

f2Html.addEventListener('click',function(event){
    if (f2Html.classList.contains("click-one"))
    {
        $("#f2-G2").slideDown("slow");
        f2Html.classList.remove("noappend-2");
        f2Html.classList.remove("click-one");
        f2Html.classList.add("append-2");
        f2Html.classList.add("click-two");
    }else if (f2Html.classList.contains("click-two"))
    {
        $("#f2-G2").slideUp("slow");
        f2Html.classList.remove("append-2");
        f2Html.classList.remove("click-two");
        f2Html.classList.add("noappend-2");
        f2Html.classList.add("click-one");
    }
})

f6Html.addEventListener('click',function(event){
    if (f6Html.classList.contains("click-one"))
    {
        $("#f6-G2").slideDown("slow");
        f6Html.classList.remove("noappend-2");
        f6Html.classList.remove("click-one");
        f6Html.classList.add("append-2");
        f6Html.classList.add("click-two");
    }else if (f6Html.classList.contains("click-two"))
    {
        $("#f6-G2").slideUp("slow");
        f6Html.classList.remove("append-2");
        f6Html.classList.remove("click-two");
        f6Html.classList.add("noappend-2");
        f6Html.classList.add("click-one");
    }
})

f7Html.addEventListener('click',function(event){
    if (f7Html.classList.contains("click-one"))
    {
        $("#f7-G2").slideDown("slow");
        f7Html.classList.remove("noappend-2");
        f7Html.classList.remove("click-one");
        f7Html.classList.add("append-2");
        f7Html.classList.add("click-two");
    }else if (f7Html.classList.contains("click-two"))
    {
        $("#f7-G2").slideUp("slow");
        f7Html.classList.remove("append-2");
        f7Html.classList.remove("click-two");
        f7Html.classList.add("noappend-2");
        f7Html.classList.add("click-one");
    }
})

f8Html.addEventListener('click',function(event){
    if (f8Html.classList.contains("click-one"))
    {
        $("#f8-G2").slideDown("slow");
        f8Html.classList.remove("noappend-2");
        f8Html.classList.remove("click-one");
        f8Html.classList.add("append-2");
        f8Html.classList.add("click-two");
    }else if (f8Html.classList.contains("click-two"))
    {
        $("#f8-G2").slideUp("slow");
        f8Html.classList.remove("append-2");
        f8Html.classList.remove("click-two");
        f8Html.classList.add("noappend-2");
        f8Html.classList.add("click-one");
    }
})

f9Html.addEventListener('click',function(event){
    if (f9Html.classList.contains("click-one"))
    {
        $("#f9-G2").slideDown("slow");
        f9Html.classList.remove("noappend-2");
        f9Html.classList.remove("click-one");
        f9Html.classList.add("append-2");
        f9Html.classList.add("click-two");
    }else if (f9Html.classList.contains("click-two"))
    {
        $("#f9-G2").slideUp("slow");
        f9Html.classList.remove("append-2");
        f9Html.classList.remove("click-two");
        f9Html.classList.add("noappend-2");
        f9Html.classList.add("click-one");
    }
})

f10Html.addEventListener('click',function(event){
    if (f10Html.classList.contains("click-one"))
    {
        $("#f10-G2").slideDown("slow");
        f10Html.classList.remove("noappend-2");
        f10Html.classList.remove("click-one");
        f10Html.classList.add("append-2");
        f10Html.classList.add("click-two");
    }else if (f10Html.classList.contains("click-two"))
    {
        $("#f10-G2").slideUp("slow");
        f10Html.classList.remove("append-2");
        f10Html.classList.remove("click-two");
        f10Html.classList.add("noappend-2");
        f10Html.classList.add("click-one");
    }
})

f11Html.addEventListener('click',function(event){
    if (f11Html.classList.contains("click-one"))
    {
        $("#f11-G2").slideDown("slow");
        f11Html.classList.remove("noappend-2");
        f11Html.classList.remove("click-one");
        f11Html.classList.add("append-2");
        f11Html.classList.add("click-two");
    }else if (f11Html.classList.contains("click-two"))
    {
        $("#f11-G2").slideUp("slow");
        f11Html.classList.remove("append-2");
        f11Html.classList.remove("click-two");
        f11Html.classList.add("noappend-2");
        f11Html.classList.add("click-one");
    }
})

f12Html.addEventListener('click',function(event){
    if (f12Html.classList.contains("click-one"))
    {
        $("#f12-G2").slideDown("slow");
        f12Html.classList.remove("noappend-2");
        f12Html.classList.remove("click-one");
        f12Html.classList.add("append-2");
        f12Html.classList.add("click-two");
    }else if (f12Html.classList.contains("click-two"))
    {
        $("#f12-G2").slideUp("slow");
        f12Html.classList.remove("append-2");
        f12Html.classList.remove("click-two");
        f12Html.classList.add("noappend-2");
        f12Html.classList.add("click-one");
    }
})

f13Html.addEventListener('click',function(event){
    if (f13Html.classList.contains("click-one"))
    {
        $("#f13-G2").slideDown("slow");
        f13Html.classList.remove("noappend-2");
        f13Html.classList.remove("click-one");
        f13Html.classList.add("append-2");
        f13Html.classList.add("click-two");
    }else if (f13Html.classList.contains("click-two"))
    {
        $("#f13-G2").slideUp("slow");
        f13Html.classList.remove("append-2");
        f13Html.classList.remove("click-two");
        f13Html.classList.add("noappend-2");
        f13Html.classList.add("click-one");
    }
})

f14Html.addEventListener('click',function(event){
    if (f14Html.classList.contains("click-one"))
    {
        $("#f14-G2").slideDown("slow");
        f14Html.classList.remove("noappend-2");
        f14Html.classList.remove("click-one");
        f14Html.classList.add("append-2");
        f14Html.classList.add("click-two");
    }else if (f14Html.classList.contains("click-two"))
    {
        $("#f14-G2").slideUp("slow");
        f14Html.classList.remove("append-2");
        f14Html.classList.remove("click-two");
        f14Html.classList.add("noappend-2");
        f14Html.classList.add("click-one");
    }
})

f15Html.addEventListener('click',function(event){
    if (f15Html.classList.contains("click-one"))
    {
        $("#f15-G2").slideDown("slow");
        f15Html.classList.remove("noappend-2");
        f15Html.classList.remove("click-one");
        f15Html.classList.add("append-2");
        f15Html.classList.add("click-two");
    }else if (f15Html.classList.contains("click-two"))
    {
        $("#f15-G2").slideUp("slow");
        f15Html.classList.remove("append-2");
        f15Html.classList.remove("click-two");
        f15Html.classList.add("noappend-2");
        f15Html.classList.add("click-one");
    }
})

f16Html.addEventListener('click',function(event){
    if (f16Html.classList.contains("click-one"))
    {
        $("#f16-G2").slideDown("slow");
        f16Html.classList.remove("noappend-2");
        f16Html.classList.remove("click-one");
        f16Html.classList.add("append-2");
        f16Html.classList.add("click-two");
    }else if (f16Html.classList.contains("click-two"))
    {
        $("#f16-G2").slideUp("slow");
        f16Html.classList.remove("append-2");
        f16Html.classList.remove("click-two");
        f16Html.classList.add("noappend-2");
        f16Html.classList.add("click-one");
    }
})

f17Html.addEventListener('click',function(event){
    if (f17Html.classList.contains("click-one"))
    {
        $("#f17-G2").slideDown("slow");
        f17Html.classList.remove("noappend-2");
        f17Html.classList.remove("click-one");
        f17Html.classList.add("append-2");
        f17Html.classList.add("click-two");
    }else if (f17Html.classList.contains("click-two"))
    {
        $("#f17-G2").slideUp("slow");
        f17Html.classList.remove("append-2");
        f17Html.classList.remove("click-two");
        f17Html.classList.add("noappend-2");
        f17Html.classList.add("click-one");
    }
})

f18Html.addEventListener('click',function(event){
    if (f18Html.classList.contains("click-one"))
    {
        $("#f18-G2").slideDown("slow");
        f18Html.classList.remove("noappend-2");
        f18Html.classList.remove("click-one");
        f18Html.classList.add("append-2");
        f18Html.classList.add("click-two");
    }else if (f18Html.classList.contains("click-two"))
    {
        $("#f18-G2").slideUp("slow");
        f18Html.classList.remove("append-2");
        f18Html.classList.remove("click-two");
        f18Html.classList.add("noappend-2");
        f18Html.classList.add("click-one");
    }
})

f19Html.addEventListener('click',function(event){
    if (f19Html.classList.contains("click-one"))
    {
        $("#f19-G2").slideDown("slow");
        f19Html.classList.remove("noappend-2");
        f19Html.classList.remove("click-one");
        f19Html.classList.add("append-2");
        f19Html.classList.add("click-two");
    }else if (f19Html.classList.contains("click-two"))
    {
        $("#f19-G2").slideUp("slow");
        f19Html.classList.remove("append-2");
        f19Html.classList.remove("click-two");
        f19Html.classList.add("noappend-2");
        f19Html.classList.add("click-one");
    }
})

//数据录入
//特别注意，忍者的首饰都算在了远敏内，防具分开
let itemList = [];
itemList[0] = ({
    part: 'mainWeapon',
    '吟游诗人': true,
    c2: 2,
    c3: 2,
    f8: 1,
    f5: 1,
    f6: 2,
    f2: 2,
    f16: 2
})
itemList[1] = ({
    part: 'mainWeapon',
    '白魔法师': true,
    c2: 2,
    c3: 2,
    f12: 1,
    f4: 1,
    f6: 2,
    f2: 2,
    f18: 2
})
itemList[2] = ({
    part: 'earrings',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f3: 1,
    f2: 2,
    f14: 1
})
itemList[3] = ({
    part: 'earrings',
    '武僧': true,
    '龙骑士': true,
    '武士': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f3: 1,
    f2: 2,
    f15: 1    
})
itemList[4] = ({
    part: 'earrings',
    '吟游诗人': true,
    '忍者': true,
    '机工士': true,
    '舞者': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f3: 1,
    f2: 2,
    f16: 1    
})
itemList[5] = ({
    part: 'earrings',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f3: 1,
    f2: 2,
    f17: 1    
})
itemList[6] = ({
    part: 'earrings',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f3: 1,
    f2: 2,
    f18: 1    
})
itemList[7] = ({
    part: 'ring',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f4: 1,
    f6: 1,
    f2: 1,
    f14: 1
})
itemList[8] = ({
    part: 'ring',
    '武僧': true,
    '龙骑士': true,
    '武士': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f4: 1,
    f6: 1,
    f2: 1,
    f15: 1
})
itemList[9] = ({
    part: 'ring',
    '吟游诗人': true,
    '忍者': true,
    '机工士': true,
    '舞者': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f4: 1,
    f6: 1,
    f2: 1,
    f16: 1
})
itemList[10] = ({
    part: 'ring',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f4: 1,
    f6: 1,
    f2: 1,
    f17: 1
})
itemList[11] = ({
    part: 'ring',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c2: 2,
    c3: 2,
    f1: 1,
    f4: 1,
    f6: 1,
    f2: 1,
    f18: 1
})
itemList[12] = ({
    part: 'mainWeapon',
    '骑士': true,
    c1: 2,
    c4: 2,
    f8: 1,
    f3: 1,
    f9: 2,
    f14: 1
})
itemList[13] = ({
    part: 'mainWeapon',
    '战士': true,
    c1: 2,
    c4: 2,
    f12: 1,
    f3: 1,
    f9: 2,
    f6: 2,
    f14: 2
})
itemList[14] = ({
    part: 'mainWeapon',
    '暗黑骑士': true,
    c1: 2,
    c4: 2,
    f7: 1,
    f3: 1,
    f9: 2,
    f2: 2,
    f14: 2
})
itemList[15] = ({
    part: 'mainWeapon',
    '绝枪战士': true,
    c1: 2,
    c4: 2,
    f8: 1,
    f3: 1,
    f9: 2,
    f6: 2,
    f14: 2
})
itemList[16] = ({
    part: 'mainWeapon',
    '龙骑士': true,
    c1: 2,
    c4: 2,
    f8: 1,
    f5: 1,
    f9: 2,
    f2: 2,
    f15: 2
})
itemList[17] = ({
    part: 'mainWeapon',
    '武僧': true,
    c1: 2,
    c4: 2,
    f7: 1,
    f5: 1,
    f9: 2,
    f2: 2,
    f15: 2
})
itemList[18] = ({
    part: 'mainWeapon',
    '武士': true,
    c1: 2,
    c4: 2,
    f11: 1,
    f5: 1,
    f9: 2,
    f2: 2,
    f15: 2
})
itemList[19] = ({
    part: 'mainWeapon',
    '忍者': true,
    c1: 2,
    c4: 2,
    f7: 1,
    f5: 1,
    f9: 2,
    f2: 2,
    f16: 2
})
itemList[20] = ({
    part: 'mainWeapon',
    '机工士': true,
    c1: 2,
    c4: 2,
    f8: 1,
    f5: 1,
    f9: 2,
    f6: 2,
    f16:2
})
itemList[21] = ({
    part: 'mainWeapon',
    '舞者': true,
    c1: 2,
    c4: 2,
    f8: 1,
    f5: 1,
    f9: 2,
    f2: 2,
    f16: 2
})
itemList[22] = ({
    part: 'secondWeapon',
    '骑士': true,
    c2: 2,
    c4: 2,
    f9: 1,
    f2: 1,
    f14: 1
})
itemList[23] = ({
    part: 'clothe',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c2: 2,
    c4: 2,
    f12: 1,
    f5: 1,
    f9: 2,
    f10: 2,
    f14: 2
})
itemList[24] = ({
    part: 'clothe',
    '龙骑士': true,
    c2: 2,
    c4: 2,
    f12: 1,
    f5: 1,
    f9: 2,
    f10: 2,
    f15: 2
})
itemList[25] = ({
    part: 'hand',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c2: 2,
    c4: 2,
    f11: 1,
    f3: 1,
    f9: 2,
    f13: 1,
    f14: 2
})
itemList[26] = ({
    part: 'hand',
    '龙骑士': true,
    c2: 2,
    c4: 2,
    f11: 1,
    f3: 1,
    f9: 2,
    f13: 1,
    f15: 2
})
itemList[27] = ({
    part: 'hand',
    '武僧': true,
    '武士': true,
    c2: 2,
    c4: 2,
    f11: 1,
    f3: 1,
    f9: 2,
    f13: 1,
    f15: 2
})
itemList[28] = ({
    part: 'hand',
    '忍者': true,
    c2: 2,
    c4: 2,
    f11: 1,
    f3: 1,
    f9: 2,
    f13: 1,
    f16: 2
})
itemList[29] = ({
    part: 'hand',
    '吟游诗人': true,
    '机工士': true,
    '舞者': true,
    c2: 2,
    c4: 2,
    f12: 1,
    f3: 1,
    f9: 2,
    f10: 1,
    f16: 2
})
itemList[30] = ({
    part: 'hand',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c2: 2,
    c4: 2,
    f12: 1,
    f3: 1,
    f9: 2,
    f10: 1,
    f17: 2
})
itemList[31] = ({
    part: 'hand',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c2: 2,
    c4: 2,
    f12: 1,
    f3: 1,
    f9: 2,
    f10: 1,
    f18: 2
})
itemList[32] = ({
    part: 'belt',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c2: 2,
    c4: 2,
    f12: 1,
    f4: 1,
    f9: 1,
    f2: 1,
    f14: 1
})
itemList[33] = ({
    part: 'belt',
    '龙骑士': true,
    c2: 2,
    c4: 2,
    f12: 1,
    f4: 1,
    f9: 1,
    f2: 1,
    f15: 1
})
itemList[34] = ({
    part: 'shoes',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c2: 2,
    c4: 2,
    f1: 1,
    f5: 1,
    f9: 2,
    f13: 1,
    f14: 2
})
itemList[35] = ({
    part: 'shoes',
    '忍者': true,
    c2: 2,
    c4: 2,
    f1: 1,
    f5: 1,
    f9: 2,
    f13: 1,
    f16: 2
})
itemList[36] = ({
    part:'mainWeapon',
    '黑魔法师': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f3: 1,
    f9: 2,
    f6: 2,
    f17: 2
})
itemList[37] = ({
    part: 'mainWeapon',
    '赤魔法师': true,
    c1: 2,
    c3: 2,
    f8: 1,
    f3: 1,
    f9: 2,
    f6: 2,
    f17: 2
})
itemList[38] = ({
    part: 'mainWeapon',
    '占星术士': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f4: 1,
    f9: 2,
    f6: 2,
    f18: 2
})
itemList[39] = ({
    part: 'necklace',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f9: 1,
    f6: 1,
    f14: 1
})
itemList[40] = ({
    part: 'necklace',
    '武僧': true,
    '龙骑士': true,
    '武士': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f9: 1,
    f6: 1,
    f15: 1
})
itemList[41] = ({
    part: 'necklace',
    '吟游诗人': true,
    '忍者': true,
    '机工士': true,
    '舞者': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f9: 1,
    f6: 1,
    f16: 1
})
itemList[42] = ({
    part: 'necklace',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f9: 1,
    f6: 1,
    f17: 1
})
itemList[43] = ({
    part: 'necklace',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f9: 1,
    f6: 1,
    f18: 1
})
itemList[44] = ({
    part: 'bracelet',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f6: 1,
    f2: 1,
    f14: 1
})
itemList[45] = ({
    part: 'bracelet',
    '武僧': true,
    '龙骑士': true,
    '武士': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f6: 1,
    f2: 1,
    f15: 1
})
itemList[46] = ({
    part: 'bracelet',
    '吟游诗人': true,
    '忍者': true,
    '机工士': true,
    '舞者': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f6: 1,
    f2: 1,
    f16: 1
})
itemList[47] = ({
    part: 'bracelet',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f6: 1,
    f2: 1,
    f17: 1
})
itemList[48] = ({
    part: 'bracelet',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c1: 2,
    c3: 2,
    f7: 1,
    f5: 1,
    f6: 1,
    f2: 1,
    f18: 1
})
itemList[49] = ({
    part: 'clothe',
    '忍者': true,
    c3: 2,
    c4: 2,
    f12: 1,
    f5: 1,
    f10: 2,
    f13: 2,
    f16: 2
})
itemList[50] = ({
    part: 'clothe',
    '吟游诗人': true,
    '机工士': true,
    '舞者': true,
    c3: 2,
    c4: 2,
    f8: 1,
    f5: 1,
    f10: 2,
    f13: 2,
    f16: 2
})
itemList[51] = ({
    part: 'clothe',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c3: 2,
    c4: 2,
    f12: 1,
    f5: 1,
    f10: 2,
    f13: 2,
    f17: 2
})
itemList[52] = ({
    part: 'clothe',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c3: 2,
    c4: 2,
    f8: 1,
    f5: 1,
    f10: 2,
    f13: 2,
    f18: 2
})
itemList[53] = ({
    part: 'belt',
    '武僧': true,
    '武士': true,
    c3: 2,
    c4: 2,
    f7: 1,
    f4: 1,
    f10: 1,
    f13: 1,
    f15: 1
})
itemList[54] = ({
    part: 'belt',
    '忍者':true,
    c3: 2,
    c4: 2,
    f7: 1,
    f4: 1,
    f10: 1,
    f13: 1,
    f16: 1
})
itemList[55] = ({
    part: 'belt',
    '吟游诗人': true,
    '机工士': true,
    '舞者': true,
    c3: 2,
    c4: 2,
    f7: 1,
    f4: 1,
    f10: 1,
    f13: 1,
    f16: 1
})
itemList[56] = ({
    part: 'belt',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c3: 2,
    c4: 2,
    f7: 1,
    f4: 1,
    f10: 1,
    f13: 1,
    f17: 1
})
itemList[57] = ({
    part: 'belt',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c3: 2,
    c4: 2,
    f7: 1,
    f4: 1,
    f10: 1,
    f13: 1,
    f18: 1
})
itemList[58] = ({
    part: 'shoes',
    '龙骑士': true,
    c3: 2,
    c4: 2,
    f1: 1,
    f5: 1,
    f9: 1,
    f13: 2,
    f15: 2
})
itemList[59] = ({
    part: 'shoes',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c3: 2,
    c4: 2,
    f1: 1,
    f5: 1,
    f9: 1,
    f13: 2,
    f17: 2
})
itemList[60] = ({
    part: 'shoes',
    '武僧': true,
    '武士': true,
    c3: 2,
    c4: 2,
    f11: 1,
    f5: 1,
    f2: 1,
    f13: 2,
    f15: 2
})
itemList[61] = ({
    part: 'shoes',
    '吟游诗人': true,
    '机工士': true,
    '舞者': true,
    c3: 2,
    c4: 2,
    f11: 1,
    f5: 1,
    f2: 1,
    f13: 2,
    f16: 2
})
itemList[62] = ({
    part: 'shoes',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c3: 2,
    c4: 2,
    f11: 1,
    f5: 1,
    f2: 1,
    f13: 2,
    f18: 2
})
itemList[63] = ({
    part: 'head',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c3: 2,
    c5: 2,
    f8: 1,
    f3: 1,
    f6: 1,
    f10: 2,
    f14: 2
})
itemList[64] = ({
    part: 'head',
    '龙骑士': true,
    c3: 2,
    c5: 2,
    f8: 1,
    f3: 1,
    f6: 1,
    f10: 2,
    f15: 2
})
itemList[65] = ({
    part: 'head',
    '武僧': true,
    '武士': true,
    c3: 2,
    c5: 2,
    f12: 1,
    f3: 1,
    f6: 1,
    f10: 2,
    f15: 2
})
itemList[66] = ({
    part: 'head',
    '忍者': true,
    c3: 2,
    c5: 2,
    f7: 1,
    f3: 1,
    f10: 2,
    f13: 1,
    f16: 2
})
itemList[67] = ({
    part: 'head',
    '吟游诗人': true,
    '机工士': true,
    '舞者': true,
    c3: 2,
    c5: 2,
    f12: 1,
    f3: 1,
    f6: 1,
    f10: 2,
    f16: 2
})
itemList[68] = ({
    part: 'head',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c3: 2,
    c5: 2,
    f7: 1,
    f3: 1,
    f10: 2,
    f13: 1,
    f17: 2
})
itemList[69] = ({
    part: 'head',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c3: 2,
    c5: 2,
    f7: 1,
    f3: 1,
    f10: 2,
    f13: 1,
    f18: 2
})
itemList[70] = ({
    part: 'head',
    '武僧': true,
    '武士': true,
    c3: 2,
    c5: 2,
    f8: 1,
    f5: 1,
    f10: 2,
    f13: 2,
    f15: 2
})
itemList[71] = ({
    part: 'pan',
    '骑士': true,
    '战士': true,
    '暗黑骑士': true,
    '绝枪战士': true,
    c3: 2,
    c5: 2,
    f11: 1,
    f3: 1,
    f10: 2,
    f13: 2,
    f14: 2
})
itemList[72] = ({
    part: 'pan',
    '龙骑士': true,
    c3: 2,
    c5: 2,
    f11: 1,
    f3: 1,
    f10: 2,
    f13: 2,
    f15: 2
})
itemList[73] = ({
    part: 'pan',
    '武僧': true,
    '武士': true,
    c3: 2,
    c5: 2,
    f12: 1,
    f3: 1,
    f10: 2,
    f13: 2,
    f15: 2
})
itemList[74] = ({
    part: 'pan',
    '忍者': true,
    c3: 2,
    c5: 2,
    f11: 1,
    f3: 1,
    f10: 2,
    f13: 2,
    f16: 2
})
itemList[75] = ({
    part: 'pan',
    '吟游诗人': true,
    '机工士': true,
    '舞者': true,
    c3: 2,
    c5: 2,
    f11: 1,
    f3: 1,
    f10: 2,
    f13: 2,
    f16: 2
})
itemList[76] = ({
    part: 'pan',
    '黑魔法师': true,
    '召唤师': true,
    '赤魔法师': true,
    c3: 2,
    c5: 2,
    f11: 1,
    f3: 1,
    f10: 2,
    f13: 2,
    f17: 2
})
itemList[77] = ({
    part: 'pan',
    '白魔法师': true,
    '学者': true,
    '占星术士': true,
    c3: 2,
    c5: 2,
    f12: 1,
    f3: 1,
    f6: 2,
    f10: 2,
    f18: 2
})
itemList[78] = ({
    part: 'mainWeapon',
    '召唤师': true,
    c5: 2,
    c6: 2,
    f19: 1,
    f3: 1,
    f2: 2,
    f13: 2,
    f17: 2
})
itemList[79] = ({
    part: 'mainWeapon',
    '学者': true,
    c5: 2,
    c6: 2,
    f19: 1,
    f4: 1,
    f2: 2,
    f13: 2,
    f18: 2
})

//输入数据录入
let startButton = document.getElementById("button-start");
let restartButton = document.getElementById("button-restart");
let setButton = document.getElementById("button-set");
let set = document.getElementById("input-set");
let inputItem = [];
let c = new Array(7);
for ( var i = 1 ; i < 7 ; i++){
    c[i] = 0;
}
let f = new Array(20);
for ( var i = 1 ; i < 20 ; i++ ){
    f[i] = 0;
}
let iMainWeapon = document.getElementById("input-mainWeapon");
inputItem[ 'mainWeapon' ] = 0;
let iHead = document.getElementById("input-head");
inputItem[ 'head' ] = 0;
let iClothe = document.getElementById("input-clothe");
inputItem[ 'clothe' ] = 0;
let iHand = document.getElementById("input-hand");
inputItem[ 'hand' ] = 0;
let iBelt = document.getElementById("input-belt");
inputItem[ 'belt' ] = 0;
let iPan = document.getElementById("input-pan");
inputItem[ 'pan' ] = 0;
let iShoes = document.getElementById("input-shoes");
inputItem[ 'shoes' ] = 0;
let iSecondWeapon = document.getElementById("input-secondWeapon");
inputItem[ 'secondWeapon' ] = 0;
let iEarrings = document.getElementById("input-earrings");
inputItem[ 'earrings' ] = 0;
let iNecklace = document.getElementById("input-necklace");
inputItem[ 'necklace' ] = 0;
let iBracelet = document.getElementById("input-bracelet");
inputItem[ 'bracelet' ] = 0;
let iRing = document.getElementById("input-ring");
inputItem[ 'ring' ] = 0;

startButton.addEventListener('click', function(event){
    cleardisappear();
    transmit();
    cal();
    $("#firstLevel").fadeIn("slow");
    show();
})

function transmit(){
    if ( iMainWeapon.value != 0 && iMainWeapon.value )  
        inputItem[ 'mainWeapon' ] = parseInt( iMainWeapon.value );
    if ( iHead.value != 0 && iHead.value ) 
        inputItem[ 'head' ] = parseInt( iHead.value );
    if ( iClothe.value != 0 && iClothe.value ) 
        inputItem[ 'clothe' ] = parseInt( iClothe.value );
    if ( iHand.value != 0 && iHand.value )
        inputItem[ 'hand' ] = parseInt( iHand.value );
    if ( iBelt.value != 0 && iBelt.value )
        inputItem[ 'belt' ] = parseInt( iBelt.value );
    if ( iPan.value != 0 && iPan.value )
        inputItem[ 'pan' ] = parseInt( iPan.value );
    if ( iShoes.value != 0 && iShoes.value )
        inputItem[ 'shoes' ] = parseInt( iShoes.value );
    if ( iSecondWeapon.value != 0 && iSecondWeapon.value )
        inputItem[ 'secondWeapon' ] = parseInt( iSecondWeapon.value );
    if ( iEarrings.value != 0 && iEarrings.value )
        inputItem[ 'earrings' ] = parseInt( iEarrings.value );
    if ( iNecklace.value != 0 && iNecklace.value )
        inputItem[ 'necklace' ] = parseInt( iNecklace.value );
    if ( iBracelet.value != 0 && iBracelet.value )
        inputItem[ 'bracelet' ] = parseInt( iBracelet.value );
    if ( iRing.value != 0 && iRing.value )
        inputItem[ 'ring' ] = parseInt( iRing.value );
}

function cal(){
    for ( var i =0 ; i < 80 ; i++){
        if ( secontSelectValue in  itemList[i] ){//判断职业
            if ( inputItem[ itemList[i].part ] != 0 ){//判断是否为要计算的部位

                for ( var j = 1 ; j < 7 ; j++ ){
                    if ( `c${j}` in itemList[i] ){
                        c[ j ] = inputItem[ itemList[i].part ] * itemList[i][`c${j}`] + c[ j ];
                    }
                }

                for ( var j = 1 ; j < 20 ; j++ ){
                    if ( `f${j}` in itemList[i] ){
                        f[ j ] = inputItem[ itemList[i].part ] * itemList[i][`f${j}`] + f[ j ];
                    }
                }
            }
        }
        
    }
}

function cleardisappear(){
    for ( var i = 1 ; i < 7 ; i++ ){
        c[i] = 0;
    }
    for ( var i = 1 ; i < 20 ; i++ ){
        f[i] = 0;
    }
    inputItem[ 'mainWeapon' ] = 0;
    inputItem[ 'head' ] = 0;
    inputItem[ 'clothe' ] = 0;
    inputItem[ 'hand' ] = 0;
    inputItem[ 'belt' ] = 0;
    inputItem[ 'pan' ] = 0;
    inputItem[ 'shoes' ] = 0;
    inputItem[ 'secondWeapon' ] = 0;
    inputItem[ 'earrings' ] = 0;
    inputItem[ 'necklace' ] = 0;
    inputItem[ 'bracelet' ] = 0;
    inputItem[ 'ring' ] = 0;

}

function show(){
    if ( c[1] != 0 ){
        c1HNum.innerHTML = c[1];
        $("#c1").fadeIn("slow");
    }else if ( c[1] == 0 ){
        $("#c1").fadeOut("slow");
    }

    if ( c[2] != 0 ){
        c2HNum.innerHTML = c[2];
        $("#c2").fadeIn("slow");
    }else if ( c[2] == 0){
        $("#c2").fadeOut("slow");
    }

    if ( c[3] != 0 ){
        c3HNum.innerHTML = c[3];
        $("#c3").fadeIn("slow");
    }else if ( c[3] == 0){
        $("#c3").fadeOut("slow");
    }

    if ( c[4] != 0 ){
        c4HNum.innerHTML = c[4];
        $("#c4").fadeIn("slow");
    }else if ( c[4] == 0){
        $("#c4").fadeOut("slow");
    }

    if ( c[5] != 0 ){
        c5HNum.innerHTML = c[5];
        $("#c5").fadeIn("slow");
    }else if ( c[5] == 0){
        $("#c5").fadeOut("slow");
    }

    if ( c[6] != 0 ){
        c6HNum.innerHTML = c[6];
        $("#c6").fadeIn("slow");
    }else if ( c[6] == 0){
        $("#c6").fadeOut("slow");
    }

    if ( f[1] != 0 ){
        f1Hnum.innerHTML = f[1];
        $("#f1").fadeIn("slow");
        for ( var i = 0 ; i < f1Snum.length ; i++){
            f1G2Num[i].innerHTML = f[1];
            f1G2Fnum[i].innerHTML = parseInt( f1Snum[i].innerHTML ) * f[1];
        }
    }else if ( f[1] == 0 ){
        $("#f1").fadeOut("slow");
    }

    if ( f[2] != 0 ){
        f2Hnum.innerHTML = f[2];
        $("#f2").fadeIn("slow");
        for ( var i = 0 ; i < f2Snum.length ; i++){
            f2G2Num[i].innerHTML = f[2];
            f2G2Fnum[i].innerHTML = parseInt( f2Snum[i].innerHTML ) * f[2];
        }
    }else if ( f[2] == 0 ){
        $("#f2").fadeOut("slow");
    }

    if ( f[3] != 0 ){
        f3Hnum.innerHTML = f[3];
        $("#f3").fadeIn("slow");
    }else if ( f[3] == 0){
        $("#f3").fadeOut("slow");
    }

    if ( f[4] != 0 ){
        f4Hnum.innerHTML = f[4];
        $("#f4").fadeIn("slow");
    }else if ( f[4] == 0){
        $("#f4").fadeOut("slow");
    }

    if ( f[5] != 0 ){
        f5Hnum.innerHTML = f[5];
        $("#f5").fadeIn("slow");
    }else if ( f[5] == 0){
        $("#f5").fadeOut("slow");
    }

    if ( f[6] != 0 ){
        f6Hnum.innerHTML = f[6];
        $("#f6").fadeIn("slow");
        for ( var i = 0 ; i < f6Snum.length ; i++){
            f6G2Num[i].innerHTML = f[6];
            f6G2Fnum[i].innerHTML = parseInt( f6Snum[i].innerHTML ) * f[6];
        }
    }else if ( f[6] == 0 ){
        $("#f6").fadeOut("slow");
    }

    if ( f[7] != 0 ){
        f7Hnum.innerHTML = f[7];
        $("#f7").fadeIn("slow");
        for ( var i = 0 ; i < f7Snum.length ; i++){
            f7G2Num[i].innerHTML = f[7];
            f7G2Fnum[i].innerHTML = parseInt( f7Snum[i].innerHTML ) * f[7];
        }
    }else if ( f[7] == 0 ){
        $("#f7").fadeOut("slow");
    }

    if ( f[8] != 0 ){
        f8Hnum.innerHTML = f[8];
        $("#f8").fadeIn("slow");
        for ( var i = 0 ; i < f8Snum.length ; i++){
            f8G2Num[i].innerHTML = f[8];
            f8G2Fnum[i].innerHTML = parseInt( f8Snum[i].innerHTML ) * f[8];
        }
    }else if ( f[8] == 0 ){
        $("#f8").fadeOut("slow");
    }

    if ( f[9] != 0 ){
        f9Hnum.innerHTML = f[9];
        $("#f9").fadeIn("slow");
        for ( var i = 0 ; i < f9Snum.length ; i++){
            f9G2Num[i].innerHTML = f[9];
            f9G2Fnum[i].innerHTML = parseInt( f9Snum[i].innerHTML ) * f[9];
        }
    }else if ( f[9] == 0 ){
        $("#f9").fadeOut("slow");
    }

    if ( f[10] != 0 ){
        f10Hnum.innerHTML = f[10];
        $("#f10").fadeIn("slow");
        for ( var i = 0 ; i < f10Snum.length ; i++){
            f10G2Num[i].innerHTML = f[10];
            f10G2Fnum[i].innerHTML = parseInt( f10Snum[i].innerHTML ) * f[10];
        }
    }else if ( f[10] == 0 ){
        $("#f10").fadeOut("slow");
    }

    if ( f[11] != 0 ){
        f11Hnum.innerHTML = f[11];
        $("#f11").fadeIn("slow");
        for ( var i = 0 ; i < f11Snum.length ; i++){
            f11G2Num[i].innerHTML = f[11];
            f11G2Fnum[i].innerHTML = parseInt( f11Snum[i].innerHTML ) * f[11];
        }
    }else if ( f[11] == 0 ){
        $("#f11").fadeOut("slow");
    }

    if ( f[12] != 0 ){
        f12Hnum.innerHTML = f[12];
        $("#f12").fadeIn("slow");
        for ( var i = 0 ; i < f12Snum.length ; i++){
            f12G2Num[i].innerHTML = f[12];
            f12G2Fnum[i].innerHTML = parseInt( f12Snum[i].innerHTML ) * f[12];
        }
    }else if ( f[12] == 0 ){
        $("#f12").fadeOut("slow");
    }

    if ( f[13] != 0 ){
        f13Hnum.innerHTML = f[13];
        $("#f13").fadeIn("slow");
        for ( var i = 0 ; i < f13Snum.length ; i++){
            f13G2Num[i].innerHTML = f[13];
            f13G2Fnum[i].innerHTML = parseInt( f13Snum[i].innerHTML ) * f[13];
        }
    }else if ( f[13] == 0 ){
        $("#f13").fadeOut("slow");
    }

    if ( f[14] != 0 ){
        f14Hnum.innerHTML = f[14];
        var num = 0;
        $("#f14").fadeIn("slow");
        for ( var i = 0 ; i < f14Snum.length ; i++){
            f14G2Num[i].innerHTML = f[14];
            num = parseInt( f14Snum[i].innerHTML ) * f[14] / 3
            if (num % 1 === 0 ) f14G2Fnum[i].innerHTML = num;
            else f14G2Fnum[i].innerHTML = num.toFixed(2);
        }
    }else if ( f[14] == 0 ){
        $("#f14").fadeOut("slow");
    }

    if ( f[15] != 0 ){
        f15Hnum.innerHTML = f[15];
        var num = 0;
        $("#f15").fadeIn("slow");
        for ( var i = 0 ; i < f15Snum.length ; i++){
            f15G2Num[i].innerHTML = f[15];
            num = parseInt( f15Snum[i].innerHTML ) * f[15] / 3
            if (num % 1 === 0 ) f15G2Fnum[i].innerHTML = num;
            else f15G2Fnum[i].innerHTML = num.toFixed(2);
        }
    }else if ( f[15] == 0 ){
        $("#f15").fadeOut("slow");
    }

    if ( f[16] != 0 ){
        f16Hnum.innerHTML = f[16];
        var num = 0;
        $("#f16").fadeIn("slow");
        for ( var i = 0 ; i < f16Snum.length ; i++){
            f16G2Num[i].innerHTML = f[16];
            num = parseInt( f16Snum[i].innerHTML ) * f[16] / 3
            if (num % 1 === 0 ) f16G2Fnum[i].innerHTML = num;
            else f16G2Fnum[i].innerHTML = num.toFixed(2);
        }
    }else if ( f[16] == 0 ){
        $("#f16").fadeOut("slow");
    }

    if ( f[17] != 0 ){
        f17Hnum.innerHTML = f[17];
        var num = 0;
        $("#f17").fadeIn("slow");
        for ( var i = 0 ; i < f17Snum.length ; i++){
            f17G2Num[i].innerHTML = f[17];
            num = parseInt( f17Snum[i].innerHTML ) * f[17] / 3
            if (num % 1 === 0 ) f17G2Fnum[i].innerHTML = num;
            else f17G2Fnum[i].innerHTML = num.toFixed(2);
        }
    }else if ( f[17] == 0 ){
        $("#f17").fadeOut("slow");
    }

    if ( f[18] != 0 ){
        f18Hnum.innerHTML = f[18];
        var num = 0;
        $("#f18").fadeIn("slow");
        for ( var i = 0 ; i < f18Snum.length ; i++){
            f18G2Num[i].innerHTML = f[18];
            num = parseInt( f18Snum[i].innerHTML ) * f[18] / 3
            if (num % 1 === 0 ) f18G2Fnum[i].innerHTML = num;
            else f18G2Fnum[i].innerHTML = num.toFixed(2);
        }
    }else if ( f[18] == 0 ){
        $("#f18").fadeOut("slow");
    }

    if ( f[19] != 0 ){
        f19Hnum.innerHTML = f[19];
        $("#f19").fadeIn("slow");
        for ( var i = 0 ; i < f19Snum.length ; i++){
            f19G2Num[i].innerHTML = f[19];
            f19G2Fnum[i].innerHTML = parseInt( f19Snum[i].innerHTML ) * f[19];
        }
    }else if ( f[19] == 0 ){
        $("#f19").fadeOut("slow");
    }
}

setButton.addEventListener('click', function(event){
    if ( set.value )  {
        iMainWeapon.value = set.value;
        iHead.value = set.value;
        iClothe.value = set.value;
        iHand.value = set.value;
        iBelt.value = set.value;
        iPan.value = set.value;
        iShoes.value = set.value;
        iSecondWeapon.value = set.value;
        iEarrings.value = set.value;
        iNecklace.value = set.value;
        iBracelet.value = set.value;
        iRing.value = parseInt( set.value ) * 2;
    }
})

restartButton.addEventListener('click', function(event){
    iMainWeapon.value = '';
        iHead.value = '';
        iClothe.value = '';
        iHand.value = '';
        iBelt.value = '';
        iPan.value = '';
        iShoes.value = '';
        iSecondWeapon.value = '';
        iEarrings.value = '';
        iNecklace.value = '';
        iBracelet.value = '';
        iRing.value = '';
})

let calnum = 0;//每次点加号为这个项目的所有数据增加序号，特别注意，这下面的所有数据存储皆从0开始
let Cadd = document.getElementById("jia");
let itemSave = [];
let calBox = document.getElementById("cal-box");
let inputAll = document.querySelectorAll(".input-part");//企图改个算法
let partsort = [];//用来对应inputItem和inputAll，前面的算法懒得动了
partsort[0] = 'mainWeapon';
partsort[1] = 'head';
partsort[2] = 'clothe';
partsort[3] = 'hand';
partsort[4] = 'belt';
partsort[5] = 'pan';
partsort[6] = 'shoes';
partsort[7] = 'secondWeapon';
partsort[8] = 'earrings';
partsort[9] = 'necklace';
partsort[10] = 'bracelet';
partsort[11] = 'ring';


Cadd.addEventListener('click',function(event){
    
    if ( secontSelectValue ){
    cleardisappear();
    transmit();
    cal();
        
    itemSave.push({
        id: calnum,
        swork: secontSelectValue,
        fwork: firstSelectValue,
        c1: c[1],
        c2: c[2],
        c3: c[3],
        c4: c[4],
        c5: c[5],
        c6: c[6],
        f1: f[1],
        f2: f[2],
        f3: f[3],
        f4: f[4],
        f5: f[5],
        f6: f[6],
        f7: f[7],
        f8: f[8],
        f9: f[9],
        f10: f[10],
        f11: f[11],
        f12: f[12],
        f13: f[13],
        f14: f[14],
        f15: f[15],
        f16: f[16],
        f17: f[17],
        f18: f[18],
        f19: f[19],
        i0: inputAll[0].value,
        i1: inputAll[1].value,
        i2: inputAll[2].value,
        i3: inputAll[3].value,
        i4: inputAll[4].value,
        i5: inputAll[5].value,
        i6: inputAll[6].value,
        i7: inputAll[7].value,
        i8: inputAll[8].value,
        i9: inputAll[9].value,
        i10: inputAll[10].value,
        i11: inputAll[11].value
    })
    let calH = document.createElement("div");
    calH.className = "cal-item";
    calH.dataset.id = calnum;
    calH.innerHTML = secontSelectValue;
    let deH = document.createElement("div");
    deH.className = "delete";
    deH.dataset.id = calnum;
    deH.innerHTML = 'x';
    calBox.appendChild( calH );
    calH.appendChild( deH );

    calnum = calnum + 1;
    }
})

calBox.addEventListener('click',function(event){
    let target = event.target;
    let idx = 0;
    let calHall = document.querySelectorAll(".cal-item");
    let deHall = document.querySelectorAll(".delete");
    if (target.classList.contains("delete")){
        idx = target.dataset.id;
        calBox.removeChild( target.parentElement);
        delete itemSave[ idx ];
    }else if( target.classList.contains( "cal-item" ) ){
        idx = target.dataset.id;
        for ( var i = 1 ; i<7 ; i++ ){
            c[ i ] = itemSave[ idx ][ `c${i}` ];
        }
        for ( var i = 1 ; i < 20 ; i++  ){
            f[ i ] = itemSave[ idx ][ `f${i}` ];
        }
        changeinput( idx );
        pSelectPosition.innerHTML = itemSave[ idx ].fwork;
        pSelectWork.innerHTML = itemSave[ idx ].swork;
        $("#firstLevel").fadeIn("slow");
        show();
    }
    
    
    console.log( calHall );
    console.log( itemSave );
})

function changeinput( idx ){
    for ( var i = 0 ; i < 12 ; i++ ){
        inputAll[ i ].value = itemSave[ idx ][ `i${i}` ];
    }
}

let Sum = document.getElementById("Sum-line");
Sum.addEventListener('click', function(event){
    cleardisappear();
    for( var i = 0 ; i < itemSave.length ; i++ ){
        if (itemSave[ i ]){
            for ( var j = 1 ; j < 7 ; j++ ){
                c[ j ] = c[j] + itemSave[ i ][ `c${j}` ];
            }

            for ( var j = 1 ; j < 20 ; j++ ){
                f[ j ] = f[ j ] + itemSave[ i ][ `f${j}` ];
            }
        }
    }
    $("#firstLevel").fadeIn("slow");
    show();
})