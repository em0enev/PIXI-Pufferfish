import { PixiPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";
import { AnimatedSprite, Sprite, Texture } from "pixi.js";

export default class Fish extends Sprite {
    constructor() {
        super();
        this.name = 'fish';
        this._fish = this._onCreate()
    }

    expand() {
        gsap.registerPlugin(PixiPlugin)

        this._fish.texture = this._fish.textures[1]
        gsap.to(this._fish, { pixi: { scale: 1.5 }, ease: "elastic(1, 0.5)" })

        setTimeout(() =>
            this.contract()
            , 5000)
    }

    contract() {
        this._fish.texture = this._fish.textures[0]
        gsap.to(this._fish, { pixi: { scale: 1 } })

    }

    /**
    * @private
    */
    _onCreate() {
        const texturesObj = {};
        texturesObj['fish'] = [new Texture.from('smallFish'), new Texture.from('bigFish')]

        const fish = new AnimatedSprite(texturesObj.fish)
        fish.anchor.set(0.5)
        fish.interactive = true;
        fish.buttonMode = true;
        this.addChild(fish)


        fish.on('click', () => this.expand())

        return fish;
    }
}