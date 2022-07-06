const timer = document.querySelector(".timer");
const body = document.querySelector("body");

let  seconds =20;


timer.innerText = "10";
body.style.background = "pink";
setTimeout(()=>{
    timer.innerText = "9";
    body.style.background = "violet";
        setTimeout(()=>{
        timer.innerText = "8";
        body.style.background = "indigo";
            setTimeout(()=>{
            timer.innerText = "7";
            body.style.background = "brown";
                setTimeout(()=>{
                timer.innerText = "6";
                body.style.background = "green";
                    setTimeout(()=>{
                    timer.innerText = "5";
                    body.style.background = "yellow";
                        setTimeout(()=>{
                        timer.innerText = "4";
                        body.style.background = "orange";
                            setTimeout(()=>{
                            timer.innerText = "3";
                            body.style.background = "red";
                                setTimeout(()=>{
                                timer.innerText = "2";
                                body.style.background = "violet";
                                    setTimeout(()=>{
                                    timer.innerText = "1";
                                    body.style.background = "indigo";
                                        setTimeout(()=>{
                                        timer.innerText = "0";
                                        body.style.background = "brown";
                                          setTimeout(()=>{
                                          timer.innerText = "Happy Independence Day...!!!";
                                          body.style.background = "green";          
                                        },900)
                                    },900)
                                },900)
                            },900)
                        },900)
                    },900)
                },900)
            },900)
        },900)
    },900)
},900)