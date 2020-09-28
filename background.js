console.log("start");

let enrolled = false;

const result = {
  enrolled: false,
  activeStudies: [],
  availableStudies: [
    {
      name: "Demo Study",
      icons: {
        32: "https://addons.cdn.mozilla.net/user-media/addon_icons/2644/2644632-32.png?modified=4a64e2bc",
        64: "https://addons.cdn.mozilla.net/user-media/addon_icons/2644/2644632-64.png?modified=4a64e2bc",
        128: "https://addons.cdn.mozilla.net/user-media/addon_icons/2644/2644632-128.png?modified=4a64e2bc",
      },
      schema: 1597266497978,
      authors: {
        url:
          "https://addons.mozilla.org/en-US/firefox/addon/pioneer-v2-example/",
        name: "Pioneer Developers",
      },
      version: "1.0",
      addon_id: "pioneer-v2-example@mozilla.org",
      moreInfo: {
        spec:
          "https://addons.mozilla.org/en-US/firefox/addon/pioneer-v2-example/",
      },
      isDefault: false,
      sourceURI: {
        spec:
          "https://addons.mozilla.org/firefox/downloads/file/3579857/pioneer_v2-1.0-fx.xpi",
      },
      studyType: "extension",
      studyEnded: false,
      description: "Study purpose: Testing Pioneer.",
      privacyPolicy: {
        spec:
          "https://addons.mozilla.org/en-US/firefox/addon/pioneer-v2-example/",
      },
      joinStudyConsent:
        "This study will send an encrypted ping, only when the toolbar icon is clicked.",
      leaveStudyConsent: "This study cannot be re-joined.",
      dataCollectionDetails: ["The date and time"],
      id: "0eb02750-7159-4f09-96ae-5c7cb7424e89",
      last_modified: 1597280277565,
    },
  ],
};

chrome.runtime.onMessageExternal.addListener(function(
  request,
  sender,
  sendResponse
) {
  console.log("Ion enrolled?:", enrolled);
  console.log("received in extension", request, sender, sendResponse);
  console.log(request);
  if ("enroll" in request) {
    result.enrolled = true;
  } else if ("unenroll" in request) {
    result.enrolled = false;
  }
  sendResponse(result);
});

console.log("done");
