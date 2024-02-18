var contentInput = document.getElementById('contentInput');
var savePng = document.getElementById('png');
var saveJpg = document.getElementById('jpg');

var qrcodeContainer = document.getElementById('qrcode');
var box = qrcodeContainer.getBoundingClientRect();

var w = box.width;
var h = box.height;

//Init
contentInput.value = '';
updateQRCode();

savePng.addEventListener('click', () => {    
    exportImg();
});

saveJpg.addEventListener('click', () => {
    //exportImg();
});

contentInput.addEventListener('input', () => {
    updateQRCode(contentInput.value);
});

function updateQRCode(content) {

    //Clear Code
    if (qrcodeContainer.children[0] != null) {
        qrcodeContainer.children[0].remove();
        qrcodeContainer.children[0].remove();
    }

    new QRCode(qrcodeContainer, {
        text: content,
        width: w,
        height: h,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

function exportImg() {
    var data = qrcodeContainer.children[1].src;

    var download = savePng.firstChild;

    download.href = data;
    download.download = 'pic.png';
}