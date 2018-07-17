var KEYWORDS_COLORS = {
    'баги': '#ffb3b3',
    'todo': '#ffdd99'
};
var lists = document.getElementsByClassName('js-list');
window.onload = () => {
    for(var i = 0; i < lists.length; i++){
        var list = lists[i]
            .children[0];
        var text = list
            .children[0]
            .children[1]
            .innerText
            .toLowerCase();
        for(let keyword in KEYWORDS_COLORS){
            if(text.includes(keyword))
                list.style.backgroundColor = KEYWORDS_COLORS[keyword];
        }
        
    }   
};