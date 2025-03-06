import { defineQuery } from "next-sanity";

export const livingPageQuery = defineQuery(`*[
  _type == "page"
  && slug.current == "living"
][0]{
  ...,
  "headings": content[style in ["h1", "h2", "h3", "h4", "h5", "h6"]],
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    },
    _type == "file" => {
      ...,
      asset->
    }
  }
}`);

export const experiencePageQuery = defineQuery(`*[
  _type == "experience" && array::intersects(categories, $filters)
][]{
  ...,
}`);
