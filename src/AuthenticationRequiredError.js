import ExtendableError from './ExtendableError';

export default class AuthenticationRequiredError extends ExtendableError
{

  constructor(...args)
  {

    super(args);

    if (this.message === null) {
      this.message = 'Please provide authentication.';
    }

  }

}
