numbersList = { 1 : 'one',  2 : 'two',  3 : 'three', 4 :  'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten', 11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen', 20 : 'twenty', 30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty', 70 : 'seventy', 80 : 'eighty', 90 : 'ninety'
}

module.exports = function toReadable (number) {
  let numStr ='';
  if (number < 20) {
    if (number === 0) return 'zero';
    return numbersList[number];
  }
  else {
    if (number < 100) {
      return toTenNum(number);
    }
    if (number < 1000) {
      return toHundredNum(number);
    }
  }
}
//до тысячи
function toHundredNum (number) {
  let footNum = Number(String(number)[0]);
  let topNum = Number(String(number).slice(1))
  if (topNum === 0) return `${numbersList[footNum]} hundred`;
  if (topNum < 20) return `${numbersList[footNum]} hundred ${numbersList[topNum]}`;
  return `${numbersList[footNum]} hundred ${toTenNum(topNum)}`;
}
//до ста
function toTenNum (number) {
    let footLine = Number(String(number)[0] + '0');
    if (number === footLine) return numbersList[number];
    for (let i = 1; i <= 9; i++){
      if (i === Number(String(number)[String(number).length -1])){
        return `${numbersList[footLine]} ${numbersList[i]}`;
      }
    }
}
