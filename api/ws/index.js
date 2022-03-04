"use strict";
exports.__esModule = true;
exports.transport = void 0;
var socket_io_client_1 = require("socket.io-client");
var REACT_APP_PROD_ADDRESS = "https://ws.explorer-v2-api.hmny.io";
var socket = socket_io_client_1.io(REACT_APP_PROD_ADDRESS, {
    transports: ["websocket"]
});
socket.connect();
var transport = function (method, params) {
    return new Promise(function (resolve, reject) {
        socket.emit(method, params, function (res) {
            try {
                var payload = JSON.parse(res.payload);
                if (res.event === "Response") {
                    resolve(payload);
                }
                else {
                    reject(payload);
                }
            }
            catch (err) {
                reject(null);
            }
        });
    });
};
exports.transport = transport;
