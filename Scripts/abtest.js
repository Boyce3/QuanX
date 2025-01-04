let body = JSON.parse($response.body);

// 强制返回分组为 A
body.group = "A";
body.config.showNewFeature = true; // 确保功能开关为 A 组配置

$done({ body: JSON.stringify(body) });