export class Logger {
    constructor(packageName: any, logLevel: any);
    colors: {
        reset: string;
        fg: {
            red: string;
            green: string;
            yellow: string;
        };
    };
    logLevel: any;
    packageName: any;
    dateTimeFormat: Intl.DateTimeFormat;
    log(msg: any, prefix?: string): void;
    info(msg: any): void;
    success(msg: any): void;
    warn(msg: any): void;
    error(msg: any): void;
}
