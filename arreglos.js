//Instanciá un nuevo arreglo y guardalo en la variable listaDeSuper Usa 
//la notación con corchetes y agregá los productos que tienes que comprar. 
//Ej listaDeSuper[0]="sal"
//Accedé al primer elemento de tu lista usando la notación de corchetes.
//Crea una variable llamada ultimoElemento y asignale un número que represente 
//el índice del último elemento de tu lista de super. (length - 1 ??)
//Accedé a ese último elemento usando la variable ultimoElemento

var listaDeSuper = [] //aca digo que es un arreglo

listaDeSuper[0] = 'sal'
listaDeSuper[1] = 'agua'
listaDeSuper[2] = 'aceite de oliva'
listaDeSuper[3] = 'aceto'
listaDeSuper[4] = 'fernet'
listaDeSuper[5] = 'coca-cola zero'

var primero = listaDeSuper.shift()
console.log(primero)

var ultimoelemento = listaDeSuper.pop()
console.log(ultimoelemento)




//Ejercicio: Lista de Súper (2)
//Vuelve a la lista del ejercicio anterior y haz lo siguiente:
//Usa .push() y agrega dos nuevos productos a tu lista.
//Usa .unshift() y agrega dos productos al principio de tu lista.
//Qué tan largo es el arreglo en este punto?
//Usa .pop() y sacá un producto y guardalo en una variable que se llame noHabia
//Usa .shift() y sacá un objetivo y guárdalo en otra variable que se llame comprado
//Qué tan largo es el arreglo ahora?

var listaDeSuper = [] //aca digo que es un arreglo

listaDeSuper[0] = 'sal'
listaDeSuper[1] = 'agua'
listaDeSuper[2] = 'aceite de oliva'
listaDeSuper[3] = 'aceto'
listaDeSuper[4] = 'fernet'
listaDeSuper[5] = 'coca-cola zero'

listaDeSuper.push('azafran') //agrege dos al final, me agrega solo arroz, no azafran
listaDeSuper.push('arroz')


console.log(listaDeSuper) //me imprime todo, me borro azafran

listaDeSuper.unshift('lavandina') //agregue dos productos al prinicpio de lista
listaDeSuper.unshift('jabon en polvo')

console.log(listaDeSuper)

var noHabia = listaDeSuper.pop() //no habia cuenta desde abajo pop, me agarra el ultimo
var comprado = listaDeSuper.shift() //compre jabon en polvo, me toma sal como primero?

console.log('no habia ' + noHabia)
console.log('solo compre ' + comprado)

//Lista de Súper (3)
//Vuelve a la lista del ejercicio anterior y haz lo siguiente:
//Usa un For Loop y muestra cada ítem de listaDeSuper en la consola
//Refactoreá tu código de manera que el for loop viva adentro de una 
//función que se llame logItems que tome un arreglo como input (argumento) e 
//imprima sus elementos en la consola.
//Invoca logItems dos veces, pasando la listaDeSuper la primera vez y 
//otro arreglo que quieras la segunda vez (puedes crear uno nuevo).
//Refactoreá el código de logItems para que use .forEach() en vez de un for loop.

var listaDeSuper = [] //aca digo que es un arreglo

listaDeSuper[0] = 'sal'
listaDeSuper[1] = 'agua'
listaDeSuper[2] = 'aceite de oliva'
listaDeSuper[3] = 'aceto'
listaDeSuper[4] = 'fernet'
listaDeSuper[5] = 'coca-cola zero'

function logItems(input) {
    input == i;

    for (var i = 0; i < input.length; i++) { //defino aca la variable y le digo desde i
        console.log(input[i], i); //i que vale 0, me imprima la lista y sume en cada vuelta a i
    } //hasta que i valga como el largo (length) de lista de super
}

logItems(listaDeSuper);

//OPCION CON FOR EACH, esta opcion me evita el for que cree dentro de la funcion

var listaDeSuper = [] //aca digo que es un arreglo

listaDeSuper[0] = 'sal'
listaDeSuper[1] = 'agua'
listaDeSuper[2] = 'aceite de oliva'
listaDeSuper[3] = 'aceto'
listaDeSuper[4] = 'fernet'
listaDeSuper[5] = 'coca-cola zero'

function logItems(input) {
    input==input.forEach();
}

logItems(listaDeSuper); //no me sale!!!!!

//no se me ocurre que mas hacer, hacer un arreglo como crear uno nuevo???


//Usa .split(' ') en poemaDesordenado y guárdalo en un arreglo arregloDesordenado
//Instancia un nuevo arreglo arregloOrdenado
//Mientras que el largo de arregloDesordenado sea mayor que 0, 
//saca el primero y el último elemento y guardalo en arregloOrdenado.
//Te conviene usar un for loop o un while? Piensa en como sería la condicional
//Crea la variable poemaOrdenado y dale el valor de un string utilizando 
//arregloOrdenado y el método .join(' ').

var poemaDesordenado = "roses red are bacon crispy i bacon love and is blue violets are"

var arregloDesordenado = poemaDesordenado.split (" ");

var arregloOrdenado = []

while (arregloDesordenado.length>0){
    var ultimo = arregloDesordenado.pop();
    arregloOrdenado.push(ultimo);
    

}
arregloOrdenado=arregloOrdenado.join();
console.log (arregloOrdenado)

//Crea la función printReverse, que tome un arreglo como argumento y 
//loggie en la consola cada elemento, uno por uno, de ese arreglo en orden 
//inverso(No tienes que invertir el arreglo).
//Ahora crea la función reverser, que tome un arreglo como argumento 
//y devuelva un nuevo arreglo invertido.
//Aquí puedes testear tus funciones: NO ME FUNCIONA

function printReverse (array1){
    var i=0;
    array1==i;
    for (i; i.length>array1; i++) {
        console.log (array1[i])
    }

}

function Reverser (array2){
    var x=0
    array2==x;
    for (x; x.length<array2; x--) {
        var ultimo = array2.pop();
        console.log (ultimo);
    }
   
}

printReverse(["a", "b", "c"])

printReverse([1, 2, 3, 4])

reverser(["a", "b", "c"]) 
reverser([1, 2, 3, 4]) 


//Crea la función isUniform que tome un arreglo 
//como argumento y devuelva true si todos los elementos del arreglo 
//son idénticos, de lo contrario, debería devolver false. Tu función no debería, 
//a menos que sea necesario, recorrer todo el arreglo si no es idéntico, 
//al momento que encuentra una diferencia debería cortar. Puedes testear tu código con esto:
//isUniform([1, 1, 1, 1]) // true
//isUniform([1, 2, 1, 1]) // false
//isUniform(["a", "b", "p"]) // false
//isUniform (["b", "b", "b"]) // true REVISAR

var array = []

function isUniform(array){
    for ( var i=0; i<array.length;i++){
        if (array[i] == array [i-1]){
            return true;
        }else return false;
    }


}



//Escribe una función biggest_smallest que tome como entrada un arreglo de números,
// y usando .forEach(),que devuelva un arreglo 
//que contenga el menor número en la posición cero y el mayor número en la posición 1.

var numeros = []

function biggest_smallest(numeros){
    var mayor = 0;
    var i = 0;
    while (i<=numeros.length()){
        if (numeros.forEach(i)<=0){
            numeros.unshift()=numeros.forEach(i);
        }else if (numeros.forEach(i)>mayor){
            mayor=numeros.forEach(i);
        }
    i++
    }

    numeros.push()=mayor;

} 

biggest_smallest(numeros)



//Haremos un programa que nos organice en un arreglo las tareas del usuario. 
//Un prompt nos preguntará que queremos hacer. Si ponemos "new", nos permitirá 
//agregar una tarea nueva. Si ponemos "list" los enlistará en la consola. 
//Si ponemos "delete", nos permitirá eliminar la tarea que queramos. 
//Si ponemos "quit" cerrará la app.
//En un nuevo documento en el tag srcipt inicia un nuevo arreglo tareas.
//Preguntale al usuario que quiere hacer, y guardalo en la variable input.
//Si responde "list", vamos a mostrar el arreglo de tareas en la consola
//Si input es "new" devolverá un nuevo prompt, que preguntará que quiere agregar a la lista.
//La respuesta de ese prompt se agregará al arreglo tareas.
//Ahora vamos a agregar un loop a nuestro código en el cual mientras input no sea igual 
//a "quit", seguiremos preguntando por comandos, y ejecutando el código que escribimos mas arriba.
//Una vez que termina el loop, debería aparecer un mensaje en la consola que 
//avise que el app se cerró.
//Utilizando un forEach o un For Loop, refactorea tu comando "list", 
//para que no muestre el arreglo entero en pantalla, 
//sino que itere sobre cada tarea, y lo imprima con el número de índice por delante, 
//podés poner unos asteriscos arriba y abajo de la lista para darle mas estilo. 
//Ejemplo de la impresión en la consola:
//**********
//0: Ir al Super
//1: Comprar Un Perro
//2: Darle de Comer al Perro
//**********
//Ayuda: Para tomar el índice, podemos o utilizar el método indexOf(), 
//o agregar un segundo argumento al forEach y este tendrá el valor del índice.

//Agrega el comando "delete", el cual le pases un número y elimine el 
//elemento del arreglo en ese número de índice(splice). Una vez removido mostrá 
//en consola el elemento removido con un mensaje.
//Refactoriemos:No vamos a cambiar la funcionalidad de nuestra app, 
//pero si en como está ordenada, haciendo un código más prolijo. 11. 
//Simplemente escribí la acción de cada comando en una función aparte,
// y solo ejecutá esa función, por ejemplo:
//if(input === "list"){
 // listTareas()
//}

var respuesta = prompt('Que queres hacer? New/list/Delete/Quit :')

var tarea = []

while (respuesta!='Quit'){


if (respuesta.toLowerCase() == "New"){
    tarea = prompt('cual es la tarea?: ')
    tarea = tarea.unshift()

}else if (respuesta.toLocaleLowerCase() =='list'){
    for (var i=0; i<tarea.length(); i++){
        console.log(i)
        console.log(tarea[i])
    }

}else if (respuesta.toLowerCase() == 'delete'){
    var numero = prompt ('ingrese que tarea quiere eliminar (numero): ')
    tarea.slice(numero)=" "

}

}

alert('la app se cerro')