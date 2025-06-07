import { type ISiteMetadata } from "../types";
import { SchemaMetadata } from "../schemas/NexusPHP";

export const siteMetadata: ISiteMetadata = {
  ...SchemaMetadata,
  version: 1,
  id: "mypt",
  name: "MyPT",
  aka: ["我的PT"],
  description: "我的PT(CC) | 人類資源庫", // 站点说明
  tags: ["综合"],
  timezoneOffset: "+0800",
  collaborator: ["kveat"],
  type: "private",
  schema: "NexusPHP",
  urls: ["https://cc.mypt.cc/"],
  favicon: "./mypt.ico",

  userInfo: {
    ...SchemaMetadata.userInfo!,
    selectors: {
      ...SchemaMetadata.userInfo!.selectors!,
      bonus: {
        selector: ["td.rowhead:contains('魔力值') + td, td.rowhead:contains('Karma Points') + td"],
        filters: [{ name: "parseNumber" }],
      },
    },
  },
  levelRequirements: [
    {
      id: 1,
      name: "Power User",
      interval: "P4W",
      downloaded: "50GB",
      ratio: 1.05,
      privilege: "得到一個邀請名額；可以直接發布種子；可以檢視NFO文件；可以檢視用戶清單；可以要求續種； 可以傳送邀請； 可以檢視排行榜；可以檢視其他用戶的種子曆史(如果用戶隱私等級未設定為"強")； 可以移除自己上傳的字幕。",
    },
  ],
};
