getQRCode = () => {
  const url = document.getElementById("url")
  const codeContainer = document.getElementById("qrcodebox")

  if (url.length < 6) {
    throw new Error("no url provided or too short");
  }

  const qrCode = new QRCode(codeContainer, {
    text: url.value,
    width: 256,
    height: 256,
  })

  document.getElementById("wrapper").setAttribute("style", "display:none")
}