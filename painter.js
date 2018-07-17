var lists = document.getElementsByClassName('js-list');
var xhr = new XMLHttpRequest();
window.onload = () => {
    xhr.open('GET', chrome.extension.getURL('/keywords.json'), true);
    xhr.onreadystatechange = () => { 
        if (xhr.readyState != 4) 
            return;
        if (xhr.status === 200) {
            var keywordColors = JSON.parse(xhr.responseText);
            for(var i = 0; i < lists.length; i++){
                var list = lists[i]
                    .children[0];
                var text = list
                    .children[0]
                    .children[1]
                    .innerText
                    .toLowerCase();
                for(let keyword in keywordColors){
                    if(text.includes(keyword))
                        list.style.backgroundColor = keywordColors[keyword];
                }
            }
        }
    };   
    xhr.send();
};