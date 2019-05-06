document.getElementById("container").onchange = function (){
    var bill= Number(document.getElementById("billTotal").value);
    var billPercent=document.getElementById("billInput").value;
    var split=document.getElementById("splitInput").value;
    var tipValue= bill * (billPercent / 100 );
    var newBillEach= (bill + tipValue) / split;
    var tipEach = tipValue / split;
    
    
    document.getElementById("billOutput").innerHTML = billPercent + "%";
    document.getElementById("splitOutput").innerHTML = split;
    document.getElementById("newBill").innerHTML = "$"+ newBillEach.toFixed(2);
    document.getElementById("tipEach").innerHTML ="$"+ tipEach.toFixed(2);
    
    }