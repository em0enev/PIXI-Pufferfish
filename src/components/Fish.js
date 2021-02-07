import { AnimatedSprite, Container, Loader, Sprite, Spritesheet, Texture } from "pixi.js";

export default class Fish extends Container {
    constructor() {
        super();

        this.name = 'fish';
        this._fish = this._setup()
    }

    expand() {
        console.log(this._fish)
        this._fish.texture = this._fish.textures[1]
        
        setTimeout(() => 
            this.contract()
        , 5000)
    }

    contract() {
        this._fish.texture = this._fish.textures[0]
    }

    _setup() {
        const texturesObj = {};
        texturesObj['fish'] = [ new Texture.from('smallFish'), new Texture.from('bigFish')]

        const fish = new AnimatedSprite(texturesObj.fish)
        fish.anchor.set(0.5)
        fish.interactive = true;
        fish.buttonMode = true;
        this.addChild(fish)
     
        fish.on('click', () => this.expand())

        return fish;
    }
}