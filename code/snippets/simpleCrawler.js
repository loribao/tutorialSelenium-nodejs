
function crawlear(){
        var ret = [];
        var arrTag =  window.document.getElementsByTagName('a');
        var teste = /^(http[a-z]{0,1}:\/\/.+pdf)$/g
        for (var i = 0; i < arrTag.length; i++) {
            if(teste.test(arrTag[i].href)){
            ret[i] = arrTag[i].href;
            }
        }  
        return ret;
}
copy(crawlear());
