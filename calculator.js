const valueHtml=document.querySelector('.value h1');
let value=``;

let theme_num=parseInt(1);

const theme1=document.querySelector('.theme1');
const theme2=document.querySelector('.theme2');
const theme3=document.querySelector('.theme3');

const theme_converter=document.querySelector('.theme-converter');

theme_converter.addEventListener('click',()=>{
    theme_num++;
    if(theme_num==4){
        theme_num=1;
    }
    if(theme_num==1){
        theme1_color();
    }
    if(theme_num==2){
        theme2_color();
    }
    if(theme_num==3){
        theme3_color();
    }
});

function theme_num_move(left){
    theme_converter.style.left=`${left}px`;
}

theme1.addEventListener('click',()=>{
    theme1_color();
});

function theme1_color(){
    theme_num=1;
    theme_num_move(5);
    document.documentElement.style.setProperty('--key-bg',`  hsl(30, 25%, 89%)`); 
    document.documentElement.style.setProperty('--key-shadow',`  hsl(28, 16%, 65%)`); 
    document.documentElement.style.setProperty('--key-font',`  hsl(221, 14%, 31%)`); 
    document.documentElement.style.setProperty('--body-bg',`hsl(222, 26%, 31%)`); 
    document.documentElement.style.setProperty('--value-bg',` hsl(224, 36%, 15%)`); 
    document.documentElement.style.setProperty('--value-font',` white`); 
    document.documentElement.style.setProperty('--theme-bg',`hsl(224, 36%, 15%)`); 
    document.documentElement.style.setProperty('--num-keypad-bg',` hsl(223, 31%, 20%)`); 
    document.documentElement.style.setProperty('--del-reset-bg',`  hsl(225, 21%, 49%)`); 
    document.documentElement.style.setProperty('--del-reset-shadow',`hsl(224, 28%, 35%)`); 
    document.documentElement.style.setProperty('--equal-bg',`hsl(6, 63%, 50%)`); 
    document.documentElement.style.setProperty('--equal-shadow',`hsl(6, 70%, 34%)`);
}

theme2.addEventListener('click',()=>{
    theme2_color();
});

function theme2_color(){
    theme_num=2;
    theme_num_move(30);
    document.documentElement.style.setProperty('--key-bg',`  hsl(45, 7%, 89%)`);
    document.documentElement.style.setProperty('--key-shadow',`  hsl(28, 16%, 65%)`); 
    document.documentElement.style.setProperty('--body-bg',`hsl(0, 0%, 93%)`); 
    document.documentElement.style.setProperty('--key-font',`  hsl(221, 14%, 31%)`); 
    document.documentElement.style.setProperty('--value-bg',`  white`); 
    document.documentElement.style.setProperty('--value-font',` hsl(60, 10%, 19%)`); 
    document.documentElement.style.setProperty('--theme-bg',` hsl(0, 5%, 81%)`); 
    document.documentElement.style.setProperty('--num-keypad-bg',`  hsl(0, 5%, 81%)`); 
    document.documentElement.style.setProperty('--del-reset-bg',`  hsl(176, 100%, 44%)`); 
    document.documentElement.style.setProperty('--del-reset-shadow',`hsl(177, 92%, 70%)`); 
    document.documentElement.style.setProperty('--equal-bg',`hsl(25, 98%, 40%)`); 
    document.documentElement.style.setProperty('--equal-shadow',`hsl(25, 99%, 27%)`);
}

theme3.addEventListener('click',()=>{
    theme3_color();
});

function theme3_color(){
    theme_num_move(57);
    theme_num=3;
    document.documentElement.style.setProperty('--key-bg',` hsl(268, 47%, 21%)`); 
    document.documentElement.style.setProperty('--key-shadow',` hsl(290, 70%, 36%)`); 
    document.documentElement.style.setProperty('--body-bg',`hsl(268, 75%, 9%)`); 
    document.documentElement.style.setProperty('--value-bg',`  hsl(268, 71%, 12%)`); 
    document.documentElement.style.setProperty('--value-font',` hsl(52, 100%, 62%)`); 
    document.documentElement.style.setProperty('--theme-bg',`hsl(268, 47%, 21%)`); 
    document.documentElement.style.setProperty('--num-keypad-bg',` hsl(268, 71%, 12%)`); 
    document.documentElement.style.setProperty('--del-reset-bg',`  hsl(281, 89%, 26%)`); 
    document.documentElement.style.setProperty('--del-reset-shadow',`hsl(285, 91%, 52%)`);
    document.documentElement.style.setProperty('--key-font',`hsl(52, 100%, 62%)`); 
    document.documentElement.style.setProperty('--equal-bg',`hsl(176, 100%, 44%)`); 
    document.documentElement.style.setProperty('--equal-shadow',`hsl(177, 92%, 70%)`);
    document.documentElement.style.setProperty('--equal',`hsl(198, 20%, 13%)`);
}

function evaluation(key){
    value+=key;
    if(value==``){
        value=0;
    }
    if(value.length>=25){
        value=value.slice(0,24);
    }
    valueHtml.innerHTML=value;
}

function equals(){
    if(value==``){
        valueHtml.innerHTML=`0`;
    }
    else{
    value=eval(value);
    valueHtml.innerHTML=`${(value)}`;
    }
}

function reset(){
    value=``;
    valueHtml.innerHTML=`0`;
}

function back_btn(){
    if(value.length>1){
        value=value.slice(0,value.length-1);
        valueHtml.innerHTML=value;
    }
    else{
        value=``;
        valueHtml.innerHTML=`0`;
    }
}

window.addEventListener('keydown',(event)=>{
    if(event.key==`1`){
        evaluation(1);
    }
    if(event.key==`2`){
        evaluation(2);
    }
    if(event.key==`3`){
        evaluation(3);
    }
    if(event.key==`4`){
        evaluation(4);
    }
    if(event.key==`5`){
        evaluation(5);
    }
    if(event.key==`6`){
        evaluation(6);
    }
    if(event.key==`7`){
        evaluation(7);
    }
    if(event.key==`8`){
        evaluation(8);
    }
    if(event.key==`9`){
        evaluation(9);
    }
    if(event.key==`0`){
        evaluation(0);
    }
    if(event.key==`+`){
        evaluation(`+`);
    }
    if(event.key==`-`){
        evaluation(`-`);
    }
    if(event.key==`*`){
        evaluation(`*`);
    }
    if(event.key==`/`){
        evaluation(`/`);
    }
    if(event.key==`Backspace`){
        back_btn();
    }
    if(event.key==`Enter`){
        equals();
    }
    if(value.length==1){
        if(event.key==`0`){
            value=``;
            valueHtml.innerHTML=`0`;
        }
    }
});