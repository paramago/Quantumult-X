var obj = JSON.parse($response.body);
if (obj.data) {
    // 检查offerings数组是否存在并且长度大于0
    if (obj.offerings && obj.offerings.length > 0) {
        // 将第一个offering的identifier的值改为"annualSuper"
        obj.offerings[0].identifier = "annualSuper";
    }
}
$done({ body: JSON.stringify(obj) });