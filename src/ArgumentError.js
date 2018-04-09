import ExtendableError from './ExtendableError';

export default class ArgumentError extends ExtendableError
{

  constructor(...args)
  {

    let message = null;

    if (args.length === 0) {
      message = `Invalid or missing argument supplied`;
    } else if (args[0] !== undefined && typeof args[0] === 'string') {
      message = `Invalid or missing argument supplied: '${args[0]}'`;
    }

    super(message, args.filter(arg => arg !== message));

  }

}
