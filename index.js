"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const log4j_logger_1 = require("./service/log4j.logger");
const exportProviders = [];
class Log4jModule {
    static forRoot(options) {
        const logProvider = { provide: log4j_logger_1.Log4j, useValue: new log4j_logger_1.Log4j(options || {}) };
        exportProviders.push(logProvider);
        return {
            module: Log4jModule,
            providers: [...exportProviders],
            exports: exportProviders,
        };
    }
    static forChild() {
        return {
            module: Log4jModule,
            providers: exportProviders,
            exports: exportProviders,
        };
    }
}
exports.Log4jModule = Log4jModule;
__export(require("./service/log4j.logger"));
