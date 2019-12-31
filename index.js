class Sketch {

    constructor(numBoxes = 100) {
        this.length = document.getElementById('sketch-box').getBoundingClientRect().width;
        this.sketchBox = document.getElementById("sketch-box");
        this.eraseButton = document.getElementById("erase-sketch")
        this.numBoxes = numBoxes;
        this.sketchPixels;
    }

    loadSketch() {
        const boxSize = (this.length / this.numBoxes) - 2;
        for (let i = 0; i < this.numBoxes; i++) {
            let divContainer = document.createElement("div");
            this.sketchBox.appendChild(divContainer);
            for (let j = 0; j < this.numBoxes; j++) {
                let box = document.createElement("div");
                box.className = "sketch-box-pixel"; 
                box.style.height = `${boxSize}px`;
                box.style.width = `${boxSize}px`;
                divContainer.appendChild(box);
                box.addEventListener('mouseover', this.drawSketch, false);
                this.eraseButton.addEventListener('click', this.eraseSketch, false);
            }   
        }
    }
    
    drawSketch(event) { 
        event.target.style.background = "red";
    }

    eraseSketch() {
        this.sketchPixels = document.getElementsByClassName("sketch-box-pixel");
        for (let i = 0; i < this.sketchPixels.length; i++) {
            this.sketchPixels[i].style.backgroundColor = "white";
        }
    }
}

function main() {
    sketch = new Sketch();
    sketch.loadSketch();
}

main();