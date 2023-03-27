// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function sum(a,b){
  console.log("Sum = ", a + b)
}
sum(5,7)

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function sq(c){
  console.log("c^2 = ", c**2)
}
sq(3)

// 3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
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
  

// 4) вывести в консоль переменную-массив в которой будут все чётные числа. 
// Переменную возвращяет функция которая на вход принимает массив чисел.
// Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

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


// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
// Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a character"

function a_finding(a){
  let a_count = a.split("a").length - 1  
  if (a.split("a").length - 1){
    console.log(a_count)
  } else {
    console.log("No a character")
  }
  
}

a_finding("anastasia")

// 6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
// Элементы: Phone number field, CheckBox, SignIn Button.

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


// 7) Написать функцию которая на вход получает JSON а возвращяет XML

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
