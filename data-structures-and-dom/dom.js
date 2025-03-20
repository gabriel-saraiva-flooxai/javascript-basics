//Document Object Model

window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});

/* let agora = Date.now();
    console.log(agora); */

    //ing
/* let agr = new Date();
    console.log(agr.get()); */
    
    let agr = new Date();
    console.log(agr.toLocaleDateString("pt-BR"));