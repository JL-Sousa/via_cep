function State() {
  this.btnSave = null;
  this.btnClear = null;

  this.inputCep = null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity = null;

  this.errorCep = null;
  this.errorNumber = null;
}

const state = new State();

export function init() {
  state.inputCep = document.forms.newAddress.cep;
  state.inputStreet = document.forms.newAddress.street;
  state.inputNumber = document.forms.newAddress.number;
  state.inputCity = document.forms.newAddress.city;
  state.inputCep = document.forms.newAddress.cep;
  state.inputCep = document.forms.newAddress.cep;

  state.btnClear = document.forms.newAddress.btnClear;
  state.btnSave = document.forms.newAddress.btnSave;

  state.errorCep = document.querySelector('[data-error="cep"]');
  state.errorNumber = document.querySelector('[data-error="cep"]');

  console.log(state);
}
