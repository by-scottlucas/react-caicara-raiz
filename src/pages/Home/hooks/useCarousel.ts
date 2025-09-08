export const useCarousel = () => {
  const scrollToIndex = (
    ref: React.RefObject<HTMLDivElement>,
    index: number
  ) => {
    if (!ref.current) return;
    const container = ref.current;
    const child = container.children[index] as HTMLElement;
    if (!child) return;

    const offsetLeft = child.offsetLeft - container.offsetLeft;
    container.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
  };

  const getButtonClass = (index: number, activeIndex?: number) =>
    `indicator-dot ${activeIndex === index ? "indicator-dot--active" : ""}`;

  return { scrollToIndex, getButtonClass };
};
