const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener("click", handleClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener("keydown", handleResetByEnter)

function handleClick(event) {
  event.preventDefault()

  let inputNumber = document.querySelector("#inputNumber")
  if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    alert('A aplicação só permite números entre 0 e 10. Tente novamente!')
  } else if (inputNumber.value == null || inputNumber.value == '') {
    alert('O campo não pode estar vazio. Tente Novamente!')  
  } else {
    if (Number(inputNumber.value) === randomNumber) {
      toggleScreen()
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }
    xAttempts++
  }
  inputNumber.value = "" 
}

function handleResetClick() {
  randomNumber = Math.round(Math.random() * 10)
  toggleScreen()
  xAttempts = 1  
}
function handleResetByEnter(e) {
  if (e.key === 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }  
}
function toggleScreen() {
  screen1.classList.toggle('hide')  
  screen2.classList.toggle('hide')
}
