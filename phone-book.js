'use strict';

var phoneBook=[]; 
/*
   Функция добавления записи в телефонной книге.
*/
module.exports.add = function add(name, phone, email) {
    if (validNumber(phone)&& validEmail(email)&& !(name === '' || typeof(name) === 'undefined') )
        {phoneBook.push({ name: name, phone: formattingPhone(phone), email:email});
        return 0;}
    else
       {return console.log('Контакт не добавлен, данные введены не корректно');}};
/*
   Функция проверки на валидность номера в телефонной книге.
*/

function validNumber(phone)
    {var valid1 = /^\+?\d{0,2}\s?\d{3}\s?\d{3}\s?\-?\d\s?\-?\d{3}$/;
    var valid2 = /^\+?\d{0,2}\s?\(\d{3}\)\s?\d{3}\s?\-?\d\s?\-?\d{3}$/;
 return  (valid1.test(phone)||valid2.test(phone));};
/*
   Функция проверки на валидность email в телефонной книге.
*/
function validEmail(email)
    {var valid3 = /^\w{1}[\w.-]*@[\w-]+\.[a-z]{2,3}$/i;
     var valid4 = /^\w{1}[\w.-]*@[а-я]{1}[а-я-]*\.[а-я]{2,3}$/i;
    return (valid3.test(email)||valid4.test(email));};
/*
   Функция поиска записи в телефонной книге.
*/
module.exports.find = function find(query) {
var index= findElem(query);
    if (query === ''|| typeof(query)==='undefined')
       { var i=0;
            while (i<phoneBook.length) 
                {var elem = phoneBook[i];
                console.log(elem.name +',' + elem.phone+ ','+elem.email);
                i++;}
        }
    else
        if (index.length === 0)
            {console.log('ничего не найдено')}
        else
            {i=0;
            while (i<index.length)
               {var elem = phoneBook[index[i]];
               console.log(elem.name +','+ elem.phone+','+ elem.email);
               i++;}
            }
  return index;
};


function findElem(query)
{var index = [];
    for (var i = 0; i < phoneBook.length; i++) {
        var element = phoneBook[i];
        if (element.name.indexOf(query) >= 0 ||
            element.phone.indexOf(query) >= 0 ||
            element.email.indexOf(query) >= 0) 
        {
        index.push(i);
        }
    }
return index;};
/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove =function remove(query) {
var index= findElem(query);
    if (query === ''|| typeof(query)==='undefined')
        { console.log ('Вы ничего не ввели');}
    else
        if (index.length === 0)
            {console.log('По запросу ничего не найдено')}
        else
           {var i=0;
           while (i<index.length)
               {var element = phoneBook[index[i]];
               console.log(element.name +'удален');
               phoneBook.splice(index[i],1);
               i++;}
            }
return index;
};
   /* Форматирование номеров*/
   
function formattingPhone(phone)
{
    var lstNumberOfPhone = (phone.match(/\d/g));
    switch (lstNumberOfPhone.length)
       {case 10:
           var newPhone='+7 (***) ***-*-***';
           for (var i=0;i < 10;i++)
              { newPhone=newPhone.replace(/\*/,lstNumberOfPhone[i]);}
           return newPhone;
        break;
        case 11:
           var newPhone='+* (***) ***-*-***';
           for (var i=0;i < 11;i++)
              { newPhone=newPhone.replace(/\*/,lstNumberOfPhone[i]);}
           return newPhone;
        break;
        case 12:
            var newPhone='+** (***) ***-*-***';
            for (var i=0;i < 12;i++)
       {newPhone=newPhone.replace(/\*/,lstNumberOfPhone[i]);}
            return newPhone;
        break;}
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