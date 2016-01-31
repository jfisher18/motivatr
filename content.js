
var current = "";
chrome.storage.sync.get('time', function(result){
      current = result.time;
      chrome.storage.sync.get('timeAlready', function(result2){
            var current2 = result2.timeAlready;
            var timeLeft  = current - current2;
            console.log(timeLeft);
            if(timeLeft>0){
document.write(`
  <html>
  <head>
  <style>
  body {
  background-color: #C4C4C4;
  font-family: "Helvetica";
  font-size: 32px;
  color: #000000;
  padding-top:5%;

  }

  </style>
  <title>Motivatr</title>
  <script>
  var w = window.innerWidth;
  var h = window.innerHeight;

  var height = w-500;
  var width = w-500;

  </script>
  <style>
  #rcorners1 {
      border-radius: 25px;
      background: #ffffff;
      padding: 20px;
      width: 75%;
      height: width;
  }
  </style>


  </head>
  <body>



  <center><p id="rcorners1">You need to exercise
`+String(timeLeft)+`
 more minutes more before you can access this website!</p></center>
 <p style="text-align:center">
<img src = "https://i.imgur.com/FnJOkGg.png">
</p>
</body>
</html>`);}

});
});
