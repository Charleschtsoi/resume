export const easeApple = [0.25, 0.1, 0.25, 1] as const;

export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: easeApple,
    },
  }),
};

export const fadeInView = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeApple },
  },
};

/** @deprecated Use usePresenterMode().chapterHeightClass */
export const scrollChapterHeight = "min-h-[220vh]";
