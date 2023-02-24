let display=document.getElementsById('display')
let buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button=>{
    button.addEventListener('click',(e)=> {
        switch(e.target.innerText){
            case 'c':
                display.innerText="";
            default:
                display.innerText+=e.target.innerText;


        }
    });
});