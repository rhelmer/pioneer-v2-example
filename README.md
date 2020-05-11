![alt text](https://raw.githubusercontent.com/rhelmer/pioneer-v2-example/master/images/pioneer10-patch-96.png "Pioneer 10 Patch")

An example web extension for Pioneer v2 studies.

This requires [Firefox Nightly](https://nightly.mozilla.org) 78.0a1 (2020-05-10) or newer, which supports the [new `browser.telemetry.submitEncryptedPing` WebExtension API](https://bugzilla.mozilla.org/show_bug.cgi?id=1634557):
```console
FIREFOX_BINARY="/Applications/Firefox Nightly.app/Contents/MacOS/firefox"
TELEMETRY_SERVER="https://stage.ingestion.nonprod.dataops.mozgcp.net"
PIONEER_ID="a2b94b86-8678-1843-8a4e-a67bae2933f4"

web-ext run --pref=toolkit.telemetry.server="${TELEMETRY_SERVER}" \
            --pref=extensions.experiments.enabled=true \
            --pref=toolkit.telemetry.pioneerId="${PIONEER_ID}" \
            --pref=toolkit.telemetry.log.level=Trace \
            --browser-console \
            --firefox-binary "${FIREFOX_BINARY}"
 ```

To see extra details on what Firefox Telemetry is doing, enable Trace log level: `toolkit.telemetry.log.level=Trace`
