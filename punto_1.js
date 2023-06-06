/* 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
 */

const nums = [];

for (let i = 0; i < 10; i++){
    nums[i] =  Math.round(Math.random() * 50 );
}
alert(nums);