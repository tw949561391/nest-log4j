import { LoggerService } from '@nestjs/common';
export declare class Log4j implements LoggerService {
    private logInstanceDebug;
    private logInstanceInfo;
    private logInstanceWarning;
    private logInstanceError;
    constructor(options: {
        baseDir: string;
    });
    error(message: any, trace?: string, context?: string): any;
    log(message: any, context?: string): any;
    info(message: any, context?: string): void;
    debug(message: any, context?: string): void;
    warn(message: any, context?: string): any;
}
