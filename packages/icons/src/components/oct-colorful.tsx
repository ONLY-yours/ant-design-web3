// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/oct-colorful.svg';

/**![OctColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1vY3QtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMzMuMyAyOTEuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjMzLjMgMjkxLjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik0yMzMuMiwxNzguOHYtMzUuNmMwLTQuNiwwLTkuMSwwLTEzLjdjMC00LjYsMC05LjIsMC0xMy45Yy0wLjEtOS45LTEuMy0xOS43LTMuOS0yOS4zCglDMjE2LjYsMzgsMTczLjUsMi45LDEyMy40LDAuMmMtMjEuNi0xLjEtNDIsMy4xLTYxLjIsMTMuM0MyNC42LDMzLjMsMC42LDcyLjEsMC4xLDExNC43QzAsMTMwLjIsMCwxNDUuOCwwLDE2MS4zCgljMCw2LjIsMCwxMi40LDAsMTguNmMwLDAuNSwwLDEsMCwxLjVjMC40LDQuNywzLjYsOC42LDguMSw5LjljNC40LDEuMiw5LjMtMC42LDEyLTQuNGMxLjUtMi4yLDIuMS00LjYsMi4xLTcuMwoJYzAtMjAuNiwwLTQxLjIsMC02MS45YzAtNi41LDAuNS0xMywxLjgtMTkuNGMxMC4xLTUxLjIsNjAuMi04NC43LDExMS4zLTc0LjRDMTc5LjEsMzMsMjExLDcxLjksMjExLDExNi41djYxLjl2MGMwLDEsMCwyLjEsMCwzLjEKCWMwLjQsNS40LDQuNiw5LjcsOS45LDEwLjJjNS44LDAuNSwxMC43LTMsMTEuOS04LjVDMjMzLjEsMTgxLjgsMjMzLjIsMTgwLjMsMjMzLjIsMTc4Ljh6IE0xODAuNiwyMDNjMC0yLjUsMC01LDAtNy41CgljMCwwLTAuMSwwLTAuMSwwdi0xNmMwLTMuOCwwLTcuNi0wLjEtMTEuNWMtMC4xLTIuNS0xLTQuNi0yLjYtNi41Yy0zLjEtMy41LTgtNC42LTEyLjQtM2MtNC4zLDEuNi02LjksNS4zLTYuOSwxMC4zCgljMCwxNi45LTAuMSwzMy44LDAsNTAuN2MwLDguMSwxLjYsMTYsNS4yLDIzLjRjNS4yLDEwLjYsMTMuMiwxOC4xLDI0LjcsMjEuNGM2LjMsMS45LDEyLjgsMiwxOS4zLDAuOGM0LjktMC45LDkuOC0yLjQsMTQuMy00LjcKCWM1LjYtMi45LDcuNS05LjMsNC44LTE1LjFjLTIuNi01LjUtOC40LTcuNS0xNC40LTUuM2MtMS44LDAuNy0zLjcsMS4yLTUuNiwxLjdsMCwwaDBsMCwwaDBsMCwwYy0xLDAuMy0yLDAuNS0zLDAuOAoJYy01LjgsMS43LTE1LjEtMS43LTE5LjEtOC41Yy0yLjItMy44LTMuOS03LjgtMy45LTEyLjNDMTgwLjYsMjE1LjUsMTgwLjYsMjA5LjIsMTgwLjYsMjAzeiBNMTI3LjYsMjI0LjZ2NTQuOGMwLDEuNCwwLDIuOS0wLjMsNC4zCgljLTEuMiw0LjktNS45LDguMy0xMS4xLDguMWMtNS4zLTAuMi05LjUtMy44LTEwLjQtOC45Yy0wLjItMS4zLTAuMy0yLjctMC4zLTRWMTcwLjNjMC0xLjQsMC4xLTIuOSwwLjQtNC4zYzEuMi01LjYsNi4yLTksMTIuMy04LjQKCWM1LjgsMC42LDkuNiw1LjksOS42LDEwLjRjLTAuMSwxNS4xLTAuMSwzMC4yLTAuMSw0NS4zdjB2MEMxMjcuNiwyMTcsMTI3LjYsMjIwLjgsMTI3LjYsMjI0LjZ6IE03NSwyNTN2LTQxLjVjMC02LjUsMC0xMywwLTE5LjUKCWMwLTIuNCwwLTQuOCwwLTcuMmMwLTUuNiwwLjEtMTEuMy0wLjEtMTYuOWMtMC4xLTUuNS00LjQtOS45LTkuNi0xMC4zYy01LjktMC41LTEwLjgsMi44LTEyLjEsOC4zYy0wLjMsMS4zLTAuNCwyLjYtMC40LDRWMjUzdjAKCWMwLDAuNywwLDEuNCwwLDIuMmMwLjUsNS41LDQuNiw5LjcsOS45LDEwLjJjNS42LDAuNSwxMC42LTIuNywxMS45LTguMUM3NC45LDI1NS45LDc1LDI1NC40LDc1LDI1M3ogTTgzLjgsMTE2LjkKCWMtOS40LDAtMTYuNy03LjMtMTYuNi0xNi42YzAtOS4zLDcuNC0xNi42LDE2LjgtMTYuNWM5LjIsMC4xLDE2LjQsNy4zLDE2LjQsMTYuNUMxMDAuNCwxMDkuNiw5My4yLDExNi44LDgzLjgsMTE2Ljl6IE0xMzIuOCwxMDAuMgoJYy0wLjEsOS4zLDcuMiwxNi43LDE2LjYsMTYuN2M5LjEsMCwxNi41LTcuNCwxNi42LTE2LjRjMC05LjMtNy4zLTE2LjctMTYuNi0xNi43QzE0MC4xLDgzLjgsMTMyLjksOTEsMTMyLjgsMTAwLjJ6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICMwRjEzNjk7Ii8+Cjwvc3ZnPgo=) */
export const OctColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-oct-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

OctColorful.displayName = 'OctColorful';
