 <script src="https://rathanaphon.github.io/wedpage.co.in/"></script> 
 function onlick(params) {
       $(document).ready(function(){
           console.log("if");
            $.ajax({
              dataType: "jsonp",
              type: 'GET',
              url: "https://rathanaphon.github.io/wedpage.co.in/">
              function onsigin(data) {
              console.log("Gmail");
             },
              error: function(){
              console.log("id:");
            }
         });
    });
}
    
