export interface SVG {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  iconColor?: string;
  strokeColor?: string;
  width?: number | string;
  height?: number | string;
}
