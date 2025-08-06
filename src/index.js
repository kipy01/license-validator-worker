// src/index.js
export default {
  async fetch(request) {
    try {
      const { license } = await request.json();
      
      // 预定义有效注册码
      const validLicenses = [
        "ABCD-1234-EFGH",
        "WXYZ-5678-IJKL",
        "TEST-9999-DEMO"
      ];
      
      if (validLicenses.includes(license)) {
        return new Response(JSON.stringify({
          valid: true,
          message: "注册码验证成功",
          expiry: "2025-12-31"
        }), {
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } else {
        return new Response(JSON.stringify({
          valid: false,
          message: "注册码无效"
        }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({
        error: "请求格式错误"
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
}
