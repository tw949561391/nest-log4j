import { DynamicModule } from '@nestjs/common';
export declare class Log4jModule {
    static forRoot(options?: {
        baseDir: string;
    }): DynamicModule;
    static forChild(): DynamicModule;
}
export * from './service/log4j.logger';
