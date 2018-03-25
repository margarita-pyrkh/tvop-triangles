
let firstSideInputText;
let secondSideInputText;
let thirdSideInputText;

const errorAlert = {
  title: 'Введены некорректные данные',
  error: {
    tooLongValue: 'Данное число не входит в диапазон допустимых значений',
    notNumber: 'Введено не числовое значение',
    notInteger: 'Введено не целое число'
  }
};

const getInputs = () => {
  firstSideInputText = document.getElementById("firstSideInput").value;
  secondSideInputText = document.getElementById("secondSideInput").value;
  thirdSideInputText = document.getElementById("thirdSideInput").value;
};

const isTriangleIsosceles = (firstSide, secondSide) => firstSide === secondSide;
const isTriangleEquilateral = (firstSide, secondSide, thirdSide) => firstSide === secondSide === thirdSide;

const filterInteger = (value) => 
  (/^(\+)?([0-9]+)$/.test(value)) ? Number(value) : NaN;

const isSideInteger = (sideValue) => Number.isInteger(sideValue);
const isValueSafeInteger = (value) => Number.isSafeInteger(value);

const showSweetAlert = () => {
  swal("Good job!", "You clicked the button!", "success");
};

const showErrorAlert = (errorMessage) => {
  swal({
    type: "error",
    title: errorAlert.title,
    text: errorMessage
  });
};

const checkTriangle = () => {
  getInputs();
  if (isSideInteger(filterInteger(firstSideInputText))) {
    showSweetAlert();
  } else {
    showErrorAlert(errorAlert.error.notNumber);
  }
};
