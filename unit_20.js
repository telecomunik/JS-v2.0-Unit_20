
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
    document.querySelector('.out-1').innerHTML += e.key;
    return e.key;
}

document.querySelector('.i-1').onkeypress = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').innerHTML += e.keyCode + '&nbsp';
    return e.keyCode;
}

document.querySelector('.i-2').onkeypress = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        document.querySelector('.out-3').innerHTML = false;
    }
    else if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 90) {
        document.querySelector('.out-3').innerHTML = true;
    }
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    if (event.keyCode >= 97 && event.keyCode <= 122 || event.keyCode >= 65 && event.keyCode <= 90) {
        document.querySelector('.out-4').innerHTML += event.key.toLowerCase();
    }
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
    if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 90) {
        document.querySelector('.out-5').innerHTML += event.key.toLocaleUpperCase();
    }
}

document.querySelector('.i-5').onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
    event.preventDefault();
    document.querySelector('.i-6').value += event.key.toLowerCase();
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = [];
function t7(e) {
    a7.push(e.key);
    console.log(a7);
    document.querySelector('.out-7').innerHTML += a7[Math.floor(Math.random() * Math.floor(a7.length))];
}

document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
    const a8 = {
        "i": 1,
        "o": 0,
        "l": 7
    }
    for (let key8 in a8) {
        if (key8 == event.key) {
            return document.querySelector('.out-8').innerHTML += a8[key8];
        }
    }
    document.querySelector('.out-8').innerHTML += event.key;
}

document.querySelector('.i-8').onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let numPress = 0;
function t9(e) {
    if (e.keyCode == 40) {
        numPress++;
        document.querySelector('.out-9').innerHTML = numPress;
    }
}

document.querySelector('.i-9').onkeyup = t9;



// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let w10 = 75;
let h10 = 75;

function t10(e) {
    if (e.keyCode == 40 || e.keyCode == 38) {
        console.log(e.keyCode);
        h10++;
        document.querySelector('.block').style.height = h10 + 'px';
        document.querySelector('.block img').style.height = h10 + 'px';
    }
    else if (e.keyCode == 37 || e.keyCode == 39) {
        console.log(e.keyCode);
        w10++;
        document.querySelector('.block').style.width = w10 + 'px';
        document.querySelector('.block img').style.width = w10 + 'px';
    }
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11_down(event) {
    if (event.code == 'CapsLock') {
        document.querySelector('.capslock').classList.toggle('activeCapsLock');
    }
    else {
        document.querySelector('.key[data="' + event.code + '"]').classList.add('active');
    }
}

function t11_up(event) {
    document.querySelectorAll('.key').forEach(function (element) {
        element.classList.remove('active');
    });
}

document.querySelector('.i-11').onkeydown = t11_down;
document.querySelector('.i-11').onkeyup = t11_up;

