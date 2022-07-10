let hearts = document.getElementsByClassName('like');
let btnMinus = document.getElementsByClassName('minus-btn');
let btnPlus = document.getElementsByClassName('plus-btn');
let input = document.getElementsByClassName('Quant');
let price = document.getElementsByClassName('price');
let btnDelete = document.getElementsByClassName('delete');
let items = document.getElementsByClassName('Item');

/* function to change the heart shape button to red onclick*/

for(let i = 0 ; i < hearts.length ; i++)
{
    hearts[i].addEventListener('click', function onClick() {
          
        if(hearts[i].style.color === 'red')
        {
            hearts[i].style.color = 'black';
        }
        else
            hearts[i].style.color = 'red';
    });
}

/*fonction to decrement item quantity*/ 

    for(let i = 0 ; i < btnMinus.length ; i++){
        btnMinus[i].addEventListener('click', function onClick() {
            if(input[i].value > 0){
                input[i].value--;
            }       
            
        });
       
    }
/* function to increment item quantity*/

    for(let i = 0 ; i < btnPlus.length ; i++){
        btnPlus[i].addEventListener('click', function onClick() {
            input[i].value++; 
            
        });
        
    }
   
/* function to delete item from cart*/

        for(let i = 0 ; i < btnDelete.length ; i++){
            btnDelete[i].addEventListener('click', function onClick() {
                items[i].remove();
               i--;
            });
        }
