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
        
        var el = document.getElementById("submit-login");

        if (el.addEventListener) {
           el.addEventListener("click", submitLoginData, false);
        } else {
           el.attachEvent('onclick', submitLoginData);
        }
        
        function submitLoginData() {
        
           var user = {},
              parent = el.parentNode,
              ename = document.getElementById("username"),
              epass = document.getElementById("password");
        
           user.username = ename.value;
           user.password = epass.value;
           console.log(user);
           (validate(user)) ? authenticate(user) : showErrorMessage(parent);
        }
        function showErrorMessage(parent) {
           var e = document.createElement('span');
           e.innerHTML = "Please enter correct data!";
           parent.appendChild(e);
        }
        
        function authenticate(user) {
            //rest call
           window.location='/#/home';
        }
        
        function validate(user) {
           return (user.username.length > 3 && user.password.length > 3) ? true : false;
        
        }
        
    }
        
}
