var g="";
(document.getElementById("tot") as HTMLButtonElement).addEventListener("click",function(){

        var s1=parseInt((document.getElementById("wt")as HTMLInputElement).value);
        let s2=parseInt((document.getElementById("se")as HTMLInputElement).value);
        let s3=parseInt((document.getElementById("cn")as HTMLInputElement).value);
        let s4=parseInt((document.getElementById("ad")as HTMLInputElement).value);
        let s5=parseInt((document.getElementById("ce")as HTMLInputElement).value);
        if(s1>=0 && s1<=100 && s2>=0 && s2<=100 && s3>=0 && s3<=100 && s4>=0 && s4<=100 && s5>=0 && s5<=100){
        let total=s1+s2+s3+s4+s5;
        
        if(s1>=90)
        document.getElementById("label1").innerHTML="Web Tech: A+";
        else if(s1>=80)
        document.getElementById("label1").innerHTML="Web Tech: A";
        else if(s1>=70)
        document.getElementById("label1").innerHTML="Web Tech: B+";
        else if(s1>=60)
        document.getElementById("label1").innerHTML="Web Tech: B";
        else if(s1>=50)
        document.getElementById("label1").innerHTML="Web Tech: C+";
        else if(s1>=40)
        document.getElementById("label1").innerHTML="Web Tech: C";
        else{
        document.getElementById("label1").innerHTML="Web Tech: Fail";
        g="Fail";
        }

        
        if(s2>=90)
        document.getElementById("label2").innerHTML="Soft Engg: A+";
        else if(s2>=80)
        document.getElementById("label2").innerHTML="Soft Engg: A";
        else if(s2>=70)
        document.getElementById("label2").innerHTML="Soft Engg: B+";
        else if(s2>=60)
        document.getElementById("label2").innerHTML="Soft Engg: B";
        else if(s2>=50)
        document.getElementById("label2").innerHTML="Soft Engg: C+";
        else if(s2>=40)
        document.getElementById("label2").innerHTML="Soft Engg: C";
        else{
        document.getElementById("label2").innerHTML="Soft Engg: Fail";
        g="Fail";
        }

        if(s3>=90)
        document.getElementById("label3").innerHTML="Comp Net: A+";
        else if(s3>=80)
        document.getElementById("label3").innerHTML="Comp Net: A";
        else if(s3>=70)
        document.getElementById("label3").innerHTML="Comp Net: B+";
        else if(s3>=60)
        document.getElementById("label3").innerHTML="Comp Net: B";
        else if(s3>=50)
        document.getElementById("label3").innerHTML="Comp Net: C+";
        else if(s3>=40)
        document.getElementById("label3").innerHTML="Comp Net: C";
        else{
        document.getElementById("label3").innerHTML="Comp Net: Fail";
        g="Fail";
        }

        
        if(s4>=90)
        document.getElementById("label4").innerHTML="App Devp: A+";
        else if(s4>=80)
        document.getElementById("label4").innerHTML="App Devp: A";
        else if(s4>=70)
        document.getElementById("label4").innerHTML="App Devp: B+";
        else if(s4>=60)
        document.getElementById("label4").innerHTML="App Devp: B";
        else if(s4>=50)
        document.getElementById("label4").innerHTML="App Devp: C+";
        else if(s4>=40)
        document.getElementById("label4").innerHTML="App Devp: C";
        else{
        document.getElementById("label4").innerHTML="App Devp: Fail";
        g="Fail";
        }

        if(s5>=90)
        document.getElementById("label5").innerHTML="Comp Eng: A+";
        else if(s5>=80)
        document.getElementById("label5").innerHTML="Comp Eng: A";
        else if(s5>=70)
        document.getElementById("label5").innerHTML="Comp Eng: B+";
        else if(s5>=60)
        document.getElementById("label5").innerHTML="Comp Eng: B";
        else if(s5>=50)
        document.getElementById("label5").innerHTML="Comp Eng: C+";
        else if(s5>=40)
        document.getElementById("label5").innerHTML="Comp Eng: C";
        else{
            document.getElementById("label5").innerHTML="Comp Eng: Fail";
            g="Fail";
        }
        document.getElementById("tlabel").innerHTML="Total marks:"+total+"/500";

    }
        else{
            alert("Input Error: invalid input");
        }
        
});

document.getElementById("gra").addEventListener("click",function(){

        let s1=parseInt((document.getElementById("wt")as HTMLInputElement).value);
        let s2=parseInt((document.getElementById("se")as HTMLInputElement).value);
        let s3=parseInt((document.getElementById("cn")as HTMLInputElement).value);
        let s4=parseInt((document.getElementById("ad")as HTMLInputElement).value);
        let s5=parseInt((document.getElementById("ce")as HTMLInputElement).value);
        
        if(s1>=0 && s1<=100 && s2>=0 && s2<=100 && s3>=0 && s3<=100 && s4>=0 && s4<=100 && s5>=0 && s5<=100){
        let total=s1/10+s2/10+s3/10+s4/10+s5/10;
        let avg=total/5.0;
        if(g==""){
        document.getElementById("glabel").innerHTML="CGPA : "+avg;
        }else{
            document.getElementById("glabel").innerHTML="Fail";
            g="";
        }
        }
        else{
            alert("Input Error: invalid input");
        }
                
});