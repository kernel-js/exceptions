import ExtendableError from './ExtendableError';

export default class ConnectionError extends ExtendableError
{

  constructor(...args)
  {

    super(args);

    if (this.message === null) {
      this.message = 'Connection failed or no longer available.';
    }

  }

}
