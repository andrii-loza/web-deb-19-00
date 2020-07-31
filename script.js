let div = document.createElement('div');
div.style.width = '200px';
div.style.height = '200px';
div.style.border = '1px solid black';
div.style.backgroundColor = 'purple';
div.style.margin = 'auto';
div.innerHTML = 'у мене є секрет!';

document.body.append(div);

let divElement = document.getElementsByTagName('div')[0];

divElement.onmouseover = function(){
    changeStyle('yellow', 'blue', 'хочеш знати який?', this)
}

divElement.onmousedown = function(){
    changeStyle('black', 'white', 'а я тобі не скажу!', this)
}

divElement.onmouseup = function(){
    changeStyle('yellow', 'blue', 'хочеш знати який?', this)
}

divElement.onmouseout = function(){
    changeStyle('purple', 'black', 'у мене є секрет', this)
}

function changeStyle(bgColor, color, text, div) {
    
    div.style.backgroundColor = bgColor;
    div.style.color = color;
    div.innerHTML = text;
}