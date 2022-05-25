const winston = require('winston');

const Options = {
  file: {
    level: 'info',
    filename: 'logs/app.log',
    handleExceptions: true,
    maxSize: 5242880,
    maxFiles: 1,
    format: winston.format.combine(winston.format.json()),
  },
  console: {
    level: 'info',
    handleExceptions: true,
    format: winston.format.combine(winston.format.colorize()),
  }
};

const transports = [];

if (Options.file) {
  const FileTransport = new winston.transports.File(Options.file);
  transports.push(FileTransport);
}

if (Options.console) {
  const ConsoleTransport = new winston.transports.Console(Options.console);
  transports.push(ConsoleTransport);
}

const logger = winston.createLogger({
  transports,
  exitOnError: false,
  // silent: process.env.NODE_ENV !== 'production'
});


const MorganStream = {
  write(text) {
    logger.info(text);
  }
};

module.exports = { logger, MorganStream };
