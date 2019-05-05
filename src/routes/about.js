export let About = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> About </h1>
                <input type='text' name='username' id='username' placeholder='username' />
                <input type='button' name='button' id='button' value='click' />
            </section>
        `
        return view
    },
    after_render: async () => {
        
var e2 = document.getElementById("button");

if (e2.addEventListener) {
   e2.addEventListener("click", buttonClick, false);
} else {
   e2.attachEvent('onclick', buttonClick);
}

function buttonClick(){
   alert();
}
    }
        
}
