const btnVoltar = document.getElementById('btn-voltar')
const btnGerarQRCODE = document.getElementById('btn_gerarQRCODE');
const urlInput = document.getElementById('url')
const card = document.querySelector('.card');
const content = document.querySelector('.content');
const elemento_qrcode = document.getElementById('qrcode')

document.addEventListener('DOMContentLoaded', () => {    

    btnGerarQRCODE.addEventListener('click', () => {

        const url = urlInput.value

        if (url) {

            card.style.display = 'block'
            content.style.display = 'none'
            var qrcode = new QRCode("qrcode", {
                text: url,
                width: 310,
                height: 230
            })
        } else {
            alert("Por favor, insira uma URL antes de gerar o QRCode.");
        } 
    });

    btnVoltar.addEventListener('click',()=>{
        card.style.display = 'none'
        content.style.display = 'block'
        urlInput.value = ''
        elemento_qrcode.innerHTML = ''

    })

});
