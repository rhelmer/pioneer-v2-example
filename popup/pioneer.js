async function submitTelemetry() {
  if (!(await browser.telemetry.canUpload())) {
    console.debug("telemetry upload disabled.");
    throw "Telemetry upload is disabled.";
  }

  browser.telemetry.useEncryption = true;

  const pingType = "pioneer-v2";
  const payload = { pioneerId: "my-pioneer-id" };
  const options = { useEncryption: true };

  return await browser.telemetry.submitPing(pingType, payload, options);
}

if (browser.telemetry) {
  submitTelemetry()
    .then((result) => console.info(`Telemetry submission finished.`))
    .catch((error) => console.error(`Telemetry submission failed: ${error}`));
} else {
  console.error(
    "No browser.telemetry API available, is this extension privileged?"
  );
}
