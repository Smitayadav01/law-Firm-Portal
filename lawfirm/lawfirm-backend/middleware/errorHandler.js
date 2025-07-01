export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  let error = {
    success: false,
    message: err.message || 'Internal Server Error',
    statusCode: err.statusCode || 500
  };

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = {
      success: false,
      message: message.join(', '),
      statusCode: 400
    };
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = {
      success: false,
      message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`,
      statusCode: 400
    };
  }

  // Mongoose cast error
  if (err.name === 'CastError') {
    error = {
      success: false,
      message: 'Invalid ID format',
      statusCode: 400
    };
  }

  // JWT error
  if (err.name === 'JsonWebTokenError') {
    error = {
      success: false,
      message: 'Invalid token',
      statusCode: 401
    };
  }

  // JWT expired error
  if (err.name === 'TokenExpiredError') {
    error = {
      success: false,
      message: 'Token expired',
      statusCode: 401
    };
  }

  res.status(error.statusCode).json(error);
};

// Not found middleware
export const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};