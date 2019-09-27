"use strict";
//Do not edit anything unless you know what you do.

//Enabling default import in CommonJS/AMD/UMD module format.
Object.defineProperty(exports, "__esModule", { value: true });

const Constants = require("./utils/Constants");

const discordjs = require("discord.js");

//Defining The Bot Client.
const NovaClient = require("./structures/NovaClient");

//Exporting all functions and collections.
exports.Shard = discordjs.Shard;
exports.ShardClientUtil = discordjs.ShardClientUtil;
exports.ShardingManager = discordjs.ShardingManager;
exports.WebhookClient = discordjs.WebhookClient;
exports.Collection = discordjs.Collection;
exports.Permissions = discordjs.Permissions;
exports.SnowflakeUtil = discordjs.SnowflakeUtil;
exports.Util = discordjs.Util;
exports.Constants = Constants;
exports.Client = NovaClient.default;