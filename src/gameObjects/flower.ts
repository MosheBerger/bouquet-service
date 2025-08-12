import type { KAPLAYCtx } from "kaplay";


export const flowerTypes = [
    {
        name: 'ada',
        shape: 'RED'
    },
    {
        name: 'bab',
        shape: 'BLUE'
    },
    {
        name: 'caa',
        shape: 'GREEN'
    }
] as const

export type FlowerName = typeof flowerTypes[number]['name']

export const flowerPositions = (k: KAPLAYCtx) => {
    const width = k.width()
    const height = k.height()

    return {
        vas1: { x: width * 0.2, y: height * 0.7 },
        vas2: { x: width * 0.2, y: height * 0.9 },
        vas3: { x: width * 0.5, y: height * 0.7 },
        vas4: { x: width * 0.5, y: height * 0.9 },
        vas5: { x: width * 0.8, y: height * 0.7 },
        vas6: { x: width * 0.8, y: height * 0.9 },
    }
}
export const flowerSize = { w: 100, h: 100 }


let flowerCount = 0
export const createFlower = (k: KAPLAYCtx) => {
    const { name, shape } = k.choose(flowerTypes) as typeof flowerTypes[number]

    const flower = k.add([
        'flower',
        {
            name,
        },
        k.rect(flowerSize.w, flowerSize.h),
        k.pos(getRandomPosition(k)),
        k.color(k[shape]),
        k.anchor('center'),
        k.area()
    ])

    flower.onClick(() => {
        k.debug.log(`flower ${name} ${shape} clicked`)
    })


    return flower
}


function getRandomPosition(k: KAPLAYCtx) {
    const positions = Object.values(flowerPositions(k))
    // const newPos = k.choose(positions)
    const newPos = positions[flowerCount]
    flowerCount++

    return k.vec2(newPos.x, newPos.y)
}