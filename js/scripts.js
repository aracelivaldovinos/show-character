$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const secret = $("select#secret").val();
    const messy = $("select#messy").val();
    const party = $("select#party").val();
    const introvert = $("select#introvert").val();
    const standards = $("select#standards").val();
    const drama = $("select#drama").val();
    const romantic = $("select#romantic").val();
    
    
    if (secret === '1' && introvert === '1' && standards === '1' && party === '2' && messy ==='2' && romantic ==='2' && drama==='1'){
      $(".image1").show();
    
    }
    else if (romantic ==='1' && party === '1' && drama ==='1' && introvert !== '1' && secret !=='1' ) {
      $(".image2").show()
    
    }
    else if (secret === '1' && introvert === '1' && party === '2' && messy=='2') {
      $(".image3").show()
      
    }

    else if (secret === '1' && drama === '2' && party === '2' && messy=='1') {
      $(".image4").show()
      character = "Jim"
    }  
    else {
      $(".image5").show();
      
    }
    
  });

});