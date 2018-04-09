import ExtendableError from './ExtendableError';

export default class ForbiddenError extends ExtendableError
{

  constructor(...args)
  {

    super(args);

    if (this.message === null) {
      this.message = 'You\'re not allowed to access this resource.';
    }

  }

}
