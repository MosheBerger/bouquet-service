import config from './config';
import { createFlower } from './gameObjects/flower';
import loadAssets from './loadAssets'


const k = config()
loadAssets(k)

k.add([
    k.rect(k.width(), k.height())
])

createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)
createFlower(k)

k.onClick(() => k.addKaboom(k.mousePos()));