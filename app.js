// Task 1 - Notes for JS Evaluation Predictions
// 1. 4 + 4 / 2 Prediction: 6 Result: 6
// 2. (2 + -7) * 3 Prediction: -15 Result: -15
// 3. 101 % 10 Prediction: 1 Result: 1
// 4. 12 - 4 % 3 Prediction: 11 Result: 11
// 5. true && false Prediction: false Result: false
// 6. true && !(false || false) Prediction: true Result: true
// 7. !true && !(false || false) Prediction: false Result: false
// 8. 'cat' + 'dog' Prediction: catdog Result: 'catdog'
// 9. 2 + 'pizza' Prediction: 2pizza Result: '2pizza'
// 10. 2.5 * 'fish' Prediction: undefined Result: NaN *****
// 11. 5 >= 11 Prediction: false Result: false
// 12. 5 === 5.0 Prediction: false Result: true *****
// 13. 7 !== 7.1 Prediction: true Result: true
// 14. 5 + 5 > 8 Prediction: true Result: true
// 15. 6 + 6 !== 12 Prediction: false Result: false
// 16. 2 > 1 || false Prediction: true Result: true
// 17. 'true' === true Prediction: true Result: false *****
// 18. 10 % 2 === 0 Prediction: true Result: true
// 19. 21 % 2 === 0 Prediction: false Result: false
// 20. 21 % 2 !== 0 Prediction: true Result: true
// 21. 21 % 2 === 1 Prediction: true Result: true
// 22. 12 % 3 === 0 Prediction: true Result: true
// 23. 9 % 3 === 0 Prediction: true Result: true
// 24. 14 % 3 === 0 Prediction: false Result: false
// 25. 'new york'[0] Prediction: n Result: n
// 26. 'new york'[1] Prediction: e Result: e
// 27. 'san francisco'[2 * 3] Prediction: a Result: a
// 28. 'engineering'[3].toUpperCase() Prediction: I Result: 'I'
// 29. 'engineering'.indexOf('G') Prediction: undefined Result: -1 *****
// 30. 'engineering'.indexOf('neer') Prediction: undefined Result: 4 *****
// 31. 'engineering'.indexOf('r') > -1 Prediction: true Result: true
// 32. 'science'.indexOf('x') === -1 Prediction: false Result: true ****

// List 3 expressions that surprised you or gave unexpected results, why?
//1. 'engineering'.indexOf('neer')- I did not expect the results of this one because I thought that as the method searched the string for 'neer' it would fail to output an index value as I thought 'neer' would have a range of indexes. Thinking over it I realized that indexOf probably works slightly differently for a string and would just output the first index it finds for the string.
//2. 'true' === true- This surprised me because I thought that since 'true' is a populated string, it would evaluate as truthy and then compare that to the boolean true and output as true.
//3. 5 === 5.0  I thought that this would output as false because I thought JS would see that '5' and '5.0' are different, but I now see that since JS is a loose language, that since it evaluates that 5.0 is the same is 5, the result is true.

// List 2 exprsssions you felt comfortable interpreting at a glance.
//1. 'engineering'[3].toUpperCase()
//2. !true && !(false || false)
// List 1 expression you are still 'shaky' on, why?
//'engineering'.indexOf('G')- I am shaky on this one because I am having a hard time understanding why a character that doesn't exist in the string has an index value instead of undefined. I understand that an index of -1 does not exist in the grand scheme of things, but I am not sure of the logic as to why that is the result of the evaluation and not undefined.




// Task 2 - Practice JS Basics
// 1 - Prediction: 10, 10
//     Results- 10, 10

// 2 - Prediction: false, true
//     Results- false, true

// 3 - Prediction: 4, bootCamp, c! *****
//     Results- 4, C, c!
// Was incorrect because I misread the code and thought it would print out the entire string, not just the uppercased letter.

// 4 - Prediction: p, 23
//     Results- p, 18 *****
// Was incorrect because I thought it would find the index of that last char and did not realize it would find the index of the first instance of the last char.

// 5 - Prediction: 

// 6 - Prediction: 

// 7 - Prediction: 

// 8 - Prediction: 

// 9 - Prediction: 

// 10 - Prediction:  


//// Task 3 - Conditionals Practice 
// 1 - Prediction: 'younger than 30'
//     Results- younger than 30

// 2 - Prediction: 'short string', 'string starts with p'
//     Results- short string, starts with p

// 3 - Prediction: 'divisible by 3'
//     Results- divisible by 3

// 4 - Prediction: 'divisible by 3', 'divisible by 5'
//     Results- divisible by 3, divisible by 5

// 5 - Prediction: 'starts with a capital!
//     Results- starts with a capital!

// 6 - Prediction: 'negative', 'even'
//     Results- negative, even

// 7 - Prediction: 

// 8 - Prediction: 

// 9 - Prediction: 

// 10 - Prediction: 

//// Task 4 - Conditionals Muscle Memory
// 1 - Prediction: 
let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num>5) {
    console.log('if');
}

let num = 11;
if (num > 5) {
    console.log('if');
}

// 2 - Prediction: 
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if') 
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else { 
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if')
} else {
    console.log('else');
}

// 3 - Prediction: 
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else')
} else {
    console.log('else')
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if(num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

// 4 - Prediction: 

// 5 - Prediction: 

// 6 - Prediction: 

// 7 - Prediction: 

// 8 - Prediction: 

// 9 - Prediction: 

// 10 - Prediction:  


//// Task 5 - Function Muscle Memory
// 1 - Prediction: 
function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
// 2 - Prediction: 
function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero'
    }
}
console.log(checkNumber(5));

function checkNumber(num) {
    if(num>0) {
        return 'positive';
    } else if(num<0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

// 3 - Prediction: 
function fizzbuzz1(max) {
    for (let i = 0; i < max; i+=1) {
        if(i%3 === 0 && i%5 !== 0){
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i = 0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        }else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

function fizzbuzz1(max) {
    for(let i=0; i<max; i+=1) {
        if(i%3 === 0 && i%5 !== 0) {
            console.log(i);
        } else if(i%5 === 0 && i%3 !== 0) {
            console.log(i);
        }
    }
}

// 4 - Prediction: 
function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }
    return newSentence;
}

// 5 - Prediction: 

