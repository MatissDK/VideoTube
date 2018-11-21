$(document).ready(function() {

    $('.navShowHide').click(function(){
        
        if ($('#mainSectionContainer').hasClass('mainCon'))
        {
            $('#sideNavContainer').hide();
        }
        else
        {
            $('#sideNavContainer').show();   
        }
       
        $('#mainSectionContainer').toggleClass('mainCon');

    });
});