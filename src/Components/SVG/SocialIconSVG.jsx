export default function SocialIconSVG({
  width,
  height,
  viewBox,
  fill,
  xmlns,
  d,
  fill2,
}) {
  return (
    <div class="w-6 h-6 relative overflow-hidden">
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        xmlns={xmlns}
      >
        <path d={d} fill={fill2} />
      </svg>
    </div>
  );
}
