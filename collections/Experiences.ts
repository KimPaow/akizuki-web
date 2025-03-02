import { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "Title", ja: "タイトル" },
      required: true,
    },
    {
      name: "introduction",
      type: "textarea",
      label: { en: "Introduction", ja: "前置き" },
      maxLength: 120,
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: { en: "Content", ja: "内容" },
      required: false,
    },
    {
      name: "categories",
      type: "select",
      label: { en: "Categories", ja: "カテゴリー" },
      hasMany: true,
      options: [
        { label: { en: "Culture", ja: "文化" }, value: "Culture" },
        { label: { en: "Nature", ja: "自然" }, value: "Nature" },
        { label: { en: "Food", ja: "食事" }, value: "Food" },
        { label: { en: "Shopping", ja: "買い物" }, value: "Shopping" },
        { label: { en: "Accommodation", ja: "民泊" }, value: "Accommodation" },
        { label: { en: "Experience", ja: "体験" }, value: "Experience" },
      ],
      required: true,
    },
    {
      name: "website",
      type: "text",
      label: { en: "Website", ja: "ウェブサイト" },
      validate: (value: unknown) => {
        if (!value) return true;
        if (typeof value !== "string") return "Please enter a valid URL";
        try {
          new URL(value);
          return true;
        } catch {
          return "Please enter a valid URL";
        }
      },
      required: false,
    },
    {
      name: "contact",
      type: "group",
      label: { en: "Contact", ja: "連絡先" },
      fields: [
        {
          name: "email",
          type: "email",
          label: { en: "Email", ja: "メールアドレス" },
          required: false,
        },
        {
          name: "phone",
          type: "text",
          label: { en: "Phone", ja: "電話番号" },
          required: false,
        },
      ],
    },
    {
      name: "hours",
      type: "textarea",
      label: { en: "Business hours", ja: "営業時間" },
      required: false,
    },
    {
      name: "pricerange",
      type: "text",
      label: { en: "Price range", ja: "価格帯" },
      required: false,
    },
    {
      name: "location",
      type: "group",
      label: { en: "Location", ja: "場所" },
      fields: [
        {
          name: "address",
          type: "text",
          label: { en: "Address", ja: "住所" },
          required: false,
        },
        {
          name: "latitude",
          type: "number",
          label: { en: "Latitude", ja: "緯度" },
          required: false,
        },
        {
          name: "longitude",
          type: "number",
          label: { en: "Longitude", ja: "経度" },
          required: false,
        },
      ],
    },
  ],
};
