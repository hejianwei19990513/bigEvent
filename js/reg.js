$(function(){
    $("#go-reg").on("click",function(){
        $(".form-login").hide()
        $(".form-reg").show()
        
    })
    $("#go-login").on("click",function(){
        $(".form-login").show()
        $(".form-reg").hide()
    })
})