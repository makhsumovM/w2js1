<div style ="font-size: 50px;  text-align:center;
box-shadow: 0px 0px 5px 1px white; padding: 20px; margin: 40px"># Строки в JavaScript</div>



Строки (strings) в JavaScript представляют собой последовательности символов, заключенные в кавычки. Они могут быть созданы с использованием одинарных (') или двойных (") кавычек или строки с обратными кавычками (``).



Примеры создания строк:
```javascript
let str1 = 'Пример строки';
let str2 = "Еще один пример";
```
А это пример обратнной строки :
```javascript
let name = "World";
let greeting = `Hello ${name}!`;
console.log(greeting); // Выведет "Hello World!"
```

## Основные методы строк:
#  1.  length
 Метод length возвращает длину строки.

пример :
```javascript
let str = "Пример строки";
console.log(str.length); // Выведет 14
```
#  2.  charAt(index)

Метод `charAt()` возвращает символ по указанному индексу в строке.


Пример :
```javascript
let str = "Hello";
console.log(str.charAt(1)); // Выведет "e"
```

##  Ещё есть получше под названием `at()`
<span style="font-size: 18px; color:">`at()`</span> более универсален и может использоваться на любом массиве, а не только на строках. Однако на момент последнего обновления (2022 год), метод at() еще не широко поддерживается во всех браузерах, в отличие от charAt(), который поддерживается практически всеми браузерами.

```javascript 
let str = "Hello";
console.log(str.at(1)); // Выведет "e"
```


# 3. `concat()`
Метод `concat()` используется для объединения двух или более строк и создания новой строки. Он не изменяет исходные строки, а возвращает новую строку, содержащую объединение исходных строк.
```javascript
let str1 = "Hello";
let str2 = "World";
let combined = str1.concat(" ", str2);
console.log(combined); // Выведет "Hello World"
```

# 4. `join()`

Метод `join()` применяется к массивам и используется для объединения всех элементов массива в строку с использованием указанного разделителя. Если разделитель не указан, элементы массива объединяются без пробелов.

```javascript
let arr = ["apple", "banana", "orange"];
let str = arr.join(", ");
console.log(str); // Выведет "apple, banana, orange,"
```

# 5. `replace()`


Метод `replace()` используется для замены подстроки в строке новой подстрокой. Он не изменяет исходную строку, а возвращает новую строку с выполненными заменами. Если в строке несколько вхождений подстроки, будет заменено только первое вхождение.

Синтаксис метода replace():
```javascript
//str.replace(searchValue, newValue)
```
`searchValue`: подстрока или регулярное выражение, которое нужно заменить.

`newValue`: подстрока, которой будет заменена найденная подстрока.

```javascript
let str = "Hello, world!";
let newStr = str.replace("world", "planet");
console.log(newStr); // Выведет "Hello, planet!"
```
Если вам нужно заменить все вхождения, вы можете использовать регулярное выражение с флагом `"g"`  (глобальный поиск), или `replaceAll()` например:
```javascript
let str = "apple, orange, banana, orange";
let newStr = str.replace(/orange/g, "apple");
console.log(newStr); // Выведет "apple, apple, banana, apple"
```

# 6. `split()`

Метод `split()` используется для разделения строки на массив подстрок на основе указанного разделителя. Он принимает один аргумент - разделитель, который может быть строкой или регулярным выражением, и возвращает массив подстрок.

`split()` также может использоваться с пустой строкой в качестве аргумента, чтобы разделить строку на массив отдельных символов:

```javascript
let str = "hello";
let arr = str.split("");
console.log(arr); // Выведет ["h", "e", "l", "l", "o"]
```

# 7. `substring()`

Метод `substring()` используется для извлечения части строки на основе индексов начала и конца подстроки. Он принимает два аргумента: индекс начала и индекс конца подстроки (не включая сам индекс конца). Если индекс конца не указан, то метод вернет подстроку от начального индекса до конца строки.

```javascript
str.substring(startIndex, endIndex)
```
```javascript
let str = "Hello, world!";
let subStr = str.substring(7, 12);
console.log(subStr); // Выведет "world"
```


# 8. `slice()`
Метод `slice()` используется для извлечения части строки на основе индексов начала и конца подстроки. Он возвращает новую строку, содержащую копию части исходной строки.


Синтаксис:
```
str.slice(startIndex, endIndex)
```
* `startIndex`: Индекс начала подстроки. Если отрицателен, он отсчитывается с конца строки. Если не указан, возвращается вся строка.

* `endIndex`: Индекс конца подстроки (не включая сам символ по этому индексу). Если отрицателен, он отсчитывается с конца строки. Если не указан, возвращается часть строки до конца.

```javascript 
let str = "Hello, world!";
let subStr1 = str.slice(7, 12); // Возвращает "world"
let subStr2 = str.slice(-6); // Возвращает "world!"
let subStr3 = str.slice(7); // Возвращает "world!"
let subStr4 = str.slice(-6, -1); // Возвращает "world"
let subStr5 = str.slice(7, -1); // Возвращает "world"
let subStr6 = str.slice(); // Возвращает "Hello, world!"
```

# 9. `toLowerCase()` и `toUpperCase()`
  Метод `toLowerCase()` преобразует все символы строки в нижний регистр и возвращает 
новую строку.
```javascript
let str = "Hello, World!";
let lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // Выведет "hello, world!"
```
Метод `toUpperCase()` преобразует все символы строки в верхний регистр и возвращает новую строку.
```javascript
let str = "Hello, World!";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Выведет "HELLO, WORLD!"
```
Эти методы полезны, когда вам нужно сравнивать строки без учета регистра или привести строку к единому регистру для сравнения.

# 9. `trim()` 
Метод `trim()` удаляет пробельные символы с начала и конца строки и возвращает новую строку.
```javascript
let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Выведет "Hello, World!"
```
# 10. `includes()` 
Метод `includes()` проверяет, содержит ли строка заданную подстроку, и возвращает `true`, если содержит, и `false`, если не содержит.
```
str.includes(searchString) - Синтаксис
```
```javascript
let str = "Hello, world!";
console.log(str.includes("world")); // Выведет true
console.log(str.includes("universe")); // Выведет false
```

# 11. `toString()`
это метод, который преобразует значение в строку.
```javascript
let num = 123;
let str = num.toString(); // Преобразует число в строку
console.log(str); // Выведет "123"
```

# 11. `indexOf()`


Метод indexOf() используется для поиска подстроки в строке. Он возвращает индекс (позицию) первого вхождения заданной подстроки в строке. Если подстрока не найдена, метод возвращает -1.
```
str.indexOf(searchValue, startIndex) - Cинтаксис
```
* `searchValue`: подстрока, которую нужно найти в строке.


* `startIndex` (необязательный): индекс, с которого начинается поиск в строке. Если он не указан, поиск начинается с начала строки.
```Javascript
let str = "Hello, world!";
let index = str.indexOf("o", 5); // Начинает поиск с индекса 5, возвращает 7
```

# 12. `repeat()`
Метод repeat() создает и возвращает новую строку, состоящую из указанного количества копий исходной строки.
```
str.repeat(count) - Синтаксис
```
```javascript
let str = "Hello";
let repeatedStr = str.repeat(3); // Возвращает "HelloHelloHello"
```
```javascript
let str = "abc";
let repeatedStr = str.repeat(2.5); // RangeError: Invalid count value

```