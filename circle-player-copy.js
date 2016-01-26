var CirclePlayer = function(jPlayerSelector, media, options) {
	var	self = this;
    var playFlag = false;
    var $audio = $(document).find('#jquery_jplayer_1');
    var $img = $("<img src='player.png'/>");
    $audio.append($img);
    var $progressBar = $('<progress id="progressBar" value="0.5" max="1" style="display: none"/>');
    $audio.append($progressBar);


    $audio.eq(0).mouseenter(function(){
        $('#progressBar').show();
    }).mouseleave(function(){
            $('#progressBar').hide();
    });

    document.getElementById('progressBar').addEventListener('click', function (e) {
        var x = e.pageX - this.offsetLeft,
            y = e.pageY - this.offsetTop,
            clickedValue = x * this.max / this.offsetWidth;
        audioElement.volume = clickedValue;
        $(this).attr('value',clickedValue);
        console.log(x, y, clickedValue);
    });

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', media["m4a"]);

    audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    $('#jquery_jplayer_1 > img').click(function() {
        if(playFlag == false){
            audioElement.play();
            playFlag = true;
        }
        else if(playFlag == true){
            audioElement.pause();
            playFlag = false;
        }
    });
};
