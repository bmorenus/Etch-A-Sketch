class Sketch {

    constructor(xBoxes = 300, yBoxes = 300) {
        this.width = document.getElementById('sketch-box').getBoundingClientRect().width;
        this.height = document.getElementById('sketch-box').getBoundingClientRect().height;
        this.xBoxes = xBoxes;
        this.yBoxes = yBoxes;
        this.boxColor = "red";
    }

    
    drawSketch(xBoxes = this.xBoxes, yBoxes = this.yBoxes, colorValue = this.boxColor) {
        const sketchBox = document.getElementById("sketch-box");
        const boxSize = (this.width / this.xBoxes);
        for (let i = 0; i < xBoxes; i++) {
            let divContainer = document.createElement("div");
            sketchBox.appendChild(divContainer);
            for (let j = 0; j < yBoxes; j++) {
                let box = document.createElement("div");
                box.style.height = `${boxSize}px`
                box.style.width = `${boxSize}px`
                divContainer.appendChild(box);
            }   
        }
    }
    draw
}

function run() {
    sketch = new Sketch();
    sketch.drawSketch();
}

run();