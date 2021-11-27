// console.log(Math.round(Math.random() * 100000));
// console.log(Math.round(5.4));
// console.log(43.53422.toFixed(10));

// var x = prompt("ixtiyoriy raqam");
// var y = prompt("yana bir marta");
// var z = prompt(`${x}+${y}=`);
// var x = x-0
// var y = y-0
// var z = z-0


// if(x===27){
//     console.log('Assalomu alekum Farrux aka')
// }else if(x===23){
//     console.log('Salom Shaxzod')
// }else{
//     console.log('Tanimadim aka')
// }


// if(x+y===z){
//     console.log('true')
// }else{
//     console.log('false')
// }
var weight =Number(prompt('Vazningiz'));
var height =Number(prompt('Bo\'yingiz'));
var BMI = weight / (height*height);
var elHeader = document.querySelector('.header');
// console.log(BMI)

if(BMI < 15){
    elHeader.textContent=('Vazningizni oshirishingiz kerak')
}else if( BMI > 15 && BMI < 24.9){
    elHeader.textContent=('Sizning vazningiz normal')
}else if( BMI > 25 && BMI < 26){
    elHeader.textContent=('Siz bir oz vazn yo\'qotishingiz kerak')
}else if( BMI > 26 && BMI < 27){
    elHeader.textContent=('Sizda keragidan ko\'proq vazn bor')
}else{
    elHeader.textContent=('Siz ozishingiz shart')
}

