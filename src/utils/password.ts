import bcrypt from 'bcrypt';

/**
 * 密码加密轮数
 */
const SALT_ROUNDS = 10;

/**
 * 加密密码
 * @param password 明文密码
 * @returns 加密后的密码
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * 验证密码`
 * @param password 明文密码
 * @param hash 加密后的密码
 * @returns 是否匹配
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
