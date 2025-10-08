const http = require('http');

function testContactEndpoint() {
    const data = JSON.stringify({
        name: '测试用户',
        email: 'test@example.com',
        message: '这是一条测试消息'
    });

    const options = {
        hostname: 'localhost',
        port: 8888,
        path: '/api/contact',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    console.log('准备发送请求到 /api/contact');
    const req = http.request(options, (res) => {
        console.log('响应状态码:', res.statusCode);
        
        let responseData = '';
        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            try {
                const result = JSON.parse(responseData);
                console.log('响应结果:', result);
            } catch (e) {
                console.log('响应数据:', responseData);
            }
        });
    });

    req.on('error', (e) => {
        console.error('请求失败:', e.message);
    });

    req.write(data);
    req.end();
}

testContactEndpoint();