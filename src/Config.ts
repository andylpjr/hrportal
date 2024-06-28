export const COLOR = {
  WHITE: "#FFFFFF",
  MEDIUM_BLACK: "#3E4246",
  BLEND_BLACK: "#373330",
  DARK_BLACK: "#231F20",
  DARK_GREY: "#697382",
  LIGHT_GREY: "#E4E4E4",
  GREY: "#F7F9FB",
  ORANGE: "#E64A03",
  YELLOW: "#FDAC17",
  TEAL: "#91C9BE",
  BROWN: "#C0836C",
  LIGHT_BROWN: "#FCEDE6",
  GREEN: "#6CB78B",
  LIGHT_GREEN: "#E4F3EB",
  VIOLET: "#C9C8FF",
  LIGHT_VIOLET: "#EDECFF",
  PURPLE: "#C868C4",
  LIGHT_PURPLE: "#EDE0F2",
};

export const CARD = {
  STANDARD: (height: number) => ({
    ...SHADOW.STANDARD(height),
    borderRadius: 5,
    backgroundColor: COLOR.WHITE,
    padding: 16,
  }),
  FLAT: () => ({
    borderRadius: 6,
    backgroundColor: COLOR.WHITE,
    padding: 16,
    border: `1px solid ${COLOR.LIGHT_GREY}`,
  }),
};

export const SHADOW = {
  STANDARD: (
    height: number,
    {
      outerColor = "rgba(0,0,0,.1)",
      innerColor = "rgba(204,150,44,.1)",
      heightOffset = 1,
    } = {}
  ) => ({
    boxShadow: `0 ${height * 3}px ${
      heightOffset + height * 10
    }px ${outerColor}, 0 ${heightOffset + height * 1.5}px ${
      height * 5
    }px ${innerColor}`,
  }),
  COLOR: (height: number, color: any = `rgba(255,255,255,.9)`) => {
    return { boxShadow: `0 ${height * 6}px ${height * 20}px ${color}` };
  },
  TEXT: ({ radius = 64, color = COLOR.MEDIUM_BLACK, outline = false } = {}) => {
    return {
      textShadow: `0px 0px ${radius}px ${color}${
        outline ? `, 0px 0px 8px ${color}` : ``
      }`,
    };
  },
};

export const backgroundImageStyle = (
  image,
  {
    backgroundPosition = "center",
    backgroundSize = "cover",
  }: {
    backgroundPosition?: "center";
    backgroundSize?: "cover" | "contain";
  } = {}
) => ({
  backgroundImage: `url('${image}')`,
  backgroundPosition,
  backgroundSize,
});
