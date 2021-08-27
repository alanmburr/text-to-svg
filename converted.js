var GET = new URLSearchParams(document.location.search.substring(1));
function $_GET(param) {return GET.get(param);}
function toObjectUrl(url, outputTYPE,outputID) {
    fetch(url)
        .then ((response) => {
            return response.blob();
            })
        .then(blob=> {
            var blobUrl = URL.createObjectURL(blob);
            document.querySelector(outputID).setAttribute(outputTYPE, blobUrl);
        });
}

let image = `<svg xmlns='http://www.w3.org/2000/svg' height='`+$_GET('height')+`' width='`+$_GET('width')+`'><defs><style type='text/css'>text {font-family: `+$_GET('font-family').toLowerCase()+`;font-size: `+$_GET('font-size')+`;user-select: none;}</style></defs><text x='2' y='18' fill='`+encodeURIComponent($_GET('fill'))+`'>`+encodeURIComponent($_GET('text'))+`</text></svg>`;
toObjectUrl("data:image/svg+xml,"+image,'href','#gid');
toObjectUrl("data:image/svg+xml,"+image,'data-href','#gid');
toObjectUrl("data:image/svg+xml,"+image, 'href', 'a[type=submit]')
setTimeout(() => {document.querySelector("#gid").innerHTML = document.querySelector('#gid').dataset.href.split('/').pop();document.querySelector("a[type=submit]").setAttribute('download', document.querySelector('#gid').dataset.href.split('/').pop()+".svg");}, 600);
document.querySelector("#converted-text").src = "data:image/svg+xml,"+image;