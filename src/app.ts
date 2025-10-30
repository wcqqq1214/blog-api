import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

/**
 * 创建并配置 Express 应用
 */
export function createApp(): Application {
  const app = express();

  // 中间件配置
  app.use(helmet()); // 安全头
  app.use(cors()); // 跨域
  app.use(express.json()); // 解析 JSON
  app.use(express.urlencoded({ extended: true })); // 解析 URL 编码

  // 健康检查路由
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API 路由（后续添加）
  // app.use('/api/auth', authRoutes);
  // app.use('/api/articles', articleRoutes);

  // 404 处理
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: '请求的资源不存在',
    });
  });

  return app;
}
