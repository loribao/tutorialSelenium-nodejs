/**
 *  Chamada dos modulos fundamentais para o funcionamento do selenium com chrome
 *  obs. O chromedriver estamos chamando de forma global 
 */
var selenium = require('selenium-webdriver');
require('chromedriver');
/**
 *  Instanciando o navegador e suas configurações previas
 *  Usaremos apenas o basico por inquanto
 */
var chrome = new selenium.Builder()
    .forBrowser('chrome')
    .build();
/**
 * função "get()" usaremos para acessar a primeira pagina, no caso o google
 * função "findElement({elemento})" estamos usando para realizar ações em um determinado elemento
 * classe 'By' estamos usando para obter um elemento do DOM (pesquisar)
 * função "By.name('string com nome do elemento')" essa função da classe By obtem o elemento pela propriedade name
 * função chrome.sleep(inteiro) nessa função do objeto chrome estamos dizendo para aguardar determinado tempo em milisegundos
 */
/**
 * criando a uma função como async e await estamos dizendo que será uma função de assincronicidade
 * e usando o await mandamos que a execução do codigo pare até que seja resolvido a promisse do javascript
 * onde a promise é uma função no qual ela é executada porem o retorno dela se da de maneira não sincronizada
 *  (ele pode ser executanda
 * antes ou depois de um comando sem importar a ordem do codigo apenas o tempo de execução, assim uma função 
 * que demore menos que esta pode ser executada antes mesmo sendo escrita no codigo depois)
 *  então para executar de maneira sequencial colamos o await.
 *  
 * 
    *  Se ainda tiver duvida do conceito de Promise 
    *  veja neste link https://www.youtube.com/watch?v=yccIpJytViA o video do youtuber Claudiney Junior
    *  uma explicação excelente!
 * 
 */
var helloWord = async ()=>{
   await chrome.get('http://google.com.br')
   .then(
        async () => {
            var pesquisa = 'Hello world!'.split('');
            for (let i = 0; i < pesquisa.length; i++) {
                await chrome.findElement(selenium.By.name('q')).sendKeys(pesquisa[i]);
                await chrome.sleep(200);    
            }   

            var pesquisa = 'Goodbye!'.split('');
            
            await chrome.sleep(2000);  
            await chrome.findElement(selenium.By.name('q')).clear()
            
            for (let i = 0; i < pesquisa.length; i++) {
                await chrome.findElement(selenium.By.name('q')).sendKeys(pesquisa[i]);
                await chrome.sleep(200);    
            }
            
            await chrome.sleep(900);
        }
    )    
    .catch(
        ()=>{
        console.log('Algo deu errado! Estudaremos mais!');
    });
}
/**
 * função principal que usaremos para chamar nossas funções. Essa será sempre nossa convenção: 
 * sempre usaremos uma main() para orquestrar nosso codigo
 */
var main = async() =>{
    await helloWord();
    await chrome.close();
}
/**
 * executando nosso codigo
 */
main();