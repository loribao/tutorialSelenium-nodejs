//------------------pesquisa------------------------
 var get = async()=>{
     await window.location.assign("https://google.com.br");
}
var pesquisar = async(pesquisa)=>{

    var q = await window.document.getElementsByName('q')[0];
    q.value = pesquisa;
    var btnk = await window.document.getElementsByName('btnK')[0];
    btnk.click();
}

var main = ()=>{
    var pesquisa = "site:.exploit-db.com +CVE-2017-11176 filetype:pdf";
    get().then(pesquisar(pesquisa));
    
}
main();


