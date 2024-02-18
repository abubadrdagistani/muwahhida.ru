/* Урок 2
 || - или
 && - и
var numik = 5;
var umar = false;

 if(numik >= 6 || umar == true) {
	 console.log("Yes");
 } else if (numik == 9 || umar == false) {
	 console.log("9");
 } else if (numik <= 1) {
	 console.log("Упс");
 } else {
	 console.log("Нет");
 } 
 
  Тоже самое, что и if, только проще
 
var jek = "Корпус";

 switch(jek) {
   case "kill":
    console.log(Нет);
	break;
	
   case "Корпус":
    console.log("Все правильно!");
	break;
	  default:
	  console.log("Не правильно!");
 }
 
 var arr = [1, 3, 4, 5.5];
 arr[3] = "Пять целое пять";
 console.log(arr); // Выводит в консоль измененное значение среди написанных массивов
 console.log(arr.length); // Обшее значение в массиве
 
 var matrix = [
	[4, 5, 6], ["Магомед", 4], ["Hle"]
	];
	
	matrix[1][0] = "Слон";
	console.log(matrix);
	
	for(var i = 100; i > 10; i /= 2) {
		console.log(i);
	}
	
	var j = 5000;
	while(j >= 50) {
	console.log(j);
		j -= 50;
		
	}

var arr = [6, 5, 4, 9, "Text"];

 for(var i = 0; i < arr.length; i++) {
	arr[i] *= 2;
	
	console.log("Элемент " + (i+1) + ": " + arr[i]);
	
 }
 
 */
 
 // alert("Бомба погода!"); //Выводит всплывающее окно на сайт

// confirm("Вы тут?");
/* var data = confirm("На хате да?");
if(data){
	alert("Ты красава");
}*/

/* var data = prompt("Сколько вам лет?", 22);
console.log("Его возраст: "+ data +" лет");
*/

/*var hinkal = null;
if(confirm("Вы уверены?")) {
	hinkal = prompt("Введите имя");
	alert("Привет "+hinkal);
} else {
	alert("Отмена так отмена");
}*/
function summa(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) 
		sum += arr[i];
		
		console.log(sum);
	}
	
	var array = [7, 9, 9];
	
	summa(array);
	
	function test() {
		const x = 5;
		const y = 10;
		console.log(x + y);
	}
	
	function hello() {
		function test2 () {
			console.log("Test2")
		}
		test2();

		console.log("Privet");
		test();
	}

	function kurban() {
		var hom = 15 + 15;
		console.log(hom);
	}

/* hello();
test();
kurban();*/

function time() {
	const currentDate = new Date();
	console.log(currentDate);
}

time();