// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/frax-circle-colorful.svg';

/**![FraxCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1mcmF4LWNpcmNsZS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI4My40NiAyODMuNDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4My40NiAyODMuNDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0MS43MywyODMuNDZjLTE5LjEzLDAtMzcuNjktMy43NS01NS4xNy0xMS4xNGMtMTYuODgtNy4xNC0zMi4wMy0xNy4zNi00NS4wNS0zMC4zNwoJCQljLTEzLjAxLTEzLjAxLTIzLjIzLTI4LjE3LTMwLjM3LTQ1LjA1QzMuNzUsMTc5LjQyLDAsMTYwLjg2LDAsMTQxLjczczMuNzUtMzcuNjksMTEuMTQtNTUuMTdjNy4xNC0xNi44OCwxNy4zNi0zMi4wMywzMC4zNy00NS4wNQoJCQlDNTQuNTMsMjguNSw2OS42OCwxOC4yOCw4Ni41NiwxMS4xNEMxMDQuMDQsMy43NSwxMjIuNiwwLDE0MS43MywwczM3LjY5LDMuNzUsNTUuMTcsMTEuMTRjMTYuODgsNy4xNCwzMi4wMywxNy4zNiw0NS4wNSwzMC4zNwoJCQljMTMuMDEsMTMuMDEsMjMuMjMsMjguMTcsMzAuMzcsNDUuMDVjNy4zOSwxNy40OCwxMS4xNCwzNi4wNCwxMS4xNCw1NS4xN3MtMy43NSwzNy42OS0xMS4xNCw1NS4xNwoJCQljLTcuMTQsMTYuODgtMTcuMzYsMzIuMDMtMzAuMzcsNDUuMDVjLTEzLjAxLDEzLjAxLTI4LjE3LDIzLjIzLTQ1LjA1LDMwLjM3QzE3OS40MiwyNzkuNzIsMTYwLjg2LDI4My40NiwxNDEuNzMsMjgzLjQ2eiIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+Cgk8L2c+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIxNDEuNzMiIGN5PSIxNDEuNzMiIHI9IjEzNC4yMiIvPgoJPC9nPgoJPHBhdGggZD0iTTIxMi40MywxNDEuNzNjMC0xNC4zOC00LjMyLTI3Ljc2LTExLjcyLTM4Ljk0bDIxLjk1LTIxLjk1TDIwMi45Miw2MS4xbC0yMS44OSwyMS44OQoJCWMtMTEuMjQtNy41NS0yNC43Ni0xMS45Ni0zOS4yOS0xMS45NmMtMTQuMzgsMC0yNy43Niw0LjMyLTM4Ljk0LDExLjcyTDgwLjg0LDYwLjhMNjEuMSw4MC41NGwyMS44OSwyMS44OQoJCWMtNy41NSwxMS4yNC0xMS45NiwyNC43Ni0xMS45NiwzOS4yOWMwLDE0LjM4LDQuMzIsMjcuNzYsMTEuNzIsMzguOTRMNjAuOCwyMDIuNjJsMTkuNzQsMTkuNzRsMjEuODktMjEuODkKCQljMTEuMjQsNy41NSwyNC43NiwxMS45NiwzOS4yOSwxMS45NmMxNC4zOCwwLDI3Ljc2LTQuMzIsMzguOTQtMTEuNzJsMjEuOTYsMjEuOTZsMTkuNzQtMTkuNzRsLTIxLjg5LTIxLjg5CgkJQzIwOC4wMiwxNjkuNzgsMjEyLjQzLDE1Ni4yNiwyMTIuNDMsMTQxLjczeiBNOTguOTYsMTQxLjczYzAtMjMuNTksMTkuMTktNDIuNzgsNDIuNzgtNDIuNzhzNDIuNzgsMTkuMTksNDIuNzgsNDIuNzgKCQlzLTE5LjE5LDQyLjc4LTQyLjc4LDQyLjc4Uzk4Ljk2LDE2NS4zMiw5OC45NiwxNDEuNzN6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPC9nPgo8L3N2Zz4K) */
export const FraxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-frax-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

FraxCircleColorful.displayName = 'FraxCircleColorful';
