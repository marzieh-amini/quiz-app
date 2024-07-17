
// const langs: any = {
//   "en-us": () => import("@/langs/en.json").then((module) => module.default),
//   en: () => import("@/langs/en.json").then((module) => module.default),
//   fa: () => import("@/langs/fa.json").then((module) => module.default),
//   "fa-ir": () => import("@/langs/fa.json").then((module) => module.default),
// };

export const getLangs = async (locale: string) => {
  let nameFile = "fa"
  if(locale.includes("fa")){
    nameFile = "fa"
  }else if(locale.includes("en")){
    nameFile = "en"

  }
  return (await import(`@/langs/${nameFile}.json`)).default
};
