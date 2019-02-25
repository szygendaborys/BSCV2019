$(document).ready(() => {

    let menuCounter = 0;
    let pageCounter = 1;
    let linksNumber = $('.link');

    let keySlideUsed = false;
    let scrollSlideUsed = false;
    let mouseFocus = false;

    $( "#burger" ).click(() => {
        if(menuCounter === 0) {
           $( "#compact-menu" ).animate({ marginLeft: "0"} , 200);
           menuCounter++;
        } else {
            $( "#compact-menu" ).animate({ marginLeft: "100%"} , 200);
            menuCounter--;
        }
    });
    
// custom functions 

function changePage(e) {
        let pageNumber = e.currentTarget.getAttribute('index'); // 1 2 3 

        if(pageNumber == pageCounter) {
            return;
        } else if (pageNumber > pageCounter){
            $('.'+pageCounter).slideToggle();
            $('.'+pageNumber).hide().slideToggle();

            $('#'+pageCounter+'li').removeClass('link-active');
            $('#'+pageNumber+'li').addClass('link-active');

            pageCounter = pageNumber;
        } else {
            $('.'+pageCounter).slideToggle();
            $('.'+pageNumber).slideToggle();

            $('#'+pageCounter+'li').removeClass('link-active');
            $('#'+pageNumber+'li').addClass('link-active');

            pageCounter = pageNumber;
        }

    }

function compactChangePage(e) {
    let pageNumber = e.currentTarget.getAttribute('index'); // 1 2 3 

    $('#compact-menu').animate({ marginLeft: "100%"} , 100);
    menuCounter--;

    if(pageNumber == pageCounter) {
        return;
    } else if (pageNumber > pageCounter){
        $('.'+pageCounter).slideToggle();
        $('.'+pageNumber).hide().slideToggle();

        $('#'+pageCounter+'compact').removeClass('compact-active');
        $('#'+pageNumber+'compact').addClass('compact-active');

        pageCounter = pageNumber;
    } else {
        $('.'+pageCounter).slideToggle();
        $('.'+pageNumber).slideToggle();

        $('#'+pageCounter+'compact').removeClass('compact-active');
        $('#'+pageNumber+'compact').addClass('compact-active');

        pageCounter = pageNumber;
    }
}

function slidePageKey(e) {
    let keyValue = e.keyCode;

    if(keySlideUsed==false) {
        $('.navigating-info__arrows').css('display','none');
        keySlideUsed = true;
    }

    if(keyValue==40 && pageCounter < linksNumber.length) { // down arrow slide down
        pageCounter++;
        $('.'+(pageCounter-1)).slideToggle();
        $('.'+pageCounter).hide().slideToggle();
        $('#'+(pageCounter-1)+'li').removeClass('link-active');
        $('#'+pageCounter+'li').addClass('link-active');
    } else if (keyValue==38 && pageCounter > 1) { // arrup slide up
        pageCounter--;
        $('.'+(pageCounter+1)).slideToggle();
        $('.'+pageCounter).hide().slideToggle();
        $('#'+(pageCounter+1)+'li').removeClass('link-active');
        $('#'+pageCounter+'li').addClass('link-active');
    } else {
        return;
    }
}

function slidePageScroll() {
        let delta;

        if(mouseFocus == false) {
            if (event.wheelDelta){
                delta = event.wheelDelta;
            }else{
                delta = -1 * event.deltaY;
            }

            if(scrollSlideUsed==false) {
                $('.navigating-info__scroll').css('display','none');
                scrollSlideUsed = true;
            }

            if (delta < 0 && pageCounter < linksNumber.length){ // scrolldown slide down
                pageCounter++;
                $('.'+(pageCounter-1)).slideToggle();
                $('.'+pageCounter).hide().slideToggle();
                $('#'+(pageCounter-1)+'li').removeClass('link-active');
                $('#'+pageCounter+'li').addClass('link-active');
            }else if (delta > 0 && pageCounter > 1){ // scrollup slide up
                pageCounter--;
                $('.'+(pageCounter+1)).slideToggle();
                $('.'+pageCounter).hide().slideToggle();
                $('#'+(pageCounter+1)+'li').removeClass('link-active');
                $('#'+pageCounter+'li').addClass('link-active');
            } else {
                return;
            }
        }
}


// custom functions end
    $('.link').click( (e) => changePage(e) );
    $('.compact-link').click( (e) => compactChangePage(e) );

    $('.container-box').on("mouseenter", () => {
        mouseFocus = true;
    }).on("mouseleave", () => {
        mouseFocus = false;
    });
    
    document.addEventListener("keydown", (e) => slidePageKey(e));
    document.addEventListener("wheel", () => slidePageScroll());


});

