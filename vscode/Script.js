<script src="https://apis.google.com/js/platform.js" async defer></script> 
 function onSignIn(googleUser) { 
   var profile = googleUser.getBasicProfile(); 
   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead. 
   console.log('Name: ' + profile.getName()); 
   console.log('Image URL: ' + profile.getImageUrl()); 
   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present. 
 } 
 <button id onclick="signin();">Signin</a></button> 
   function signin() { 
     var auth2 = gapi.auth2.getAuthInstance(); 
     auth1.signin().then(function () { 
       console.log('User signni.'); 
     }); 
   } 
 </script>