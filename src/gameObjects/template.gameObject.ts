import type { KAPLAYCtx } from "kaplay";

export const someGameObject = (k: KAPLAYCtx) => {
    const gameObject = k.add([
        'gameObject',
        // comp1
        {
            // dataOrFunction
        }
    ])

    return {
        jump:{
            // return gameObject.jump()
        }
    }
}
