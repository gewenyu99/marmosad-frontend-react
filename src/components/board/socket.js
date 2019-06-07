export class Socket {
    constructor(url, boardId, name) {
        this.ws = new WebSocket(url, [boardId, name]);
    }

    connection() {
        return this.ws;
    }

    join(boardId, name) {
        this.ws.send(JSON.stringify({action: 'join', 'boardId': boardId, 'name': name}));
    }
}
