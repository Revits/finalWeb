const navbarBrand = document.querySelector('.navbar-brand');
var newDiv = document.createElement('div');

navbarBrand.addEventListener('mouseenter', function(){
    document.querySelector('.navbar-brand').appendChild(newDiv);
    newDiv.classList.add('animate__animated', 'animate__fadeInLeft', 'blue-line');
})

navbarBrand.addEventListener('mouseleave', function(){
    newDiv.classList.remove('animate__animated', 'animate__fadeInLeft', 'blue-line');
})


// const blueLine  = document.querySelector('.blue-line');

// blueLine.addEventListener('mouseover', function(){
//     blueLine.classList.remove('blue-line')
// });

// blueLine.addEventListener('mouseover', function(){
//     blueLine.classList.add('animate__animated', 'animate__fadeInLeft', 'blue-line-visible')
// });

// blueLine.addEventListener('mouseleave', function(){
//     blueLine.classList.remove('animate__animated', 'animate__fadeInLeft')
// });