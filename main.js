$(document).ready(function() {
    // on page load, collapse all panels
    $(".panel-body").hide();
    // retrieve and show partials inside divs
    $.get("_module01.html",function(data){
        $("#divM01-content").append(data);
    });

    $(document).on("click", "body *", function() {        
        switch($(this).attr("id")) {
            case "panel-heading-Main":
                $("#panel-body-Main").slideToggle();
                break;
            case "panel-heading-M01":                
                $("#panel-body-M01").slideToggle();
                break;  
            case "panel-heading-M02":
                $("#panel-body-M02").slideToggle();
                break;                      
        }									
    });	    
});
