{
  // bad code
  const foo = new Promise(async (resolve, reject) => {
    readFile('foo.txt', function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  const result = new Promise(async (resolve, reject) => {
    resolve(await foo);
  });
}

{
  // good code
  const foo = new Promise((resolve, reject) => {
    readFile('foo.txt', function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  const result = Promise.resolve(foo);
}
