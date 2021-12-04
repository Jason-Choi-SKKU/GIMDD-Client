import { cursorEvent } from "../event/cursorEvent.js";
import { rotateEvent } from "../event/rotateEvent.js";


export default function eventHandler(e){
    const parsedData = JSON.parse(e.data.replace("\r", ""));
    cursorEvent(parsedData.gyrX, parsedData.gyrZ);

}