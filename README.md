# Test case with Webdriverio - Mocha - Chai
Proyecto base para pruebas unitarias mamalon

## Requisitos base 
* [Node.js (npm)](https://nodejs.org/es/) >= v10.14.1
* [Git](https://git-scm.com/) >= v2.20.0
* Editor de text de alto nivel 
  * [Visual code](https://code.visualstudio.com/) >= v1.40.2 (de preferencía)
  * [Atom](https://atom.io/) >= 1.41
  * [Brackets](http://brackets.io/) >= 1.14
  * [Sublime Text 3](https://www.sublimetext.com/3) >= v3211
  * [WebStorm](https://www.jetbrains.com/webstorm/) >= v193 (Editor fifi neo liberal de pago)
* [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAz53vBRCpARIsAPPsz8Xp6MDX4vxBariQIk1hq-PR2VkMrhG6l-6pWyan2S8pRubLvJHcOsEaAr56EALw_wcB&gclsrc=aw.ds) >= v78
* **Un chingo de ganas porque es un montón**

## Index
* Instalación del proyeco
* Conceptos básicos Git
* Conceptos básicos de Vanilla JavaScript
* Estructura del proyecto
* Webdriverio 
  * Selectores
  * Funciones básicas
* Chai (assert)

## Instalación del proyeco
1. Clonar repositorio
```
> git clone https://github.com/luish00/Webdriverio-moka-chai.git
```
2. Instalar las dependencias
```
> cd Webdriverio-moka-chai
> npm install
```
3. Correr el proyecto
```
> npm run wdio-start
```
<br />

 Para un proyecto desde cero pueden ver la documentación [aquí](https://webdriver.io/docs/gettingstarted.html), en windos cuando vean `./` seria  lo mismo a poner toda la ruta `c:/user/..` por ejemplo:

```
linux:
    > ./node_modules/.bin/wdio config -y
Windos:
    > c:/proyectos/webdriverio/test/node_modules/.bin/wdio config -y
```

_Nota:_ comandos para comprobar si tienen todo instado, despues de instalar podría pedir reiniciar.
```
> node --version
> git --version
```

## Conceptos básicos de git
Git es un sistema de control de versiones open source diseñado para controlar proyectos desde pequeños a grandes.

### Herramientas para usar git 
* [Gitkraken](https://www.gitkraken.com/)
* [Sourcetree](https://www.sourcetreeapp.com/)
* **Command Prompt  (cmd)** como los hombres (aquí no seremos muchos pero si machos)

### Comandos básicos de git en consola
```
> git clone         // Clona un proyecto
> git status        // Muestra los cambios actuales del directorio
> git add .         // Agrega todos los cambios al stage local
> git commit -m     // Agrega un comentario a tu archivos agregados 
> git branch        // Muestra todas las ramas actuales
> git push          // Pusha los cambios locales al servidor.
> git pull          // Trae los cambios del servidor a tu rama local
> git checkout      // Cambia de rama con -b cambia y crea una rama nueva
> git reset --hard  // Elimina TODOS tus cambios actuales no comiteados
```

En git existen dos ramas base, `master` que es la rama donde esta el código funcional y `develop` que es la rama de de sarrollo. Ademas a eso existen otras ramas `feature` donde se estará trabajando individualmente cada desarrollador en su tarea actual 

*Git flow flujo*
![Git flow](https://marcgg.com/assets/blog/git-flow-before.jpg "Git flow")

Ejemplo de un flujo de trabajo:
#### 1. Te asignan una tarea "Login test case"
#### 2. Clonas el repositorio (De no tener lo)
```
> git clone url_repo
> cd carpeta_repo
```
#### 2. Creas tu rama de desarrollo.
> _Nota:_ debes de estar en la rama `develop` y no tener cambios.
```
> git branch 
* develop
master
> git checkout -b feature/login-test-case
Switched to a new branch 'feature/login-test-case'
```
 #### 3. Hacer tus cambios, crear tus js, etc, etc.
 #### 4. Agregar tus archivos nuevos/modificados al stage local
 (Los pasos 3 y 4 pueden repetirse n veces si es necesario )
```
> git status 
Untracked files:
M app.js
new file: specs/test/loginTest.js

> git add .

> git status
(en letras verdes)
M app.js
new file: specs/test/loginTest.js

> git commit -m "Login test case created"
[feature/login-test-case 084f130] Login test case created

> git push origin feature/login-test-case
c7573c5..cf971cf  feature/login-test-case -> feature/login-test-case
```

#### 5. Hacer el Pull Request.
Ir a su repositorio git (De donde lo clonaron) > Ir a la parte donde dice Pull request > dar click en el boton de **[New pull request]** y debería quedar configurado de la siguiente manera: 

base: development ⬅ compare: feature/login-test-case

> _Nota:_ en algunos casos como en GitLab o Bitbucket se les llama **Merge request** en vez de **Pull request** como en GitHub

Para mas información sobre git pueden ir a este link [soy un link](https://git-scm.com/docs/git#_git_commands)

Si lo prefieren pueden usarn un ide para manejar git, aquí hay un tutorial de como usar GitKraken [soy un link](https://support.gitkraken.com/)

## Conceptos básicos de Vanilla JavaScript
### Declarar variables
Existen cuatro formas de declarar variables en js 
```js
// Variable global no recomendable usar
var variableGlabal = 'holi';
// Constante, si algo es declarado const su valor no puede cambiar
const pi = 3.14159;
// Variable mas fifi local, por "estandar" usar en vez de var
let variableLocal = 'holi'; 
// Este tipo de variable es similar a let pero dentro de una clase
this.variableDeClase = 'holi';
```

### Operadoes 
```js
+       // suma
-       // resta
*       // multiplicación
=       // asignación
==      // igualación simple (no compara tipo, no recomendable usar)
===     // igualación de tipo 'identico a'
!       // negación, !true === false
!==    // negación 'diferente a'
```

### Tipo de datos
Js es debilmete tipado, aun así existen tipos de variables
```js
// Datos primitivos

// Incluye numeros negativos y positivos 
let int = 42;
// Números imprecisos con punto decimal, ambos dos son exactamente igual en js en otros lenguajes varía sólo la presición
let float = 3.14159;
let duobles = 3.14159;
// Cadenas de texto, usar comillas simples de prefencía al declarar cadenas de texto (los string no son datos primitivos pero yolo)
let string = 'Cadena simple'; //good
let string = "Cacena"; 
// Bool o boolean, son datos binarios con sólo dos posibles valores verdadero o falso
let bool = true/false;

// Datos complejos

/*
Un Objeto es conjunto de propiedades relacioneados agrupados con un estructura llave valor.

La llave no debería ser un numero entero, si es posible pero intentar no hacer lo.
El valor puede ser cualquier otro tipo de dato incluyento otro objecto.
*/
let object = { key: value }; // good
let object = { 'key': value }; // bad, no genera error pero esta feo
let user = { 
  age: 27, 
  firstName: 'Luis', 
  isRegio: false,
  lastName: 'Arredondo',
}

> console.log('name', user.firstName); // Output "Luis"

// Colección de datos o lista, puede contener cualquier tipo de dato y n cantidad. Recordad, los arreglos empiezan en 0.
let array = [];
let primeNumbers = [2, 3, 5, 7, 9, 11];
let days = ['Monday', 'Other monday', 'Other other monday']; 
// (No genera error pero sí crees necesitar algo así será mejor que te tomes una cheve y re-organizes tus ideas)
let capirotada = [ 1, 'two', 3, false, 5]; // bad

// Agregar datos a un arreglo
primeNumbers.push(13);

// Sacar datos de un array
primeNumbers[3] // Output 7


// Remover el ultimo elemento
days.pop(); // Output 'Other other monday' removed

// Remover el primer elemento de un array
days.shift(); // Output 'Monday' removed

// Saber el tamaño de un array
days.length; // Output 3


// En js se pueden hacer variables de funciones 
const myFunction = function() { ... };
const myFunction = () => { ... }; // Más elegancía ES6
```

 \* Link's para más información de métodos del objeto [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array) y el objeto [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String). 
<br />
 \* Del objero String les recomiendo ver los métodos [.charAt](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charAt), [.conca](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/concat), [.includes](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/includes), [.indexOf](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/indexOf), [.replace](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/replace), [.splice](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/slice), [.split](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/split), [.substr ](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr), [.toLowerCase](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toLowerCase)

### Sentencias de control de flujo
#### Condicíon `if`
Evalua una condición de tipo `bool` de ser verdará ejecutará el código que este dentro o, en caso de estar presente, ejecutará el código que este en el `else`.

Estructura: 
```js
if (condicion) {
  // Si la condición es true 
} else {
  //Si la condición es false 
}
```
Ejemplos de condiciones:
```js
let name = 'juan' 

if (name === 'juan') {
  // entra
}

if (name === 'Juan'){
  // no entra
}

if (name.length > 3) {
  // entra
}
```

### Condición `swich`
Evalua una condición de tipo `string` o `int` pero con multiple casos de uso (en vez de usar una cantidad `n` de `if`);

Estructura:
```js
switch (condición) {
  case caso1: {
    // código
     break;
   } 

  case caso2: {
     // código
     break;
   }

  default: {
     // código
   }
}
```

### Functions
Una función es un trozo de código que se encarga de realizar una tarea en especial.

```js
// bad, formato viejo
mYfunction = function(args) {
   return value; // no es requerido si la función no retorna nada
}

// good 
myFunction(args) {
  return vale; // no es requerido si la función no retorna nada
}

//ES6, formato más actual
myFunction = () => {
   return vale; // no es requerido si la función no retorna nada
}
```

Ejemplos: 
```js
sumNumber(num1, num2) {
   return num1 + num2;
}

log(key, foo) {
   console.log(key, foo);
}

let sum = sumNumber(2, 4); // sum almacena 6
log('La suma es: ', sum); // Output 'La suma es: 6'
```

## Estructura del proyecto
* models
  *  getQuoteModel.js 
* pages
  * quote
    * getQuote.page.js
    * yourPlan.page.js
    * paymentInfo.page.js
  * ...
* specs
  * test
    * test.js
* app.js
* package.json
* wdio.config.js

#### models
Carpeta donde hay medelos/objetos con datos contanstes 
#### pages
[Page Object](https://webdriver.io/docs/pageobjects.html)s Models (por Mocha), carpeta donde van clases en forma de `Page` una por pagina y deben tener el la nomenclatura similar a myPageLogin`.page.js`.

Ejemplo base de una page:
```js
// ./modles/pages/myPageLogin.page.js
class MyPageLogin {
  constructor() { // Constructor inicializa datos de clase
    this.variableDeCalse = 'Soy una variable de clase';
  }

  get username() {
    return $('#username');
  }

  get password() {
    return $('#password');
  }

  get flash() {
    return $('#flash');
  }

  open() {
    browser.url('login');
  }

  login(user, password) {
    // good fifi
    this.username.setValue(user);
    this.password.setValue(pass);
    
    // good 
    $('#username').setValue(user);
    $('#password').setValue(pass);

    $('#login-button').click();
  }

  submit() {
    $('#login-button').click();
  }
}

module.exports = MyPageLogin; // <-- exportar mi pagina para usar
```

### specs 
Carpeta de reportes tipo Spec (reportes por consola), para mas tipos de reportes ver este [link](https://github.com/amiya-pattnaik/webdriverIO-with-mochaBDD)

Estructura base de un reporte tipo Spec

```js
// login.spec.js
const { expect } require('chai');
const LoginPage require('../../pages/myPageLogin.page.js'); // <-- Inport page's
const loginPage = new LoginPage(); // <-- Crear variable

describe('login form', () => {
  // Caso de prueba 1 (usando los compentes directamente) good
  it('should deny access with wrong creds', () => {
    loginPage.open()
    loginPage.username.setValue('foo')
    loginPage.password.setValue('bar')
    loginPage.submit()

     expect(loginPage.flash.getText()).to.contain('Your username is invalid!')
  })

  // Caso de prueba 2 (usando metodo login) good
  it('should allow access with correct creds', () => {
    loginPage.open()
    loginPage.login('tomsmith', 'SuperSecretPassword!')

  expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!')
  })
})
```

### app.js
Archivo de configuraciones (internas) de la aplicación
### pagackage.json
Archivo de liberías utilizado por `npm` o `yarn` para instalar las dependencias del proyecto. 

Entre las cosas ha destacar serían dos, la parte de `dependencies` que es donde estan las librerías/sdk's usados por el proyectos y `scripts` que son, literalmente su nombre, scripts custom creados para fácilitar algunos comandos entre ellos el de correr el proyecto. Para utilizar un sprint se us `npm run mi-script`.
### wdio.conf.js
Archivo de configuración del proyecto de Webdriver i/o. 

Si quiren configurar un nuevo archivo de configuración pueden correr el script  
```
npm run wdio-config
```
o sí es un proyecto nuevo 

```
> cd ./node_modules/.bin/
> wdio config -y
```

(para más detalles ir a [este link](https://webdriver.io/docs/options.html)).

# Webdriver i/o (con Mocha Framework)
Next-gen WebDriver test framework for Node.js.

## Selectores 
Para encontrar elementos enel [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) (dentro de una pagina web) usaremos el acceso directo `$` o `$$`, la diferencía varía entre el scppe de elementos, y usaremos selectores para ellos.

Los selectores puedes, o no, asignarse a variables 

#### Comando $
El comando corto de `findElement` para buscar un elemento visible en la pagina.
```js
$(selector)
 
 or

const myElement = $(selector);
```

#### Comando $$
Comand corto de `findElements` para buscar multiples elementos en una pagina.
```js
$$(selector)
 
 or

const myElements = $$(selector)
```

Ejemplo practio:
```html
<html>
  <h1>My page<h1>
  <ul id="menu" class="drop-down-menu">
    <li><a href="../login">Login</a></li>
    <li><a href="/user">Usuarios</a></li>
    <li><a href="/user/profile">Profile</a></li>
  </ul>
  <body id="body">
    <from class="login-from">
      <spam class="label bold">Login</spam>
      <spam class="label italic">Wellcome</spam>

      <div class="row col3">
        <spam class="label">Nombre</spam>
        <input class="input-from" id="name" />
      <div>
      <div class="row col3">
        <spam class="label password">Constraseña</spam>
        <input class="input-from" id="password" type="password" />
      <div>

      <button class="btn-submint-blue" type="submit" value="Login"/> 
    </from>
  <body>
<html>
```
### Selector por etiqueta/s (tag name)
Busca elementos por tipo de etiquita
```js
// usage $('tag-name')
$('body') // elemento <body />
```

### Selector por id 
Busca elementos por el atributo `id`
```js
// usage $(#id) 
const inpName = $('#name')  // elemento input#name

console.log(inpName.getValue()) // outputs: "Luis"
```

## Selector por clase CSS
Busca elementos por css query (puede ser mediante 1 o varias clases)
```js
// usage $(.class) or $(.class1.class2)
$('.btn-submint-blue')  // elemento button.btn-submint-blue
$('.label.password')    // elemento spam.label.password

$('.btn-submint-blue').click(); // output: da click en el botón
```

## Selector por texto de enlace 
Busca elementos por el texto que contengan entre su etiquita (no funciona con input)
```js
$('=Constraseña')   // elemento spam

const pass = $('=Constraseña').getText(); // guardamos el valor deltexto en una variable
console.log(pass);  // ouputs: "SuperPassMamalon123$"
```

### Selector por texto centrado (similar al anterior pero más espesifico)

```js
// usage $('tag=certrain text')
$('spam=Constraseña')   // elemento spam
```

### Selctores convinados
Se pueden hacer convinaciones entre los selectores para hacer busquedas mas complejas en caso de ser necesario o no tener un `id` en el elemento deseado.

Siempre se empieza desde padre a hijo en orden de izquierda derecha respectivamente.

Elemento \<a\> dentro del elemento de un \<li\> con texto "profile" dentro del elemento \<ul\> con clase drop-down-menu

```html
 <ul id="menu" class="drop-down-menu">
    ...
    <li>
      	<a href="/user/profile">Profile</a> <<< this is it
    </li>
  </ul>
``` 
```js
const liLogin = $('ul.drop-down-menu li a=Profile');  

console.log(liLogin.getAttribute('href')) // outputs: "/user/profile"

// other examples
const inpPass = $('input#password')         // elemento input#password
const spamName = $('from spam.label.bold'); // elemento spam.label.bold
const btn = $('from.login-form button');    // elemento button
```

### Selectores con $$
```js
const menus = $$('#menu li');   // elementos li
 
console.log(menus.length);  	  // outputs: 3
console.log(menu[1].getText())  // outputs: "Usuarios"
```

Se pueden combinar los comandos de selección
```js
$$('#menu li').$('a=profile')   // element a 
$$('#menu li')[2].$('a')        // element a 
$('from').$$('div')[1].$('input.password')  // element input.password
```

Para mas detalle del uso de selector ir a [este link](https://webdriver.io/docs/selectors.html).

## Chai Assertion Library
API reference

Write your own test expressions.


`assert(expression, message)`
* @param { Mixed } expression to test for truthiness
* @param { String } message to display on error

```js
assert('foo' !== 'bar', 'foo is not bar');
assert(Array.isArray([]), 'empty arrays are arrays');
```

`.isOk(object, [message])`
* @param { Mixed } object to test
* @param { String } message

Asserts that `object` is truthy.
```js
assert.isOk('everything', 'everything is ok');
assert.isOk(false, 'this will fail');
```

`.strictEqual(actual, expected, [message])`
* @param { Mixed } actual
* @param { Mixed } expected
* @param { String } message

Asserts strict equality (`===`) of actual and expected.

```js
assert.strictEqual(true, true, 'these booleans are strictly equal');
```

Para mas información ir a [este link](https://www.chaijs.com/api/assert/#method_assert)