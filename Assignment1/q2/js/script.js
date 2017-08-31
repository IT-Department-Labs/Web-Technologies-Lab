var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;

var x = "black",
y = 2;

var state = "";

function stopTimer() {
    console.log(state);
    clearInterval(state);
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
}

function countDownTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date(new Date().getTime() + 1*60000);

    // Update the count down every 1 second
    state = setInterval(function() {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        console.log(minutes + "m " + seconds + "s ");

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Click restart button";
        }
    }, 1000);
}

function init() {
    countDownTimer();

    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);

}

function color(obj) {
    switch (obj.id) {
        case "green":
        x = "green";
        break;
        case "blue":
        x = "blue";
        break;
        case "red":
        x = "red";
        break;
        case "yellow":
        x = "yellow";
        break;
        case "orange":
        x = "orange";
        break;
        case "black":
        x = "black";
        break;
        case "white":
        x = "white";
        break;
    }
    if (x == "white") y = 14;
    else y = 2;

}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    var m = confirm("Are you sure you want to clear?");
    if (m) {
        ctx.clearRect(0, 0, w, h);
    }
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}