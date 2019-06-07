export class Socket {
    constructor(url, boardId, name) {
        this.ws = new WebSocket(url, [boardId, name]);
    }

    connection() {
        return this.ws;
    }

    leave() {
        console.log('leaving');
        this.ws.send(JSON.stringify({"action": "leave"}));
        this.ws.close();
    }
}
