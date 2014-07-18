(function($) {

    var mouseDown = 0;

    function mouseDownFunc(){
        document.body.onmousedown = function() {
          ++mouseDown;
        }
        document.body.onmouseup = function() {
          --mouseDown;
        }
    }

    var w = $(window).width();
    var h = $(window).height();

    $('#pointer').attr('width', w);
    $('#pointer').attr('height', h);

    function drawSomething(){

        $(document).mousemove(function(e){

            // mouseDown;
            // console.log(e);

            var c = document.getElementById("pointer");
            var ctx = c.getContext("2d");
            if (mouseDown) {

//_______________________________________________________________________________________
                var X = e.pageX;
                var Y = e.pageY;

                // console.log('X: ' + X);
                // console.log('Y: ' + Y);

                // div = '<div class="pixel" style="top:' + Y + 'px; left:' + X + 'px;"></div>'

                // $('.site').append(div);
//_______________________________________________________________________________________


            // ctx.moveTo(X,Y);
            // ctx.lineTo(X+100,Y+100);
            // ctx.stroke();

            // ctx.fillStyle = "#FF0000";
            // ctx.fillRect(X,Y,10,10);

            ctx.arc(X,Y,1,0,2*Math.PI);
            // ctx.strokeStyle='black';
            ctx.lineWidth=1;
            ctx.stroke();
            console.log(X);


            } else {
                // ctx.clearRect ( x , y , w , h );
                ctx.beginPath();
                // ctx.arc(X,Y,1,0,2*Math.PI);
                // ctx.lineWidth=0;
                // ctx.strokeStyle='orange';
                // ctx.stroke();


            }



        });




    }

    function canvas(){

        // var c = document.getElementById("pointer");
        // var ctx = c.getContext("2d");
        // ctx.fillStyle = "";
        // ctx.fillRect(0,0,150,75);


    }





    $(document).ready(function(){

        mouseDownFunc();
        drawSomething();
        canvas();

    });

})( jQuery );