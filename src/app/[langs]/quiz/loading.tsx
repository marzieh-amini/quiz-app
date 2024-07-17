import Skeleton from "react-loading-skeleton";
interface ILoadingPorops {
  count: number;
}
function Loading({ count }: ILoadingPorops) {
  return (
      <Skeleton
        count={count}
        direction="rtl"
        duration={2}
        height={50}
        baseColor="#374151"
        highlightColor="#0f172a"
      />
  );
}

export default Loading;
