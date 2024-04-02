var body = $response.body;
var obj = JSON.parse(body);

obj.appearances.forEach(item => {
    item.ispro = 0;
});

body = JSON.stringify(obj);
$done({body});
