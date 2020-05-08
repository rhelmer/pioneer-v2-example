An example web extension for Pioneer v2 studies.

Until support is landed in Firefox, this requires a local build with support for the new encryption options:
```console
FIREFOX_BINARY=~/src/mozilla-unified/obj-x86_64-apple-darwin18.7.0/dist/Nightly.app/Contents/MacOS/firefox
TELEMETRY_SERVER="https://stage.ingestion.nonprod.dataops.mozgcp.net"
PIONEER_ID="a2b94b86-8678-1843-8a4e-a67bae2933f4"

web-ext run --pref=toolkit.telemetry.rejected=false \
            --pref=datareporting.policy.dataSubmissionEnabled=true \
            --pref=toolkit.telemetry.send.overrideOfficialCheck=true \
            --pref=toolkit.telemetry.server=${TELEMETRY_SERVER} \
            --pref=extensions.experiments.enabled=true \
            --pref=toolkit.telemetry.pioneerId=${PIONEER_ID} \
            --browser-console \
            --firefox-binary ${FIREFOX_BINARY}
 ```

To see extra details on what Firefox Telemetry is doing, enable Trace log level: `toolkit.telemetry.log.level=Trace`
