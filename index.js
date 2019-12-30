class Sketch {

    constructor(boxRow = 8, boxCol = 8) {
        this.width = 760;
        this.height = 800;
        this.boxColor = "red";
    }

    
    drawSketch(colorValue = this.boxColor) {
        const sketchID = document.getElementById("sketch-canvas");
        const sketchBox = sketchID.getContext("2d");
        sketchBox.fillStyle = colorValue;
        sketchBox.fillRect(0, 0, this.width, this.height);
    }
        /*
        this.sketchBox.clearRect(0, 0, this.width, this.height);
        const pixelPerBox = Math.floor(this.width / this.boxCol)
        for (let i = 0; i < this.boxRow; i++) {
            for (let j = 0; j < this.boxCol; j++) {

            }
        }

    
    */
}

function loadSketch() {
    sketch = new Sketch();
    sketch.drawSketch("red");
}

loadSketch();