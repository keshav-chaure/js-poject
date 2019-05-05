import { hi } from './calculate';
import { loginName } from './login';
import {Login } from './routes/login';
import {Home } from './routes/home';
import {About } from './routes/about';
import {Register } from './routes/register.js';
import {PostShow } from './routes/postshow';
import {Error404} from './routes/error404';
import {Utils} from './services/utils';

import Navbar       from './views/components/Navbar';
import Bottombar    from './views/components/Bottombar'; 

console.log(hi()); // 121
console.log("hi webpack!!!");
// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
   '/'             : Login
   ,'/home'         :Home
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
      const appRoot = null || document.getElementById('rootElement');
      
     
  
  
      // Get the parsed URl from the addressbar
      let request = Utils.parseRequestURL();
  
      // Parse the URL and if it has an id part, change it with the string ":id"
      let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
      
      // Get the page from our hash of supported routes.
      // If the parsed URL is not in our list of supported routes, select the 404 page instead
      let page = routes[parsedURL] ? routes[parsedURL] : Error404
      
      if(parsedURL =='/'){

         appRoot.innerHTML = await page.render();
      }else{
         appRoot.innerHTML ="";
         // Render the Header and footer of the page
         header.innerHTML = await Navbar.render();
         await Navbar.after_render();
         footer.innerHTML = await Bottombar.render();
         await Bottombar.after_render();
         content.innerHTML = await page.render();
      }
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


/*

divElement.innerHTML="how are you!!!";
var inputName=document.createElement("INPUT");
inputName.setAttribute("type","text");
inputName.setAttribute("placeHolder","User Name");

*/







