var asyncMap = function (input, iterator, finished) {
  var output = [];
  var errored = false;
  input.forEach(function (task, i) {
    iterator(task, function (err, result) {
      if (!err) {
        output[i] = result;
        if (output.length === input.length) {
          finished(null, output);
        }
      } else if (err && !errored) {
        errored = true;
        finished(err);
      }
    });
  });
};
