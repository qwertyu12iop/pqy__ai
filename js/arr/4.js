//forEach
const names=Array.of('Alice','Bob','Charlie','David');
names.forEach(name=>{
    if(name==='Charlie'){
        console.log('Charlie is here');
        //break;
        return;
    }
    console.log('Processing:',name);
    
})