export interface BookmarkNodeEmitter {
  (e: "toggleExpanded", node: BookmarkNode): void;
}
