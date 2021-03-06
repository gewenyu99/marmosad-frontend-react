export class Socket {
    constructor(url, boardId, name) {
        this.ws = new WebSocket(url);
        this.ws.addEventListener('open', () => {
            this.ws.send(JSON.stringify({'action': 'join', 'boardId': boardId, 'name': name}));
        })
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
