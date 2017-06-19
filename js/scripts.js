$(document).ready(function(){
    $('#sidebar').affix({
      offset: {
        top: 240
      }
    });

    $('a').click(function(e){
        if( ! $(this).data('autoclick') ){
            $(this).data('autoclick' , true);
            e.preventDefault();
            var href = $(this).attr('href');
            var component = this;
            ga('send', {
                hitType: 'event',
                eventCategory: 'click',
                eventAction: 'links',
                eventLabel: href,
                hitCallback: function() {
                    $(component)[0].click();
                }
            });
        }
    });

    $('.photo-album').each(function(){
        $(this).lightGallery({
            download: false,
            galleryId: $(this).parent().attr('id')
        });
    });

});

function scrollToElement( $element , time = 500, success ){ 
    $('html, body').animate({
        scrollTop: $element.offset().top
    }, time , success ); 
}


$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }else{
       return results[1] || 0;
    }
};

function base64EncodingUTF8(str) {
    var encoded = new TextEncoderLite('utf-8').encode(str);
    var b64Encoded = base64js.fromByteArray(encoded);
    return b64Encoded;
}

function base64DecodingUTF8(decoded) {
    var b64Decoded = base64js.toByteArray(decoded);
    var str = new TextEncoderLite('utf-8').decode(b64Decoded);
    return str;
}
