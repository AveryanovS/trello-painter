var lists = document.getElementsByClassName('js-list');
var xhr = new XMLHttpRequest();
window.onload = () => {
    xhr.open('GET', chrome.extension.getURL('/keywords.json'), true);
    xhr.onreadystatechange = () => { 
        if (xhr.readyState != 4) 
            return;
        if (xhr.status !== 200) 
            return;
        var dictionary;    
        try {
            dictionary = JSON.parse(xhr.responseText);
        } catch (error){
            return;
        }
        parse(dictionary);
    };   
    xhr.send();
};

function parse(dictionary){
    for(var list of Array.from(lists)){
        var text = list.getElementsByClassName('list-header-name-assist')[0].innerText.toLowerCase();
        list = list.children[0];
        console.log(text);
        for(let keyword in dictionary.colors){
            if(text.includes(keyword)){
                list.style.backgroundColor = dictionary.colors[keyword];
            }
        }
        for(let keyword in dictionary.transparency){
            if(text.includes(keyword)){
                list.style.opacity = dictionary.transparency[keyword];
            }
        }
    }
}