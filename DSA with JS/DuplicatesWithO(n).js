
function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    args.sort();
    console.log(args);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true;
        }
        start++;
        next++;
}
return false;
}
console.log(areThereDuplicates(1,2,4,2));