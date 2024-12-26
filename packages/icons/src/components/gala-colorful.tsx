// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/gala-colorful.svg';

/**![GalaColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1nYWxhLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDY5IDUyNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5IDUyNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHBhdGggZD0iTTAsMzg5LjljNi40LDMuNCwxNC44LDguNiwyMC44LDEyLjZjMi4yLDEuNSw0LjcsMi44LDcuMSw0LjNjMS4zLDAuOCwyLjEsMS4yLDMuMywyYzAuNiwwLjQsMS4xLDAuOCwxLjcsMS4xCgljMC43LDAuNCwxLjEsMC42LDEuOCwxbDc3LDQ3LjRjMS4xLDAuNiwyLjEsMS4zLDMuMywybDY5LjksNDMuMWMwLjgsMC41LDEuMSwwLjYsMS44LDEuMWwzMy40LDIwLjVjMS41LDAuOCwyLjEsMS44LDMuOCwxLjlWMjY1LjkKCWwtMTAuNi02LjFjLTEtMC41LTEuNi0wLjktMi42LTEuNWwtOC4zLTQuOGMtMTEuOC02LjItMjIuOC0xMy44LTM0LjctMjBjLTEuMi0wLjYtMS42LTEtMi45LTEuNmwtMTAuNi02LjEKCWMtMi42LTEuNi0xNC40LTguNy0xNi41LTkuMnY0MS4ybDQzLjQsMjUuMWMxLjIsMC43LDIsMS4yLDMuMSwxLjhjMS4yLDAuNiwxLjgsMS4zLDMuMywxLjZWNDYzYy03LjYtNS4xLTE1LjctOS43LTIzLjUtMTQuNAoJbC0xOC45LTExLjdjLTcuNy01LjItMTYtOS41LTIzLjctMTQuNmMtMC45LTAuNi0xLjQtMC44LTIuMy0xLjRsLTE2LjctMTAuM2MtMS44LTEtMy4xLTEuOC00LjgtM2MtNi4xLTQuMS0xMi43LTcuNy0xOC45LTExLjcKCWMtMS43LTEuMS0zLjEtMS44LTQuOC0yLjljLTkuMi02LjItMTkuMS0xMS44LTI4LjUtMTcuNWMtMC44LTAuNS0xLjUtMS0yLjItMS41bC03LjMtNC41VjE1Ny40Yy0xLjQtMC45LTIuOC0xLjctNC40LTIuNgoJYy0xLjYtMC45LTIuOC0xLjYtNC40LTIuNkw0LjYsMTM5LjRjLTEuNy0wLjktMy0xLjktNC42LTIuN0wwLDM4OS45TDAsMzg5Ljl6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICMwNjA2MDY7Ii8+CjxwYXRoIGQ9Ik0yNDUuNSwyNjUuNXYxMDAuM2wxMy4zLTcuNWM2LjEtMy4yLDExLjctNy4xLDE3LjgtMTAuM2MxLjEtMC42LDEuNS0wLjgsMi4zLTEuNGMwLjgtMC41LDEuNi0wLjgsMi40LTEuMgoJdi01OS4xYzEuMi0wLjMsMS42LTAuNSwyLjUtMS4xYzAuOS0wLjYsMS41LTAuOCwyLjQtMS4zYzQuNy0yLjcsOS4zLTUuOSwxNC4xLTguM2M2LjUtMy4yLDEyLjctNy4yLDE4LjktMTAuOQoJYzEuNi0wLjksMi45LTEuNyw0LjYtMi43bDkuNC01LjNjMS0wLjYsMS4zLTAuOCwyLjMtMS40YzQuMS0yLjEsNy45LTQuOSwxMi4xLTcuMWw0LjYtMi43YzAuOC0wLjUsMS42LTAuOCwyLjQtMS4ybDMwLjctMTcuOAoJYzYuNS0zLjQsMTIuNS03LjUsMTguOS0xMC45bDkuNS01LjZjMy4yLTEuOSw2LjMtMy42LDkuNS01LjZjMS43LTEsMy4xLTEuNyw0LjYtMi43bDUtMi44VjM3MGMtMS40LDAuMy0xLjgsMC44LTMsMS41bC04LjgsNS40CgljLTAuOSwwLjYtMS42LDEuMS0yLjcsMS44Yy0xLjIsMC43LTIsMS4zLTMsMS45Yy0xLjEsMC42LTEuNywxLjEtMi44LDEuN2wtOC45LDUuM2MtOCw0LjYtMTUuNSw5LjgtMjMuNSwxNC40bC0yMy40LDE0LjUKCWMtMS4xLDAuNy0xLjcsMS0yLjgsMS43Yy0xMC41LDcuMS0yMS43LDEzLTMyLjMsMTkuOWMtMS45LDEuMy0zLjksMi40LTUuOCwzLjZsLTI5LjMsMThjLTAuOSwwLjUtMS45LDEuMS0yLjgsMS43CgljLTguNyw1LjctMTcuOCwxMC42LTI2LjUsMTYuM2wtMTEuOSw3LjN2NDJjMi0wLjUsNS4yLTIuOSw3LTRjMi40LTEuNSw0LjctMi43LDcuMS00LjNjNi43LTQuNSwxNC04LjIsMjAuNy0xMi43CgljMS4zLTAuOCwyLjMtMS41LDMuNS0yLjJsMTcuNy0xMC45YzEuMi0wLjcsMi4xLTEuMywzLjMtMmw5NC4yLTU4YzEuMy0wLjgsMi40LTEuNSwzLjUtMi4ybDYyLjktMzguN2MxLjItMC44LDIuNC0xLjUsMy42LTIuMQoJVjEzNy4xYy0xLjgsMC40LTIuMSwxLTMuNSwxLjhjLTEuMywwLjctMi4yLDEuMi0zLjQsMS45bC0yMC45LDEyLjFjLTcuMSwzLjgtMTMuNyw4LjUtMjAuOSwxMi4xbC01NS45LDMyLjIKCWMtMi41LDEuNC00LjUsMi43LTYuOSw0LjFsLTEwLjMsNmMtNy4zLDMuNy0xNy45LDEwLTI0LjYsMTQuMmMtMS4yLDAuOC0yLjIsMS4xLTMuNCwxLjlsLTIyLjcsMTMuMmMtMSwwLjUtMC44LDAuNS0xLjgsMS4xCglsLTcuMSwzLjljLTQuMiwyLjItNy45LDQuOS0xMi4xLDcuMWMtMSwwLjUtMSwwLjctMS44LDEuMWwtNy4xLDMuOUMyNjEuNywyNTYsMjQ5LjMsMjY0LjcsMjQ1LjUsMjY1LjVMMjQ1LjUsMjY1LjV6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICMwNjA2MDY7Ii8+CjxwYXRoIGQ9Ik0xMy45LDExOS45YzEuNCwwLjMsMi4yLDEuMSwzLjUsMS44YzQuNywyLjUsOC45LDUuNSwxMy43LDcuOWwzOCwyMmMxOC4xLDExLDM2LjksMjAuOCw1NS4xLDMxLjhsMy40LDEuOQoJYzEuMywwLjcsMi4yLDEuMywzLjQsMS45bDIwLjcsMTJjMC45LDAuNSwwLjgsMC41LDEuNSwwLjljOS43LDUuOSwxOS45LDEwLjksMjkuNSwxN2wzMC44LDE3LjdjMS4yLDAuNywyLjEsMS4zLDMuMywyCgljMy42LDIuMiwxNi41LDEwLDE3LjgsMTBjMS45LDAsMTIuOS03LDE1LjctOC43bDUuNC0zLjJjMS44LTEuMSwzLjQtMS44LDUuMi0yLjljMS45LTEuMSwzLjMtMS45LDUuMi0zbDEwLjUtNi4yCgljMS44LTEuMSwzLjQtMS45LDUuMS0zbDE1LjktOWMxLTAuNSwxLjctMSwyLjYtMS41YzAuOS0wLjYsMS41LTAuOSwyLjYtMS41bDEwLjYtNi4xYzEuNy0xLDMuNi0yLjUsNS42LTNjLTAuMy0xLjItMC41LTEuMS0xLjUtMS43CglsLTMzLjktMTkuNWMtMTMuNSw3LjEtMjYuMywxNS40LTM5LjcsMjIuN2MtMS4xLDAuNi0yLDEuMi0zLDEuOWMtMi4xLDEuMy00LDIuNC02LjIsMy42bC0yMC40LTExLjhjLTcuMS0zLjYtMTMuNi04LjMtMjAuNy0xMgoJYy0xLjYtMC45LTMuMi0xLjktNC42LTIuN2wtNDEuNC0yMy44Yy0wLjgtMC41LTEuNS0wLjktMi4zLTEuNGMtMC45LTAuNi0xLjUtMC44LTIuNC0xLjNsLTUzLTMwLjZjLTEtMC42LTEuMS0wLjktMi41LTEuMgoJYzEuMS0xLjYsMi40LTEuNyw0LjItMi44YzEuNS0xLDIuOS0xLjUsNC41LTIuNGw0Ni4xLTI0LjljMS0wLjYsMS0wLjcsMi0xLjJjMS0wLjUsMS41LTAuNywyLjQtMS4zYzEuNi0xLDMuMi0xLjcsNC44LTIuNWw1Ny41LTMxCgljMS0wLjUsMS4zLTAuOCwyLjMtMS40bDIzLjQtMTIuNWMxLjMsMCwxOSwxMC4zLDIzLjEsMTIuNGMxLDAuNSwxLjcsMC44LDIuNywxLjRjMS4yLDAuNywxLjUsMSwyLjksMS42bDYzLjYsMzQuMwoJYzUuNiwzLjUsMjIuNiwxMi40LDI4LjYsMTUuNGM2LjgsMy40LDEzLjMsNy41LDIwLjEsMTAuOWwzNy44LDIwLjVjMS4zLDAuNywxLjcsMC45LDIuOSwxLjZjNC41LDIuNyw0LjYsMC40LDExLjktMy42bDEzLjUtNy43CgljMi40LTEuMywxMS41LTcuMSwxMy42LTcuNmMtMC40LTEuMy0xLjYtMS44LTIuOC0yLjVsLTEzLjctNy41Yy02LjktMy41LTEzLjgtNy44LTIwLjctMTEuMWwtMTMuNy03LjVjLTQuNy0yLjQtOS40LTQuNi0xMy44LTcuNAoJbC02OS4xLTM3LjNjLTEuNC0wLjctMi4yLTEuMS0zLjQtMS45bC0yNy44LTE1Yy0xLjMtMC43LTIuMS0xLjItMy40LTEuOWMtMC43LTAuNC0xLTAuNS0xLjYtMC44TDI0OC44LDcuNEMyNDYuNSw2LDIzNS44LDAsMjM0LjUsMAoJYy0xLjEsMC04LjgsNC42LTEwLjUsNS40bC03OS4xLDQyLjhjLTEuMywwLjYtMi4zLDEuMS0zLjUsMS44TDg2LDc5LjljLTEuMywwLjctMS45LDEuMi0zLjQsMS45bC01LDIuN2MtMSwwLjUtMSwwLjctMS44LDEuMQoJYy0xLjEsMC43LTIuMywxLTMuNSwxLjhsLTEwLjYsNS43Yy0xLjQsMC43LTIuMSwxLjMtMy40LDEuOWwtMTYuMSw4LjhjLTAuNiwwLjMtMC42LDAuMi0xLjEsMC41Yy0yLjMsMS4zLTQuNywyLjItNi45LDMuNwoJYy0xLjMsMC44LTIuMSwxLjEtMy41LDEuOGwtMTUuNSw4LjZDMTQsMTE5LjEsMTQuMywxMTguNSwxMy45LDExOS45TDEzLjksMTE5Ljl6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICMwNjA2MDY7Ii8+Cjwvc3ZnPgo=) */
export const GalaColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gala-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

GalaColorful.displayName = 'GalaColorful';
