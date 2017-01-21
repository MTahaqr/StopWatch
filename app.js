var hours=0,min=0,sec=0,milisec=0,a,mlsec=0,resume=0;

function Timer(){
    milisec++;
    if(milisec>0)
    {
        document.getElementById("time").innerHTML="00:00:00"+"<sub>"+mlsec+""+"</sub>";

    }
    if(sec>0)
    {
        document.getElementById("time").innerHTML="00:00:"+sec+"<sub>"+mlsec+""+"</sub>";
    }
    if(min>0){
        document.getElementById("time").innerHTML="00:"+min+":"+sec+"<sub>"+mlsec+""+"</sub>";
    }
    if(hours>0){
        document.getElementById("time").innerHTML=hours+":"+min+":"+sec+"<sub>"+mlsec+""+"</sub>";
    }


    
    if(milisec%25==0){
        mlsec++;
    }
    if(milisec>250){
        sec++;
        mlsec=0;
        milisec=0;
        if(sec>58){
            min++;
            sec=0;
            if(min>59)
            {
                min=0;
                hours++;
            }
        }
    }
}

function start(){
    a=setInterval(Timer,1);
}
function stop(){
    clearInterval(a);
    document.getElementById("resume").innerHTML="Resume";
    resume++;
    if(resume%2==0){
    document.getElementById("resume").innerHTML="Stop";
    start();
    
    }
}
function reset(){
    clearInterval(a);
    document.getElementById("time").innerHTML="00:00:00";
    min=0,sec=0,milisec=0;
    if(resume%2==1){
    document.getElementById("resume").innerHTML="Stop";
    }
}