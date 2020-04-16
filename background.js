import { submitPing } from "./pioneer-telemetry.js";

browser.browserAction.onClicked.addListener(async () => {
  const payload = { key1: "value1", key2: "value2" };
  await submitPing(payload);
  console.info("Telemetry submitted, check about:telemetry");
});
