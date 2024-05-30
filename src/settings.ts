import { ThemeEnum } from "./enums/ThemeEnum";
import { LanguageEnum } from "./enums/LangEnum";

const { pkg } = __APP_INFO__;
const env = import.meta.env;
const defaultSettings: AppSettings = {
  title: pkg.name,
  version: pkg.version,
  theme: ThemeEnum.LIGHT,
  language: LanguageEnum.ZH_CN,
  build7z: false,
  imageCompression: true,
};

export default defaultSettings;
