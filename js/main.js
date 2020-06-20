

class Beat {
    constructor(audioSrc) {
        this.audioSrc = audioSrc;
    }
    
    playAudio() {
        let playAudio = new Audio(this.audioSrc);
        playAudio.play();
        playAudio.currentTime = 0;
    }
}


class Button {
    constructor(boxIndex) {                
        this.buttonEffect(boxIndex);
    }

    buttonEffect(boxIndex) {
        let td = document.querySelectorAll("td");
        td[boxIndex].style.boxShadow = "0px 0px 25px " + this.generateColor();
    }

    generateColor() {
        return "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });
    }
}


let mainFunction = (index, audio) => {
    new Beat(audio).playAudio();
    new Button(index);
}


let td = document.querySelectorAll("td");

td.forEach((box, index) => {
    box.onclick = () => {
        switch (index) {
            case 0: mainFunction(0, "../audio/boom.wav");
                break;
            case 1: mainFunction(1, "../audio/clap.wav");
                break;
            case 2: mainFunction(2, "../audio/hihat.wav");
                break;
            case 3: mainFunction(3, "../audio/kick.wav");
                break;
            case 4: mainFunction(4, "../audio/openhat.wav");
                break;
            case 5: mainFunction(5, "../audio/ride.wav");
                break;
            case 6: mainFunction(6, "../audio/snare.wav");
                break;
            case 7: mainFunction(7, "../audio/tink.wav");
                break;
            case 8: mainFunction(8, "../audio/tom.wav");
                break;
        }
    }
})



document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 81: mainFunction(0, "../audio/boom.wav");
            break;
        case 87: mainFunction(1, "../audio/clap.wav");
            break;
        case 69: mainFunction(2, "../audio/hihat.wav");
            break;
        case 65: mainFunction(3, "../audio/kick.wav");
            break;
        case 83: mainFunction(4, "../audio/openhat.wav");
            break;
        case 68: mainFunction(5, "../audio/ride.wav");
            break;
        case 90: mainFunction(6, "../audio/snare.wav");
            break;
        case 88: mainFunction(7, "../audio/tink.wav");
            break;
        case 67: mainFunction(8, "../audio/tom.wav");
            break;
    }
})
