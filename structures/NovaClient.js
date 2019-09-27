"use strict";
//Do not edit anything unless you know what you do.

//Enabling default import in CommonJS/AMD/UMD module format.
Object.defineProperty(exports, "__esModule", { value: true });

const discordjs = require("discord.js");
const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

const ClientUtils = require("./ClientUtils");
const ClientMonitors = require("./ClientMonitors");

class NovaClient extends discordjs.Client {
    constructor(options) {
        super(options);
        if (typeof options !== "object") {
            throw new TypeError("An Option object needs to be passed.");
        }
        if ('monitorsDirectory' in options) {
            this.monitorsDirectory = path.resolve(options.monitorsDirectory);
            this.monitors = new ClientMonitors.default(this);
        }
        else {
            this.monitorsDirectory = undefined;
            this.monitors = null;
        }
        if ('settingsDirectory' in options) {
            this.settingsDirectory = path.resolve(options.settingsDirectory);

            let configurationsFilePath = path.join(this.settingsDirectory, 'configurations.yaml');
            let credentialsFilePath = path.join(this.settingsDirectory, 'credentials.yaml');
            let configurationsFile = fs.readFileSync(configurationsFilePath, 'utf8');
            let credentialsFile = fs.readFileSync(credentialsFilePath, 'utf8');

            this.configurations = YAML.parse(configurationsFile);
            this.credentials = YAML.parse(credentialsFile);
        }
        else {
            throw new ReferenceError("`settingsDirectory` property wasn't found in the NovaOptions object.");
        }
        this.options = options;
        this.utils = new ClientUtils.default(this);
    }
    reloadSettings() {
        let configurationsFilePath = path.join(this.settingsDirectory, 'configurations.yaml');
        let credentialsFilePath = path.join(this.settingsDirectory, 'credentials.yaml');
        let configurationsFile = fs.readFileSync(configurationsFilePath, 'utf8');
        let credentialsFile = fs.readFileSync(credentialsFilePath, 'utf8');

        this.configurations = YAML.parse(configurationsFile);
        this.credentials = YAML.parse(credentialsFile);
    }
    login(token) {
        if (token) {
            this.credentials.token = token;
        }
        return super.login(this.credentials.token);
    }
    toString() {
        return "Nova";
    }
}
exports.default = NovaClient;