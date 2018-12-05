const http = require('http');

const CleanUp = function cleanUp() {
  this.clearDB = function clearDB(email) {
    const deferred = protractor.promise.defer();

    const options = {
      hostname: '34.249.214.138',
      port: 7080,
      path: '/api/clean/user',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const callback = function callback(res, err) {
      console.log('res :', res.statusCode);
      console.log('err :', err);
      deferred.fulfill();
    };

    const req = http.request(options, callback);

    req.write(JSON.stringify({
      email,
    }));
    req.end();

    return deferred.promise;
  };
};

module.exports = CleanUp;