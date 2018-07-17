var Providers = new Array();
var mobile = true;

$(document).ready(function () {
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
        // mobile!
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
        var providerNum1 = Providers[queryZip].S1match;
        var providerNum2 = Providers[queryZip].S2match;
        var providerNum3 = Providers[queryZip].S3match;
        console.log("Provider numbers found: " + providerNum1 + ", " + providerNum2 + ", " + providerNum3);
        $("#resultsContainer").css({ "display": "block" , "opacity":"0"});
        if (mobile) {
            $("#header").css({ "display": "none" });
        }
        $("#result0").html(Providers[providerNum1].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:+" + Providers[providerNum1].S2match +"\">" + Providers[providerNum1].S2match + "</a>");
        $("#result1").html(Providers[providerNum2].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:+" + Providers[providerNum2].S2match +"\">" + Providers[providerNum2].S2match + "</a>");
        $("#result2").html(Providers[providerNum3].S1match + "<br><br> <a class=\"phone-number\" href=\"tel:+" + Providers[providerNum3].S2match +"\">" + Providers[providerNum3].S2match + "</a>");
        $("h1").addClass("noPadHeader");
        $("h1").removeClass("PadHeader");
        $("#resultsContainer").fadeTo(700, 1);
        $("#providers").css("display", "none");
        
        //$("p").fadeTo(1000, 0.4);
  }
}
