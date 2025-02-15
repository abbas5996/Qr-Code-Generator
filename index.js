const b = document.querySelector("button");
const img = document.querySelector("#img");

const input  = document.querySelector("input");

b.addEventListener("click",() =>{
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    .then(response => {
        return response.blob();
    }).then(blob => {
        const ObjectURL = URL.createObjectURL(blob);
        img.innerHTML = `
        <img src="${ObjectURL}" height = "150px" width  = "150px">`;
    }).catch(error =>{
        console.log('there as problem ',error);
    })

})