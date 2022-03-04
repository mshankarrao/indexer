"use strict";
exports.__esModule = true;
var ws_1 = require("./api/ws");
function getNumberOfTransferedTokens(txHash) {
    try {
        return ws_1.transport("getLogsByField", [
            0,
            "transaction_hash",
            txHash,
        ]);
    }
    catch (error) {
        console.log(error);
    }
}
exports["default"] = getNumberOfTransferedTokens;
