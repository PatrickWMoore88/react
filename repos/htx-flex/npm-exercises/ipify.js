const ipify = require("ipify");

async () => {
  console.log(await ipify({ useIPv6: false }));
};
