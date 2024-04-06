var body = $response.body;
var obj = JSON.parse(body);

obj.data.settings_consent.explicit = true;

body = JSON.stringify(obj);
$done({body});

// {
//     "data" : {
//     "settings_notifications_ts" : 1712424089562,
//         "settings_consent" : {
//         "analytics" : true,
//             "timestamp" : 1711628024021,
//             "explicit" : false,
//             "version" : "2023/11"
//     },
//     "settings_favOverlaysMobile_ts" : 1711739981638,
//         "settings_notifications" : {
//         "sendToEmail" : false,
//             "sendToMobile" : true
//     },
//     "settings_consent_ts" : 1711628024021,
//         "settings_favOverlaysMobile" : [
//         "capAlerts",
//         "dustsm",
//         "pressure"
//     ],
//         "settings_notams_ts" : 1711739522888,
//         "settings_notams" : {
//
//     }
// },
//     "storeTs" : 1712424089562,
//     "_userID" : "12015089",
//     "version" : 3
// }
