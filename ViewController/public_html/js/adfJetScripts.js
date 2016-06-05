function sendToJet(evt) {
    document.getElementById("input").value = AdfPage.PAGE.findComponentByAbsoluteId('adfInput').getValue();
}