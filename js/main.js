// comment
//? create element
//! take element
//* recovery element




//? creo la const images degli array de l'elemnto 
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
//*recupero il parent dove voglio mettere gli array
let carouselBox = document.querySelector(`.carousel_box`);
//*{recupero il parent dove voglio mettere gli array}
let imgBox = document.querySelector(`.img_box`);


//? creo un ciclo forEach
images.forEach((element , i , array) => {
     //porto in console gli elementi
     console.log(`url(${element.url}) , title (${element.title}) , description (${element.description})`);

    let imgCarousel = document.createElement('div')
    imgCarousel.classList.add('position-relative', 'my_corousel')

    //? creo il contenuto HTML con un Template literals 
    imgCarousel.innerHTML= 
                    `   <img src="${element.url}" alt="img di ${element.title}">
                        <div class="text_img position-absolute top-0 end-0 text-end m-4">
                            <h1 class="text-white">${element.title}</h1>
                            <p class="text-white fs-2">${element.description}</p>
                        </div> `
            ;
    //*aggiungo la classe d-none ad ogni elemento newImg per non farlo vedere 
        imgCarousel.classList.add(`d-none`);
    //! appendo l'elemento creato
    carouselBox.append(imgCarousel);

})

//? creo una variabile di stato
let activeElement = 0 ;

//* associo alla var imglist i figli di carouselBox cioè le img create , per avrere la lista 
let imgList=carouselBox.children;

 //*alla var di partenza rimuovo il d-none e aggiungo la classe active per farla vedere
 imgList[activeElement].classList.add('active');
 imgList[activeElement].classList.remove('d-none');

 //!quando prendo un btn

    //!prendo il btn next
    let btnNext=document.querySelector(`.btn_next`);

    //!prendo il btn previus
    let btnPrevius=document.querySelector(`.btn_previus`);


   
//? creo l'evento sull click btn next
btnNext.addEventListener(`click` , function(){
    //* l'elemento actveElement è uguale al suo incremento
    activeElement = scrolling(imgList,activeElement,true);
   
})

//? creo l'evento sull click btn previus
btnPrevius.addEventListener(`click` , function(){
    //* l'elemento actveElement è uguale al suo incremento
    activeElement = scrolling(imgList,activeElement,false);
   
})






//? creo la funxione per i btn
function scrolling (listImg,elementActive,isNext){
    //*dalla variabile di partenza rimuovo l'active e aggiungo la classe d-none per non farla vedere
        listImg[elementActive].classList.remove('active');
        listImg[elementActive].classList.add('d-none');
        

        //? creo un ternary operetor per vedere se il btn e next o previus
            //se è next all'ora aumento di uno (++) senno sotrago 1 (--)
        elementActive = (isNext) ? (elementActive + 1) : (elementActive - 1);
        
        console.log(elementActive)

         //* se active elemente ha rigiunto la lunghezza dell'array allora torna a 0
         if(elementActive === listImg.length){
            elementActive=0;
        }
         //* se active elemente ha rigiunto la lunghezza dell'array allora torna a 0
         else if(elementActive === -1){
            elementActive= listImg.length-1;
        }


        //*al nuovo valore rimuovo il d-none e aggiungo la classe active per farla vedere
        listImg[elementActive].classList.remove('d-none');
        listImg[elementActive].classList.add('active');

        return elementActive;

}