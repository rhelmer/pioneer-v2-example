browser.browserAction.onClicked.addListener(async () => {
  const currentDate = new Date();

  const payload = {
    "datetime": currentDate
  }

  const options = {
    "schemaName": "debug",
    "schemaVersion": 1
  };

  await browser.telemetry.submitEncryptedPing(payload, options);
  console.info("Telemetry submitted, check about:telemetry");
});
