// Snacks counter
var s = 0;
function plusSnacks() {
            s++;
            document.getElementById('snacks').value = s;
        }
function minusSnacks(){
            s--;
            document.getElementById('snacks').value = s;
        }


// Fats counter
var f = 0;
function plusFats() {
            f++;
            document.getElementById('fats').value = f;
}
function minusFats(){
            f--;
            document.getElementById('fats').value = f;
        }


// Meats counter
var m = 0;
function plusMeats() {
            m++;
            document.getElementById('meats').value = m;
        }
function minusCarbs(){
            m--;
            document.getElementById('meats').value = m;
        }


// Healthy Fats counter
var hf = 0;
function plusHealthyFats() {
            hf++;
            document.getElementById('healthyfats').value = hf;
        }
function minusHealthyFats(){
            hf--;
            document.getElementById('healthyfats').value = hf;
        }


// Carbs counter
var c = 0;
function plusCarbs() {
            c++;
            document.getElementById('carbs').value = c;
        }
function minusCarbs(){
            c--;
            document.getElementById('carbs').value = c;
        }


// Vegetable counter
var v = 0;
function plusVegetables() {
            v++;
            document.getElementById('vegetables').value = v;
        }
function minusVegetables(){
            v--;
            document.getElementById('vegetables').value = v;
        }

// This shows the date form box
function showDate(){
    document.getElementById("date-input").style.display = "block";
}

// This hides the date form box
function cancel(){
    document.getElementById("date-input").style.display = "none";
}

// This takes the values from the form, applies them to the date display
//  and then hides the date form box
function submitDate(){
    var day = document.getElementById("dayInput").value;
    var month = document.getElementById("monthInput").value;
    var year = document.getElementById("yearInput").value;

    document.getElementById("date1").style.display = "inline";
    document.getElementById("date2").style.display = "inline";
    document.getElementById("date3").style.display = "inline";
    document.getElementById("date4").style.display = "inline";
    document.getElementById("dayDate").style.display = "inline";
    document.getElementById("monthDate").style.display = "inline";
    document.getElementById("yearDate").style.display = "inline";

    document.getElementById("dayDate").innerHTML = day;
    document.getElementById("monthDate").innerHTML = month;
    document.getElementById("yearDate").innerHTML = year;

    document.getElementById("date-input").style.display = "none";
}