import http from "http";

class CleanUp {
  constructor() {
    this.deferred = protractor.promise.defer();
    this.options = {
      hostname: "34.249.214.138",
      port: 7080,
      path: "/api/clean/user",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
  clearDB(email) {
    const req = http.request(this.options, (res, err) => {
      console.log("res :", res.statusCode);
      console.log("err :", err);
      this.deferred.fulfill();
    });
    req.write(
      JSON.stringify({
        email
      })
    );
    req.end();

    return this.deferred.promise;
  }
}

export default new CleanUp();
