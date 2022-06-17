// task 1
$(".singers h4").click(function(){

    $(this).next().slideToggle(500);
    $(".singers p").not($(this).next()).slideUp(500);
});

// Task 2
let maxChar=100;
$("#txtArea").keyup(function(){

    var length = $(this).val().length;
    var remainingCharacter = maxChar - length;
    if (remainingCharacter <= 0) {
        $(".span100").text("your available character finished");
    } else {
        $(".span100").text(remainingCharacter);
    }
});


// Task 3
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(()=>{
let dateNow = new Date().getTime();
let dateDeff = countDownDate - dateNow;

let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));

let Hrs = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let Mins = Math.floor((dateDeff % (1000 * 60 * 60 )) / (1000 * 60));

let Secs = Math.floor((dateDeff % (1000 * 60 )) / (1000));

$(".D").html(days);
$(".H").html(Hrs);
$(".M").html(Mins);
$(".S").html(Secs);

if(dateDeff<0){
    clearInterval(counter);
}
})


let w = $(".navLinks").innerWidth();
$(".open").click(function(){


    let left = $(".sideMenu").css("left");
    if(left == "0px"){
        $(".sideMenu").animate({left: `-${w}`} , 1000);
    }
    else{
        $(".sideMenu").animate({left: `0px`} , 1000);
    }
})

