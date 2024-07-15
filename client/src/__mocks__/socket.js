
class MockSocket{
    constructor() {
        this.EVENTS = [];
    }
    on = (event, func) => {
        if (this.EVENTS[event]) {
            this.EVENTS[event].push(func);
        }
        else {
            this.EVENTS[event] = [func];
        }
    }
    off = (event, func) => {
        if (this.EVENTS[event]) {
            this.EVENTS[event] = this.EVENTS[event].filter((fn) => {return fn != func})
        }
    }
    emit = (event, ...args) => {
        this.EVENTS[event].forEach(func => func(...args));
    }
    listeners = (event) => {
        return this.EVENTS[event];
    }
}

export const socket = new MockSocket();