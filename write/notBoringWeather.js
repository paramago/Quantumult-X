var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
    "com.andyworks.weather.yearlyBeliever":{
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier":"com.andyworks.weather.yearlyBeliever",
        "purchase_date":"2022-04-09T05:05:04Z"
    },
    "weatherApp":{
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier":"com.andyworks.weather.yearlyApp",
        "purchase_date":"2022-04-09T05:05:04Z"
    }
},

    obj.subscriber.subscriptions ={
        "com.andyworks.weather.yearlyBeliever":{
            "auto_resume_date": null,
            "billing_issues_detected_at": null,
            "expires_date": "2039-08-14T21:07:40Z",
            "grace_period_expires_date": null,
            "is_sandbox": true,
            "original_purchase_date": "2019-02-21T00:42:05Z",
            "ownership_type": "PURCHASED",
            "period_type": "normal",
            "purchase_date": "2019-07-14T20:07:40Z",
            "refunded_at": null,
            "store": "app_store",
            "unsubscribe_detected_at": "2039-07-17T22:48:38Z"
        },
        "com.andyworks.weather.yearlyApp":{
            "auto_resume_date": null,
            "billing_issues_detected_at": null,
            "expires_date": "2039-08-14T21:07:40Z",
            "grace_period_expires_date": null,
            "is_sandbox": true,
            "original_purchase_date": "2019-02-21T00:42:05Z",
            "ownership_type": "PURCHASED",
            "period_type": "normal",
            "purchase_date": "2019-07-14T20:07:40Z",
            "refunded_at": null,
            "store": "app_store",
            "unsubscribe_detected_at": "2039-07-17T22:48:38Z"
        }
    }

body = JSON.stringify(obj);
$done({body});



