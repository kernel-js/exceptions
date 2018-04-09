@kernel/exceptions
===========

> Common error classes

* Suite of node.js Error classes like most other modern languages
* Generate your own custom Error classes
* Map HTTP status codes to Errors for automatic handling responses from web services and applications
* Suitable to run on browsers (client-side)

## Inspirations

This package was totally based on bjyoungblood/es6-error and shutterstock/node-common-errors.

## Why

First of all I created this to support development of [Kernel Framework](https://www.npmjs.com/package/@kernel/framework).<br />
So, why I don't used the existing packages? Well, bjyoungblood/es6-error is lightweight to use on client-side, but I 
wanted more features on ExtendableError and more pre-defined error types. And shutterstock/node-common-errors has a lot 
of pre-defined error types but has some code I don't need (lightweight is mandatory to kernel framework) and is not intended to use on browser.

## Install
```npm install @kernel/exceptions```

## Class Directory

### Common Error Classes

* [AlreadyInUseError](#alreadyinuse)
* [ArgumentError](#argument)
* [ArgumentNullError](#argumentnull)
* [AuthenticationRequiredError](#authrequired)
* [ConnectionError](#connection)
* [DataError](#data)
* [ForbiddenError](#forbidden)
* [HttpError](#http)
* [InvalidOperationError](#invalidoperation)
* [SocketError](#socket)
* [NotFoundError](#notfound)
* [NotImplementedError](#notimplemented)
* [NotPermittedError](#notpermitted)
* [NotSupportedError](#notsupported)
* [RangeError](#range)
* [ReferenceError](#reference)
* [SyntaxError](#syntax)
* [TimeoutError](#timeout)
* [TypeError](#type)
* [URIError](#uri)


## Error Classes

<a name="alreadyinuse" /></a>

### AlreadyInUseError

Applicable when a resource is already in use, for example unique key constraints like a username.

	new AlreadyInUseError(entityName, [arg1, arg2, arg3, ..., error])

__Arguments__

* `entityName` - the entity that owns the protected resource
* `args` - the fields or attributes that are already in use
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new AlreadyInUseError('user', 'username');
```

---------------------------------------

<a name="argument" /></a>

### ArgumentError

Applicable when there's a generic problem with an argument received by a function call.

	new ArgumentError(argumentName[, error])

__Arguments__

* `argumentName` - the name of the argument that has a problem
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new ArgumentError('username', 500, err);
```

---------------------------------------

<a name="argumentnull" /></a>

### ArgumentNullError

Applicable when an argument received by a function call is null/undefined or empty.

	new ArgumentNullError(message[, code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new ArgumentNullError('username', 400, err);
```

---------------------------------------

<a name="authrequired" /></a>

### AuthenticationRequiredError

Applicable when an operation requires authentication

	new AuthenticationRequiredError(message, [code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new AuthenticationRequiredError("Please provide authentication.", 403, err);
```

---------------------------------------

<a name="connection" /></a>

### ConnectionError

Applicable when an error occurs on a connection.

	new ConnectionError(message[, code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new ConnectionError('WebService unavailable');
throw new ConnectionError('Database connection no longer available', 500, err);
```

---------------------------------------

<a name="data" /></a>

### DataError

Applicable when an error occurs on or with an external data source.

	new DataError(message[, code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new DataError('Too many rows returned from database', 500, err);
```

---------------------------------------

<a name="forbidden" /></a>

### ForbiddenError

Applicable when an operation is not permitted

	new ForbiddenError(message[, code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new NotPermittedError("username cannot be changed once set.", 403, err);
```

---------------------------------------

<a name="https" /></a>

### HttpError

Represents a message and a HTTP status code.

	new HttpError(code[, message, codeMap, error])

__Arguments__

* `code` - any HTTP status code integer
* `message` - any message
* `codeMap` - the mapping of error codes and their classes
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Default example
throw new HttpError(404);

// Example with error
throw new HttpError(404, err);

// Example with message and error
throw new HttpError(404, "Not Found", err);

// Example with custom codeMap and error
throw new HttpError(404, {
  400: 'ArgumentError',
  401: 'AuthenticationRequiredError',
  403: 'ForbiddenError',
  404: 'NotFoundError',
  405: 'NotSupportedError',
  409: 'AlreadyInUseError',
}, err);
```

---------------------------------------

<a name="invalidoperation" /></a>

### InvalidOperationError

Applicable when an invalid operation occurs.

	new InvalidOperationError(message[, code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new InvalidOperationError('Divide by zero', 500, err);
```

---------------------------------------

<a name="notfound" /></a>

### NotFoundError

Applicable when an attempt to retrieve data yielded no result.

	new NotFoundError(entity_name[, code, error])

__Arguments__

* `entity_name` - a description for what was not found
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new NotFoundError("User", 500, err);
```

---------------------------------------

<a name="notimplemented" /></a>

### NotImplementedError

Applicable when a requested method or operation is not implemented.

	new NotImplementedError(message[, code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new NotImplementedError("Method is not yet implemented.", 500, err);
```

---------------------------------------

<a name="notsupported" /></a>

### NotSupportedError

Applicable when a certain condition is not supported by your application.

	new NotSupportedError(message[, code, error])

__Arguments__

* `message` - a message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new NotSupportedError('Zero values', 500, err);
```

---------------------------------------

<a name="range" /></a>

### RangeError

Represents an error that occurs when a numeric variable or parameter is outside of its valid range. This is roughly the same as the native RangeError class. It additionally supports an code attribute.

	new RangeError(message[, code, error])

__Arguments__

* `message` - a message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new RangeError("Value must be between " + MIN + " and " + MAX, err);
```

---------------------------------------

<a name="reference" /></a>

### ReferenceError

Represents an error when a non-existent variable is referenced. This is roughly the same as the native ReferenceError class. It additionally supports an code attribute.

	new ReferenceError(message[, code, error])

__Arguments__

* `message` - a message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new ReferenceError("x is not defined", 500, err);
```

---------------------------------------

<a name="socket" /></a>

### SocketError

Applicable when an error occurs on a socket.

	new SocketError(message[, code, error])

__Arguments__

* `message` - any message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new SocketError('Socket no longer available', 500, err);
```

---------------------------------------

<a name="syntax" /></a>

### SyntaxError

Represents an error when trying to interpret syntactically invalid code. This is roughly the same as the native SyntaxError class. It additionally supports an code attribute.

	new SyntaxError(message[, code, error])

__Arguments__

* `message` - a message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new SyntaxError("Unexpected token a", 500, err);
```

---------------------------------------

<a name="timeout" /></a>

### TimeoutError

Applicable when an operation takes longer than the alloted amount.

	new TimeoutError(time[, code, error])

__Arguments__

* `time` - a time duration
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new TimeoutError('100ms', 500, err);
```

---------------------------------------

<a name="type" /></a>

### TypeError

Represents an error when a value is not of the expected type. This is roughly the same as the native TypeError class. It additionally supports an code attribute.

	new TypeError(message[, code, error])

__Arguments__

* `message` - a message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new TypeError("number is not a function", 500, err);
```

---------------------------------------

<a name="uri" /></a>

### URIError

Represents an error when a value is not of the expected type. This is roughly the same as the native URIError class. 
It additionally supports an code attribute.

	new URIError(message[, code, error])

__Arguments__

* `message` - a message
* `code` - the error code
* `error` - the Error instance that caused the current error. Stack trace will be appended

```js
// Example
throw new URIError("URI malformed", 500, err);
```

## Authors

This library was developed by Gustavo Siqueira

## Contribute

Please do! Check out our [Contributing guidelines](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2018-2018 Brid-IT