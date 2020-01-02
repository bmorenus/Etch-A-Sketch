class Sketch {

    constructor() {
        this.length = document.getElementById('sketch-box').getBoundingClientRect().width;
        this.sketchBox = document.getElementById("sketch-box");
        this.newGridButton = document.getElementById("new-grid-button");
        this.newGridButton.addEventListener('click', this.generateNewSketch, false);
        this.eraseButton = document.getElementById("erase-sketch");
        this.sketchPixels = document.getElementsByClassName("sketch-box-pixel");
        this.sketchBox = document.getElementById("sketch-box");
        this.sketchPixels = document.getElementsByClassName("sketch-box-pixel");
    }

    loadSketch(numBoxes = 10) {
        const boxSize = (this.length / numBoxes) - 2;
        for (let i = 0; i < numBoxes; i++) {
            let divContainer = document.createElement("div");
            this.sketchBox.appendChild(divContainer);
            for (let j = 0; j < numBoxes; j++) {
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
        for (let i = 0; i < sketch.sketchPixels.length; i++) {
            sketch.sketchPixels[i].style.backgroundColor = "white";
        }
    }

    generateNewSketch() {
        let numBoxes = document.getElementById("grid-number").value;
        while (sketch.sketchBox.hasChildNodes()){
            sketch.sketchBox.removeChild(sketch.sketchBox.firstChild);
        }
        sketch.loadSketch(numBoxes)
    }
}

function main() {
    sketch = new Sketch();
    sketch.loadSketch();
}

main();