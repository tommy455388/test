function fixedBottom() {
    $(".fixed_block").css({ 'display': 'block' });
    if ($(window).width() < 769) {
        $(".fixed_block").css({ 'display': 'flex' });
        $(window).scroll(function () {
            //最後一頁scrollTop=body-window，50是預留空間
            last = $("body").height() - $(window).height() - 50;
            // console.log(last);
            $(".fixed_block").css({ 'display': 'block' });
            if ($(window).scrollTop() >= last) {
                $(".fixed_block").hide()
            } else {
                $(".fixed_block").css({ 'display': 'flex' });
            }
        });
    } else {
        $(".fixed_block").css({ 'display': 'block' });
        $(window).scroll(function () {
            $(".fixed_block").css({ 'display': 'block' });
        });
    }
}
fixedBottom();
$(window).resize(function () {
    fixedBottom();
});