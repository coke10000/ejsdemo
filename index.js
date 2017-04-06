var ejs = require('ejs');
var str = require('fs').readFileSync('./list.ejs', 'utf8');  
  
var ret = ejs.render(str, {  
  names: ['foo', 'bar', 'baz']  
});  
  
console.log(ret);  
