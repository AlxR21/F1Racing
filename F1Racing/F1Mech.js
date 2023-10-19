var images=["url('Mid10.jpg')","url('Mid9.jpg')","url('Mid12.jpg')","url('Mid16.jpg')","url('Mid7.jpg')","url('Winner1.jpg')"];
console.log(images);









function process1(){
    
    var element1=document.getElementById("Carchoice");
     element1.remove();
     var element2=document.getElementById("Choose");
     element2.remove();
     var element3=document.getElementById("bet");
     element3.remove();
     var element4=document.getElementById("button");
     element4.remove();

    setTimeout(function(){
            document.getElementById("Backimg").style.backgroundImage='url("./Mid7.jpg")';},2000);
    setTimeout(function(){
            document.getElementById("Backimg").style.backgroundImage='url("./Mid8.jpg")';},4000);
    setTimeout(function(){
            document.getElementById("Backimg").style.backgroundImage='url("./Mid12.jpg")';},6000);
    setTimeout(function(){
            document.getElementById("Backimg").style.backgroundImage='url("./Mid14.jpg")';},8000);       
    setTimeout(function(){
            document.getElementById("Backimg").style.backgroundImage='url("./Mid18.jpg")';},10000);
    setTimeout(function(){
            document.getElementById("Backimg").style.backgroundImage='url("./Winner1.jpg")';},12000);

    setTimeout(function(){document.getElementById("hype").innerHTML="Your balance is now 2wice.";},12000);
    
    }
     
    



function process2(){
    var element1=document.getElementById("Carchoice") 
     element1.remove();
     var element2=document.getElementById("Choose");
     element2.remove();
     var element3=document.getElementById("bet");
     element3.remove();
     var element4=document.getElementById("button");
     element4.remove();

    setTimeout(function(){
        document.getElementById("Backimg").style.backgroundImage='url("./Mid10.jpg")';},3000);
    setTimeout(function(){
        document.getElementById("Backimg").style.backgroundImage='url("./Mid11.jpg")';},6000);
    setTimeout(function(){
        document.getElementById("Backimg").style.backgroundImage='url("./Mid13.jpg")';},9000);
    setTimeout(function(){
        document.getElementById("Backimg").style.backgroundImage='url("./Mid17.jpg")';},12000);
    setTimeout(function(){
        document.getElementById("Backimg").style.backgroundImage='url("./Mid20.jpg")';},15000);
    setTimeout(function(){
        document.getElementById("Backimg").style.backgroundImage='url("./Mid16.jpg")';},18000);
        
        

    setTimeout(function() {document.getElementById("hype").innerHTML="Your Money is Mine." ;},18000);
    
     
    
    
}



document.getElementById("button").onclick= function(){
    var x=document.getElementById("winNo").value;
    console.log(x);

    winBet=Math.floor(Math.random()*10);
    console.log(winBet);


    if (x==winBet) {

        setTimeout(process1,3000);
    } else {
        setTimeout(process2,3000);
    }
};



