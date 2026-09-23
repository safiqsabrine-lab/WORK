function factoriel(n){
let result=1
for (i=1; i<=n;i++){
   result=result *i;
}
return result
}
let n=5
let result=factoriel(n)
console.log("factoriel de nmber" +n+ "est:"+result);