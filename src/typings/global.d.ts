declare global {
  // 分页查询参数
  interface PageQuery {
    page: number;
    pageSize: number;
  }

  // 分页响应对象
  interface PageResult<T> {
    list: T;
    total: number;
  }

  // 系统设置
  interface AppSettings {
    /** 系统标题 */
    title: string;
    /** 系统版本 */
    version: string;
    /** 主题模式(dark|light) */
    theme: string;
    /** 语言( zh-cn| en) */
    language: string;
    /** 是否开启水印 */
    watermarkEnabled: boolean;
    /** 水印内容 */
    watermarkContent: string;
    /** API地址 */
    baseURL: string;
    publicPath: string;
    /** 生产环境构建文件的目录名 */
    outputDir: string;
    /** 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: string;
    /** 开发环境每次保存时是否输出为eslint编译警告 */
    lintOnSave: boolean;
    /** 开发环境端口号 */
    devPort: string;
    /** pnpm run build时是否自动生成7z压缩包 */
    build7z: boolean;
    /** 是否开启图片压缩 */
    imageCompression: boolean;
  }
}
export {};
