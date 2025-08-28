let a = "This is a Javascript"
console.log(a.length);


// Methods of String.

// 1) at()
let str = "Hello World";
console.log(str.at(0)); //first character
console.log(str.at(-1)); // last character


// 2) charAt()
let name = "Gowtham"
console.log(name.charAt(0)); // first character
console.log(name.charAt(4)); // 5th character 

// at() and charAt() are same but negative indexing is not allowed in charAt();

// 3) Concat()
let firstName = "Gowtham"
let lastName = "N"
console.log(firstName.concat(" ", lastName));


// 4) Includes() 
let sentence = "I am learning Javascript"
console.log(sentence.includes("va")); // true
console.log(sentence.includes("savaJ")); // false 
console.log(sentence.includes("I",0)); // true because it starts with I and given index is 0;
console.log(sentence.includes("I",1)); // false because it starts with I and given index is 1;


// 5) IndexOf() 
let fruit = "Apple, Banana, mango, Orange, Pineapple";
console.log(fruit.indexOf("mango")); // Prints the starting index of mango
console.log(fruit.indexOf("Orange")); // Prints the starting index of orange
console.log(fruit.indexOf("Banana",10)); // -1 because banana is not present after index 10

// 6) LastIndexOf()
console.log(fruit.lastIndexOf("Apple")); // prints the starting index of last apple
console.log(fruit.lastIndexOf("Pineapple")); // prints the starting index of pineapple
console.log(fruit.lastIndexOf("Banana",10)); // -1 because banana is not present before index 10    

// 7) Slice()
let hero = "AA, RC, NTR, MB, PB, PSPK";
console.log(hero.slice(0, 2)); // prints AA
console.log(hero.slice(4, 6)); // prints RC
console.log(hero.slice(-4)); // prints PSPK
console.log(hero.slice(8)); // prints NTR, MB, PB, PSPK
console.log(hero.slice(0, -4)); // prints AA, RC, NTR, MB, PB
console.log(hero.slice(-4, -2)); // prints PS

// 8) Split()
let colors = "Red, Green, Blue, Yellow, White";
console.log(colors.split(",")); // prints [ 'Red, Green, Blue, Yellow, White' ]
console.log(colors.split(",")); // prints [ 'Red', ' Green', ' Blue', ' Yellow', ' White' ]
console.log(colors.split("")); 

// 9) substring()
let lang = "Python, Java, C, C++, Javascript";
console.log(lang.substring(0, 12)); // prints Python, Java
console.log(lang.substring(10, 15)); // prints Java,
console.log(lang.substring(10)); // prints Java, C, C++, Javascript
console.log(lang.substring(-5)); // prints the whole string because negative indexing is not allowed in substring()
console.log(lang.substring(15, 10)); // prints Java, because it will swap the values if first value is greater than second value


// 10) toLowerCase() and  11) toUpperCase()
let city = "CHennai, BanGalORE, HydERABAD, MumBAI";
console.log(city.toLowerCase());
console.log(city.toUpperCase());


// 12) trim() , 13) trimStart() , 14) trimEnd()
let message = "             Hello World Javascript Welcome Here I Will Trim You.                     ";
console.log(message.trim()); // removes spaces from both ends
console.log(message.trimStart()); // removes spaces from start
console.log(message.trimEnd()); // removes spaces from end



// 15) toString()
let value = 12345;
console.log(value.toString()); // converts number to string
console.log(typeof value.toString()); // string


        // Task 1
// 15.1) Reverse of a String
let title = "JavaSCript Gowtham";
let Reverse = title.split("").reverse().join("");
console.log(Reverse); // htamwoG tpircSavaJ


let title2 = "mahtwoG ma I";
let reverse = title2.split("").reverse().join("");
console.log(reverse); // I am Gowtham

        // Task 2
// 15.2) Check Palindrome or not
let word = "madam";
let rev = word.split("").reverse().join("");
if (word === rev){
    console.log(" is a Palindrome");
}else {
    console.log(" is not a Palindrome");
    
}



        // Task 3
// 15.3) Check if a Word is a Palindrome or not
const isPalindrome = (mini) => {
    const cleanedMini = mini.trim().toLowerCase();
    const reversedMini = cleanedMini.split("").reverse().join("");
    return cleanedMini === reversedMini;
};
console.log(isPalindrome("MAdaM")); // true
console.log(isPalindrome("RaceCAr")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("  Level  ")); // true
console.log(isPalindrome("Gowtham")); // false
console.log(isPalindrome("Noon")); // true
console.log(isPalindrome("JavaScript")); // false

        // Task 4
// 15.4) Validate an Email Address
const email = "gowtham@gmail.com"
    if (email.includes("@") && email.endsWith("@gmail.com")){
        console.log("Valid Email");
        
    }else{
        console.log("Invalid Email");
    }
// Note: This is a simple validation. For more robust email validation, consider using regular expressions.

        // Task 5
// 15.5) Count the Number of Vowels in a String
const countVowels = (inputString) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of inputString) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("Gowtham")); // 2
console.log(countVowels("AEIOU")); // 5
console.log(countVowels("xyz")); // 0
console.log(countVowels("This is a sample string.")); // 6

        // Task 6
// 15.6) Find the Largest Word in a String
const findLargestWord = (inputString) => {
    const words = inputString.split(" ");
    let largestWord = "";
    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    return largestWord;
}
console.log(findLargestWord("I love programming in JavaScript")); // programming
console.log(findLargestWord("Gowtham is a software developer")); // developer
console.log(findLargestWord("This is a simple test case")); // simple
console.log(findLargestWord("Find the largest word here")); // largest
console.log(findLargestWord("Short and long words")); // words
console.log(findLargestWord("A quick brown fox jumps over the lazy dog")); // jumps