import { defineQuery } from "next-sanity";

export const tourismPageQuery = defineQuery(`*[
  _type == "experience"
  && slug.current == $slug
][0]{
  ...,
  "headings": content[style in ["h1", "h2", "h3", "h4", "h5", "h6"]],
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        ...,
        "type": @.reference->_type,
        "slug": @.reference->slug
      }
    },
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

export const contentPageQuery = defineQuery(`*[
  _type == "page"
  && slug.current == $slug
][0]{
  ...,
  "headings": content[style in ["h1", "h2", "h3", "h4", "h5", "h6"]],
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        ...,
        "type": @.reference->_type,
        "slug": @.reference->slug
      }
    },
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
  image {
    asset->{
      ...,
    }
  }
}`);

export const pageSlugsQuery = defineQuery(`*[
  _type == "page"
  && defined(slug.current)
  && coalesce(wip, false) == false
][]{
  "slug": slug.current,
  _updatedAt
}`);

export const experienceSlugsQuery = defineQuery(`*[
  _type == "experience"
  && defined(slug.current)
  && coalesce(wip, false) == false
][]{
  "slug": slug.current,
  _updatedAt
}`);

export const layoutQuery = defineQuery(`*[
  _type == "settings" && _id == "settings"
][0]{
  ...,
  menu[]{
    ...,
    _type == 'internalLink' => @->{slug, _id, name},
    _type != 'internalLink' => @
  }
}`);

export const slideshowQuery = defineQuery(`*[
  _type == "settings" && _id == "settings"
][0]{
  slideshow_images[]{
    ...,
    asset->
  }
}`);
