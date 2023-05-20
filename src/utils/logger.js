class Logger {
  constructor(packageName, logLevel) {
    this.colors = {
      reset: "\x1B[0m",
      fg: {
        red: "\x1B[31m",
        green: "\x1B[32m",
        yellow: "\x1B[33m"
      }
    };
    this.logLevel = logLevel;
    this.packageName = packageName;
    this.dateTimeFormat = new Intl.DateTimeFormat([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  log(msg, prefix = "") {
    if (this.logLevel < 2) return;
    console.log(`${this.dateTimeFormat.format(new Date())} %s[${this.packageName}]%s ${msg}`, prefix, prefix ? this.colors.reset : "");
  }
  info(msg) {
    if (this.logLevel < 2) return;
    this.log(msg);
  }
  success(msg) {
    if (this.logLevel < 1) return;
    this.log(msg, this.colors.fg.green);
  }
  warn(msg) {
    if (this.logLevel < 1) return;
    this.log(msg, this.colors.fg.yellow);
  }
  error(msg) {
    this.log(msg, this.colors.fg.red);
  }
}
export {
  Logger
};
