$(document).ready(function(){
  var url = "file:///Users/mcheng/Desktop/genetics-provider/ziptoprovidercopy.json";
  $.getJSON(url, function(data){
      console.log("JSON read");
  })
});



function doSomethingWithTextBox()
{
  var textBox = document.getElementById('TEXTBOX_ID');
  
}