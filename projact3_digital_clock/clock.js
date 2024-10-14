const clock = document.getElementById('clock');
// const clock = document.getElementById('#clock');

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleString());//It is use to print the current
    //  time we need when we refresh then it will change the time with current time
    clock.innerHTML = date.toLocaleTimeString();
},1000);




