var Providers = new Array();
var submitButton = document.getElementById('submitButton');

$(document).ready(function(){
   var url = "provider-data.json";
  $.getJSON(url, function(data){
      console.log("JSON read");
      Providers = data;
  });
  
});

function getZipFromBox()
{
  var queryZip = document.getElementById('textBox').value;
  if(queryZip > 96162 || queryZip < 90001){
    $("#prov1").html("Invalid ZIP");
  }
  else{
    console.log("Zip read: " + queryZip);
    var providerNum1 = Providers[queryZip].S1match;
    var providerNum2 = Providers[queryZip].S2match;
    var providerNum3 = Providers[queryZip].S3match;
    console.log("Provider numbers found: " + providerNum1 + ", " + providerNum2 + ", " + providerNum3);
    //document.getElementById('prov1').innerHTML = providerNum;
    $("#prov1").html("Closest providers: <br>" + Providers[providerNum1].primary_city + "<br>" + Providers[providerNum2].primary_city + "<br>" + Providers[providerNum3].primary_city);
  }
}
