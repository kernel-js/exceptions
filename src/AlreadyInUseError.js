import ExtendableError from './ExtendableError';

export default class AlreadyInUseError extends ExtendableError
{

  constructor(...args)
  {

    super(args);

    let i = 0;
    let entityName = null;
    let constraints = [];

    args.forEach((arg) => {
      if (i === 0 && typeof arg === 'string') {
        entityName = arg;
      } else if (typeof arg === 'string') {
        constraints.push(arg);
      }

      i++;
    });

    if (args[0] !== undefined && typeof args[0] === 'string') {
      this.message = constraints.length > 0
        ? `The specified '${entityName}' value is already in use for: '${constraints.join(', ')}'`
        : `The specified '${entityName}' value is already in use`;
    }

  }

}
