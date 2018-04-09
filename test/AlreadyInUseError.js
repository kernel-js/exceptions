import { expect } from 'chai';
import ExtendableError from '../src/index';
import AlreadyInUseError from "../src/AlreadyInUseError";

class CustomAlreadyInUseError extends AlreadyInUseError {}

describe('AlreadyInUseError', () => {
  it('instance of', () => {
    let err = new AlreadyInUseError();
    expect(err).to.be.an.instanceof(Error);
    expect(err).to.be.an.instanceof(ExtendableError);
    expect(err).to.be.an.instanceof(AlreadyInUseError);

    let err2 = new CustomAlreadyInUseError();
    expect(err2).to.be.an.instanceof(Error);
    expect(err2).to.be.an.instanceof(ExtendableError);
    expect(err2).to.be.an.instanceof(AlreadyInUseError);
    expect(err2).to.be.an.instanceof(CustomAlreadyInUseError);
  });

  it('.name', () => {
    let err = new AlreadyInUseError();
    expect(err.name).to.equal('AlreadyInUseError');

    let err2 = new CustomAlreadyInUseError();
    expect(err2.name).to.equal('CustomAlreadyInUseError');
  });

  it('name is not enumerable', () => {
    let err = new AlreadyInUseError();
    expect(err.propertyIsEnumerable('name')).to.be.false;
  });

  it('.stack', () => {
    let err = new AlreadyInUseError();
    expect(err.stack).to.be.a('string');

    let err2 = new CustomAlreadyInUseError();
    expect(err2.stack).to.be.a('string');
  });

  it('#toString', () => {
    let err = new AlreadyInUseError();
    expect(err.toString()).to.equal('AlreadyInUseError');

    let err2 = new CustomAlreadyInUseError();
    expect(err2.toString()).to.equal('CustomAlreadyInUseError');
  });

  it('.message', () => {
    let err = new AlreadyInUseError('user');
    expect(err.message).to.equal('The specified \'user\' value is already in use');

    let err2 = new AlreadyInUseError('user', 'username');
    expect(err2.message).to.equal('The specified \'user\' value is already in use for: \'username\'');

    let err3 = new AlreadyInUseError('user', 'username', 'email');
    expect(err3.message).to.equal('The specified \'user\' value is already in use for: \'username, email\'');
  })
});
