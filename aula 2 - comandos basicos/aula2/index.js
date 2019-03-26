'use strict';
var selenium = require('selenium-webdriver');
require('chromedriver');


var chrome = new selenium.Builder().forBrowser('chrome').build();


var get = async (chrome) => {

    /**
     *  vai até a url que passamos.
     */

    await chrome.get('https://gundam.fandom.com/wiki/The_Gundam_Wiki');
    //-----------------------------------------------------------------------

}

var obtemElemento = async (chrome) => {

    /**
     *  ainda temos muitos outro metodos de pesquisa e o mais significativo para usar nesse site é xpath
     *  ,busca por javascript e css ...
     *  mas trataremos desses metodos em video posterior da nossa playlist, pois é um assunto que merece uma tenção especial.
     */


    /**
     * busca pela propriedade 'id' na pagina e retorna apenas um elemento
     */
    var metodoPesquisa1 = await selenium.By.id('WikiaPage');

    /**
     * busca pela propriedade  de classe e pode retornar muitos elementos
     */
    var metodoPesquisa2 = await selenium.By.className('wds-tabs__tab');

    /**
     *  apenas um objeto comum do java script
     */
    var metodoPesquisa3 = {
        id: 'WikiaPage'
    };


    var element = await chrome.findElement(metodoPesquisa1);
    var elements = await chrome.findElements(metodoPesquisa2);
    var elementObjeto = await chrome.findElement(metodoPesquisa3);

    console.dir(element);
    console.dir(elements);
    console.dir(elementObjeto);

}

var executandojavaScript = async (chrome) => {

    await chrome.executeScript(() => {
        var wikiaPagina = window.document.getElementById('WikiaPage');
        wikiaPagina.innerHTML = '<p><h2>executando javacript!!!!!!!!!!!</h2></p>';
    });
}
var executandojavaScript2 = async (chrome) => {
    var argumento = "Executando javascript!!!!!!!!!!!!!! a revanche";

    await chrome.executeScript(
        (argumento) => {
                var wikiaPagina = window.document.getElementById('WikiaPage');
                wikiaPagina.innerHTML = '<p><h2>'+argumento+'</h2></p>';
            }, argumento);

}

var obtendoInfo = async (chrome)=>{

   await chrome.getTitle().then((titulo)=>{console.log('esse é o titulo -->>'+titulo)});
   await  chrome.getCurrentUrl().then((url)=>{console.log('esse é a url-->>'+url)})
   await  chrome.getPageSource().then((codigoHtml)=>{console.log('eis o fonte da pagina lol -->>'+codigoHtml)})

}


var main = async () => {
    await get(chrome);
    await obtemElemento(chrome);
    await executandojavaScript(chrome);
    await chrome.sleep(2000);
    await executandojavaScript2(chrome);
    await obtendoInfo(chrome);
}
main();