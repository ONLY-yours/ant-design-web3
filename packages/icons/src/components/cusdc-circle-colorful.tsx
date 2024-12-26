// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/cusdc-circle-colorful.svg';

/**![CusdcCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1jdXNkYy1jaXJjbGUtY29sb3JmdWwtQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU2IDI1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGc+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIxMjguMSIgY3k9IjEyOC4yIiByPSIxMjcuOSIgc3R5bGU9ImZpbGw6ICNFREYwRjI7Ii8+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1jdXNkYy1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTIuMDkzOSIgeTE9IjI0My42NTQ1IiB4Mj0iMTMyLjE4ODEiIHkyPSIyMS4zNjE1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjU4KSI+CgkJCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzI3RDNBMiIvPgoJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM5Mzg4RkQiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGQ9Ik0yMDkuMywyMjYuOWMtMTkuNSwxNi4xLTQzLjQsMjYtNjguNiwyOC40Yy0zMy43LDMuMy02Ny40LTYuOS05My43LTI4LjRjLTI2LjItMjEuNS00Mi44LTUyLjUtNDYuMi04Ni4zCgkJCWMtMi41LTI1LjIsMi41LTUwLjUsMTQuNC03Mi44YzExLjktMjIuMywzMC4yLTQwLjYsNTIuNS01Mi41YzIyLjMtMTEuOSw0Ny42LTE3LDcyLjgtMTQuNWMyNS4yLDIuNSw0OSwxMi4zLDY4LjYsMjguNGwtMjUuOCwzMS41CgkJCWMtMTMuMy0xMC45LTI5LjYtMTcuNy00Ni44LTE5LjNjLTE3LjItMS43LTM0LjQsMS44LTQ5LjYsOS45Yy0xNS4yLDguMS0yNy42LDIwLjYtMzUuOCwzNS44Yy04LjEsMTUuMi0xMS41LDMyLjUtOS44LDQ5LjYKCQkJYzIuMywyMywxMy42LDQ0LjIsMzEuNSw1OC44YzE3LjksMTQuNyw0MC45LDIxLjYsNjMuOSwxOS4zYzE3LjItMS43LDMzLjQtOC41LDQ2LjctMTkuNEwyMDkuMywyMjYuOXoiIHN0eWxlPSJmaWxsOiB1cmwoI2FudC13ZWIzLWljb24tY3VzZGMtY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzFfKTsiLz4KCQk8cGF0aCBkPSJNMTI4LjUsMjMyLjljNTcuNywwLDEwNC40LTQ2LjgsMTA0LjQtMTA0LjRDMjMyLjksNzAuOCwxODYuMiwyNCwxMjguNSwyNEM3MC44LDI0LDI0LDcwLjgsMjQsMTI4LjUKCQkJQzI0LDE4Ni4yLDcwLjgsMjMyLjksMTI4LjUsMjMyLjl6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNDUuOSwxMzYuOGMwLTkuOC02LTEzLjEtMTcuNy0xNC42Yy04LjYtMS4yLTEwLjMtMy4yLTEwLjMtNy4yczIuOS02LjQsOC41LTYuNGM1LjEsMCw4LDEuNyw5LjIsNS44CgkJCWMwLjEsMC40LDAuNCwwLjgsMC44LDEuMWMwLjQsMC4zLDAuOCwwLjQsMS4zLDAuNGg0LjVjMC4zLDAsMC42LTAuMSwwLjgtMC4yYzAuMy0wLjEsMC41LTAuMywwLjctMC41YzAuMi0wLjIsMC4zLTAuNSwwLjQtMC43CgkJCWMwLjEtMC4zLDAuMS0wLjYsMC0wLjljLTEuNC02LjQtNS44LTEwLjItMTIuNi0xMS40di02LjdjMC0wLjYtMC4yLTEuMS0wLjYtMS41Yy0wLjQtMC40LTAuOS0wLjYtMS41LTAuNmgtNC4zCgkJCWMtMC42LDAtMS4xLDAuMi0xLjUsMC42Yy0wLjQsMC40LTAuNiwwLjktMC42LDEuNXY2LjVjLTguNSwxLjItMTMuOSw2LjctMTMuOSwxMy44YzAsOS4yLDUuNywxMi43LDE3LjUsMTQuMwoJCQljOC4xLDEuMywxMC40LDMsMTAuNCw3LjVjMCw0LjUtMy45LDcuNS05LjQsNy41Yy03LjQsMC05LjktMy4yLTEwLjgtNy4zYy0wLjEtMC41LTAuNC0wLjktMC43LTEuMmMtMC40LTAuMy0wLjktMC41LTEuMy0wLjVoLTQuOQoJCQljLTAuMywwLTAuNiwwLjEtMC44LDAuMmMtMC4zLDAuMS0wLjUsMC4zLTAuNywwLjVjLTAuMiwwLjItMC4zLDAuNS0wLjQsMC43Yy0wLjEsMC4zLTAuMSwwLjYsMCwwLjhjMS4yLDcsNS44LDEyLjEsMTUuMSwxMy4zdjYuNgoJCQljMCwwLjYsMC4yLDEuMSwwLjYsMS41YzAuNCwwLjQsMC45LDAuNiwxLjUsMC42aDQuM2MwLjYsMCwxLjEtMC4yLDEuNS0wLjZjMC40LTAuNCwwLjYtMC45LDAuNi0xLjV2LTYuNgoJCQlDMTQwLjMsMTUwLjIsMTQ1LjksMTQ0LjMsMTQ1LjksMTM2Ljh6IiBzdHlsZT0iZmlsbDogIzI4Mzk0NzsiLz4KCQk8cGF0aCBkPSJNMTEzLjYsMTY2LjhjLTguMS0yLjktMTUuMS04LjMtMjAuMS0xNS4zYy01LTctNy42LTE1LjQtNy42LTIzLjlzMi43LTE2LjksNy42LTIzLjljNS03LDEyLTEyLjQsMjAuMS0xNS4zCgkJCWMwLjUtMC4yLDEtMC42LDEuMy0xLjFjMC4zLTAuNSwwLjUtMSwwLjUtMS42di0zLjljMC0wLjMsMC0wLjctMC4yLTFjLTAuMS0wLjMtMC40LTAuNi0wLjctMC44Yy0wLjMtMC4yLTAuNi0wLjMtMS0wLjQKCQkJcy0wLjcsMC0xLDAuMmMtMTAuMiwzLjItMTkuMSw5LjYtMjUuNSwxOC4yYy02LjMsOC42LTkuNywxOC45LTkuNywyOS42YzAsMTAuNiwzLjQsMjEsOS43LDI5LjZjNi4zLDguNiwxNS4yLDE0LjksMjUuNSwxOC4yCgkJCWMwLjMsMC4xLDAuNywwLjIsMSwwLjJjMC4zLDAsMC43LTAuMiwxLTAuNGMwLjMtMC4yLDAuNS0wLjUsMC43LTAuOGMwLjEtMC4zLDAuMi0wLjcsMC4yLTF2LTMuOWMwLTAuNi0wLjItMS4xLTAuNS0xLjYKCQkJUzExNC4yLDE2NywxMTMuNiwxNjYuOEwxMTMuNiwxNjYuOHoiIHN0eWxlPSJmaWxsOiAjNjU3Nzg2OyIvPgoJCTxwYXRoIGQ9Ik0xNDIuNiw3OS45Yy0wLjMtMC4xLTAuNy0wLjItMS0wLjJjLTAuMywwLTAuNywwLjItMSwwLjRjLTAuMywwLjItMC41LDAuNS0wLjcsMC44Yy0wLjEsMC4zLTAuMiwwLjctMC4yLDEKCQkJdjMuOWMwLDAuNiwwLjIsMS4xLDAuNSwxLjZjMC4zLDAuNSwwLjgsMC44LDEuMywxLjFjOC4xLDIuOSwxNS4xLDguMywyMC4xLDE1LjNjNSw3LDcuNiwxNS40LDcuNiwyMy45cy0yLjcsMTYuOS03LjYsMjMuOQoJCQljLTUsNy0xMiwxMi40LTIwLjEsMTUuM2MtMC41LDAuMi0xLDAuNi0xLjMsMWMtMC4zLDAuNS0wLjUsMS0wLjUsMS42djMuOWMwLDAuMywwLDAuNywwLjIsMWMwLjEsMC4zLDAuNCwwLjYsMC43LDAuOAoJCQljMC4zLDAuMiwwLjYsMC4zLDEsMC40YzAuMywwLDAuNywwLDEtMC4yYzEwLjItMy4yLDE5LjEtOS42LDI1LjUtMTguMmM2LjMtOC42LDkuNy0xOC45LDkuNy0yOS42YzAtMTAuNi0zLjQtMjEtOS43LTI5LjYKCQkJQzE2MS43LDg5LjUsMTUyLjgsODMuMSwxNDIuNiw3OS45TDE0Mi42LDc5Ljl6IiBzdHlsZT0iZmlsbDogIzY1Nzc4NjsiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K) */
export const CusdcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-cusdc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

CusdcCircleColorful.displayName = 'CusdcCircleColorful';
