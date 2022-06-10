let $;
$ = require("jquery");
$("document").ready(function (){
    let size = 0
    $(".btn").on("click", ()=>{
        let width = $("#width").val()
        let height = $("#height").val()
        let colors = $("#colors").val()
        size = (width * height * colors)/1024
        let calculation = $(".calculation").children()
        if(size > 1000 && size < 1024000){
            size = size/1000
            calculation.empty()
            calculation.append(`File is ${size.toFixed(2)}MB. Medium file.`)
        }else if(size > 1024000){
            size=size/1024000
            calculation.empty()
            calculation.append(`File is ${size.toFixed(2)}GB. Big file.`)
        }else{
            calculation.empty()
            calculation.append(`File is ${size.toFixed(2)}KB. Small file.`)
        }
    })
})