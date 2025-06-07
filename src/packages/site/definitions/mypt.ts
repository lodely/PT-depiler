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

};
