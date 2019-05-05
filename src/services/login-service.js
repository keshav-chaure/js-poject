export let loginService={
      /*
      
        addEvent: async ()=>{
            var el=document.getElementById("submit-login");
           console.log(el)
            if (el.addEventListener) {
                el.addEventListener("click", this.submitLoginData(), false);
            } else {
                    el.attachEvent('onclick', submitLoginData);
            }
        
        },
        */
      
      test: (a)=>{
           console.log("aa");
            console.log(a);
       },
           
        submitLoginData(el){
           console.log(this);        
           var user = {},
              parent = el.parentNode,
              ename = document.getElementById("username"),
              epass = document.getElementById("password");
        
           user.username = ename.value;
           user.password = epass.value;
          console.dir(this); 
           var result=this.validate(user);
           console.log(result);
           (result) ? this.authenticate(user) : this.showErrorMessage(parent);
        },
  
        showErrorMessage(parent){
           var e = document.createElement('span');
           e.innerHTML = "Please enter correct data!";
           parent.appendChild(e);
        },
        
        authenticate(user){
            //rest call
           window.location='/#/home';
        },
  
        validate(user){
           return (user.username.length > 3 && user.password.length > 3) ? true : false;
        
        }
        
}