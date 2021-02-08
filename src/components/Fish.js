import { PixiPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";
import { Sprite, Texture } from "pixi.js";

export default class Fish extends Sprite {
    constructor(texture) {
        super(texture);
        this.name = 'fish';
        this.interactive = true;
        this.buttonMode = true;
        this.anchor.set(0.5)
        this._textures = {
            smallFish: new Texture.from('smallFish'),
            bigFish: new Texture.from('bigFish')
        };
    }

    expand() {
        gsap.registerPlugin(PixiPlugin)
        this.texture = this._textures.bigFish
        gsap.to(this, { pixi: { scale: 1.5 }, ease: "elastic(1, 0.5)" })
        
        setTimeout(() =>
            this.contract()
            , 5000)
    }

    contract() {
        gsap.to(this, { pixi: { scale: 1 }, duration: 0.3 })
        this.texture = this._textures.smallFish;
    }
}