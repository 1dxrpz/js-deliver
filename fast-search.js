//https://cdn.jsdelivr.net/gh/1dxrpz/js-deliver/fast-search.js

var searchTab = document.querySelector("#searchTab");
window.onload = () => {
	searchTab.focus();
}
function search(v) {
    if(event.key === 'Enter') {
        window.location.href = `https://www.google.com/search?q=${v.value.split(' ').join('+')}`;
    }
}
