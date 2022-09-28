const binaryEle = document.getElementById("binary");
const buttonEle = document.querySelector(".btn");
const resultEle = document.querySelector(".result");

buttonEle.addEventListener("click", binaryToDecimalConverter);

function binaryToDecimalConverter() {
  resultEle.innerText = "";
  let result = "Decimal Number : ";

  let inputVal = binaryEle.value;
  const digit = parseInt(inputVal, 2);
  result = result + digit;

  resultEle.innerText = result;
}
