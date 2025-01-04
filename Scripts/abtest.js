let body = JSON.parse($response.body);

// 强制修改分组为 B
body.group = "B";

// 如果有特定配置，确保按 B 组逻辑返回
body.config.showNewFeature = false; // 示例：关闭 A 组的功能

$done({ body: JSON.stringify(body) });