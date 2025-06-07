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
  urls: ["ROT13:uggcf://pp.zlcg.pp/"],
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
      privilege: '得到一個邀請名額；可以直接發布種子；可以檢視NFO文件；可以檢視用戶清單；可以要求續種； 可以傳送邀請； 可以檢視排行榜；可以檢視其他用戶的種子曆史(如果用戶隱私等級未設定為"強")； 可以移除自己上傳的字幕。',
    },
    {
      id: 2,
      name: "Elite User",
      interval: "P8W",
      downloaded: "120GB",
      ratio: 1.55,
      privilege: "Elite User及以上用戶封存賬號后不會被移除。",
    },
    {
      id: 3,
      name: "Crazy User",
      interval: "P15W",
      downloaded: "300GB",
      ratio: 2.05,
      privilege: "得到兩個邀請名額；可以在做種/下載/發布的時候選取匿名型態。",
    },
    {
      id: 4,
      name: "Insane User",
      interval: "P25W",
      downloaded: "500GB",
      ratio: 2.55,
      privilege: "可以檢視普通日誌。",
    },
    {
      id: 5,
      name: "Veteran User",
      interval: "P40W",
      downloaded: "750GB",
      ratio: 3.05,
      privilege: "得到三個邀請名額；可以檢視其他用戶的評論、帖子曆史。Veteran User及以上用戶會永遠保留賬號。",
    },
    {
      id: 6,
      name: "Extreme User",
      interval: "P60W",
      downloaded: "1TB",
      ratio: 3.55,
      privilege: "可以更新過期的外部資訊；可以檢視Extreme User論壇。",
    },
    {
      id: 7,
      name: "Ultimate User",
      interval: "P60W",
      downloaded: "1.5TB",
      ratio: 5.05,
      privilege: "得到五個邀請名額。",
    },
    {
      id: 8,
      name: "Nexus Master",
      interval: "P100W",
      downloaded: "3TB",
      ratio: 4.55,
      privilege: "得到十個邀請名額。",
    }
  ],
};
