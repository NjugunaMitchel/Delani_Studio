function thanksNote(){
    $('.button').click( (e)=>{
        $('.jk').show()

    })

}

thanksNote()

 $('#design').click( ()=>{
     
      $('#designImage').toggleClass('toggle')
      $('#designDescription').toggleClass('content')
 })

 $('#development').click( ()=>{
     
    $('#developmentImage').toggleClass('toggle')
    $('#developmentDescription').toggleClass('content')
})

$('#management').click( ()=>{
     
    $('#managementImage').toggleClass('toggle')
    $('#managementDescription').toggleClass('content')
})

$('.work4').hover(
    $('#nam').toggleClass(
        $('.nam').show()
    )
)


