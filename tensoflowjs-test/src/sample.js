import * as tf from '@tensorflow/tfjs';



  const runSample = () => {
    console.log('numTensors (start): ');
    printNumberOfTensors();
    // Define a model for linear regression.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    return model.fit(xs, ys).then(() => {
      // Use the model to do inference on a data point the model hasn't seen before:
      return model.predict(tf.tensor2d([5], [1, 1]));
    });
  };

  // tf.tidy takes a function to tidy up after
  const average = () => {
    console.log('numTensors (before tidy):');
    printNumberOfTensors();
    return tf.tidy(() => {
      // tf.tidy will clean up all the GPU memory used by tensors inside
      // this function, other than the tensor that is returned.
      //
      // Even in a short sequence of operations like the one below, a number
      // of intermediate tensors get created. So it is a good practice to
      // put your math ops in a tidy!
      const y = tf.tensor1d([1.0, 2.0, 3.0, 4.0]);
      const z = tf.ones([4]);
      console.log('numTensors (in tidy): ' + tf.memory().numTensors);
      return y.sub(z).square().mean();
    });
  }; // Output: 3.5

  const printNumberOfTensors = () => {
    console.log('numTensors: ' + tf.memory().numTensors);
  };
  const linearRegressionSample = async () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    const xs = tf.tensor1d([1, 2, 3, 4, 5, 6.4, 8, 8.2, 8.9]);
    const ys = tf.tensor1d([0, -1, -2, -5, 0 ,1 ,3, 7, 8]);

    await model.fit(xs, ys)
  };

  export {
    runSample,
    average,
    printNumberOfTensors,
  }
