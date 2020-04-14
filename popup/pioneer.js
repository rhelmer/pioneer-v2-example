if (browser.telemetry) {
  submitTelemetry().then().catch(ex => console.error(`Telemetry submission failed: ${ex}`));
} else {
  console.error("No browser.telemetry API available, is this extension privileged?");
}

async function submitTelemetry() {
  const canUpload = await browser.telemetry.canUpload();
  if (!canUpload) {
    throw Exception("Telemetry upload is disabled.")
  }

  const checkEncryption = async () => {
    const encryptionUsed = await browser.telemetry.useEncryption;
    if (encryptionUsed) {
      console.debug("Encryption is enabled.");
    } else {
      console.debug("Encryption is disabled.");
    }
  }

  checkEncryption();
  browser.telemetry.useEncryption = true;
  checkEncryption();
}
