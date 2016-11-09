
var stateScrollAnim1 = true;
var stateScrollAnim2 = true;
var stateScrollAnim3 = true;
var stateScrollAnim4 = true;
var stateScrollAnim5 = true;
var stateScrollAnim6 = true;
var stateScrollAnim7 = true;
$(window).scroll(function() {
        if($(window).scrollTop() > 400 && stateScrollAnim1 === true) {
            $('.about').css('transition', '2s');
            $('.about').css('right', 0);
            stateScrollAnim1 = false;
        }
        else if($(window).scrollTop() > 900 && stateScrollAnim2 === true) {
            $('.works').css('transition', '2s');
            $('.works').css('left', 0);
            stateScrollAnim2 = false;
        }
        else if($(window).scrollTop() > 1400 && stateScrollAnim3 === true) {
            $('.development').css('transition', '2s');
            $('.development').css('left', 0);
            stateScrollAnim3 = false;
        }
        else if($(window).scrollTop() > 2000 && stateScrollAnim4 === true) {
            $('.skills').css('transition', '2s');
            $('.skills').css('left', 0);
            stateScrollAnim4 = false;
            setTimeout(function () {
                $('#first').addClass("progress1");
                $('#second').addClass("progress2");
                $('#third').addClass("progress3");
                $('#first > span').animate({ num: 90 }, {
                    duration: 3000,
                    step: function (num){
                        this.innerHTML = (num).toFixed(0) + '%'

                    }
                });
                $('#second > span').animate({ num: 85 }, {
                    duration: 3000,
                    step: function (num){
                        this.innerHTML = (num).toFixed(0) + '%'

                    }
                });
                $('#third > span').animate({ num: 70 }, {
                    duration: 3000,
                    step: function (num){
                        this.innerHTML = (num).toFixed(0) + '%'

                    }
                });
            }, 1500)
        }
        else if($(window).scrollTop() > 2700 && stateScrollAnim5 === true) {
            $('.template').css('transition', '2s');
            $('.template').css('left', 0);
            stateScrollAnim5 = false;
        }
        else if($(window).scrollTop() > 3100 && stateScrollAnim6 === true) {
            $('.news').css('transition', '2s');
            $('.news').css('left', 0);
            stateScrollAnim6 = false;
        }
        else if($(window).scrollTop() > 3500 && stateScrollAnim7 === true) {
            $('.quotes').css('transition', '2s');
            $('.quotes').css('left', 0);
            stateScrollAnim7 = false;
        }
});


