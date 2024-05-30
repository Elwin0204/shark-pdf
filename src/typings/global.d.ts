import { AnnotationEnum } from "@/enums/AnnotationEnum";

declare global {
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
    /** pnpm run build时是否自动生成7z压缩包 */
    build7z: boolean;
    /** 是否开启图片压缩 */
    imageCompression: boolean;
  }

  // 原始数据节点
  interface BookmarkItem {
    label?: string | number;
    key?: string | number;
    children?: Array<BookmarkItem>;
    isLeaf?: boolean;
    [k: string]: any;
  }
  // 书签节点
  interface BookmarkNode extends Required<BookmarkItem> {
    parentKey: string | number | null;
    // isCurrent: boolean;
    level: number;
    children: Array<BookmarkNode>;
    rawNode: BookmarkItem;
  }
  // 标注节点
  interface AnnotationNode {
    type: AnnotationEnum;
    timestamp: number;
    data: any;
  }
  // 页标注列表
  interface PageAnnotation<T = AnnotationNode> {
    page: number;
    isHidden?: boolean;
    data: Array<T>;
  }
  // pdf缩略图
  interface ThumbnailItem {
    page: number;
    content: string;
  }
}
export {};
