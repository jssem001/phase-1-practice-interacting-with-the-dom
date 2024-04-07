const likeCounter = document.getElementById('counter')


function increaseLike(){
likeCounter.innerHTML++   
}
document.getElementById('heart').addEventListener('click',increaseLike)// likes increase

//Timer
window.onload = function() {
    let timerElement = document.getElementById('timer');
    let seconds = 0;

    function updateTimer() {
        seconds++;
        timerElement.textContent = seconds;
    }

    setInterval(updateTimer, 1000);

    function decreaseTimer(){
            seconds--;
            timerElement.textContent = seconds;
        
    }

    document.getElementById('minus').addEventListener('click',decreaseTimer)
}

//Leave a comment
function sendComment(){
    let comment = document.getElementById('comment-form').value
    document.getElementById('list2').innerText = comment

}
document.getElementById('submit').addEventListener('submit',sendComment)