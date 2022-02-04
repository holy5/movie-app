import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <GrLinkNext
      className={className}
      style={{
        ...style,
        position: "absolute",
        right: "10px",
        backgroundColor: "rgba(255,255,255,0.8)",
        width: "30px",
        height: "30px",
        padding: "4px",
        borderRadius: "8px",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <GrLinkPrevious
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "16px",
        backgroundColor: "rgba(255,255,255,0.8)",
        width: "30px",
        height: "30px",
        padding: "4px",
        borderRadius: "8px",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}
