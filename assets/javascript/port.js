//Global variables for landing page
var name = "Jacob Valentine";
var fullStack = "Full-Stack ";
var webDev = "Web-Developer";
var count = 0;
var nameElement = $("<h1>");

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
        marginLeft: "+=600px",
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
        marginRight: "+=550px",
    }, 800 );
}

function buttonRender() {
    var a1 = $("<a>");
    a1.addClass("start-btn");
    a1.attr("href", "#about");
    a1.text("About Me");

    $(".open-btn").html(a1);

    $(".start-btn").animate({ 
        marginLeft: "+=650px",
    }, 800 );
}

setTimeout(openPage, 200);
setTimeout(job1Render, 1300);
setTimeout(job2Render, 1300);
setTimeout(buttonRender, 1600);