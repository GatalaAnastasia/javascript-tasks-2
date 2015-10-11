'use strict';

var phoneBook=[]; 
/*
   Функция добавления записи в телефонной книге.
*/
module.exports.add = function add(name, phone, email) {
 if (validNumber(phone)&& validEmail(email))
    {phoneBook[phoneBook.length] = { name: name, phone: phone, email:email};
    return console.log('Контакт добавлен');}
else
   {return console.log('Контакт не добавлен, данные введены не корректно');}};
/*
   Функция проверки на валидность номера в телефонной книге.
*/

function validNumber(phone)
    {var valid1 = /^\+?\d{0,2}\s?\(?\d{3}\)?\s?\d{3}\s?\-?\d\s?\-?\d{3}$/;
    return valid1.test(phone);};
/*
   Функция проверки на валидность email в телефонной книге.
*/
function validEmail(email)
    {var valid2 = /^[\w.]+@[\w]+\.[a-z]{2,3}$/i;
    return valid2.test(email);};
/*
   Функция поиска записи в телефонной книге.
*/
module.exports.find = function find(query) {
  var index= findElem(query);
     if (query === '')
       { i=0;
        while (i<phoneBook.length) 
            {var elem = phoneBook[i];
             console.log(elem.name , elem.phone, elem.email);
             i++;}}
     else
        if (index.length === 0)
            {console.log('ничего не найдено')}
        else
            {i=0;
            while (i<index.length)
               {var elem = phoneBook[index[i]];
               console.log(elem.name , elem.phone, elem.email);
               i++;}}
  return index;
};


function findElem(query)
{var index = [];
  for (var i = 0; i < phoneBook.length; i++) {
       var element = phoneBook[i];
        if (element.name.indexOf(query) >= 0 ||
            element.phone.indexOf(query) >= 0 ||
            element.email.indexOf(query) >= 0) {
            index.push(i);
        }
    }
    return index;
return index;};
/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove =function remove(query) {
var index= findElem(query);
    if (query === '')
         { console.log ('Вы ничего не введи');}
    else
    if (index.length === 0)
        {console.log('По запросу ничего не найдено')}
    {i=0;
    while (i<index.length)
        {element = phoneBook[index[i]];
        console.log(element.name,'удален');
        phoneBook.splice(index[i],1);
        i++;}}
return index;
};

/*
   Функция импорта записей из файла (задача со звёздочкой!).

module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).

module.exports.showTable = function showTable(filename) {

    // Ваша чёрная магия здесь

};
*/