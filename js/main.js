var navbar = document.querySelector('.navbar');
window.onscroll = function(){
    if(this.pageYOffset >= 600){
        navbar.classList.add("navbar-fixed-top");
    }else{navbar.classList.remove("navbar-fixed-top");}
}

/*count down*/
var dd = document.querySelectorAll('.days'),
 hh = document.querySelectorAll('.hours'),
 mn = document.querySelectorAll('.minutes'),
 sc = document.querySelectorAll('.seconds');
function countDown(){
    var newYearDate = new Date("1 Jan 2024"); 
    var currantDate = new Date();
    seconds = (newYearDate - currantDate) / 1000;
    days =Math.floor(seconds  / 3600 /24);
    hours = Math.floor(seconds / 3600) % 24;
    mns = Math.floor(seconds/60) % 60;
    secs = Math.floor(seconds % 60);
    // if(mns < 10)
    // {
    //     mns = "0" + mns;
    // }
    // if(secs < 10)
    // {
    //     secs = "0" + secs;
    // }
    for(var i = 0; i < dd.length; i++)
    {
        dd[i].textContent = days;
        hh[i].textContent = hours;
        mn[i].textContent = mns;
        sc[i].textContent = secs;
    }
}
//initial call
countDown();
setInterval(countDown,1000);




