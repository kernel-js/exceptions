import { expect } from 'chai';
import ExtendableError from '../src/index';
import ArgumentError from "../src/ArgumentError";

class CustomArgumentError extends ArgumentError {}

describe('ArgumentError', () => {
  it('instance of', () => {
    let err = new ArgumentError();
    expect(err).to.be.an.instanceof(Error);
    expect(err).to.be.an.instanceof(ExtendableError);
    expect(err).to.be.an.instanceof(ArgumentError);

    let err2 = new CustomArgumentError();
    expect(err2).to.be.an.instanceof(Error);
    expect(err2).to.be.an.instanceof(ExtendableError);
    expect(err2).to.be.an.instanceof(ArgumentError);
    expect(err2).to.be.an.instanceof(CustomArgumentError);
  });

  it('.name', () => {
    let err = new ArgumentError();
    expect(err.name).to.equal('ArgumentError');

    let err2 = new CustomArgumentError();
    expect(err2.name).to.equal('CustomArgumentError');
  });

  it('name is not enumerable', () => {
    let err = new ArgumentError();
    expect(err.propertyIsEnumerable('name')).to.be.false;
  });

  it('.stack', () => {
    let err = new ArgumentError();
    expect(err.stack).to.be.a('string');

    let err2 = new CustomArgumentError();
    expect(err2.stack).to.be.a('string');
  });

  it('#toString', () => {
    let err = new ArgumentError();
    console.log(err.toString());
    expect(err.toString()).to.equal('ArgumentError: Invalid or missing argument supplied');

    let err2 = new CustomArgumentError();
    console.log(err2.toString());
    expect(err2.toString()).to.equal('CustomArgumentError: Invalid or missing argument supplied');
  });

  it('.message', () => {
    let err = new ArgumentError();
    expect(err.message).to.equal('Invalid or missing argument supplied');

    let err2 = new ArgumentError('username');
    expect(err2.message).to.equal('Invalid or missing argument supplied: \'username\'');
  })
});
