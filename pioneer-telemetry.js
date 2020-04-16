/**
 * Use the privileged `browser.telemetry` API to submit data to Mozilla Telemetry servers.
 * This module sets up the arguments needed to use this API for Pioneer.
 *
 * @args payload - Object containing data for Telemetry.
 *
 * @see https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/collection/webextension-api.html
 */

export async function submitPing(payload) {
  if (!browser.telemetry) {
    throw "No browser.telemetry API available, is extensions.experiments.enabled set in about:config? ";
  }

  const pingType = "pioneer-v2-study";

  const options = {
    useEncryption: true,
    publicKey: "", // base64 public key
    addPioneerId: true,
  };

  return await browser.telemetry.submitPing(pingType, payload, options);
}
