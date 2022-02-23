// set initial counter to zero;
let count = 0;

// store tag values into variables for use later;
const countValue = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

// for each button clicked, run the button function;
buttons.forEach(
    function(button){
        button.addEventListener('click', function(e){
            const styles = e.currentTarget.classList;
            console.log(styles);
            if(styles.contains('decrease')){
                count--;
            }else if(styles.contains('increase')){
                count++;
            }else if(styles.contains('reset')){
                count = 0;
            }

            // change counter color according to position;
            if(count > 0){
                countValue.style.color = "green";
            }else if(count < 0){
                countValue.style.color = "red";
            }else{
                countValue.style.color = "black";
            }
            countValue.textContent = count;
        })
    }
)