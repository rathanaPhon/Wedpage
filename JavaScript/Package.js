 <script src="https://rathanaphon.github.io/wedpage/"></script> 
 function onlick(params) {
       $(document).ready(function(){
           console.log("if");
            $.ajax({
              dataType: "jsonp",
              type: 'GET',
              url: "https://rathanaphon.github.io/wedpage.io.git/">
              function onsigin(data) {
              console.log("Gmail");
             },
              error: function(){
              console.log("id:");
            }
         });
    });
}
    
