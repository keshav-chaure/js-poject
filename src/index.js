import { hi } from './calculate';
import { loginName } from './login';
import {Home } from './login/home';
import {About } from './login/about';
import {Register } from './login/register.js';
import {PostShow } from './login/postshow';
import {Error404} from './login/error404';
import {Utils} from './login/utils';

import Navbar       from './views/components/Navbar';
import Bottombar    from './views/components/Bottombar'; 

console.log(hi()); // 121
console.log("hi webpack!!!");
// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
   '/'             : Home
   , '/about'      : About
   , '/p/:id'      : PostShow
   , '/register'   : Register
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
   
      // Lazy load view element:
      const header = null || document.getElementById('header_container');
      const content = null || document.getElementById('page_container');
      const footer = null || document.getElementById('footer_container');
      
      // Render the Header and footer of the page
      header.innerHTML = await Navbar.render();
      await Navbar.after_render();
      footer.innerHTML = await Bottombar.render();
      await Bottombar.after_render();
  
  
      // Get the parsed URl from the addressbar
      let request = Utils.parseRequestURL();
  
      // Parse the URL and if it has an id part, change it with the string ":id"
      let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
      
      // Get the page from our hash of supported routes.
      // If the parsed URL is not in our list of supported routes, select the 404 page instead
      let page = routes[parsedURL] ? routes[parsedURL] : Error404
      content.innerHTML = await page.render();
      await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

const parseRequestURL = () => {

   let url = location.hash.slice(1).toLowerCase() || '/';
   let r = url.split("/")
   let request = {
       resource    : null,
       id          : null,
       verb        : null
   }
   request.resource    = r[1]
   request.id          = r[2]
   request.verb        = r[3]

   return request
}








var divElement = document.getElementById("rootElement");
// divElement.appendChild(loginName());
console.log(loginName());

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
   console.log("rest call!!!");
}

function validate(user) {
   return (user.username.length > 3 && user.password.length > 3) ? true : false;

}

/*

divElement.innerHTML="how are you!!!";
var inputName=document.createElement("INPUT");
inputName.setAttribute("type","text");
inputName.setAttribute("placeHolder","User Name");

*/







