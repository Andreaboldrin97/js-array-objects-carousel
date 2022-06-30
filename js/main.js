// comment
//? create element
//! take element
//* recovery element
// {thumbnails comment}





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

     //? creo l'elemto div (imgCarousel )
    let imgCarousel = document.createElement('div')
    imgCarousel.classList.add('position-relative', 'my_corousel')

     //? {creo l'elemto div (imgThumbnails)}
    let imgThumbnails = document.createElement('div')
    imgThumbnails.classList.add('mini_img')

    //? creo il contenuto HTML con un Template literals 
    imgCarousel.innerHTML= 
                    `   <img src="${element.url}" alt="img di ${element.title}">
                        <div class="text_img position-absolute top-0 end-0 text-end m-4">
                            <h1 class="text-white">${element.title}</h1>
                            <p class="text-white fs-2">${element.description}</p>
                        </div> `
            ;


     //? {creo il contenuto HTML con un Template literals }
    imgThumbnails.innerHTML= `<img src="${element.url}" alt="img di ${element.title}">`;


    //*aggiungo la classe d-none ad ogni elemento newImg per non farlo vedere 
        imgCarousel.classList.add(`d-none`);
    //! appendo l'elemento creato
    carouselBox.append(imgCarousel);
    //! {appendo l'elemento creato}
    imgBox.append(imgThumbnails);

})

//? creo una variabile di stato
let activeElement = 0 ;

//* associo alla var imglist i figli di carouselBox cioè le img create , per avrere la lista 
let imgList=carouselBox.children;
 //* {associo alla var imglist i figli di carouselBox cioè le img create , per avrere la lista }
 let imgListBox=imgBox.children

 //*alla var di partenza rimuovo il d-none e aggiungo la classe active per farla vedere
 imgList[activeElement].classList.add('active');
 imgList[activeElement].classList.remove('d-none');
 //*{alla var di partenza aggiungo la classe 'img_visibility' per farla risaltare}
 imgListBox[activeElement].classList.add('img_visibility');

 //!quando prendo btn e i btn[]

    //!prendo il btn next
    let btnNext=document.querySelector(`.btn_next`);
    //!prendo il btn previus
    let btnPrevius=document.querySelector(`.btn_previus`);


    //! [prendo il btn-start]
    let btnStart=document.querySelector(`.btn-start`);

    //! [prendo il btn-inversion-back]
    let btnInversionBack=document.querySelector(`.btn-inversion-back`);

    //! [prendo il btn-inversion-forth]
    let btnInversionForth=document.querySelector(`.btn-inversion-forth`);

    //! [prendo il btn previus]
    let btnStop=document.querySelector(`.btn-stop`);


   
//? creo l'evento sull click btn next
btnNext.addEventListener(`click` , function(){
    //* l'elemento actveElement è uguale al suo incremento
    activeElement = scrolling(imgList,activeElement,imgListBox,true);
    clearInterval(clock);
   
})

//? creo l'evento sull click btn previus
btnPrevius.addEventListener(`click` , function(){
    //* l'elemento actveElement è uguale al suo incremento
    activeElement = scrolling(imgList,activeElement,imgListBox,false);
    clearInterval(clock);
   
})

//? [ creo la variabile clok vuota per lo scoop globale]
let clock;

// //? [creo l'evento asull clik di btn-start]
 btnStart.addEventListener('click', function(){
    clearInterval(clock);
   // ? [creo la funzione in modo che ogni 3s cambia l'img attiva]
    clock = setInterval(function(){ 
    activeElement = scrolling(imgList,activeElement,imgListBox,true);
} , 3000);  
})

// //? [creo l'evento asull clik di btnInversionForth]
btnInversionForth.addEventListener('click', function(){
    clearInterval(clock);
      // ? [creo la funzione in modo che ogni 3s cambia l'img attiva]
    clock = setInterval(function(){ 
    activeElement = scrolling(imgList,activeElement,imgListBox,true);
} , 3000);  
})

// //? [creo l'evento asull clik di btnInversionBack]
 btnInversionBack.addEventListener('click', function(){
    clearInterval(clock);
       // ? [creo la funzione in modo che ogni 3s cambia l'img attiva]
     clock = setInterval(function(){ 
    activeElement = scrolling(imgList,activeElement,imgListBox,false);
} , 3000);  
})
   
// //? [creo l'evento asull clik di btnStop]
btnStop.addEventListener('click', function(){
   clearInterval(clock);
 })

//  //? {creo un ciclo per prendere ogni elemento presente in imgListBox}
for(let i = 0 ; i < imgListBox.length; i++){
   // //? {creo l'evento sul click thumbnails all'img}
    console.log(imgListBox[i])
    imgListBox[i].addEventListener('click', function(){

        //*al nuovo valore rimuovo il d-none e aggiungo la classe active per farla vedere
        imgList[activeElement].classList.add('d-none');
        imgList[activeElement].classList.remove('active');
        //*{dalla variabile di partenza rimuovo la classe img_visibility }
        imgListBox[activeElement].classList.remove('img_visibility');

        activeElement = i;

            //*al nuovo valore rimuovo il d-none e aggiungo la classe active per farla vedere
            imgList[activeElement].classList.remove('d-none');
            imgList[activeElement].classList.add('active');
    //*{dalla variabile di partenza rimuovo la classe img_visibility }
    imgListBox[activeElement].classList.add('img_visibility');
    clearInterval(clock);
     
   });
}




//? creo la funxione per i btn
function scrolling (listImg,elementActive,thumbnailsBox,isNext){
    //*dalla variabile di partenza rimuovo l'active e aggiungo la classe d-none per non farla vedere
        listImg[elementActive].classList.remove('active');
        listImg[elementActive].classList.add('d-none');
        //*{dalla variabile di partenza rimuovo la classe img_visibility }
        thumbnailsBox[elementActive].classList.remove('img_visibility');
        

        //? creo un ternary operetor per vedere se il btn e next o previus
            //se è next all'ora aumento di uno (++) senno sotrago 1 (--)
        elementActive = (isNext) ? (elementActive + 1) : (elementActive - 1);
        

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
        //*{dalla variabile di partenza rimuovo la classe img_visibility }
        thumbnailsBox[elementActive].classList.add('img_visibility');

        return elementActive;

}



