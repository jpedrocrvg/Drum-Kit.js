document.addEventListener('keydown',function(event) {
    function playAudio(audioId) {
        Audio = document.getElementById(audioId);
        Audio.play()
    }
    
    if (event.key === 'w') {
        playAudio('crash')
    } else if (event.key === 'a') {
        playAudio('kick-bass')
    } else if (event.key === 's') {
        playAudio('snare')
    } else if (event.key === 'd') {
        playAudio('tom-1')
    } else if (event.key === 'j') {
        playAudio('tom-2')
    } else if (event.key === 'k') {
        playAudio('tom-3')
    } else if (event.key === 'l') {
        playAudio('tom-4')
    }
})

document.addEventListener('keydown', function(event) {
    
    function buttonAnimation(buttonId, classButton) {
        var pressedButton = document.getElementById(buttonId);
        if (pressedButton) {
            pressedButton.classList.add(classButton);
            
            setTimeout(function() {
                pressedButton.classList.remove(classButton);
            }, 100); 
        } 
    }

    
    if (event.key === 'w') {
        
        buttonAnimation('w', 'pressed');
    } else if (event.key === 'a') {
        buttonAnimation('a', 'pressed');
    } else if (event.key === 's') {     
        buttonAnimation('s', 'pressed');
    } else if (event.key === 'd') {     
        buttonAnimation('d', 'pressed');
    } else if (event.key === 'j') {   
        buttonAnimation('j', 'pressed');
    } else if (event.key === 'k') {
        buttonAnimation('k', 'pressed');
    } else if (event.key === 'l') { 
        buttonAnimation('l', 'pressed');
    }
});

// Função para reproduzir o áudio
function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}

// Função para animar o botão
function buttonAnimation(buttonId, classButton) {
    var pressedButton = document.getElementById(buttonId);
    if (pressedButton) {
        pressedButton.classList.add(classButton);

        setTimeout(function() {
            pressedButton.classList.remove(classButton);
        }, 100); 
    } 
}


document.getElementById('w').addEventListener('click', function() {
    playAudio('crash');
    buttonAnimation('w', 'pressed');
});

document.getElementById('a').addEventListener('click', function() {
    playAudio('kick-bass');
    buttonAnimation('a', 'pressed');
});

document.getElementById('s').addEventListener('click', function() {
    playAudio('snare');
    buttonAnimation('s', 'pressed');
});

document.getElementById('d').addEventListener('click', function() {
    playAudio('tom-1');
    buttonAnimation('d', 'pressed');
});

document.getElementById('j').addEventListener('click', function() {
    playAudio('tom-2');
    buttonAnimation('j', 'pressed');
});

document.getElementById('k').addEventListener('click', function() {
    playAudio('tom-3');
    buttonAnimation('k', 'pressed');
});

document.getElementById('l').addEventListener('click', function() {
    playAudio('tom-4');
    buttonAnimation('l', 'pressed');
});

