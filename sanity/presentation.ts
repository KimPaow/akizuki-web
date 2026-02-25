export const locate = (params: Record<string, any>) => {
  const { _type, slug } = params;

  if (_type === "page" && slug?.current) {
    return {
      locations: [
        {
          title: params.name || "Page",
          href: `/${slug.current}`,
        },
      ],
    };
  }

  if (_type === "experience" && slug?.current) {
    return {
      locations: [
        {
          title: params.name || "Tourism",
          href: `/tourism/${slug.current}`,
        },
      ],
    };
  }

  return null;
};
