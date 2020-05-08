![alt text](https://raw.githubusercontent.com/rhelmer/pioneer-v2-example/master/images/pioneer10-patch-96.png "Pioneer 10 Patch")

An example web extension for Pioneer v2 studies.

Until support is landed in Firefox, this requires a [custom build](https://treeherder.mozilla.org/#/jobs?repo=try&selectedTaskRun=DifN-0KVSVefDIHXhpA-7A-0&revision=eb6acecfb17517de5daa184f41e9272d4a9c124a) with support for the [new encryption options](https://bugzilla.mozilla.org/show_bug.cgi?id=1634557):
```console
FIREFOX_BINARY="/Applications/Firefox Nightly 2.app/Contents/MacOS/firefox"
TELEMETRY_SERVER="https://stage.ingestion.nonprod.dataops.mozgcp.net"
PIONEER_ID="a2b94b86-8678-1843-8a4e-a67bae2933f4"

web-ext run --pref=toolkit.telemetry.rejected=false \
            --pref=datareporting.policy.dataSubmissionEnabled=true \
            --pref=toolkit.telemetry.send.overrideOfficialCheck=true \
            --pref=toolkit.telemetry.server="${TELEMETRY_SERVER}" \
            --pref=extensions.experiments.enabled=true \
            --pref=toolkit.telemetry.pioneerId="${PIONEER_ID}" \
            --browser-console \
            --firefox-binary "${FIREFOX_BINARY}"
 ```

To see extra details on what Firefox Telemetry is doing, enable Trace log level: `toolkit.telemetry.log.level=Trace`
