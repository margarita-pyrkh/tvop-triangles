const errorAlert = {
  title: 'Введены некорректные данные',
  error: {
    tooLongValue: 'Данное число не входит в диапазон допустимых значений',
    notNumber: 'Введено не числовое значение',
    notInteger: 'Введено не целое число'
  }
};

export default class AlertService {
  constructor() {}

  showErrorAlert = (errorMessage) => {
    swal({
      type: "error",
      title: errorAlert.title,
      text: errorMessage
    });
  };
  
  showSweetAlert = () => {
    swal(
      "Good job!", 
      "You clicked the button!", 
      "success"
    );
  };
}