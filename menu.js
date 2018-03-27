  //resets when the map gets reset
          window.onload(RESET(),RESETSUB());
	  // the next long bit is for the menu and a structure of functions to run on menu
	  function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("open").style.visibility = "hidden";
	  }
	  
	  function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("open").style.visibility = "visible";
      }
      //menu script
      // a = education
      // b = age
      // c = income
      // d = religon
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;

    function myFunction() {
    if((a+b+c+d)>1){
    alert("cannot choose more than 2 categories\n click RESET to reset categories")
    RESET();
    RESETSUB();
    }
    else{
            var x = document.getElementById("education");
            if(x.checked === false){
            x.checked = true;
            a = a+1;
            document.getElementById("educationS1").style.visibility = "visible";
            document.getElementById("educationS2").style.visibility = "visible";
            document.getElementById("educationS3").style.visibility = "visible";
            document.getElementById("educationS4").style.visibility = "visible";
            }
            else{
            x.checked = false;
            a = a-1;
            document.getElementById("educationS1").style.visibility = "hidden";
            document.getElementById("educationS2").style.visibility = "hidden";
            document.getElementById("educationS3").style.visibility = "hidden";
            document.getElementById("educationS4").style.visibility = "hidden";
            }
            
            
        }
    }
    function myFunction1() {
    if((a+b+c+d)>1){
        RESET();
    RESETSUB();
    alert("cannot choose more than 2 categories\n click RESET to reset categories")
    }
    else{
            var x = document.getElementById("age");
            if(x.checked === false){
            x.checked = true;
            b = b+1;
            document.getElementById("ageS1").style.visibility = "visible";
            document.getElementById("ageS1").style.visibility = "visible";
            document.getElementById("ageS2").style.visibility = "visible";
            document.getElementById("ageS3").style.visibility = "visible";
            document.getElementById("ageS4").style.visibility = "visible";
            document.getElementById("ageS5").style.visibility = "visible";
            document.getElementById("ageS6").style.visibility = "visible";
            document.getElementById("ageS7").style.visibility = "visible";
            }
            else{
            x.checked = false;
            b = b-1;
            RESETSUB();
            document.getElementById("ageS1").style.visibility = "hidden";
            document.getElementById("ageS2").style.visibility = "hidden";
            document.getElementById("ageS3").style.visibility = "hidden";
            document.getElementById("ageS4").style.visibility = "hidden";
            document.getElementById("ageS5").style.visibility = "hidden";
            document.getElementById("ageS6").style.visibility = "hidden";
            document.getElementById("ageS7").style.visibility = "hidden";
            }
        }
        
    }
    function myFunction2() {
    if((a+b+c+d)>1){
        RESET();
    RESETSUB();
    alert("cannot choose more than 2 categories\n click RESET to reset categories")
    }
    else{
            var x = document.getElementById("income");
            if(x.checked === false){
            x.checked = true;
            c = c+1;
            document.getElementById("incomeS1").style.visibility = "visible";
            document.getElementById("incomeS2").style.visibility = "visible";
            document.getElementById("incomeS3").style.visibility = "visible";
            document.getElementById("incomeS4").style.visibility = "visible";
            }
            else{
            x.checked = false;
            c = c-1;
            RESETSUB();
            document.getElementById("incomeS1").style.visibility = "hidden";
            document.getElementById("incomeS2").style.visibility = "hidden";
            document.getElementById("incomeS3").style.visibility = "hidden";
            document.getElementById("incomeS4").style.visibility = "hidden";
            }
        }
        
    }
    function myFunction3() {
    if((a+b+c+d)>1){
        RESET();
    RESETSUB();
    alert("cannot choose more than 2 categories\n click RESET to reset categories")
    }
    else{
            var x = document.getElementById("religon");
            if(x.checked === false){
            x.checked = true;
            d = d+1;
            document.getElementById("religonS1").style.visibility = "visible";
            document.getElementById("religonS2").style.visibility = "visible";
            document.getElementById("religonS3").style.visibility = "visible"; 
            document.getElementById("religonS4").style.visibility = "visible";
            }
            else{
            x.checked = false;
            d = d-1;
            document.getElementById("religonS1").style.visibility = "hidden";
            document.getElementById("religonS2").style.visibility = "hidden";
            document.getElementById("religonS3").style.visibility = "hidden";
            document.getElementById("religonS4").style.visibility = "hidden";
            }
            
        }
    }
    function RESET() {
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        //reset the categories
        document.getElementById("education").checked =false;
        document.getElementById("age").checked =false;
        document.getElementById("income").checked =false;
        document.getElementById("religon").checked =false;
        RESETSUB();
        
    }
    function RESETSUB() {
        //reset the subcategories
         //hide checkbox
            document.getElementById("ageS1").style.visibility = "hidden";
            document.getElementById("ageS2").style.visibility = "hidden";
            document.getElementById("ageS3").style.visibility = "hidden";
            document.getElementById("ageS4").style.visibility = "hidden";
            document.getElementById("ageS5").style.visibility = "hidden";
            document.getElementById("ageS6").style.visibility = "hidden";
            document.getElementById("ageS7").style.visibility = "hidden";
            document.getElementById("educationS1").style.visibility = "hidden";
            document.getElementById("educationS2").style.visibility = "hidden";
            document.getElementById("educationS3").style.visibility = "hidden";
            document.getElementById("educationS4").style.visibility = "hidden";
            document.getElementById("incomeS1").style.visibility = "hidden";
            document.getElementById("incomeS2").style.visibility = "hidden";
            document.getElementById("incomeS3").style.visibility = "hidden";
            document.getElementById("incomeS4").style.visibility = "hidden";
            document.getElementById("religonS1").style.visibility = "hidden";
            document.getElementById("religonS2").style.visibility = "hidden";
            document.getElementById("religonS3").style.visibility = "hidden";
            document.getElementById("religonS4").style.visibility = "hidden";
        //hide check
            document.getElementById("educationS1").checked =false;
            document.getElementById("educationS2").checked =false;
            document.getElementById("educationS3").checked =false;
            document.getElementById("educationS4").checked =false;
            document.getElementById("ageS1").checked = false;
            document.getElementById("ageS2").checked =false;
            document.getElementById("ageS3").checked =false;
            document.getElementById("ageS4").checked =false;
            document.getElementById("ageS5").checked =false;
            document.getElementById("ageS6").checked =false;
            document.getElementById("ageS7").checked =false;
            document.getElementById("incomeS1").checked =false;
            document.getElementById("incomeS2").checked =false;
            document.getElementById("incomeS3").checked =false;
            document.getElementById("incomeS4").checked =false;
            document.getElementById("religonS1").checked =false;
            document.getElementById("religonS2").checked =false;
            document.getElementById("religonS3").checked =false;
            document.getElementById("religonS4").checked =false;
           
            
            
    }
    function show() {
    alert(
        a+"= education \n"+
        b+"=age\n"+
        c+"=income\n"+
        d+"=religon")
        
        
    }
    // functions for the subclass
        //education subclass
    function educationS1(){
        if (a===0){
            alert("select education category");
        }
        else{
        var x = document.getElementById("educationS1");
        var county = 0;
            if(x.checked === false){
            x.checked = true;
            alert("ed1 is true")
            county = 1;
            }
            else{
            x.checked = false;
            alert("ed1 is false")
            }
    }
}
    function educationS2(){
        if (a===0){
            alert("select education category");
        }
        else{
        var x = document.getElementById("educationS2");
            if(x.checked === false){
            x.checked = true;
            alert("ed2 is true")
            }
            else{
            x.checked = false;
            alert("ed2 is false")
            }
    }
}
    function educationS3(){
        if (a===0){
            alert("select education category");
        }
        else{
        var x = document.getElementById("educationS3");
            if(x.checked === false){
            x.checked = true;
            alert("ed3 is true")
            }
            else{
            x.checked = false;
            alert("ed3 is false")
            }
    }
}
    function educationS4(){
        if (a===0){
            alert("select education category");
        }
        else{
        var x = document.getElementById("educationS4");
            if(x.checked === false){
            x.checked = true;
            alert("ed4 is true")
            }
            else{
            x.checked = false;
            alert("ed4 is false")
            }
    }
}
            //age subclass
    function ageS1(){
        if (b===0){
            alert("select age category");
        }
        else{
            var x = document.getElementById("ageS1");
            if(x.checked === false){
            x.checked = true;
            alert("ages1 is true")
            }
            else{
            x.checked = false;
            alert("ages1 is false")
            }
        
    }
}
    function ageS2(){
        if (b===0){
            alert("select age category");
        }
        else{
            var x = document.getElementById("ageS2");
            if(x.checked === false){
            x.checked = true;
            alert("ages2 is true")
            }
            else{
            x.checked = false;
            alert("ages2 is false")
            }
        
    }
}
    function ageS3(){
        if (b===0){
            alert("select age category");
        }
        else{
            var x = document.getElementById("ageS3");
            if(x.checked === false){
            x.checked = true;
            alert("ages3 is true")
            }
            else{
            x.checked = false;
            alert("ages3 is false")
            }
        
    }
}
    function ageS4(){
        if (b===0){
            alert("select age category");
        }
        else{
            var x = document.getElementById("ageS4");
            if(x.checked === false){
            x.checked = true;
            alert("ages4 is true")
            }
            else{
            x.checked = false;
            alert("ages4 is false")
            }
        
    }
}
    function ageS5(){
        if (b===0){
            alert("select age category");
        }
        else{
            var x = document.getElementById("ageS5");
            if(x.checked === false){
            x.checked = true;
            alert("ages5 is true")
            }
            else{
            x.checked = false;
            alert("ages5 is false")
            }
        
    }
}
    function ageS6(){
        if (b===0){
            alert("select age category");
        }
        else{
            var x = document.getElementById("ageS6");
            if(x.checked === false){
            x.checked = true;
            alert("ages6 is true")
            }
            else{
            x.checked = false;
            alert("ages6 is false")
            }
        
    }
}
    function ageS7(){
        if (b===0){
            alert("select age category");
        }
        else{
            var x = document.getElementById("ageS7");
            if(x.checked === false){
            x.checked = true;
            alert("ages7 is true")
            }
            else{
            x.checked = false;
            alert("ages7 is false")
            }
        
    }
}
    function incomeS1(){
        if (c===0){
            alert("select income category");
        }
        else{
        var x = document.getElementById("incomeS1");
            if(x.checked === false){
            x.checked = true;
            alert("i1 is true")
            }
            else{
            x.checked = false;
            alert("i1 is false")
            }
    }
}
    function incomeS2(){
        if (c===0){
            alert("select income category");
        }
        else{
        var x = document.getElementById("incomeS2");
            if(x.checked === false){
            x.checked = true;
            alert("i2 is true")
            }
            else{
            x.checked = false;
            alert("i2 is false")
            }
    }
}
    function incomeS3(){
        if (c===0){
            alert("select income category");
        }
        else{
        var x = document.getElementById("incomeS3");
            if(x.checked === false){
            x.checked = true;
            alert("i3 is true")
            }
            else{
            x.checked = false;
            alert("i3 is false")
            }
    }
}
    function incomeS4(){
        if (c===0){
            alert("select income category");
        }
        else{
        var x = document.getElementById("incomeS4");
            if(x.checked === false){
            x.checked = true;
            alert("i4 is true")
            }
            else{
            x.checked = false;
            alert("i4 is false")
            }
    }
}
    function religonS1(){
        if (d===0){
            alert("select religon category");
        }
        else{
        var x = document.getElementById("religonS1");
            if(x.checked === false){
            x.checked = true;
            alert("r1 is true")
            }
            else{
            x.checked = false;
            alert("r1 is false")
            }
    }
}
    function religonS2(){
        if (d===0){
            alert("select religon category");
        }
        else{
        var x = document.getElementById("religonS2");
            if(x.checked === false){
            x.checked = true;
            alert("r2 is true")
            }
            else{
            x.checked = false;
            alert("r2 is false")
            }
    }
}
    function religonS3(){
        if (d===0){
            alert("select religon category");
        }
        else{
        var x = document.getElementById("religonS3");
            if(x.checked === false){
            x.checked = true;
            alert("r3 is true")
            }
            else{
            x.checked = false;
            alert("r3 is false")
            }
    }
}
    function religonS4(){
        if (d===0){
            alert("select religon category");
        }
        else{
        var x = document.getElementById("religonS4");
            if(x.checked === false){
            x.checked = true;
            alert("r4 is true")
            }
            else{
            x.checked = false;
            alert("r4 is false")
            }
    }
}
	//ends the menu diagram