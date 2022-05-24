function multiplyBy()
    {
        vol= document.getElementById("voltage").value;
        cur= document.getElementById("current").value;
        document.getElementById("POWER").innerHTML= vol * cur;
    
        a= document.getElementById("actual").value;
        p= document.getElementById("POWER").value;
        document.getElementById("TOTAL").innerHTML= a * p;
        console.log(a*p);
    }