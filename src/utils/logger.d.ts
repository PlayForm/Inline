export interface ILogger {
    info(msg: string): void;
    success(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}
export declare class Logger implements ILogger {
    private colors;
    private packageName;
    private logLevel;
    private dateTimeFormat;
    constructor(packageName: string, logLevel: Number);
    private log;
    info(msg: string): void;
    success(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}
