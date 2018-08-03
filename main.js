$(document).ready(function() {
    // on page load, collapse all panels
    $(".panel-body").hide();
    // retrieve and show partials inside divs
    loadPartials("_module01.html","divM01-content");
    loadPartials("_module02.html","divM02-content");
    loadPartials("_module03.html","divM03-content");
    loadPartials("_module04.html","divM04-content");
    loadPartials("_module05.html","divM05-content");
    loadPartials("_module06.html","divM06-content");
    loadPartials("_module07.html","divM07-content");
    loadPartials("_module08.html","divM08-content");
    var module09 = $.Deferred();
    module09 = loadPartials("_module09.html","divM09-content");
    $.when(module09).done(function(){
        loadPartials("_tree.html","dir-tree");
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
            case "panel-heading-M03":
                $("#panel-body-M03").slideToggle();
                break;  
            case "panel-heading-M04":
                $("#panel-body-M04").slideToggle();
                break;
            case "panel-heading-M05":
                $("#panel-body-M05").slideToggle();
                break;
            case "panel-heading-M06":
                $("#panel-body-M06").slideToggle();
                break;
            case "panel-heading-M07":
                $("#panel-body-M07").slideToggle();
                break;
            case "panel-heading-M08":
                $("#panel-body-M08").slideToggle();
                break;
            case "panel-heading-M09":
                $("#panel-body-M09").slideToggle();
                break;                    
        }									
    });	 
    function loadPartials(file,element) {
        $.get(file,function(data){
            $("#" + element).append(data);
        });
    }  
});
