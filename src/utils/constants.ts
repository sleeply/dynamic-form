export const SUPPORT_LOCALES: string[] = ["en", "ru", "uz"];

interface IDistrict {
  [key: string]: {
    name: string;
  }[];
}

interface IRegions {
  name: string;
  slug: string;
  id: number;
}

export const REGIONS = {
  andijon: "Andijon",
  bukhara: "Buxoro",
  fergana: "Farg'ona",
  jizzakh: "Jizzax",
  xorazm: "Xorazm",
  namangan: "Namangan",
  navoiy: "Navoiy",
  qashqadaryo: "Qashqadaryo",
  samarqand: "Samarqand",
  sirdaryo: "Sirdaryo",
  surxondaryo: "Surxondaryo",
  tashkent: "Tashkent",
  karakalpakstan: "Karakalpakstan",
}

export const DISTRICTS: IDistrict = {
  karakalpakstan: [
    {
      name: "Amudaryo",
    },
    {
      name: "Beruniy",
    },
    {
      name: "Chimboy",
    },
    {
      name: "Ellikqal'a",
    },
    {
      name: "Kegeyli",
    },
    {
      name: "Mo'ynoq",
    },
    {
      name: "Nukus",
    },
    {
      name: "Qaniko'l",
    },

    {
      name: "Qo'ng'irot",
    },
    {
      name: "Qorao'zak",
    },
    {
      name: "Shumanay",
    },
    {
      name: "Taxtako'pir",
    },
    {
      name: "To'rtko'l",
    },
    {
      name: "Xo'jayli",
    },
    {
      name: "Taxiatosh",
    },
    {
      name: "Bo'zatosh",
    },
  ],
  xorazm: [
    {
      name: "Bog'ot",
    },
    {
      name: "Gurlan",
    },
    {
      name: "Xonqa",
    },
    {
      name: "Hazorasp",
    },
    {
      name: "Xiva",
    },
    {
      name: "Qoshko'pir",
    },
    {
      name: "Shovot",
    },
    {
      name: "Urganch",
    },
    {
      name: "Yangiariq",
    },
    {
      name: "Yangibozor",
    },
    {
      name: "Tuproqqal'a",
    },
    {
      name: "Bog'ot",
    },
  ],
  navoiy: [
    {
      name: "Konimex",
    },
    {
      name: "Karmana",
    },
    {
      name: "Qiziltepa",
    },
    {
      name: "Xatirchi",
    },
    {
      name: "Navbahor",
    },
    {
      name: "Nurota",
    },
    {
      name: "Tomdi",
    },
    {
      name: "Uchquduq",
    },
  ],
  bukhara: [
    {
      name: "Olot",
    },
    {
      name: "Buxoro",
    },
    {
      name: "G'ijduvon",
    },
    {
      name: "Jondor",
    },
    {
      name: "Kogon",
    },
    {
      name: "Qorako'l",
    },
    {
      name: "Qoravulbozor",
    },
    {
      name: "Peshku",
    },
    {
      name: "Romitan",
    },
    {
      name: "Shofirkon",
    },
    {
      name: "Vobkent",
    },
  ],
  samarqand: [
    {
      name: "Bulung'ur",
    },
    {
      name: "Ishtixon",
    },
    {
      name: "Jomboy",
    },
    {
      name: "Kattaqo'rg'on",
    },
    {
      name: "Qo'shrabot",
    },
    {
      name: "Narpay",
    },
    {
      name: "Nurobod",
    },
    {
      name: "Oqdaryo",
    },
    {
      name: "Paxtachi",
    },
    {
      name: "Payariq",
    },
    {
      name: "Pastdarg'om",
    },
    {
      name: "Samarqand",
    },
    {
      name: "Toyloq",
    },
    {
      name: "Urgut",
    },
  ],
  qashqadaryo: [
    {
      name: "Chiroqchi",
    },

    {
      name: "Dehqonobod",
    },
    {
      name: "G'uzor",
    },
    {
      name: "Qamashi",
    },
    {
      name: "Qarshi",
    },
    {
      name: "Koson",
    },
    {
      name: "Kasbi",
    },
    {
      name: "Kitob",
    },
    {
      name: "Mirishkor",
    },
    {
      name: "Muborak",
    },
    {
      name: "Nishon",
    },
    {
      name: "Shahrisabz",
    },
    {
      name: "Yakkabog'",
    },
    {
      name: "Ko'kdala",
    },
  ],
  surxondaryo: [
    {
      name: "Angor",
    },
    {
      name: "Boysun",
    },
    {
      name: "Denov",
    },
    {
      name: "Jarqo'rg'on",
    },
    {
      name: "Qiziriq",
    },
    {
      name: "Qumqo'rg'on",
    },
    {
      name: "Muzrabot",
    },
    {
      name: "Oltinsoy",
    },
    {
      name: "Sariosiyo",
    },
    {
      name: "Sherobod",
    },
    {
      name: "Sho'rchi",
    },
    {
      name: "Termiz",
    },
    {
      name: "Uzun",
    },
  ],
  jizzakh: [
    {
      name: "Arnasoy",
    },
    {
      name: "Baxmal",
    },
    {
      name: "Do'stlik",
    },
    {
      name: "Forish",
    },
    {
      name: "G'allaorol",
    },
    {
      name: "Sharof Rashidov",
    },
    {
      name: "Mirzacho'l",
    },
    {
      name: "Paxtakor",
    },
    {
      name: "Yangiobod",
    },
    {
      name: "Zomin",
    },

    {
      name: "Zafarobod",
    },
    {
      name: "Zarbdor",
    },
  ],
  sirdaryo: [
    {
      name: "Oqoltin",
    },
    {
      name: "Boyvut",
    },
    {
      name: "Guliston",
    },
    {
      name: "Xovos",
    },
    {
      name: "Mirzaobod",
    },
    {
      name: "Sayxunobod",
    },
    {
      name: "Sardoba",
    },
    {
      name: "Sirdaryo",
    },
    {
      name: "Yangiyer",
    },
    {
      name: "Shirin",
    },
    {
      name: "Guliston",
    },
  ],
  tashkent: [
    {
      name: "Bekobod",
    },
    {
      name: "Bo'stonliq",
    },
    {
      name: "Bo'ka",
    },
    {
      name: "Chinoz",
    },
    {
      name: "Qibray",
    },
    {
      name: "Ohangaron",
    },
    {
      name: "Oqqo'rg'on",
    },
    {
      name: "Parkent",
    },
    {
      name: "Piskent",
    },
    {
      name: "Quyi Chirchiq",
    },
    {
      name: "O'rta Chirchiq",
    },
    {
      name: "Yangiyo'l",
    },
    {
      name: "Yuqori Chirchiq",
    },
    {
      name: "Zangiota",
    },
  ],
  namangan: [
    {
      name: "Chortoq",
    },
    {
      name: "Chust",
    },
    {
      name: "Mingbuloq",
    },
    {
      name: "Namangan",
    },
    {
      name: "Norin",
    },
    {
      name: "Pop",
    },
    {
      name: "To'raqo'rg'on",
    },
    {
      name: "Uchqo'rg'on",
    },
    {
      name: "Uychi",
    },
    {
      name: "Yangiqo'rg'on",
    },
  ],
  fergana: [
    {
      name: "Oltinariq",
    },
    {
      name: "Bag'dod",
    },
    {
      name: "Beshariq",
    },
    {
      name: "Buvayda",
    },
    {
      name: "Dang'ara",
    },
    {
      name: "Farg'ona",
    },
    {
      name: "Furqat",
    },
    {
      name: "Qo'shtepa",
    },
    {
      name: "Quva",
    },
    {
      name: "Rishton",
    },
    {
      name: "So'x",
    },
    {
      name: "Toshloq",
    },
    {
      name: "Uchko'prik",
    },
    {
      name: "O'zbekiston",
    },
    {
      name: "Yozyovon",
    },
    {
      name: "Quvasoy",
    },
  ],
  andijon: [
    {
      name: "Andijon",
    },
    {
      name: "Asaka",
    },
  ],
};
