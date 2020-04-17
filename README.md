sh```
 web-ext run --pref=extensions.experiments.enabled=true --browser-console --firefox-binary ~/src/mozilla-unified/obj-x86_64-apple-darwin18.7.0/dist/Nightly.app/Contents/MacOS/firefox
```

To see extra details on what Firefox Telemetry is doing, enable Trace log level: `toolkit.telemetry.log.level=Trace`