export type navs = {
  id: number;
  name: string;
  link: string;
};

export type reviews = {
  id: number;
  ratings: number;
  comment: string;
  user: {
    profile: string;
    name: string;
    city: string;
  };
};
