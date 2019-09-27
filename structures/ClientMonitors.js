"use strict";
//Do not edit anything unless you know what you do.

//Enabling default import in CommonJS/AMD/UMD module format.
Object.defineProperty(exports, "__esModule", { value: true });

const path = require("path");

class ClientMonitors {
    constructor(client) {
        this.client = client;
    }
    exec(event, ...argv) {
        let monitorPath = path.join(this.client.monitorsDirectory, event);
        let monitor = require(monitorPath);
        monitor(...argv);
    }
}
exports.default = ClientMonitors;