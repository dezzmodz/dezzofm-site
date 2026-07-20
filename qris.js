
let qrCode = null;

function generateQR(){

    const text = document.getElementById("url").value.trim();

    if(!text){
        alert("Masukkan tautan terlebih dahulu!");
        return;
    }

    const size = parseInt(
        document.getElementById("size").value
    );

    const darkColor =
        document.getElementById("darkColor").value;

    const lightColor =
        document.getElementById("lightColor").value;

    document.getElementById("qr").innerHTML = "";

    qrCode = new QRCode(
        document.getElementById("qr"),
        {
            text:text,
            width:size,
            height:size,
            colorDark:darkColor,
            colorLight:lightColor,
            correctLevel:QRCode.CorrectLevel.H
        }
    );

}

function downloadQR(){

    const qrBox = document.getElementById("qr");

    const qrCanvas = qrBox.querySelector("canvas");
    const qrImg = qrBox.querySelector("img");

    if(!qrCanvas && !qrImg){

        alert("Buat QR terlebih dahulu!");

        return;
    }

    const bgColor =
        document.getElementById("lightColor").value;

    const textColor =
        document.getElementById("darkColor").value;

    const canvas =
        document.createElement("canvas");

    const ctx =
        canvas.getContext("2d");

    const size = 1024;

    canvas.width = size;
    canvas.height = size + 100;

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // QR
    if(qrCanvas){

        ctx.drawImage(
            qrCanvas,
            112,
            40,
            800,
            800
        );

    }else{

        const img = new Image();

        img.onload = function(){

            ctx.drawImage(
                img,
                112,
                40,
                800,
                800
            );

            finishDownload();

        };

        img.src = qrImg.src;

        return;
    }
    
// ===== FRAME CYBER =====
ctx.strokeStyle = darkColor;
ctx.lineWidth = 10;
ctx.lineCap = "round";

const x = 100;
const y = 28;
const w = 824;
const h = 824;
const l = 70;

// kiri atas
ctx.beginPath();
ctx.moveTo(x+l, y);
ctx.lineTo(x, y);
ctx.lineTo(x, y+l);
ctx.stroke();

// kanan atas
ctx.beginPath();
ctx.moveTo(x+w-l, y);
ctx.lineTo(x+w, y);
ctx.lineTo(x+w, y+l);
ctx.stroke();

// kiri bawah
ctx.beginPath();
ctx.moveTo(x, y+h-l);
ctx.lineTo(x, y+h);
ctx.lineTo(x+l, y+h);
ctx.stroke();

// kanan bawah
ctx.beginPath();
ctx.moveTo(x+w-l, y+h);
ctx.lineTo(x+w, y+h);
ctx.lineTo(x+w, y+h-l);
ctx.stroke();

    finishDownload();

    function finishDownload(){

        ctx.fillStyle = textColor;

        ctx.font = "bold 48px Arial";

        ctx.textAlign = "center";

        ctx.fillText(
            "DezzXOFM",
            canvas.width/2,
            950
        );

        const link =
            document.createElement("a");

        link.download =
            "DezzXOFM-QR-" +
            Date.now() +
            ".png";

        link.href =
            canvas.toDataURL("image/png");

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    }

}

function clearQR(){

    document.getElementById("url").value = "";

    document.getElementById("qr").innerHTML = "";

}
