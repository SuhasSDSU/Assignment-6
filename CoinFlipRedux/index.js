var coinFlip;

for(var i = 0 ; i < 10 ; i++){
    coinFlip = Math.random();
}
coinFlip =  Math.round(coinFlip);
console.log(coinFlip)
if(coinFlip === 0 ){
    console.log('Heads')
} else {
    console.log('Tails');
}