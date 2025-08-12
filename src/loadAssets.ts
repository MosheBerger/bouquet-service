import type { KAPLAYCtx } from "kaplay";

const sprites = [
    'ada',
    'bab'
] as const

export type SpriteName = typeof sprites[number]

function loadAssets(k: KAPLAYCtx) {
    const loadSprite = (spriteName:SpriteName, url:string) => k.loadSprite(spriteName, url)

    k.loadRoot("./"); // A good idea for Itch.io publishing later
    loadSprite('ada', 'ffewfe')
}

export default loadAssets