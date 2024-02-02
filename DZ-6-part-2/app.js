//todo 2) Реализуйте проект счетчик. Будет инпут и две кнопки: + и -.
// При клике на +, значение инпута должно увеличиваться на 1. При клике на - наоборот уменьшаться на 1.
// Также реализуйте следующую логику:
// если число больше нуля, то оно должно быть зеленого цвета, если ноль, то серого, если меньше нуля, то красного.


const input = document.querySelector('#input')
const plus = document.querySelector('#plus')
const mines = document.querySelector('#mines')

    plus.onclick = () => {
        input.value++
      if (input.value >= 1) {
          this.classList.add('greenNum')
      }
}

    mines.onclick = () => {
        input.value--
       if (input.value <= -1) {
           this.classList.add('redNum')
       }
}

mines.onclick = () => {
    input.value--
    if (input.value === 0) {
        this.classList.add('grayNum')
    }
}





