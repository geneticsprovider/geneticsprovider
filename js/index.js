var Providers = new Array();
var mobile = true;

$(document).ready(function () {
    if (!/Mobi|Android/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent)) {
        //not mobile!
        $("#providers").css("min-height", "27vh");
        console.log("Non-mobile device detected");
        mobile = false;
    }
   var url = "provider-data.json";
  $.getJSON(url, function(data){
      console.log("JSON read");
      Providers = data;
  });
  
});

function getZipFromBox()
{
    $("#providers").css("display", "inherit");
  var queryZip = document.getElementById('textBox').value;
  console.log(queryZip);
    if (queryZip.length === 0) {
        $("#providers").html("Enter your ZIP code to find the location and contact information of the three nearest genetics providers.");
    }
    else if (queryZip > 96162 || queryZip < 90001 || isNaN(queryZip)) {
        $("#providers").html("Invalid ZIP");
        $("#resultsContainer").css({ "display": "none" });
        if (mobile) {
            $("#header").css({ "display": "block" });
        }
        $("h1").removeClass("noPadHeader");
        $("h1").addClass("PadHeader");
    }
    else {
        console.log("Zip read: " + queryZip);
        var p = Providers[queryZip];
        var providerNum1 = p.S1match;
        var providerNum2 = p.S2match;
        var providerNum3 = p.S3match;
        var providerNum4 = p.S4match;
        var providerNum5 = p.S5match;
        var providerNum6 = p.S6match;
        var providerNum7 = p.S7match;
        var providerNum8 = p.S8match;
        var providerNum9 = p.S9match;
        var providerNum10 = p.S10match;
        console.log("Provider numbers found: " + providerNum1 + ", " + providerNum2 + ", " + providerNum3);
        $("#resultsContainer").css({ "display": "block" , "opacity":"0"});
        if (mobile) {
            $("#header").css({ "display": "none" });
        }
       
        $("#result0").html(Providers[providerNum1].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum1].S2match +"\">" + Providers[providerNum1].S2match + "</a>");
        $("#result1").html(Providers[providerNum2].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum2].S2match +"\">" + Providers[providerNum2].S2match + "</a>");
        $("#result2").html(Providers[providerNum3].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum3].S2match +"\">" + Providers[providerNum3].S2match + "</a>");
        $("#result3").html(Providers[providerNum4].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum4].S2match +"\">" + Providers[providerNum4].S2match + "</a>");
        $("#result4").html(Providers[providerNum5].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum5].S2match +"\">" + Providers[providerNum5].S2match + "</a>");
        $("#result5").html(Providers[providerNum6].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum6].S2match +"\">" + Providers[providerNum6].S2match + "</a>");
        $("#result6").html(Providers[providerNum7].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum7].S2match +"\">" + Providers[providerNum7].S2match + "</a>");
        $("#result7").html(Providers[providerNum8].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum8].S2match +"\">" + Providers[providerNum8].S2match + "</a>");
        $("#result8").html(Providers[providerNum9].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum9].S2match +"\">" + Providers[providerNum9].S2match + "</a>");
        $("#result9").html(Providers[providerNum10].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:" + Providers[providerNum10].S2match +"\">" + Providers[providerNum10].S2match + "</a>");
        $("h1").addClass("noPadHeader");
        $("h1").removeClass("PadHeader");
        $("#resultsContainer").fadeTo(700, 1);
        $("#providers").css("display", "none");
        
        //$("p").fadeTo(1000, 0.4);
  }
}
