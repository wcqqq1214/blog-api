import { User } from '../models/User.entity';

/**
 * 扩展 Express Request 类型
 * 添加 user 属性用于存储认证用户信息
 */
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
