<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="800" height="650" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

document.getElementById("myCanvas").addEventListener("click", myFunction);

function myFunction() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.arc( Math.floor(Math.random() * 759 ) + 21, Math.floor(Math.random() * 609 ) + 21, 20, 0, 2 * Math.PI );
    ctx.fill();
}


</script> 

</body>
</html>
