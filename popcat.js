// Code written by CallMeDimas
// GitHub: https://github.com/CallMeDimas

var event = new KeyboardEvent('keydown', {
key: 'g',
ctrlKey: true
});
 
setInterval(function(){
for (i = 0; i < 1000; i++) {
document.dispatchEvent(event);
}
}, 0);
