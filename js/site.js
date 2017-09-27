$(function() {
    $('.loading').delay(500).fadeOut("slow");
    console.log('Congratulations!!!');
    console.log('You can find me through the following tel Numbers c7fe30ec2d00235508896ed488b7f3ab');
    var count = 0;
    $("#avatar-img").click(function() {
        count++;
        if (count == 32) {
            $(".h5Event").html('Microsoft G+E');
        }
    });
});