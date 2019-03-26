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
	 /*A classe By retorna em suas funções de busca objetos js proprios para 
	 /*para pesquisa com a função findElement(s) da instância do Chrome que fizemos
	 /*
	 /*		*/

    /**
     * busca pela propriedade 'id' na pagina e retorna apenas um elemento quando usado com find
     */
    var metodoPesquisa1 = await selenium.By.id('WikiaPage');

    /**
     * busca pela propriedade  de classe e pode retornar muitos elementos quando usado com find
     */
    var metodoPesquisa2 = await selenium.By.className('wds-tabs__tab');

    /**
     *  apenas um objeto comum do javascript 
     */
    var metodoPesquisa3 = {
        id: 'WikiaPage'
    };
	/* As funções find da nossa instância do navegador e o que o Selenium denomina
	/* de webElement que é uma abstração dos nossos objtos do html (<tags>)
	/* daqui ja fica fácil entender que a classe By são apenas os métodos de busca 
	/* enquanto que no find podemos manipular nossos objetos,
	/* encontrados por ele mesmo com os parâmetros fornecido
	/* pelas funções da classe By.	
	/*	*/

    var element = await chrome.findElement(metodoPesquisa1);// obtem o primeiro objeto encontrado
    var elements = await chrome.findElements(metodoPesquisa2); // obtem um array de objetos encontrados
    var elementObjeto = await chrome.findElement(metodoPesquisa3);// mesmo que o primeiro

    console.dir(element);
    console.dir(elements);
    console.dir(elementObjeto);

}
/**
/* para excutar um snippet jo contexto da página em execução 
/* usacomos a função executeScript () que pede como parametro
/* primeiro parâmetro obrigatório o código JavaScript como string ou uma função
/* e de maneira opcional a passagem de um argumento que será visível 
/* no contexto da página e para o nosso código de manipulação, o tipo pode ser objeto, array webelement ...
/*	*/
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
            }, argumento); // a variavel que foi passada como argumento da função.

}




var obtendoInfo = async (chrome)=>{

   await  chrome.getTitle().then((titulo)=>{console.log('esse é o titulo -->>'+titulo)});
   await  chrome.getCurrentUrl().then((url)=>{console.log('essa é a url-->>'+url)})
   await  chrome.getPageSource().then((codigoHtml)=>{console.log('eis o fonte da pagina !o! -->>'+codigoHtml)})

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
    