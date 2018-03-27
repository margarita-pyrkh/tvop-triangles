let firstSideInputText;
let secondSideInputText;
let thirdSideInputText;

let hasErrors = false;

const errorAlert = {
  title: {
    incorrectData: 'Введены некорректные данные',
    wrongTriangleType: 'Данные стороны не образуют треугольник'
  },
  error: {
    tooLongValue: 'Данное число не входит в диапазон допустимых значений',
    notNumber: 'Введено не числовое значение',
    notTriangle: 'Пожалуйста, введите корректные данные'
  }
};

const triangleTypes = {
  equilateral: "равносторонний",
  isosceles: "равнобедренный",
  default: "неравносторонний"
};

const showErrorAlert = (errorMessage, title = errorAlert.title.incorrectData) => {
  swal({
    type: "error",
    text: errorMessage,
    title
  });
};

const showSuccessAlert = (triangleType = triangleTypes.default) => {
  swal({
    type: "success",
    text: `Тип треугольника - ${triangleType}`, 
    title: "Определен тип треугольника", 
  });
};

const getInputs = () => {
  firstSideInputText = document.getElementById("firstSideInput").value;
  secondSideInputText = document.getElementById("secondSideInput").value;
  thirdSideInputText = document.getElementById("thirdSideInput").value;
};

const isTriangleIsosceles = (firstSide, secondSide, thirdSide) =>
    (firstSide === secondSide) || (firstSide === thirdSide) || (secondSide === thirdSide);

const isTriangleEquilateral = (firstSide, secondSide, thirdSide) => {
  return (firstSide === secondSide) && (firstSide === thirdSide) && (secondSide === thirdSide);
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
    if (!isValueSafeInteger(triangleSideValue)) {
      showErrorAlert(errorAlert.error.tooLongValue);
      hasErrors = true;
    }
  } else {
    showErrorAlert(errorAlert.error.notNumber);
    hasErrors = true;
  }
};

const checkTriangleSides = () =>
  [firstSideInputText, secondSideInputText, thirdSideInputText].forEach(side => checkSide(side));

const convertStringSideSizeToInt = (triangleStringSides) => triangleStringSides.map((side) => Number(side));

const checkTriangleType = () => {
  let sidesValue = 
    convertStringSideSizeToInt([firstSideInputText, secondSideInputText, thirdSideInputText]);

  if (isTriangle(...sidesValue)) {
    if (isTriangleEquilateral(...sidesValue)) {
      showSuccessAlert(triangleTypes.equilateral);
    } else if (isTriangleIsosceles(...sidesValue)) {
      showSuccessAlert(triangleTypes.isosceles);
    } else {
      showSuccessAlert(triangleTypes.default);
    }
  } else {
    showErrorAlert(errorAlert.error.notTriangle, errorAlert.title.wrongTriangleType);
  }
};

const recognizeTriangle = () => {
  getInputs();
  checkTriangleSides();
  if (!hasErrors) {
    checkTriangleType();
  }
  hasErrors = false;
};

$('#triangleInputForm').submit(() => {
  recognizeTriangle();
  return false;
});
