class Sketch {

    constructor(numBoxes = 100) {
        this.width = document.getElementById('sketch-box').getBoundingClientRect().width;
        this.height = document.getElementById('sketch-box').getBoundingClientRect().height;
        this.sketchBox = document.getElementById("sketch-box");
        this.numBoxes = numBoxes;
    }

    loadSketch() {
        const boxSize = (this.width / this.numBoxes) - 2;
        console.log(boxSize);
        for (let i = 0; i < this.numBoxes; i++) {
            let divContainer = document.createElement("div");
            this.sketchBox.appendChild(divContainer);
            for (let j = 0; j < this.numBoxes; j++) {
                let box = document.createElement("div");
                box.style.height = `${boxSize}px`;
                box.style.width = `${boxSize}px`;
                divContainer.appendChild(box);
                box.addEventListener('mouseover', this.drawSketch, false);
            }   
        }
    }
    
    drawSketch(event) { 
        event.target.style.background = "red";
    }
}

function main() {
    sketch = new Sketch();
    sketch.loadSketch();
}

main();