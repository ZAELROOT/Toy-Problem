Array.prototype.isSubsetOf = function(array) {
    // TODO: Your code here!
    let count = 0;
    let result = true;
    let newarr = Array.from(new Set(this));
    
    for(let i=0;i<newarr.length;i++){
      if(array.includes(newarr[i])){
        count++;
      }
    }
    if(count === newarr.length && count <= array.length){
      return true;
    }
    else{
      return false;
    }
  };