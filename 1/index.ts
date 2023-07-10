// let obj = { name: "wba", founded: 2020 };
// console.log(obj.name, obj.founded);

//! Declaring primitives
// let title: string = "webbrain";
// let number: number = 2020;
// console.log(title);
// console.log(number);

//! Any
// let anyData: any = "webbrain";
// anyData = true;
// console.log(anyData);
// let numbers: any = [1, 2, 3];
// numbers = "Anything you want";

//! Tipi aytilmasa, avtomatik tarzda biriktirilgan tipni oladi
// let some = "webbrain";
// some = "IT";
// some = 123; // error

//! Declaring non-primitives
//? Array
//? 1
// let stringArray: string[] = ["Sardor"];
// stringArray.push("Ollomurod");
// stringArray.push("Dilshod");
// stringArray.push(123); // error
// console.log(stringArray);
//? 2
// let stringArray: any[] = ["Sardor"];
// stringArray.push("Ollomurod");
// stringArray.push(false);
// stringArray.push(123);
// console.log(stringArray);
//? 3
// let specificArray : [string, number] = ["Webbrain", 2020];
// specificArray = [2020, "Webbrain"] // error
// specificArray.push(123); // not error
// console.log(specificArray);
//? 4
// let emptyArr: [] = [];
// emptyArr.push(1); // error
// emptyArr = [1]; // error

//! Union
//? 1
// let numOrStr: number | string = 2020;
// numOrStr = "webbrain";
//? 2
// let arr: [number | string] = [2020];
// let arr: [number | string] = [2020, "webbrain"]; //error
// arr = ["webbrain"];
//? 3
// let arr: any[number | string] = [2020, "webbrain", true];
// console.log(arr);

//! Tuple
// let tuple: [number, string][] = [
//   [2020, "webbrain"],
//   [2021, "academy"],
//   [2022, "IT"],
//   [2023, "center"],
// ];
// console.log(tuple);

//! Enum
//? 1
// enum test {
//   a,
//   b,
//   c,
//   d,
// }
// console.log(test.a, test.b, test.c, test.d);
//? 2
// enum test {
//   a = 5,
//   b,
//   c,
//   d,
// }
// console.log(test.a, test.b, test.c, test.d);
//? 3
// enum test {
//   a,
//   b,
//   c = 5,
//   d,
// }
// console.log(test.a, test.b, test.c, test.d);
//? 4
// enum languages {
// 	uz = "Uzbek",
// 	ru = "Russian",
// 	en = "English",
// }
// console.log(languages.uz, languages.ru, languages.en);

//! Type assertion
// let id: any = 12345678;
//? 1
// let copyId = <string> id;
// console.log(copyId); // 12345678
// copyId = 827654321; // error
// copyId = "12345678";
// console.log(copyId); // "12345678"
//? 2
// let copyId = id as string;
// console.log(copyId);
