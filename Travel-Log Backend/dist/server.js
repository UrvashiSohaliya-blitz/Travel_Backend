"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = _interopRequireDefault(require("./app"));
const _authRoute = _interopRequireDefault(require("./routes/auth.route"));
const _indexRoute = _interopRequireDefault(require("./routes/index.route"));
const _usersRoute = _interopRequireDefault(require("./routes/users.route"));
const _blogsRoute = _interopRequireDefault(require("./routes/blogs.route"));
const _questionRoute = _interopRequireDefault(require("./routes/question.route"));
const _validateEnv = _interopRequireDefault(require("./utils/validateEnv"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv.default)();
const app = new _app.default([
    new _indexRoute.default(),
    new _usersRoute.default(),
    new _authRoute.default(),
    new _blogsRoute.default(),
    new _questionRoute.default()
]);
app.listen();

//# sourceMappingURL=server.js.map