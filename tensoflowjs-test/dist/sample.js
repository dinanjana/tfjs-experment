'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.average = exports.runSample = undefined;

var _tfjs = require('@tensorflow/tfjs');

var tf = _interopRequireWildcard(_tfjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Define a model for linear regression.
var model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Generate some synthetic data for training.
var xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
var ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys).then(function () {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor2d([5], [1, 1])).print();
});

var runSample = function runSample() {
  return model.fit(xs, ys).then(function () {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([5], [1, 1]));
  });
};

// tf.tidy takes a function to tidy up after
var average = function average() {
  // tf.tidy will clean up all the GPU memory used by tensors inside
  // this function, other than the tensor that is returned.
  //
  // Even in a short sequence of operations like the one below, a number
  // of intermediate tensors get created. So it is a good practice to
  // put your math ops in a tidy!
  var y = tf.tensor1d([1.0, 2.0, 3.0, 4.0]);
  var z = tf.ones([4]);

  return y.sub(z).square().mean();
}; // Output: 3.5

exports.runSample = runSample;
exports.average = average;