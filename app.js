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
   function(){
       $('.names').css({'display': 'block'})
       $('.names').addClass('hover')
   },
     function(){
        $('.names').hide(),
        $('.names').remove('hover')
    }
)
$('.work3').hover(
    function(){
        $('.namez').css({'display': 'block'})
        $('.namez').addClass('hover')
    },
      function(){
         $('.namez').hide(),
         $('.namez').remove('hover')
     }
 )

 $('.work2').hover(
    function(){
        $('.project2').css({'display': 'block'})
        $('.project2').addClass('hover')
    },
      function(){
         $('.project2').hide(),
         $('.project2').remove('hover')
     }
 )

 $('.work1').hover(
    function(){
        $('.project1').css({'display': 'block'})
        $('.project1').addClass('hover')
    },
      function(){
         $('.project1').hide(),
         $('.project1').remove('hover')
     }
 )

 $('.work5').hover(
    function(){
        $('.project5').css({'display': 'block'})
        $('.project5').addClass('hover')
    },
      function(){
         $('.project5').hide(),
         $('.project5').remove('hover')
     }
 )

 $('.work6').hover(
    function(){
        $('.project6').css({'display': 'block'})
        $('.project6').addClass('hover')
    },
      function(){
         $('.project6').hide(),
         $('.project6').remove('hover')
     }
 )

 $('.work7').hover(
    function(){
        $('.project7').css({'display': 'block'})
        $('.project7').addClass('hover')
    },
      function(){
         $('.project7').hide(),
         $('.project7').remove('hover')
     }
 )

 $('.work8').hover(
    function(){
        $('.project8').css({'display': 'block'})
        $('.project8').addClass('hover')
    },
      function(){
         $('.project8').hide(),
         $('.project8').remove('hover')
     }
 )



