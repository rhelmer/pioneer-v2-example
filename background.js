const currentDate = new Date();

const payload = {
  datetime: currentDate,
};

const options = {
  schemaName: "debug",
  schemaVersion: 1,
};

// eslint-disable-next-line no-undef
browser.telemetry.submitEncryptedPing(payload, options).then(
  result => {
    console.info("Telemetry submitted, check about:telemetry");
  },
  error => {
    console.error("Unable to send encrypted telemetry:", error);
  }
);
