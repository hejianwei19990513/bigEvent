$(function(){
    $(".layui-nav li:nth-child(1)").on("mouseover",function(){
        document.querySelector(".dl1").style.transition = "1s"
        $(".dl1").show()
        $(".layui-nav-more").addClass("layui-nav-mored")
    })
    $(".layui-nav li:nth-child(1)").on("mouseout",function(){
        $(".dl1").hide()
        $(".layui-nav-more").removeClass("layui-nav-mored")
    })
    var flag = true
    $(".layui-nav-tree li:nth-child(3)").on("click",function(){
        if(flag) {
            $(this).find("dl").show()
            flag = false
            flag1 = true
        }else {
            $(this).find("dl").hide()
            flag = true
            flag1 = true
        }
        $(".layui-nav-tree li:nth-child(4)").find("dl").hide()
        console.log(flag);
    })
    var flag1 = true
    $(".layui-nav-tree li:nth-child(4)").on("click",function(){
        if(flag1) {
            $(this).find("dl").show()
            flag1 = false
            flag = true
        }else {
            $(this).find("dl").hide()
            flag1 = true
            flag = true
        }
        console.log(flag1);
        $(".layui-nav-tree li:nth-child(3)").find("dl").hide()
    })
})