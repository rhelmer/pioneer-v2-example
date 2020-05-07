browser.browserAction.onClicked.addListener(async () => {
  const currentDate = new Date();

  const payload = {
    "datetime": currentDate
  }

  await browser.telemetry.submitEncryptedPing(payload);
  console.info("Telemetry submitted, check about:telemetry");
});
