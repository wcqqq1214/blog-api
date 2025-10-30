import 'reflect-metadata';
import { AppDataSource } from './config/database';
import { createApp } from './app';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

/**
 * 启动服务器
 */
async function startServer() {
  try {
    // 初始化数据库连接
    await AppDataSource.initialize();
    console.log('数据库连接成功');

    // 创建 Express 应用
    const app = createApp();

    // 启动服务器
    app.listen(PORT, () => {
      console.log(`服务器运行在 http://${HOST}:${PORT}`);
      console.log(`环境: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('服务器启动失败:', error);
    process.exit(1);
  }
}

startServer();
