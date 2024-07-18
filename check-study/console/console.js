function fullName(name, surname, obj) {
    if (obj) {
        console.log({name, surname});
    } else {
        console.log(name, surname);
    }
    return `${name} ${surname}`;
}

const data = [
    { id: 1, model: 'BMW', year: '2024', color: 'black'},
    { id: 2, model: 'TOYOTA', year: '2019', color: 'red'},
    { id: 2, model: 'RENAULT', year: '2016', color: 'white', maxspeed: '200'},
];

console.clear();
console.log('START');

console.log(' ');

// Стандартные варианты
console.log('1 - Hello, it is log');
console.info('2 - Hello, it is info');
console.error('3 - Hello, it is error');
console.warn('4 - Hello, it is warn');

// отображается при включении level=verbose
console.debug('5 - debug message');

console.log(' ');

// Стилизация выводимых сообщений
// Спецсимвол `%c` позволяет применить стили к последующему тексту
console.log('%c Error ', 'color: #fff; background: #d33f49;', 'Произошла ошибка');
console.log('%c Error: %c Произошла ошибка', 'color: #fff; background: #d33f49;', 'color: #ff2200; text-transform: uppercase; font-size: 16px', 'поясняющий текст без стилей');

console.log(' ');

// Вывод значений переменных через объект
console.log('Выводятся только значения');
console.log(fullName('Иван', 'Петров'));
console.log('Выводятся значения в объекте');
console.log(fullName('Иван', 'Петров', true));

console.log(' ');

// Запись через спецсимволы
// %s - текст
// %i или %d - целое число
// %f - число с плавающей точкой
// %o или %O - объект
const name = 'Andrew';
const years = 25;
console.log(`${name} is ${years} years old`);
console.log('%s is %i years old', name, years);

console.log(' ');

// Вывод объектов
console.log(data);
console.table(data);

console.log(data[0]);
console.table(data[0]);
console.dir(data[0]);

console.log(' ');

// Группировка
console.group('User');

console.log('userName', 'Andrew');
console.log('user old', 22);
console.groupEnd();

// Группировка со схлопнутой группой
console.groupCollapsed('User Collapsed');

console.log('userName', 'Andrew');
console.log('user old', 22);

console.group('Location');
console.log('address', 'Ulyanovsk');
console.groupEnd();
console.groupEnd();

console.log(' ');

let i = 0;
// Проверка времени выполнения
console.time('TIME');
for (i = 0; i < 10000; i++ ) {}
console.timeEnd('TIME');

console.log(' ');

function a() {
    function b() {
        function c() {
            console.trace('Trace');
        }
        c();
    }
    b();
}
a();

console.log(' ');
const arrNumbers = [1, 2, 10, 50, 100, 200, 550, 1600];
console.dir(arrNumbers);
arrNumbers.forEach((item) => {
    if (item > 50) {
        console.count('Large number');
    }
})
console.countReset('Large number');

console.log('END');
