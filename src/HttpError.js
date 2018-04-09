import ExtendableError from './ExtendableError';
import ArgumentError from './ArgumentError';
import AuthenticationRequiredError from './AuthenticationRequiredError';

export default class HttpError extends ExtendableError
{

  constructor(...args)
  {

    if (args.length === 0) {
      super('Http error.', 500);
      return;
    }

    let code = null;
    let message = null;
    let error = null;
    let codeMap = {
      400: 'ArgumentError',
      401: 'AuthenticationRequiredError',
      403: 'ForbiddenError',
      404: 'NotFoundError',
      405: 'NotSupportedError',
      409: 'AlreadyInUseError',
    };

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
        case typeof arg === 'object':
          codeMap = arg;
          break;
      }
    });

    super(message, code, error);

    let errorImpl = null;

    if (codeMap[code] === undefined) {
      errorImpl = null;
    } else if(codeMap[code] === 'AlreadyInUseError') {
      errorImpl = new codeMap[code](message, args.filter(arg => arg !== code && arg !== message));
    } else if(['ArgumentError', 'AuthenticationRequiredError', 'ForbiddenError', 'NotFoundError', 'NotSupportedError',
               'AlreadyInUseError'].indexOf(codeMap[code]) !== -1) {
      errorImpl = new codeMap[code](message, error);
    } else {
      errorImpl = new codeMap[code](args);
    }

    this.name = errorImpl ? errorImpl.name : this.name;
    this.code = errorImpl ? errorImpl.code : this.code;
    this.message = errorImpl ? errorImpl.message : this.message;

  }

}
