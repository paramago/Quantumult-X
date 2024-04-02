var body = $response.body;
var obj = JSON.parse(body);

obj={};

body = JSON.stringify(obj);
$done({body});
