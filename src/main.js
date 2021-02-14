let demo = document.querySelector("#demo");
let bodyStyle = document.querySelector("#bodyStyle");
let message = `
/*你好，我是一名前端新人
下面我要开始写CSS代码了*/
 * {
    margin:0;
    padding:0;
 }
 
 * {
     box-sizing:border-box;
 }

 *::after {
    box-sizing:border-box;
 }

 *::before {
    box-sizing:border-box;
 }

 #demo {
    word-break: break-all;
 }

 #box{
    width: 200px;
    height:200px;
    position:fixed;
    margin:auto;
left:0;
right:0;
top:0;
bottom:0;
    border:1px solid red;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    // 设置背景渐变
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* CSS伪元素*/
 #box::after{
     content:'';
     display:block;
     position:absolute;
     background:#fff;
     width:50%;
     height:50%;
     top:0;
     transform: translate(50%,0%);
     border-radius:50%;
     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
 }

 #box::before{
    content:'';
    display:block;
    position:absolute;
    width:50%;
    height:50%;
    background:#000;
    transform: translate(50%,0%);
    bottom:0;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

@media (max-width:500px){
       
}
`;
let string = '';
let n = 0;
function oneTime() {
    if (n < message.length) {
        if (message[n] === '\n') {
            string += '<br>';
        } else if (message[n] === ' ') {
            string += '&nbsp;'
        } else {
            string += message[n];
        }
        demo.innerHTML = string;
        window.scrollTo(0, 9999);
        bodyStyle.innerHTML = message.substring(0, n);
        setTimeout(() => {
            n += 1;
            oneTime();
        }, 0);
    }
}
oneTime();


