"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log4js = require("log4js");
const Path = require("path");
const os = require("os");
const pkgReader = require("read-pkg");
class Log4j {
    constructor(options) {
        pkgReader().then((pkg) => {
            const defaultOption = { baseDir: Path.join(os.homedir(), 'logs', pkg.name) };
            options = Object.assign(defaultOption, options);
            const defaultConfig = {
                replaceConsole: true,
                appenders: {
                    stdout: { type: 'stdout' },
                    debug: {
                        type: 'dateFile',
                        pattern: '.yyyy-MM-dd',
                        filename: Path.join(options.baseDir, 'debug.log')
                    },
                    error: {
                        type: 'dateFile',
                        pattern: '.yyyy-MM-dd',
                        filename: Path.join(options.baseDir, 'error.log')
                    },
                    info: { type: 'dateFile', pattern: '.yyyy-MM-dd', filename: Path.join(options.baseDir, 'info.log') },
                    warning: {
                        type: 'dateFile',
                        pattern: '.yyyy-MM-dd',
                        filename: Path.join(options.baseDir, 'warning.log')
                    },
                },
                categories: {
                    default: { appenders: ['stdout', 'debug'], level: 'debug' },
                    debug: { appenders: ['stdout', 'debug'], level: 'debug' },
                    error: { appenders: ['stdout', 'error'], level: 'error' },
                    info: { appenders: ['stdout', 'info'], level: 'info' },
                    warning: { appenders: ['stdout', 'warning'], level: 'warn' },
                },
            };
            Log4js.configure(defaultConfig);
            this.logInstanceDebug = Log4js.getLogger('debug');
            this.logInstanceInfo = Log4js.getLogger('info');
            this.logInstanceWarning = Log4js.getLogger('warning');
            this.logInstanceError = Log4js.getLogger('error');
        });
    }
    error(message, trace, context) {
        this.logInstanceError.error(message);
    }
    log(message, context) {
        this.info(message, context);
    }
    info(message, context) {
        this.logInstanceInfo.info(message);
    }
    debug(message, context) {
        this.logInstanceDebug.debug(message);
    }
    warn(message, context) {
        this.logInstanceWarning.warn(message);
    }
}
exports.Log4j = Log4j;
