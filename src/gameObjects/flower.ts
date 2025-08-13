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
export const flowerpotSize = { w: 100, h: 100 }
export const DEFAULT_FLOWER_AMOUNT = 3

let flowerpotCount = 0
export const createFlowerpot = (k: KAPLAYCtx) => {
    const { name: flowerName, shape } = k.choose(flowerTypes) as typeof flowerTypes[number]

    const flowerpot = k.add([
        'flowerpot',
        k.rect(flowerpotSize.w, flowerpotSize.h),
        k.pos(calcPosition(k)),
        k.color(k[shape]),
        k.anchor('center'),
        k.area(),
        {
            flowerName,
            amount: DEFAULT_FLOWER_AMOUNT
        },
    ])

    const text = flowerpot.add([
        k.text(flowerpot.amount.toString())
    ])
    const updateText = () => {
        text.text = flowerpot.amount.toString()
    }

    const pickFlower = () => {
        if (flowerpot.amount <= 0) {
            return k.debug.log('empty')
        }

        k.debug.log(`pick ${flowerName}`)
        flowerpot.amount--
        updateText()
        return flowerName
    }

    const putFlower = (newFlower: FlowerName) => {
        if (newFlower !== flowerName) {
            return k.debug.log('not same type')
        }

        k.debug.log(`put ${flowerName}`)
        flowerpot.amount++
        updateText()
    }

    // flowerpot.onClick(()=>{
    //     pickFlower()
    // })

    return {
        type: flowerName,
        pickFlower,
        putFlower,
        gameObject: flowerpot,
    }
}


function calcPosition(k: KAPLAYCtx) {
    const positions = Object.values(flowerPositions(k))
    // const newPos = k.choose(positions)
    const newPos = positions[flowerpotCount]
    flowerpotCount++

    return k.vec2(newPos.x, newPos.y)
}