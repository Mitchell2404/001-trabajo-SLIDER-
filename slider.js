$(document).ready(function(){

    function moverslider(event){
        var pos= $(event.currentTarget).offset();
        var posx= event.pageX || event.originalEvent.touches[0].pageX - pos.left;

        var touch = event.originalEvent && event.originalEvent.touches && event.originalEvent.touches[0];
        e = touch || event;
        var offset = $(e.target).offset()
        posx = event.pageX  - offset.left,
        y = event.pageY  - offset.top;

        var valorslider = (posx*100)/$(event.currentTarget).outerWidth();
        if(posx>=0 && posx<= $(event.currentTarget).outerWidth()){
     
        $('.slider > .progress').css('width', posx+'px');
        $('.slider > .indicador').css('left', posx+'px');
        $('.valors').val(valorslider)
        }
    }
    $('.slider').on('mousedown touchstart', function(event){
        if(event.type === 'mousedown'){
            moverslider(event);
            $(this).on('mousemove', function(event){
    
                moverslider(event);
    
            })
        }
        if(event.type === 'touchstart'){
            moverslider(event);
            $(this).on('touchmove', function(event){
    
                moverslider(event);
    
            })
        }

    }).on('mouseup touchend', function(){
        if(event.type === 'mouseup'){
        $(this).off('mousemove');
        }
        if(event.type === 'touchend'){
            $(this).off('touchmove');
        }
    })
});