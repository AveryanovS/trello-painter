var KEYWORDS_COLORS = {
    'todo': '#ffb3b3',
    'done': '#9fdf9f',
    'баги': '#ffdd99d'
};
var lists = document.getElementsByClassName('js-list list-wrapper');
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