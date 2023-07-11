//! Without parameters
// function sayHello(): string {
// 	return "Hello";
// }
// console.log(sayHello());
//! With paramaters
// function findPower(a: number, b: number): number {
// 	return a ** b;
// }
// console.log(findPower(2, 5));
//! Wihout return or void
// function logToConsole(): void {
//   console.log("This is void function, which doesn't return anything");
// }
// logToConsole();
//! Type
// type ownType = string;
// function sayHello(): ownType {
// 	return "Hello";
// }
// console.log(sayHello());
//! Function as a parameter(callback)
// type ownType = {
//   (a: number): number;
// };
// function foo(fn: Function): ownType {
// 	return fn();
// }
// console.log(foo(
// 	function randomNumber() {
// 		return Math.random();
// 	}
// ));
//! Object as a parameter
// type ownType = {
//   name: string;
//   founded: number;
// };
// const getData = (prop: ownType): string => {
// 	return `${prop.name} - ${prop.founded}`
// };
// console.log(getData({name: "webbrain", founded: 2020}))
//! new keyword
// function callback() {
//   return Date;
// }
// type ownType = {
//   new (): Object;
// };
// function getTime(fn: ownType): string {
//   return new fn().toString();
// }
// let res = getTime(callback());
// console.log(res);
//! Generics
// function setData<Type>(arr: Type[]) {
// 	return (value: Type) => {
// 		arr.push(value);
// 		console.log(arr);
// 	}
// }
// let stringArray = setData<string>([]);
// stringArray("Frontend");
// stringArray("Backend");
// stringArray("Mobile");
// let numberArray = setData<number>([]);
// numberArray(2);
// numberArray(3);
// numberArray(5);
//! Multiple dynamics
// function setData<Type, Output>(arr: Type[]) {
// 	return (value: Type): Output | number => {
// 		arr.push(value);
// 		console.log(arr);
// 		return 12;
// 	}
// }
// let stringArray = setData<string, number>([]);
// stringArray("Frontend");
// stringArray("Backend");
// stringArray("Mobile");
// console.log(stringArray("DevOps"));
//! Limitation with extends
// const getData = <Type extends {length: number}>(a: Type) => {
// 	console.log(a.length);
// }
// getData([1,2,3]);
// getData("webbrain");
//! Optional
// const sayHello = (name?: string, surname?: string):void => {
// 	console.log(`hello ${name ? name : ""} ${surname ? surname : ""}`);
// }
// sayHello();
// sayHello("Sardor");
// sayHello("Sardor", "Ibodov");
