<div>
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
</div>
 
 ### JS_HM_1
 ___
 
1. Создать переменную “item_1”
2. Присвоить переменной item_1 цифру 5.
3. Вывести в консоль item_1.
```
let item_1 = 5
console.log(item_1)
```
4. Создать переменную “item_2”
5. Присвоить переменной item_2 цифру 3.
6. Вывести в консоль item_2.
```
let item_2 = 3
console.log(item_2)
```
7. Создать переменную “item_3”
8. Присвоить переменной item_3 сложение item_1 и item_2.
9. Вывести в консоль item_3.
```
let item_3 = item_1 + item_2
console.log(item_3)
```
10. Создать переменную “item_4”
11. Присвоить переменной item_4 строку “Yolochka”
12. Вывести в консоль item_4.
```
let item_4 = "Yolochka"
console.log(item_4)
```
13. Вывести в консоль сложение item_3 и item_4.
```
console.log(item_3 + " + " + item_4)
```
14. Вывести в консоль умножение item_3 и item_4.
```
console.log(item_3 * item_4)
```
15. Создать переменную “item_5”
16. Присвоить переменной item_5 переменную item_3
```
let item_5 = item_3
```
17. Создать переменную item_6.
18. Создать переменную item_6_type
19. Присвоить переменной item_6 значение 15
20. Присвоить переменной item_6_type тип переменной item_6
21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
```
let item_6 = 15
let item_6_type = (typeof item_6)
console.log("item_6 ==", item_6, "item_6_type ==",item_6_type)
```
22. Создать переменную item_7 и в ней преобразовать item_6 в String.
23. Создать переменную item_7_type
24. Присвоить переменной item_7_type тип переменной item_7
25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——
```
let item_7 = String (item_6)
let item_7_type = typeof(item_7)
console.log("item_7 ==", item_7, "item_7_type ==",item_7_type)
```
26. Создать переменную “age_1” и присвоить ей значение 10
27. Создать переменную “age_2” и присвоить ей значение 18
28. Создать переменную “age_3” и присвоить ей значение 60
```
let age_1 = 10
let age_2 = 18
let age_3 = 60
```
29. Создать if в котором будите проверять значение переменной age_1
30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
33. Иначе выводите “Technical work”.
```
if (age_1 < age_2){
   console.log ("You don't have an access cause your age is ", age_1 , "It's less then")
} else if(age_1 >= age_2 && age_1 < age_3){
  console.log ("Welcome")
} else if(age_1 > age_3){
  console.log ("Keep calm and look Cultural channel")
} else{
  console.log ("Techical work")
}
```

 ### JS_HM_2
 ___
1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
```
function sum(a,b){
console.log("Sum = ", a + b)
}
sum(5,7)
```
2) Сделать функцию которая вернёт в консоль квадрат переданного числа
```
function sq(c){
console.log("c^2 = ", c**2)
}
sq(3)
```
3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
```
{"name":И,
 "surname":Ф,
 "middlename":О}

function p_data(И,Ф,О){
let persons_data = {
  "name":И,
  "surname":Ф,
  "middlename":И
}
console.log(persons_data, typeof(persons_data))
console.log(JSON.stringify({"name":И, "surname":Ф, "middlename":О}, null, " "))
  }
  p_data("Pavel", "Turonok", "Sergeevich")
```  
4) Вывести в консоль переменную-массив в которой будут все чётные числа. 

Переменную возвращяет функция которая на вход принимает массив чисел.

Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"
```
function even_find(...m){
  let result= []
  for(let i = 0; i < m.length; i += 1 ){
      if (m[i] % 2 == 0){
        result.push(m[i]);
      }
  }
  if(result.length>0){
      console.log (result);
  } else {
    console.log('No even numbers')
  }
}
even_find(17, 15, 5, 7)
```
5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.

Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a character"
```
function a_finding(a){
  let a_count = a.split("a").length - 1  
  if (a.split("a").length - 1){
    console.log(a_count)
  } else {
    console.log("No a character")
  }
  
}

a_finding("anastasia")
```
6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
Элементы: Phone number field, CheckBox, SignIn Button.
```
function web_ui_test(element){
  let Phone_field = `Ввод номера телефона, 
                      Пустое поле ввода, 
                      Ввод максимального колличества символов, 
                      Ввод номера телефона спец. символами - + (), 
                      Ввод букв (латиница/киррилица)`;

  let CheckBox = `Проверка checkbox на checked, 
                  Проверка checkbox на состояние выбран/не выбран, 
                  Отменить/снять checkbox,
                  Попытка отправки формы без выбора CheckBox`;

  let SignIn = `Проверка типа данных,
                Ограничения: допустимая длина (верхние и нижние лимиты), пробелы, скрытые символы,
                Учет регистра,
                Ограничение количества попыток,
                Соответствие логина и пароля: ввести неправильный логин с правильным паролем, затем наоборот, 
                Отправка формы с пустыми полями,
                Двухфакторная аутентификация,
                Деактивация кнопки входа до полной загрузки,
                Двойной ввод пароля при регистрации,
                Проверка на разные типы инъекций — HTML, SQL, XSS`       

      if (element == "Phone namber field"){
              console.log("Phone number tests - ", Phone_field)
      } else if (element == "CheckBox"){
        console.log("CheckBox tests - ", CheckBox)
      } else if (element == "SignIn Button"){
              console.log("SignIn Button tests - ", SignIn)
      }
}

web_ui_test("SignIn Button")
```
7) Написать функцию которая на вход получает JSON а возвращяет XML
```
function json_to_xml(json_obj) {
  let xml = "<root>";
  for (let key in json_obj) {
      if (json_obj.hasOwnProperty(key)) {
          xml += "<" + key + ">" + json_obj[key] + "</" + key + ">";
      }
  }
  xml += "</root>";
  return xml;

  function formatXML(xml, tab){
    let formatted = ",indent=";
    tab = tab||'\t';
    xml.split(/>\s*</).forEach(function(node){
      if (node.match(/^\/\w/)) indent = indent.substring(tab.lenght);
      formatted += indent +'<' + node + '>\r\n';
      if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab;
    });
    console.log(formatXML(json_obj))
    return formatted.substring(1, formatted.length-3)
  }
  
}

let json_obj = {name: "John", age: 30, city: "New York"};
console.log(json_to_xml(json_obj))
json_to_xml(json_obj)
```
