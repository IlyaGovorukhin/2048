window.onload = function() {
    var vies = {
        draw : function (foo) {
        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(foo.x, foo.y, model.widthFun(), model.widthFun());
        switch (foo.value) {
            case 0:
                ctx.fillStyle = '#AF5200';
                break;
            case 2 :
                ctx.fillStyle = "#D2691E";
                break;
            case 4 :
                ctx.fillStyle = "#FF7F50";
                break;
            case 8 :
                ctx.fillStyle = "#ffbf00";
                break;
            case 16 :
                ctx.fillStyle = "#bfff00";
                break;
            case 32 :
                ctx.fillStyle = "#40ff00";
                break;
            case 64 :
                ctx.fillStyle = "#00bfff";
                break;
            case 128 :
                ctx.fillStyle = "#FF7F50";
                break;
            case 256 :
                ctx.fillStyle = "#0040ff";
                break;
            case 512 :
                ctx.fillStyle = "#ff0080";
                break;
            case 1024 :
                ctx.fillStyle = "#D2691E";
                break;
            case 2048 :
                ctx.fillStyle = "#FF7F50";
                break;
            default:
                ctx.fillStyle = "#FFF";
                break;
        }
        ctx.fill();
        if (foo.value) {
            fontSize = model.widthFun() / 2;
            ctx.font = "40px Arial";
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.fillText(foo.value, foo.x + model.widthFun() / 2, foo.y + model.widthFun() / 2 + 13)
        }


    },
    stop: function(){
        var canvas = document.getElementById("canvas");
        canvas.style.opacity = '0.2';
    }

    };
    var model = {
     foo : [],
     size : 4,
     width : 500,
     all : true,
     widthFun : function(){
         var width = this.width / this.size - 6;
         return width;
     },
     Dog : function (x, y) {
         this.value = 0;
         this.x = x * model.widthFun() + 5 * (x + 1);
         this.y = y * model.widthFun() + 5 * (y + 1);
     },
     doDog : function(){
         for (i = 0; i < this.size; i++) {
             this.foo[i] = [];
             for (j = 0; j < this.size; j++) {
                 this.foo[i][j] = new this.Dog(i, j);
             }
         }
     },
      AllDraw : function () {
        for (i = 0; i < this.size; i++) {
            for (j = 0; j < this.size; j++) {
                vies.draw(this.foo[i][j]);
            }
        }
    },
     remdom :  function () {
        var stop = 0
        for (var i = 0; i < this.foo.length; i++) {

            for (var j = 0; j < this.foo[i].length; j++) {
                if (!this.foo[i][j].value) {
                    stop = 1;
                }
            }
        }
        if (!stop) {
            this.all = false;
            vies.stop();
            return;
        }


        var first = Math.floor(Math.random() * this.size),
            second = Math.floor(Math.random() * this.size);
        if (!this.foo[first][second].value) {
            this.foo[first][second].value = 2 * (Math.floor(Math.random() * 2) + 1);
        }
        else {
            this.remdom();
        }
    },

        moveUp : function(foo){
                for (var i = 0; i < foo.length; i++) {

                    for (var j = foo[i].length - 1; j > 0; j--) {
                        var coll = j;
                        if (foo[i][j].value && j > 0) {
                            if (foo[i][coll - 1].value == foo[i][coll].value) {
                                foo[i][coll - 1].value *= 2
                                foo[i][j].value = 0;

                                model.AllDraw();
                            } else if (!foo[i][j - 1].value && j >= 0) {
                                foo[i][j - 1].value = foo[i][j].value;
                                foo[i][j].value = 0;
                                model.AllDraw();

                            }

                        }
                    }
                }

            model.remdom();
            model.AllDraw();

        },
        moveRight : function(foo){

                for (var i = 0; i < foo.length; i++) {

                    for (var j = 0; j < foo[i].length; j++) {
                        var coll = j;
                        if (foo[i][j].value && i < foo[i].length - 1) {
                            if (foo[i + 1][coll].value == foo[i][coll].value) {
                                foo[i + 1][coll].value *= 2
                                foo[i][j].value = 0;
                                model.AllDraw();
                            } else if (!foo[i + 1][j].value && i < foo[i].length - 1) {
                                foo[i + 1][j].value = foo[i][j].value;
                                foo[i][j].value = 0;
                                model.AllDraw();
                            }
                        }
                    }
                }

            model.remdom();
            model.AllDraw();

        },
        moveDown : function(foo){
                for (var i = 0; i < foo.length; i++) {

                    for (var j = 0; j < foo[i].length; j++) {
                        var coll = j;
                        if (foo[i][j].value && j < foo[i].length - 1) {
                            if (foo[i][coll + 1].value == foo[i][coll].value) {
                                foo[i][coll + 1].value *= 2
                                foo[i][j].value = 0;
                                model.AllDraw();
                            } else if (!foo[i][j + 1].value && j < foo[i].length - 1) {
                                foo[i][j + 1].value = foo[i][j].value;
                                foo[i][j].value = 0;
                                model.AllDraw();
                            }
                        }
                    }
                }

            model.remdom();
            model.AllDraw();
        },
        moveLeft : function(foo){
                for (var i = foo.length - 1; i > 0; i--) {

                    for (var j = foo[i].length - 1; j >= 0; j--) {
                        var coll = j;
                        if (foo[i][j].value && i > 0) {
                            if (foo[i - 1][coll].value == foo[i][coll].value) {
                                foo[i - 1][coll].value *= 2
                                foo[i][j].value = 0;
                                model.AllDraw();
                            } else if (!foo[i - 1][j].value && i >= 0) {
                                foo[i - 1][j].value = foo[i][j].value;
                                foo[i][j].value = 0;
                                model.AllDraw();
                            }
                        }
                    }
                }

            model.remdom();
            model.AllDraw();
            }

    };
    var controller = {
        gamecontrol : function(){
            document.onkeydown = function (event) {
                if (model.all) {
                    if (event.keyCode == 38 || event.keyCode == 87) model.moveUp(model.foo);
                    else if (event.keyCode == 39 || event.keyCode == 68) model.moveRight(model.foo);
                    else if (event.keyCode == 40 || event.keyCode == 83) model.moveDown(model.foo);
                    else if (event.keyCode == 37 || event.keyCode == 65) model.moveLeft(model.foo);
                }
            }
        }

    };
    model.doDog();
    model.AllDraw();
    model.remdom();
    model.AllDraw();
    controller.gamecontrol();
    console.log(model.foo);





}


