import kaplay from "kaplay";

function config() {
    return kaplay({
        letterbox: true,
        debugKey: 'd',
        width: 450,
        height: 800,
        background:'#000000',
        global:false,
    })

}

export default config