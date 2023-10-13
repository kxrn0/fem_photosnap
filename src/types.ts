export type ImageDetailType = {
  src: string;
  breakPoint: number;
};

export type ImageType = {
  desktop: ImageDetailType;
  tablet: ImageDetailType;
  mobile: ImageDetailType;
};

export type BreakPointType = {
  desktop: number;
  tablet: number;
  mobile: number;
};
