import ExtendableError from './ExtendableError';

export default class ArgumentNullError extends ExtendableError
{

  constructor(...args)
  {

    super(args);

    if (args[0] !== undefined && typeof args[0] === 'string') {
      this.message = `Missing argument: ${args[0]}`;
    }

  }

}
