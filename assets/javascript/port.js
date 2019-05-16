//Global variables for landing page
var name = "Jacob Valentine";
var fullStack = "Full-Stack ";
var webDev = "Developer";
var count = 0;
var nameElement = $("<h1>");


//
function openPage() {
    setInterval(nameRender, 50);
}

function nameRender() {

    nameElement.append(name[count]);
    $(".name-text").append(nameElement);
    count++;
    if (count === 13) {
        clearInterval(nameRender);
    }
}

function job1Render() {
    
    var jobDiv = $("<div>");
    jobDiv.attr("class", "job-text");

    var fsH2 = $("<h2>");


    fsH2.attr("id", "fullStack-glide");

    fsH2.text(fullStack + " ");

    jobDiv.html(fsH2);
    
    $(".job").html(jobDiv);
    
    $("#fullStack-glide").animate({ 
        marginLeft: "+=42.5%",
    }, 800 );
}

function job2Render() {

    var jobDiv2 = $("<div>");
    jobDiv2.attr("class", "job-lower");

    var wdH2 = $("<h2>");
    
    wdH2.attr("id", "webDev-glide");
    wdH2.text(webDev);

    jobDiv2.html(wdH2);
    $(".job-lower").html(jobDiv2);

    $("#webDev-glide").animate({ 
        marginRight: "+=42%",
    }, 800 );
}

function buttonRender() {
    
    var a1 = $("<button>");
    a1.addClass("start-btn");
    // a1.attr("href", "#about");
    a1.html("About Me &#8595;");

    $(".open-btn").html(a1);

    $(".start-btn").addClass("image-host-fade");
}

setTimeout(openPage, 200);
setTimeout(job1Render, 1300);
setTimeout(job2Render, 1300);
setTimeout(buttonRender, 1600);

//About page logic

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 200;

    if(y_scroll_pos > scroll_pos_test) {
        $(".image-host").removeClass("bio-host-none");
        $(".image-host").addClass("image-host-fade");
        bioFade();
    }
});

$(document).on("click", ".start-btn", function(e){
    e.preventDefault();
    var n = $(".landing").height();
    $('html, body').animate({ scrollTop: n }, 500);
    $(".image-host").removeClass("bio-host-none");
    $(".image-host").addClass("image-host-fade");
    bioFade();
});

function bioFade() {
    $(".bio-host").removeClass("bio-host-none");
    $(".bio-host").addClass("image-host-fade");
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).on("click", "#nav", function(event){
    console.log("test");
    event.preventDefault();
    var x = $(".portfolio").height();
    $('html, body').animate({ scrollTop: x }, 500);
    
});

//Portfolio Page
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 1100;

    if(y_scroll_pos > scroll_pos_test) {
        $(".port-host").removeClass("bio-host-none");
        $(".port-host").addClass("image-host-fade");
    }
});

$(".nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$("#pro-1").hover( function(){
    $(this).addClass("pro-hover");
});

$("#pro-1").mouseleave(function(){
    $(this).removeClass("pro-hover");
});

$("#pro-2").hover( function(){
    $(this).addClass("pro-hover");
});

$("#pro-2").mouseleave(function(){
    $(this).removeClass("pro-hover");
});

$("#pro-3").hover( function(){
    $(this).addClass("pro-hover");
});

$("#pro-3").mouseleave(function(){
    $(this).removeClass("pro-hover");
});

$("#pro-4").hover( function(){
    $(this).addClass("pro-hover");
});

$("#pro-4").mouseleave(function(){
    $(this).removeClass("pro-hover");
});

// on click functions for portfolio projects

$("#pro-1").on("click", function() {
    window.location.href='https://jvalentine1.github.io/GifTastic/';
});

$("#pro-2").on("click", function() {
    window.location.href='https://jvalentine1.github.io/TriviaGame/';
});

$("#pro-3").on("click", function() {
    window.location.href='https://jvalentine1.github.io/word-guess-game/';
});

$("#pro-4").on("click", function() {
    window.location.href='https://jvalentine1.github.io/project-1-repo/';
});

$(".pro-1").on("click", function() {
    window.location.href='https://github.com/jvalentine1/GifTastic';
});

$(".pro-2").on("click", function() {
    window.location.href='https://github.com/jvalentine1/TriviaGame';
});

$(".pro-3").on("click", function() {
    window.location.href='https://github.com/jvalentine1/word-guess-game';
});

$(".pro-4").on("click", function() {
    window.location.href='https://github.com/jvalentine1/project-1-repo';
});

// $("#link-1").on("click", function(e) {
//     e.preventDefault();
//     $("#link-1").attr("href", "https://github.com/jvalentine1")
// })