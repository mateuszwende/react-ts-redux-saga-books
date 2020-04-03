const createSlug = (str: string): string => {
  return str.replace(/\W+/g, "-").toLowerCase();
};

export default createSlug;
