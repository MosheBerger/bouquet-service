import config from './config';
import { createFlowerpot } from './gameObjects/flower';
import { createHand } from './gameObjects/hand';
import loadAssets from './loadAssets'


const k = config()
loadAssets(k)

k.add([
    k.rect(k.width(), k.height())
])

const hand = createHand(k)

const flowerPots = new Array(6).fill(0).map(f=>{
    const fp = createFlowerpot(k)
    fp.gameObject.onClick(()=>{
        if (hand.isFull()) return k.debug.log('full')

        const type = fp.pickFlower()
        if (!type) return

        hand.addFlower(type)
    })
})



k.onClick('flowerpot', (flowerpot) => {
    // hand.addFlower(flowerpot.)
})
