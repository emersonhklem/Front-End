//Declarando variáveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal')

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);


});


//Abrindo e fechando informações de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

//Abrindo e fechando o modal de orçamento

for (var i = 0; i < toggleModal.length; ++i) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in')


    })
}

//Animando elementos com scroll com Waypoints   
var myScrollDown = document.querySelector('.jl-scroll-down')
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('jl-fade-out')
    },
    offset: '80%'
})

//PORTFOLIO SLIDER

//Declarando variáveis  do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;

//Capturando larguras individuais 
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;

}

sliderList.style.width = sliderListWidth + 'px';

//Fazendo animação do Slider onClick

var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');

nextItem.addEventListener('click', function () {
    anime({
        targets: sliderList,
        translateX: -250
    });
    console.log('clicado')
})