var value = prompt('Введите свой месяц')
var value2 = prompt('И введите свой день рождения')

var month = 'Январь'
var month1 = 'Февраль'
var month2 = 'Март'
var month3 = 'Апрель'
var month4 = 'Май'
var month5 = 'Июнь'
var month6 = 'Июль'
var month7 = 'Август'
var month8 = 'Сентябрь'
var month9 = 'Октябрь'
var month10 = 'Ноябрь'
var month11 = 'Декабрь'


if (value === month && value2 <= 31 && value2 >= 1) {
    alert( month + ' ' + value2 + ' - ' + 'Водолей!')

}else if (value === month1 && value2 <= 31 && value2 >= 1) {
    alert( month1 + ' ' + value2 + ' - ' + 'Рыбы!')

}else if (value === month2 && value2 <= 31 && value2 >= 1) {
    alert( month2 + ' ' + value2 + ' - ' + 'Овен!')

}else if (value === month3 && value2 <= 31 && value2 >= 1) {
    alert( month3 + ' ' + value2 + ' - ' + 'Телец!')

}else if (value === month4 && value2 <= 31 && value2 >= 1) {
    alert( month4 + ' ' + value2 + ' - ' + 'Близнецы!')

}else if (value === month5 && value2 <= 31 && value2 >= 1) {
    alert( month5 + ' ' + value2 + ' - ' + 'Рак!')

}else if (value === month6 && value2 <= 31 && value2 >= 1) {
    alert( month6 + ' ' + value2 + ' - ' + 'Лев!')

}else if (value === month7 && value2 <= 31 && value2 >= 1) {
    alert( month7 + ' ' + value2 + ' - ' + 'Дева!')

}else if (value === month8  && value2 <= 31 && value2 >= 1) {
    alert( month8 + ' ' + value2 + ' - ' + 'Весы!')

}else if (value === month9  && value2 <= 31 && value2 >= 1) {
    alert( month9 + ' ' + value2 + ' - ' + 'Скорпион!')

}else if (value === month10 && value2 <= 31 && value2 >= 1) {
    alert( month10 + ' ' + value2 + ' - ' + 'Стрелец!')

}else if (value === month11 && value2 <= 31 && value2 >= 1) {
    alert( month11 + ' ' + value2 + ' - ' + 'Козерог!')

}else if (value2 === '31'){
    alert('Не доступные данные!')

}else {
    alert('Что-то пошло не так, проверьте свои данные!')
}