const timer = document.querySelector(".js-timer");

var count = 0;
var time = 0;
var choice = 0;
var hour = 0;
var min = 0;
var sec = 0;

function noodle() {
    clearInterval(time); // 타이머 우선 초기화 시켜주기(time initialize)
    /* 
     
        ID로 가져오기
       // select의 value를 가져오기 : value
       var val = document.getElementById("selid").value;
       alert(val);   // 확인용
       // select의 index값을 가져오기 : selectedIndex
       var indexNum = document.getElementById("selid").selectedIndex;
       alert(indexNum);   // 확인용
     */


    //    name으로 index 찾기
    choice = document.frm.myChoice.selectedIndex;
    //   alert(choice);

    // 찾은 index로 value찾기
    count = parseInt(document.frm.myChoice.options[choice].value);

    alert(count + '초 타이머 시작');

    // 타이머 함수 1초씩 호출하는 함수 만들기
    time = setInterval("myTimer()", 1000);
}

function myTimer() {
    count = count - 1; // 타이머 선택 숫자에서 -1씩 감산함(갱신되기 때문)

    document.getElementById("countdown").innerHTML = "완료까지 <b>" + count + "</b>초 남았습니다.";
    if (count == 0) {
        clearInterval(time); // 시간 초기화
        alert("시간이 완료되었습니다.")
    }
}

document.oncontextmenu = function() {
    alert("마우스의 우클릭은 사용할 수 없습니다.")
    return false;
}

function init() {
    myTimer();
}

init();