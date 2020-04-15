browser.browserAction.onClicked.addListener(async () => {
  if (!browser.telemetry) {
    throw "No browser.telemetry API available, is this extension privileged?";
  }

  if (!(await browser.telemetry.canUpload())) {
    throw "Telemetry upload is disabled.";
  }

  const pingType = "pioneer-v2-study";
  const payload = { pioneerId: "my-pioneer-id" };
  const options = { useEncryption: true };

  await browser.telemetry.submitPing(pingType, payload, options);

  console.info("Telemetry recorded, check about:telemetry");
});
