var body = $response.body;
var obj = JSON.parse(body);

obj.features.user.fleets.max = 10;
obj.features.adverts = "disabled";
obj.features.map.info.flight = "unlimited";
obj.features.map.widgets.last_clicked_flights = "enabled";
obj.features.map.filters.unblocking = "enabled";
obj.features.map.info.aircraft = "unlimited";
obj.features.map.filters.receivers = "enabled";
obj.features.map.hide_header = "enabled";

// obj.userData.subscriptions = { "expires_date": null};
obj.userData.accountType = "Gold";
obj.userData.features.user.fleets.max = 10;
obj.userData.features.user.map.filters.categories = "enabled";
obj.userData.features.user.map.widgets.last_clicked_flights = "enabled";
obj.userData.features.user.map.filters.unblocking = "enabled";
obj.userData.features.user.map.hide_header = "enabled";
obj.userData.features.user.map.filters.fleets = "enabled";
obj.userData.features.user.map.filters.categories = "enabled";

body = JSON.stringify(obj);
$done({body});
