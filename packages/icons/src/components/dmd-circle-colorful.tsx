// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/dmd-circle-colorful.svg';

/**![DmdCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1kbWQtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAwIDIwMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik0zODQuOCw3NTMuNUwxNS4zLDgyNC45QzUuMSw4ODIuNywwLDk0MS4zLDAsMTAwMGMwLDYyLjUsNS44LDEyMy43LDE2LjcsMTgzbDM2OC4xLDY0LjNMMzg0LjgsNzUzLjUKCUwzODQuOCw3NTMuNXogTTEwMDAsOTE3LjVsMjMxLjEtNDU4LjNINzY4LjlMMTAwMCw5MTcuNXogTTQ1OS4xLDc2OC45djQ2Mi4zTDkxNy41LDEwMDBMNDU5LjEsNzY4Ljl6IE0xNTE1LjQsNjk4LjVsLTIxMy45LTIxMy45CglsLTIxNy42LDQzMS41TDE1MTUuNCw2OTguNXogTTY0Mi40LDQzNS42TDI5Ny42LDI5Ny43TDQzNSw2NDNMNjQyLjQsNDM1LjZ6IE0xNzAyLjMsMjk3LjZMMTM1Nyw0MzVsMjA3LjQsMjA3LjRMMTcwMi4zLDI5Ny42CglMMTcwMi4zLDI5Ny42eiBNMTU0MC44LDEyMzEuMlY3NjguOUwxMDgyLjUsMTAwMEwxNTQwLjgsMTIzMS4yeiBNMTcwMi40LDE3MDIuM0wxNTY1LDEzNTdsLTIwNy40LDIwNy40TDE3MDIuNCwxNzAyLjN6IE0xMzE5LjMsMzcwCglsMzI5LjQtMTMxYy0xMTIuNy05Ni4xLTI0Ny0xNjcuNy0zOTQuNi0yMDYuNEwxMzE5LjMsMzcweiBNMjAwMCwxMDAwYzAtNjIuNS01LjgtMTIzLjctMTYuNy0xODNsLTM2OC4xLTY0LjN2NDkzLjdsMzY5LjUtNzEuNAoJQzE5OTQuOSwxMTE3LjMsMjAwMCwxMDU4LjcsMjAwMCwxMDAweiBNMTYyOS41LDY3OS44bDMzNS45LDU4LjdjLTM5LjEtMTQ0LjgtMTA5LjktMjc2LjUtMjA0LjUtMzg3LjNMMTYyOS41LDY3OS44eiBNNjQyLjksMTU2NQoJbC0yMDcuNC0yMDcuNGwtMTM3LjgsMzQ0LjdMNjQyLjksMTU2NXogTTE2MzAsMTMxOS4zbDEzMSwzMjkuNGM5Ni4xLTExMi43LDE2Ny43LTI0NywyMDYuNC0zOTQuNkwxNjMwLDEzMTkuM3ogTTE2NDguOCwxNzYwLjkKCWwtMzI4LjYtMTMxLjRsLTU4LjcsMzM1LjlDMTQwNi4zLDE5MjYuMywxNTM4LDE4NTUuNSwxNjQ4LjgsMTc2MC45TDE2NDguOCwxNzYwLjl6IE0xNTE1LjQsMTMwMS41TDEwODMuOSwxMDg0bDIxNy42LDQzMS41CglMMTUxNS40LDEzMDEuNXogTTc1Mi43LDM4NC44aDQ5My43bC03MS40LTM2OS41QzExMTcuMyw1LjEsMTA1OC43LDAsMTAwMCwwYy02Mi41LDAtMTIzLjcsNS44LTE4MywxNi44TDc1Mi43LDM4NC44egoJIE0xMjQ3LjMsMTYxNS4ySDc1My41bDcxLjQsMzY5LjVjNTcuOCwxMC4yLDExNi40LDE1LjMsMTc1LjEsMTUuM2M2Mi41LDAsMTIzLjYtNS44LDE4My0xNi43TDEyNDcuMywxNjE1LjJMMTI0Ny4zLDE2MTUuMnoKCSBNMTAwMCwxMDgyLjVsLTIzMS4xLDQ1OC4zaDQ2Mi4zTDEwMDAsMTA4Mi41eiBNMzUxLjIsMjM5LjFsMzI4LjYsMTMxLjRsNTguNy0zMzUuOUM1OTMuNyw3My44LDQ2MiwxNDQuNSwzNTEuMiwyMzkuMXoKCSBNNDg0LjYsNjk4LjVMOTE2LDkxNi4xTDY5OC41LDQ4NC42TDQ4NC42LDY5OC41TDQ4NC42LDY5OC41eiBNMzcwLDY4MC43TDIzOSwzNTEuM0MxNDIuOCw0NjQsNzEuMyw1OTguMywzMi42LDc0NS45TDM3MCw2ODAuN3oKCSBNNDg0LjYsMTMwMS42bDIxMy45LDIxMy45TDkxNiwxMDg0TDQ4NC42LDEzMDEuNnogTTY4MC43LDE2MzBsLTMyOS40LDEzMWMxMTIuNyw5Ni4xLDI0NywxNjcuNywzOTQuNiwyMDYuNEw2ODAuNywxNjMwTDY4MC43LDE2MzAKCXogTTM3MC41LDEzMjAuMmwtMzM1LjktNTguN2MzOS4xLDE0NC43LDEwOS45LDI3Ni41LDIwNC41LDM4Ny4zTDM3MC41LDEzMjAuMkwzNzAuNSwxMzIwLjJ6IiBzdHlsZT0iZmlsbDogIzNFNjQ5MjsiLz4KPC9zdmc+Cg==) */
export const DmdCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-dmd-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DmdCircleColorful.displayName = 'DmdCircleColorful';
