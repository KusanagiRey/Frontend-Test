const openModal = document.getElementById('open');
const openModalNav = document.getElementById('openNav');
const modalContainer = document.getElementById('modal_container');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


openModal.addEventListener('click', () => {
    burger.classList.toggle('active');
    modalContainer.classList.add('show');
    document.body.classList.add('modal-open');
});

openModalNav.addEventListener('click', () =>{
    nav.classList.toggle('open');
    modalContainer.classList.add('show');
    document.body.classList.add('modal-open');
});


modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer && document.documentElement.clientWidth >= 1240){
        modalContainer.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
  });

burger.addEventListener('click', function(){
    if(burger.classList.contains('active') && modalContainer.classList.contains('show')){
        this.classList.toggle('active');
        modalContainer.classList.remove('show');
        document.body.classList.remove('modal-open');
    }else{
        this.classList.toggle('active');
        nav.classList.toggle('open');
        if (document.documentElement.clientWidth >= 768){
            document.body.classList.toggle('modal-open');
        }
    } 
});