const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const conteCarrousel = document.querySelector('.conteCarrousel');

const carrouselDot1 = document.querySelector('.carrousel-dot1');
const carrouselDot2 = document.querySelector('.carrousel-dot2');
const carrouselDot3 = document.querySelector('.carrousel-dot3');
const uno =1;
const dos =2;
const tres =3;
var ultimaPos =0;

prev.addEventListener('click',()=>{    
    conteCarrousel.scrollLeft -= 350;
})

next.addEventListener('click',()=>{    ;  
    conteCarrousel.scrollLeft += 350;
})

carrouselDot1.addEventListener('click',()=>{     
    if (ultimaPos ==2){
        conteCarrousel.scrollLeft -= 710;
    }
    if (ultimaPos ==3){
        conteCarrousel.scrollLeft -= 710*2;
    }     
    ultimaPos = 1;  
})

carrouselDot2.addEventListener('click',()=>{ 
    if (ultimaPos ==1){
        conteCarrousel.scrollLeft += 710;
    }
    if (ultimaPos ==3){
        conteCarrousel.scrollLeft -= 710;
    }     
    ultimaPos = 2;  
})

carrouselDot3.addEventListener('click',()=>{
      
    if (ultimaPos ==1){
        conteCarrousel.scrollLeft += 710*2;
    }
    if (ultimaPos ==2){
        conteCarrousel.scrollLeft += 710;
    }    
    ultimaPos = 3; 
})
