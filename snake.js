class snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.xdir = 0;
        this.ydir = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    getDir() {
        return [this.xdir, this.ydir];
    }

    update(width, height, rez) {
        const w = floor(width / rez);
        const h = floor(height / rez);
        if ((this.body[0].x > w || this.body[0].y > h) || (this.body[0].x < 0 || this.body[0].y < 0)) {
            // reset snake position if out of bounds
            this.body = [];
            this.body[0] = createVector(0, 0);
            this.body[0].x = this.xdir = 0;
            this.body[0].y = this.ydir = 0;
        } else {
            for(let i=0; i < this.body.length; i++) {
                this.body[i].x += this.xdir;
                this.body[i].y += this.ydir;
            }
        }
        return [this.body[0].x, this.body[0].y];
    }

    grow() {
        this.body.push(createVector(0, 0));
    }

    show() {
        console.log(this.body.length);
        for(let i=0; i < this.body.length; i++) {
            noStroke();
			fill(0);
			rect(this.body[i].x, this.body[i].y, 1, 1);
		}
    }
}