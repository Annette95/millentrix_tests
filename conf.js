require("babel-register")({
  presets: ["es2015"]
});
require("babel-polyfill");

exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",

  capabilities: {
    browserName: "chrome"
  },

  specs: ['./tests/login/*-spec.js'],

  // suites: {
  //   registration: ["tests/registrationSpec.js"],
  //   addBankAccount: ["tests/addBankAccountSpec.js"]
  // },

  allScriptsTimeout: 60 * 60 * 1000,
  getPageTimeout: 5 * 60 * 1000,

  onPrepare() {
    browser.driver
      .manage()
      .window()
      .maximize();
    require("@babel/register");

    global.requirePO = function(relativePath) {
      return require(`${basePath}/pages/${relativePath}.js`);
    };

    global.requireHelper = function(relativePath) {
      return require(`${basePath}/helpers/${relativePath}.js`);
    };

    global.basePath = `${__dirname}`;

    const MailListener = require("mail-listener4");

    const mailListener = new MailListener({
      username: "millentrix.tester@gmail.com", // email or userName
      password: "!@12QWqw", // password
      host: "imap.gmail.com", // e.g. imap.gmail.com
      port: 993,
      tls: true,
      fetchUnreadOnStart: true,
      markSeen: true
    });

    mailListener.on("server:connected", () => {
      console.log("imapConnected");
    });
    mailListener.on("server:disconnected", () => {
      console.log("imapDisconnected");
    });
    mailListener.on("error", err => {
      console.log(err);
    });

    let count = 0;
    mailListener.on("mail", (mail, seqno, attributes) => {
      const mailuid = attributes.uid;
      const toMailbox = "[Gmail]/All Mail";
      const i = ++count;
      if (i > 3) {
        mailListener.stop(); // start listening
      }
    });

    mailListener.start(); // start listening
    setTimeout(() => {
      mailListener.stop(); // stop listening
    }, 60000 * 15);

    global.mailListener = mailListener;
  },

  params: {
    getLastEmail() {
      const deferred = protractor.promise.defer();
      console.log("Waiting for email...");

      let count = 0;
      mailListener.on("mail", (mail, seqno, attributes) => {
        const mailuid = attributes.uid;
        const toMailbox = "[Gmail]/All Mail";
        const i = ++count;
        if (i > 3) {
          mailListener.stop(); // stop listening
          return;
        }

        deferred.fulfill(mail);
      });
      return deferred.promise;
    },
    basePath: `${__dirname}`
  }
};
