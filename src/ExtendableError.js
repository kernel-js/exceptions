export default class ExtendableError extends Error
{

  constructor(...args)
  {

    let message = null;
    let code = null;
    let error = null;

    args.forEach((arg) => {
      switch (true) {
        case arg instanceof Error:
          error = arg;
          break;
        case typeof arg === 'string':
          message = arg;
          break;
        case typeof arg === 'number':
          code = arg;
          break;
      }
    });

    if (message === null && error !== null && error.message !== undefined) {
      message = error.message;
    }

    if (code === null && error !== null && error.code !== undefined) {
      code = error.code;
    }

    super(message);

    if (message === null) {
      message = '';
    }

    Object.defineProperty(this, 'message', {
      configurable: true,
      enumerable: false,
      value: code !== null && error === null ? `${code}: ${message}` : message,
      writable: true
    });

    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true
    });

    Object.defineProperty(this, 'code', {
      configurable: true,
      enumerable: false,
      value: code || 500,
      writable: true
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(this, this.constructor);
      return;
    }

    Object.defineProperty(this, 'stack', {
      configurable: true,
      enumerable: false,
      value: (new Error(message)).stack,
      writable: true
    });

  }

}
