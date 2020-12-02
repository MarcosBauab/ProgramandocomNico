function download() {
    var element = document.createElement('a');
    var texto = document.querySelector(".historico").innerText
    let filename = "Histórico= "+texto
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}