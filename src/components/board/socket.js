import {DebugModal} from "../debug";

export class Socket {
    constructor(url) {
        this.ws = new WebSocket(url);
        this.debug = [];
        this.ws.addEventListener('message', (e)=>{this.debug.push(e)});
    }

    connection() {
        return this.ws;
    }

    leave() {
        console.log('leaving');
        try {
            this.ws.send(JSON.stringify({"action": "leave"}));
        } catch (e) {
            console.log(e)
        }
        this.ws.close();
    }
}
