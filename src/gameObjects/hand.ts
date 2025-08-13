import type { GameObj, KAPLAYCtx } from "kaplay";
import { FlowerName, flowerTypes } from "./flower";

const MAX_HAND = 5

export const createHand = (k: KAPLAYCtx) => {
    const w = k.width()
    const h = k.height()

    const flowers = [] as GameObj<unknown>[]

    k.add([
        k.text('hand', {
            align: "center"
        }),
        k.color('#000000'),
        k.pos(w * 0.5, h * 0.5),
        k.anchor('center')
    ])
    const hand = k.add([
        'hand',
        k.rect(w * 0.8, 100, {
            fill: false
        }),
        k.outline(2),
        k.pos(w * 0.1, h * 0.5),
        k.anchor('left'),
    ])


    const addFlower = (flowerType: FlowerName) => {
        if (flowers.length >= MAX_HAND) return

        const hh = hand.height
        const hw = hand.width

        flowers.push(hand.add([
            k.rect(50, 50),
            k.color(k.Color[flowerTypes.find(f => f.name === flowerType)?.shape!]),
            k.pos(hw * (0.2 * flowers.length + 0.1), hh * 0.1),
            k.anchor('center'),
        ]))
    }

    return {
        addFlower,
        isFull: () => flowers.length >= MAX_HAND
    }
}
