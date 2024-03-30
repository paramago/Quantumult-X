var body = $response.body;
var obj = JSON.parse(body);

if (obj.data) {
    obj.offerings[0].identifier = "annualSuper";
    obj.subscriber.entitlements = {
        "com.andyworks.weather.yearlyBeliever":{
            "expires_date":"2029-05-26T05:05:04Z",
            "product_identifier":"com.andyworks.weather.yearlyBeliever",
            "purchase_date":"2022-04-09T05:05:04Z"
        }
    }
    obj.subscriber.subscriptions ={
        "com.andyworks.weather.yearlyBeliever":{
                "billing_issues_detected_at":null,
                "expires_date":"2029-05-26T05:05:04Z",
                "is_sandbox":false,
                "original_purchase_date":"2022-04-09T05:05:04Z",
                "period_type":"normal",
                "purchase_date":"2022-04-09T05:05:04Z",
                "store":"app_store",
                "unsubscribe_detected_at":null
            }
        }
}

console.log("obj.data = ", obj.data);

body = JSON.stringify(obj);
$done({body});



// {
//     "placements" : {
//     "fallback_offering_id" : "default"
// },
//     "offerings" : [
//     {
//         "metadata" : null,
//         "description" : "The default offering",
//         "identifier" : "default",
//         "packages" : [
//             {
//                 "platform_product_identifier" : "com.andyworks.weather.yearlyPatron",
//                 "identifier" : "annualSuper"
//             },
//             {
//                 "platform_product_identifier" : "com.andyworks.weather.monthBeliever",
//                 "identifier" : "monthSuper"
//             },
//             {
//                 "platform_product_identifier" : "com.andyworks.weather.yearlyApp",
//                 "identifier" : "annualApp"
//             }
//         ]
//     }
// ],
//     "current_offering_id" : "default"
// }



/***/




