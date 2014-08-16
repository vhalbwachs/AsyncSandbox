var parallelRun = function(input, finished) {
  var results = [];
  input.forEach(function (task, i) {
    task(function (data) {
      results[i] = data;
      if (results.length === input.length) {
        finished(results);
      }
    });
  });
};