//your JS code here. If required.
const output=document.getElementById("output");
const prom=new Promise(function (resolve,reject){
    setTimeout(resolve("Hello World"),1000);

});
prom.then(function(data){output.innerHTML=data}):