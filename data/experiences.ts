import { Category } from "@/app/(frontend)/tourism/page";

interface Experience {
  key: string;
  title: string;
  content: string;
  tags: Category[];
  address?: string;
  website?: string;
  phone?: string;
  hours?: string;
  price?: string;
  image?: string;
  latitude?: number;
  longitude?: number;
}

export const experiences: Experience[] = [
  {
    key: "akizuki-castle-ruins",
    title: "秋月城跡",
    content:
      "1624年に創建された秋月城には、秋月家・黒田家の双方が世代を跨いで居住し、秋月藩5万石は約400年にも渡りこの地を統治してきました。",
    tags: ["Culture", "Experience"],
  },
  {
    key: "akizuki-hachiman-shrine",
    title: "秋月八幡宮",
    content: "戦いの神が祀られた10世紀の神社。",
    tags: ["Culture"],
  },
  {
    key: "choshoji-temple",
    title: "長生寺",
    content: "釈迦牟尼仏の参拝所として開山された17世紀の禅寺",
    tags: ["Culture"],
  },
  {
    key: "dairyoji-temple",
    title: "大涼寺",
    content: "黒田藩と徳川藩の繋がりを表した歴史ある寺院。",
    tags: ["Culture"],
  },
  {
    key: "kuno-residence",
    title: "久野邸",
    content: "美しく修復された武家屋敷。",
    tags: ["Culture"],
  },
  {
    key: "koshinji-temple",
    title: "古心寺",
    content: "黒田家との重要なつながりを持つ秋月最大の寺院。",
    tags: ["Culture"],
  },
  {
    key: "megane-bridge",
    title: "眼鏡橋",
    content: "秋月への入り口に構える 歴史ある花崗岩の橋。",
    tags: ["Culture"],
  },
  {
    key: "miyajidake-shrine",
    title: "宮地嶽神社",
    content: "秋月を一望　15世紀の人里隠れた神社。",
    tags: ["Culture"],
  },
  {
    key: "naruwatari-kannon-temple",
    title: "鳴渡観音堂",
    content: "秋月種実の家臣を祀る人里離れた寺。",
    tags: ["Culture"],
  },
  {
    key: "akizuki-museum",
    title: "秋月博物館",
    content: "秋月の歴史を網羅した近代的な博物館。",
    tags: ["Culture"],
  },
  {
    key: "akizuki-tofu-house",
    title: "秋月とうふ家",
    content: "ミシュランガイドおすすめ ユニークな豆腐体験。",
    tags: ["Food"],
  },
  {
    key: "hirohisa-kuzu-honpo",
    title: "廣久葛本舗",
    content: "秋月で最も古い店の1つ伝統的な葛商品の販売。",
    tags: ["Food"],
  },
  {
    key: "koshoan",
    title: "古処庵",
    content: "秋月城跡からすぐ 人気の定食そば屋。",
    tags: ["Food"],
  },
  {
    key: "sano",
    title: "うつわ料理 さ乃",
    content: "ミシュラン星付き 懐石料理店。",
    tags: ["Food"],
  },
  {
    key: "love-deep",
    title: "愛深",
    content: "隠れ家的なお蕎麦屋さん 大人数でゆっくり過ごしたい方におすすめ。",
    tags: ["Food"],
  },
  {
    key: "coffee-yamaguchi",
    title: "珈琲 山口",
    content: "古き良き日本家屋に潜む珈琲のメッカ。",
    tags: ["Food"],
  },
  {
    key: "wine-restaurant-le-canon",
    title: "ワイン食堂 LE CANON",
    content: "甘木で美味しいイタリア料理を食べるなら。",
    tags: ["Food"],
  },
  {
    key: "ajidokoro-umami",
    title: "味処 馬見",
    content: "地元の人に愛される蕎麦屋さん。",
    tags: ["Food"],
  },
  {
    key: "the-sound-of-water-the-sound-of-earth",
    title: "水の音 土の音。",
    content: "秋月のくつろぎカフェ＆陶芸工房。",
    tags: ["Food"],
  },
  {
    key: "mountain-soba-teahouse",
    title: "山のそば茶屋",
    content: "小鹿田焼の村の中心 コーヒー&蕎麦。",
    tags: ["Food"],
  },
  {
    key: "sosuke",
    title: "惣助",
    content: "小石原焼でのランチにおすすめ。",
    tags: ["Food"],
  },
  {
    key: "bike-is-life",
    title: "Bike is Life",
    content: "食事やイベントが楽しめる週営業のサイクルカフェ。",
    tags: ["Food"],
  },
  {
    key: "cheese-maker-and-pizza-nakamura",
    title: "チーズ職人と ピッツァ なかむら",
    content: "秋月を一望 新鮮なナポリピッツァを味わうなら",
    tags: ["Food"],
  },
  {
    key: "cafe-restaurant-bikky",
    title: "カフェ&レストラン びっきぃ",
    content: "秋月の中心にある山小屋風カフェ。",
    tags: ["Food"],
  },
  {
    key: "akizuki-ikedaya",
    title: "秋月池田屋",
    content: "秋月のメインストリートにあるヌードルショップ",
    tags: ["Food"],
  },
  {
    key: "chikuzen-india-the-moon-and-the-turtle",
    title: "筑前インド 月と亀",
    content: "秋月中心部にあるユニークなインドカレー屋さん。",
    tags: ["Food"],
  },
  {
    key: "kuromon-chaya",
    title: "黒門茶屋",
    content: "秋月の有名なランチスポット。",
    tags: ["Food"],
  },
  {
    key: "menya",
    title: "めんやがが",
    content: "秋月の外 濃厚ラーメン。",
    tags: ["Food"],
  },
  {
    key: "chikuzen-akizuki-washi-paper-factory",
    title: "筑前秋月和紙処",
    content: "秋月に唯一残る手漉き和紙工房。",
    tags: ["Shopping"],
  },
  {
    key: "selected-wine-budotsuki",
    title: "セレクトワイン 葡萄月",
    content: "築500年 江戸時代建物のワイン専門店。",
    tags: ["Shopping"],
  },
  {
    key: "pg-gauze-main-store",
    title: "PGガーゼ本店",
    content: "ベビー用高級衣料品店。",
    tags: ["Shopping"],
  },
  {
    key: "roadside-station-oishihara",
    title: "道の駅 小石原",
    content: "食事休憩や土産物に 地元名産品や陶器を幅広く取り揃えた道の駅。",
    tags: ["Shopping"],
  },
  {
    key: "takatori-pottery-headmaster-of-the-eight-takatori-mountains",
    title: "高取八山高取焼宗家",
    content: "有名な高取焼宗家 ギャラリーとワークショップ。",
    tags: ["Shopping"],
  },
  {
    key: "amagi-water-culture-village-sports-ground",
    title: "あまぎ水の文化村スポーツ広場",
    content: "広大な敷地 大自然の中で思いきり遊びたい方に。",
    tags: ["Nature"],
  },
  {
    key: "mount-furushiro",
    title: "古処山",
    content: "秋月を象徴する山。",
    tags: ["Nature"],
  },
  {
    key: "ryokan-seiryuan",
    title: "旅館 清流庵",
    content: "秋月でワンランク上の体験ができる温泉・高級料亭旅館。",
    tags: ["Accommodation", "Experience"],
  },
  {
    key: "niwa-house",
    title: "秋月 庭ハウス",
    content: "【一棟貸し出し】日本の原風景をまるごと 歴史的な街での宿泊体験",
    tags: ["Accommodation"],
  },
  {
    key: "gallery-house",
    title: "秋月ギャラリーハウス",
    content: "【一棟貸切】「ギャラリー」に見立てた宿で過ごすスペシャルな秋月",
    tags: ["Accommodation"],
  },
  {
    key: "casa-cura",
    title: "Casa Kura",
    content: "Content coming soon",
    tags: ["Accommodation"],
  },
  {
    key: "oko",
    title: "OKO",
    content: "Content coming soon",
    tags: ["Accommodation"],
  },
];
