 $(".menu1").each(function(){
    $(this).on('click',function(){
        $.each($(".menu1"), function(){ $(this).removeClass("selct")})
        $(this).addClass("selct")})})
// for (i of $(".menu1")){
//     i.addEventListener('click', function(e){
//     for (i of $(".menu1")){i.classList.remove(("selct"))}
//     e.target.classList.add("selct")})}
