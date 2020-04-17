/**
 * Use the privileged `browser.telemetry` API to submit data to Mozilla Telemetry servers.
 * This module sets up the arguments needed to use this API for Pioneer.
 *
 * Public keys are expected to be in a file named `pioneer.public_keys.json`.
 *
 * @args payload - Object containing data for Telemetry.
 * @throws - If `browser.telemetry` API is not available. Also see underlying API docs below.
 *
 * @see https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/collection/webextension-api.html
 */

import config from './config.js'

export async function submitPing(payload) {
  if (!browser.telemetry) {
    throw "No browser.telemetry API available, is extensions.experiments.enabled set in about:config? ";
  }

  const pingType = "pioneer-v2-study";

  const options = {
    useEncryption: true,
    publicKey: JSON.stringify(config.publicKeys.prod),
    addPioneerId: true,
  };

  return await browser.telemetry.submitPing(pingType, payload, options);
}
