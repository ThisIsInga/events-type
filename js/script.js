// объекты события

let objType = document.querySelector('.objects-type');

objType.addEventListener('click', function(e){
    console.log(e.type)
});

let objTarget = document.querySelector('.objects-target');

objTarget.addEventListener('click', function(e){
    console.log(e.target);
});

let objCurrentTarget = document.querySelector('.objects-currentTarget');

objCurrentTarget.addEventListener('click', function(e){
    console.log(e.currentTarget);
});

// всплытие

let block1 = document.querySelector('.surface-block1');
let block2 = document.querySelector('.surface-block2');
let block3 = document.querySelector('.surface-block3');

block1.addEventListener('click', function(e){
    console.log('1 block')
});

block2.addEventListener('click', function(e){
    console.log('2 block')
});

block3.addEventListener('click', function(e){
    console.log('3 block')
});



// делегирование событий

let delegation = document.querySelector('.delegation');

delegation.addEventListener('click', function(e){
    console.log('делегирование работает!');
});


// отмена действий браузера

let link = document.querySelector('.link');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('ничего не переходит');
}, {'passive': false});
// {'passive': true} - что бы можно было перейти по ссылке


// основы событий мыши

let downUp = document.querySelector('.mouse-DownUp');

downUp.addEventListener('mousedown', function(e){
    console.log(`зажата клавиша с помощью ${e.which} кнпоки`)
});
downUp.addEventListener('mouseup', function(e){
    console.log(`отпущена клавиша с помощью ${e.which} кнпоки`)
});


let overUp = document.querySelector('.mouse-OverOut');

overUp.addEventListener('mouseover', function(e){
    // console.log('наведенно');
    console.log(e.target);
    console.log(e.relatedTarget);
});
// target - элемент на который курсор переходит
// relatedTarget - элемент с которого куроср ушел
overUp.addEventListener('mouseout', function(e){
    // console.log('курсор ушел');
    console.log(e.target);
    console.log(e.relatedTarget);
});
// target - элемент с которого куроср ушел
// relatedTarget - элемент на который курсор переходит


let EnterLeave = document.querySelector('.mouse-EnterLeave');

EnterLeave.addEventListener('mouseenter', function(e){
    console.log('наведенно');
});
EnterLeave.addEventListener('mouseleave', function(e){
    console.log('курсор ушел');
});


let move = document.querySelector('.mouse-move');

move.addEventListener('mousemove', function(e){
    move.innerHTML = 
    `clientX - ${e.clientX} <br> clientY - ${e.clientY}`;
});




// основы событий клавиатуры


document.addEventListener('keydown', function(e){
    console.log(`Нажата клавиша ${e.code} ${e.key}`);
    console.log(e.repeat)
});

// e.repeat - для автоматического повторения (true/false)

document.addEventListener('keyup', function(e){
    console.log(`Отжата клавиша ${e.code} ${e.key}`);
});

document.addEventListener('keydown', function(e){
    if(e.code == 'KeyC' && (e.ctrlKey || e.metakey)){
        console.log('Вы нажали KeyC!');
    };
});



// событие скролла

document.addEventListener('scroll', function(e){
    console.log(`${scrollY}px`);
});





// событие загрузки страницы

// DOMContentLoaded - когда браузер прошрузил все кроме img и стилей (document)
// load - бразуре загрузил все вместе с img и стилями (window)

let image = document.querySelector('.image')

document.addEventListener('DOMContentLoaded', function(){
    console.log(document.readyState);
    console.log('DOM загружен!')
    console.log(image.offsetWidth);
});

window.addEventListener('load', function(){
    console.log(document.readyState);
    console.log('Страница загружена!')
    console.log(image.offsetWidth);
});


// когда пользователь хочет уйти со страницы:

window.addEventListener('beforeunload', function(e){
    e.preventDefault();
    e.returnValue = '';
});