const printText = (text,func1) => {
    let finalString = func1(text);
    console.log(finalString);
} 

const addAmp = text =>  text = text + "&"; 


let text = "hi buddy";
printText(text,addAmp);


const give5 = (num,func2) => {
    let final = func2(num);
    console.log(final);
}

const operate = num => num/4;

give5(60,operate);

//ADDING FUNCTION TO ARRAYS
let arr1 = {
 name: "kushagra",
 language: "python",
 doCoding : (name,lang) => {
     console.log(`${name} is learning ${lang}`);
 },
};

arr1.doCoding(arr1.name,arr1.language);
//above line is an example of function inside an array.
