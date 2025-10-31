// This file is auto-generated, don't edit it
/**
 * @returns timeRFC3339
 */
import * as $tea from '@alicloud/tea-typescript';
import * as crypto from 'crypto';

export default class Client {

  static timeRFC3339(): string {
      const date = new Date();
      // 1. 提取UTC时间的年月日时分秒（用getUTC*方法）
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(date.getUTCDate()).padStart(2, '0');
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');

      // 2. 可选：添加UTC毫秒
      const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
      const timePart = milliseconds === '000'
          ? `${hours}:${minutes}:${seconds}`
          : `${hours}:${minutes}:${seconds}.${milliseconds}`;

      // 3. UTC时间固定用Z表示时区
      return `${year}-${month}-${day}T${timePart}Z`;
  }

  /**
   * @remarks
   * 生成16位随机Nonce
   * @returns generateNonce
   */
  static generateNonce(): string {
    const bytes = crypto.randomBytes(8);
    return bytes.toString('hex');
  }
  /**
   * @remarks
   * 生成签名
   * @returns generateSignature
   */
  static generateSignature(
      body: string,
      nonce: string,
      secretKey: string,
      timestamp: string,
      uri: string
  ): string {
    const parts: string[] = [];

    if (body !== '') {
      parts.push(`body=${body}`);
    }

    parts.push(
        `nonce=${nonce}`,
        `secretKey=${secretKey}`,
        `timestamp=${timestamp}`,
        `url=${uri}`
    );

    const signStr = parts.join('&');
    return crypto.createHash('md5').update(signStr).digest('hex');
  }

}
