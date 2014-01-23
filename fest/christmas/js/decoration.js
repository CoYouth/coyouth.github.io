var head = document.getElementsByTagName('HEAD').item(0);
var style = document.createElement('link');
style.href = 'css/style.css';
style.rel = 'stylesheet';
style.type = 'text/css';
head.appendChild(style);
document.onreadystatechange = function(){
    if(document.readyState=="complete"){
        $('#loading').fadeOut(2000,function(){
            $('#merrychristmas').fadeIn(3000,function(){
                $('#sincerely').fadeIn(1000);
                $('#bycoyouth').fadeIn(3000,function(){
                    $(this).addClass('bigbigbig');
                });
            });
        });
    }
}
