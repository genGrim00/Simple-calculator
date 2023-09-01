

function displayInPage(){
  document.querySelector('.js-calculation')
  .innerHTML = `${calculation}`;
}


let calculation = localStorage.getItem('calculation')  || '';

function updateCalculation(x) {
  calculation += x;
  localStorage.setItem('calculation',calculation);
  displayInPage();
}

function clearCalculation() {
  calculation = '';
  localStorage.setItem('calculation', calculation);

}

function calculate() {
  calculation = eval(calculation);
  localStorage.setItem('calculation', calculation);
  displayInPage();
}