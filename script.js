setInterval(setClock, 1000);


const hourHand=document.getElementById('hourNew')
const minuteHand=document.getElementById('minuteNew')
const secondHand=document.getElementById('secondsNew')

const hourHand1=document.getElementById('hourNew1')
const minuteHand1=document.getElementById('minuteNew1')
const secondHand1=document.getElementById('secondsNew1')

const hourHand2=document.getElementById('hourNew2')
const minuteHand2=document.getElementById('minuteNew2')
const secondHand2=document.getElementById('secondsNew2')

const hourHand3=document.getElementById('hourNew3')
const minuteHand3=document.getElementById('minuteNew3')
const secondHand3=document.getElementById('secondsNew3')


function setClock(){
    const currentDate=new Date();

    let localTime = currentDate.getTime(); //current localtime in milisecond.
    let localOffset = currentDate.getTimezoneOffset() * 60000; 
   //getTimezoneOffset() returns in minutes so converting it into millisecond(*60000). 
   utc = localTime + localOffset;
   
   let offset = 4; // GST (Gulf Standard Time) ahead +4 hours from utc japan 9, swirtzealand 1
   let  dubaiTime = utc + (3600000*offset); // convert offset into milisecond and add to UTC time.
   let newTime = new Date(dubaiTime); 
       
    const secondsRatio=currentDate.getSeconds()/60;
    const minutesRatio=(secondsRatio+currentDate.getMinutes())/60;
    const hoursRatio=(minutesRatio+currentDate.getHours())/12;
   setRotate(secondHand,secondsRatio)
    setRotate(minuteHand,minutesRatio);
    setRotate(hourHand,hoursRatio);

    const secondsRatio1=newTime.getSeconds()/60;
    const minutesRatio1=(secondsRatio1+newTime.getMinutes())/60;
    const hoursRatio1=(minutesRatio1+newTime.getHours())/12;

    setRotate(secondHand1,secondsRatio1)
    setRotate(minuteHand1,minutesRatio1);
    setRotate(hourHand1,hoursRatio1);

    offset=9;

    dubaiTime = utc + (3600000*offset);
    newTime = new Date(dubaiTime); 

    
    const secondsRatio2=newTime.getSeconds()/60;
    const minutesRatio2=(secondsRatio2+newTime.getMinutes())/60;
    const hoursRatio2=(minutesRatio2+newTime.getHours())/12;

    setRotate(secondHand2,secondsRatio2)
    setRotate(minuteHand2,minutesRatio2);
    setRotate(hourHand2,hoursRatio2);

    offset=1;

    dubaiTime = utc + (3600000*offset);
    newTime = new Date(dubaiTime); 

    
    const secondsRatio3=newTime.getSeconds()/60;
    const minutesRatio3=(secondsRatio3+newTime.getMinutes())/60;
    const hoursRatio3=(minutesRatio3+newTime.getHours())/12;

    setRotate(secondHand3,secondsRatio3)
    setRotate(minuteHand3,minutesRatio3);
    setRotate(hourHand3,hoursRatio3);
}

function setRotate(element, ratio){
    element.style.setProperty('--rotation', ratio * 360)

}



 



setClock();


