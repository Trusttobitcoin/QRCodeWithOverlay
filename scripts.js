function generateQR() {
    let inputValue = document.getElementById('qrInput').value;

    // Check if the input box is empty
    if (!inputValue.trim()) {
        alert("Please enter a value for the QR code!");
        return;
    }

    document.getElementById('qrOutput').innerHTML = "";

    new QRCode(document.getElementById("qrOutput"), {
        text: inputValue,
        width: 180,
        height: 180
    });

    let overlay = document.createElement('img');
    overlay.id = 'qrOverlay';
    overlay.src = 'zeropay.jpg';
    overlay.alt = 'ZeroPay Logo';
    document.getElementById('qrOutput').appendChild(overlay);

    // Hide input and generate button, show QR code and back button
    document.getElementById('qrInput').style.display = 'none';
    document.querySelector('button[onclick="generateQR()"]').style.display = 'none';
    document.getElementById('qrOutput').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';
}

function goBack() {
    // Hide QR code and back button, show input and generate button
    document.getElementById('qrOutput').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('qrInput').style.display = 'inline-block';
    document.querySelector('button[onclick="generateQR()"]').style.display = 'inline-block';
}
