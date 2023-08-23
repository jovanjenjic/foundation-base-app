// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import cn from 'classnames';
import SVG from 'react-inlinesvg';

import { SVG as SvgT } from './Svg.types';
import cssModules from './Svg.module.scss';

const Svg: React.FC<SvgT> = ({
  icon,
  className,
  iconColor = null,
  strokeColor = null,
  width = null,
  height = null,
}) => {
  if (!icon) return null;
  return (
    <SVG
      style={{
        ...(iconColor ? { fill: iconColor } : {}),
        ...(strokeColor ? { stroke: strokeColor } : {}),
        ...(width ? { width: `${width}px`, maxWidth: `${width}px` } : {}),
        ...(height ? { height: `${height}px`, maxHeight: `${height}px` } : {}),
      }}
      className={cn(
        cssModules.svg,
        (iconColor || strokeColor) && cssModules['svg--has-icon-color'],
        className,
      )}
      src={icon}
      cacheRequests
    />
  );
};

export default Svg;
