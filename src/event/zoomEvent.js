export function zoomEvent(delta){
    document.querySelector("canvas").dispatchEvent(
        new WheelEvent("wheel", {
            deltaY: delta
        })
    )
}

