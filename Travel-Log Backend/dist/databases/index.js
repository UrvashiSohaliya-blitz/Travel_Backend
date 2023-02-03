"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbConnection", {
    enumerable: true,
    get: ()=>dbConnection
});
const _config = require("../config");
const dbConnection = {
    url: `mongodb+srv://experiance:${_config.DB_PASSWORD}@cluster0.x1jnvd2.mongodb.net/?retryWrites=true&w=majority`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

//# sourceMappingURL=index.js.map