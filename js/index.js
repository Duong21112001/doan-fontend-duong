$(document).ready(function(){
    $(".fa-bars").on("click",function(){
        $(".menu-rp").toggle(".show")
        
    })
    $(".img-vector").on("click",function(){
        $(".ipt-search").toggle(".show")
    })
    $(".ipt-search").on("keyup",function(){
        const valueSearch = $(this).val().toLowerCase()
        // console.log(valueSearch);
        $(".project-image-item").each(function(){
            const nameProduct = $(this).text().toLowerCase()
            if(nameProduct.includes(valueSearch)){
                $(this).show()
            }
            else{
                $(this).hide()
            }
            
            // console.log(nameProduct)
            
        })
    })
     $(".ipt-search").on("keyup",function(){
        const valueSearch = $(this).val().toLowerCase()
        // console.log(valueSearch);
        $(".project-item").each(function(){
            const nameProduct = $(this).text().toLowerCase()
            if(nameProduct.includes(valueSearch)){
                $(this).show()
            }
            else{
                $(this).hide()
            }
            
            // console.log(nameProduct)
            
        })
    })
})