import {loginService} from '../services/login-service';

export let Login = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> Login Please </h1>
                <div class="login-container">
                <input type="text" name="username" id="username" placeholder="username"/>
                <input type="text" name="password" id="password" placeholder="password"/>
                <input type="button" name="submit" value="submit" id="submit-login">
              </div>
            </section>
        `
        return view
    },
    after_render: async () => {
       
        const el = document.getElementById("submit-login");
        
        if (el.addEventListener) {        
            el.addEventListener(
                                 "click", 
                                 function(){
                                 loginService.submitLoginData(el)
                                 },
                                  false
                                  );
         // in addEventListner method we should pass no arg method so do some trick as above
        } else {
            
           el.attachEvent('onclick', function(){
                                       loginService.submitLoginData(el)
                                    }
                          );
        }
        
       
    }
        
}
