browser.browserAction.onClicked.addListener(async () => {
  const payload = { key1: "value1", key2: "value2" };
  await browser.telemetry.submitEncryptedPing(payload);
  console.info("Telemetry submitted, check about:telemetry");
});
