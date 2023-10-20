document.addEventListener('DOMContentLoaded', () => {
    const btnGerarQRCODE = document.getElementById('btn_gerarQRCODE');
    const urlInput = document.getElementById('url');
    const descricaoURL = document.querySelector('.descricao__card')
    const card = document.querySelector('.card');
    const content = document.querySelector('.content');
    

    btnGerarQRCODE.addEventListener('click', () => {

        const url = urlInput.value;

        if (url) {
            card.style.display = 'block'; 
            content.style.display = 'none'

            var qrcode = new QRCode("qrcode", {
                text: url,
                width: 220,
                height: 220
            });
        } else {
            alert("Por favor, insira uma URL antes de gerar o QRCode.");
        } 
    });
});
