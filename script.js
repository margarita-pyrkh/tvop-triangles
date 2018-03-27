let firstSideInputText;
let secondSideInputText;
let thirdSideInputText;

let hasErrors = false;

const errorAlert = {
  title: 'Введены некорректные данные',
  error: {
    tooLongValue: 'Данное число не входит в диапазон допустимых значений',
    notNumber: 'Введено не числовое значение'
  }
};

const showErrorAlert = (errorMessage) => {
  swal({
    type: "error",
    title: errorAlert.title,
    text: errorMessage
  });
};

const showSweetAlert = () => {
  swal(
    "Good job!", 
    "You clicked the button!", 
    "success"
  );
};

const getInputs = () => {
  firstSideInputText = document.getElementById("firstSideInput").value;
  secondSideInputText = document.getElementById("secondSideInput").value;
  thirdSideInputText = document.getElementById("thirdSideInput").value;
};

const isTriangleIsosceles = (firstSide, secondSide, thirdSide) => {
  if (isTriangle())
    return (firstSide === secondSide) || (firstSide === thirdSide) || (secondSide || thirdSide);
};

const isTriangleEquilateral = (firstSide, secondSide, thirdSide) => { 
  if (isTriangle())
    return firstSide === secondSide === thirdSide;

};

const isTriangle = (firstSide, secondSide, thirdSide) => 
  (firstSide + secondSide) > thirdSide &&
  (firstSide + thirdSide) > secondSide &&
  (thirdSide + secondSide) > firstSide

const filterPositiveInteger = (value) => 
  (/^\+?(0|[1-9]\d*)$/.test(value)) ? Number(value) : NaN;

const isValueSafeInteger = (value) => Number.isSafeInteger(value);

const checkSide = (side) => {
  let triangleSideValue = filterPositiveInteger(side);

  if (!!triangleSideValue && !hasErrors) {
    if (isValueSafeInteger(triangleSideValue)) {
      return true;
    } else {
      showErrorAlert(errorAlert.error.tooLongValue);
      return false;
    }
  } else {
    showErrorAlert(errorAlert.error.notNumber);
    return false;
  }
};

const checkTriangleSides = () => {
  [ firstSideInputText, secondSideInputText, thirdSideInputText ]
  .forEach((side) => {
    if (!checkSide(side)) {
      hasErrors = true;
    };
  });
};

const recognizeTriangle = () => {
  getInputs();
  checkTriangleSides();
  if (!hasErrors) {
    showSweetAlert();
  }
};

$('#triangleInputForm').submit(() => {
  recognizeTriangle();
  return false;
});
