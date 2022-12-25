/*запитати у користувача кількість годин;*/
const hours  = +prompt('Hi, can you tell me what hours?', ''); 

/*порахувати, скільки секунд у цій кількості годин;*/  

if (!isNaN(hours) && hours > 0) {

const result = 3600 * hours
    alert(result)
}else {
    alert('You entered the wrong number')
}
