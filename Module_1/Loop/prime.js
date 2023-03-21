
function getPrime(){
    let number = +document.getElementById('number').value;
    let count = 0;
    let N = 2;
    let isPrime = true;
    while(count < number){
        isPrime = true;
        for(let divisor = 2; divisor < N; divisor++){
            if(N % divisor == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime == true){
            count ++;
            document.getElementById('result').innerHTML += N + "<br>";
        }
        N++;
    }
    
}