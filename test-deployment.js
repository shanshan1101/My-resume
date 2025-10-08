// 简单测试脚本来验证项目结构和API配置

console.log('测试项目结构...');
console.log('- 后端服务已移至 api/server.js');
console.log('- 前端通过 /api/chat 和 /api/contact 调用后端API');
console.log('- package.json 已更新指向 api/server.js');
console.log('- 静态文件服务路径已调整');

console.log('\n部署建议:');
console.log('1. 确保 .env 文件包含所有必要的配置（ZHIPU_API_KEY, SMTP_* 等）');
console.log('2. 将项目推送到 GitHub');
console.log('3. 在 Vercel 上连接 GitHub 仓库');
console.log('4. 在 Vercel 环境变量中设置所有 .env 中的配置');
console.log('5. 部署项目');

console.log('\n注意: 对于邮件功能，由于 Vercel 环境限制，可能需要使用邮件 API 服务（如 Resend.com、Brevo 或 Mailgun）代替直接的 SMTP 连接。');