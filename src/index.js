import {hi } from './calculate';
import {loginName} from './login';




console.log(hi()); // 121

console.log("hi webpack!!!");



 var divElement=document.getElementById("rootElement");
 // divElement.appendChild(loginName());
 console.log(loginName());
 
 var el = document.getElementById("submit-login");
    
 if (el.addEventListener) {
        el.addEventListener("click", submitLoginData, false);
 } else {
      el.attachEvent('onclick', submitLoginData);
 }
    
 function submitLoginData(){

        var user={},
        parent=el.parentNode,
        ename=document.getElementById("username"),
        epass=document.getElementById("password");
        
        user.username=ename.value;
        user.password=epass.value;
        console.log(user);
        (validate(user))?authenticate(user):showErrorMessage(parent);
 }
 function showErrorMessage(parent){    
    var e=document.createElement('span');
    e.innerHTML="Please enter correct data!";
    parent.appendChild(e);
 }

 function authenticate(user){
    console.log("rest call!!!");
 }

    function validate(user){
        return (user.username.length > 3 && user.password.length > 3  )?true:false;

    }

 /*

 divElement.innerHTML="how are you!!!";
 var inputName=document.createElement("INPUT");
 inputName.setAttribute("type","text");
inputName.setAttribute("placeHolder","User Name");
 
*/
 






