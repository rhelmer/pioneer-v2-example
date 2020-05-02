An example web extension for Pioneer v2 studies.

Until support is landed in Firefox, this requires a local build with support for the new encryption options:
```
 web-ext run --pref=extensions.experiments.enabled=true --pref=toolkit.telemetry.pioneerId="pioneer-id-12345" --browser-console --firefox-binary ~/src/mozilla-unified/obj-x86_64-apple-darwin18.7.0/dist/Nightly.app/Contents/MacOS/firefox
```

To see extra details on what Firefox Telemetry is doing, enable Trace log level: `toolkit.telemetry.log.level=Trace`