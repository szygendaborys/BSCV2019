$(document).ready(() => {

    let menuCounter = 0;
    let pageCounter = 1;

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


// custom functions end
    $('.link').click( (e) => changePage(e) );
    $('.compact-link').click( (e) => compactChangePage(e) );

});

