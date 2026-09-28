const character = document.getElementById('dinasour');
const block = document.getElementById('cactus');

let Isjumping = false;

function jump() {
    if(Isjumping) return;
    Isjumping = true;
    character.classList.add('animate');
    setTimeout(() => {
        character.classList.remove('animate');
        Isjumping = false;
    } , 500);
}

const checkDead = setInterval(function() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 40 && blockLeft > -20 && characterTop >= 200)  {
        block.style.animation = 'none';
        block.style.display = 'none';
        clearInterval(checkDead);
        alert('Game Over');
    }
}, 10);

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        jump();
    }
});