Array.prototype.includesCi=function(caseins){
          
    const even=(value)=>value.toLowerCase()===caseins.toLowerCase()
    return this.some(even)
}
console.log(['admin','guest','AK'].includesCi('ak'))