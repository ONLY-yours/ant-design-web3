// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/near-circle-filled.svg';

/**![NearCircleFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+bmVhci1wcm90b2NvbC1uZWFyLWxvZ288L3RpdGxlPgogICAgPGcgaWQ9Im5lYXItcHJvdG9jb2wtbmVhci1sb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIsIDExMikiIGZpbGw9IiM1NTU1NTUiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGN4PSI0MDAiIGN5PSI0MDAiIHI9IjQwMCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MywgMjYyKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBpZD0i6Lev5b6EIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQwMC42NjU5MjcsMjUuNTA0NDQ0NCBMMjk2LjMzNzQwMywxODAuMTk0NDQ0IEMyODkuMTIzMTk2LDE5MC43Mjg4ODkgMzAyLjk5NjY3LDIwMy40ODExMTEgMzEyLjk4NTU3MiwxOTQuNjEgTDQxNS42NDkyNzksMTA1LjM0NDQ0NCBDNDE4LjQyMzk3MywxMDMuMTI2NjY3IDQyMi4zMDg1NDYsMTA0Ljc5IDQyMi4zMDg1NDYsMTA4LjY3MTExMSBMNDIyLjMwODU0NiwzODcuNTU2NjY3IEM0MjIuMzA4NTQ2LDM5MS40Mzc3NzggNDE3LjMxNDA5NSwzOTMuMTAxMTExIDQxNS4wOTQzNCwzOTAuMzI4ODg5IEwxMDQuMzI4NTI0LDE4Ljg1MTExMTEgQzk0LjMzOTYyMjYsNi42NTMzMzMzMyA3OS45MTEyMDk4LDAgNjMuODE3OTgsMCBMNTIuNzE5MjAwOSwwIEMyMy44NjIzNzUxLDAgMCwyMy44NDExMTExIDAsNTMuMjI2NjY2NyBMMCw0NDUuNzczMzMzIEMwLDQ3NS4xNTg4ODkgMjMuODYyMzc1MSw0OTkgNTMuMjc0MTM5OCw0OTkgQzcxLjU4NzEyNTQsNDk5IDg4Ljc5MDIzMzEsNDg5LjU3NDQ0NCA5OC43NzkxMzQzLDQ3My40OTU1NTYgTDIwMy4xMDc2NTgsMzE4LjgwNTU1NiBDMjEwLjMyMTg2NSwzMDguMjcxMTExIDE5Ni40NDgzOTEsMjk1LjUxODg4OSAxODYuNDU5NDg5LDMwNC4zOSBMODMuNzk1NzgyNSwzOTMuMTAxMTExIEM4MS4wMjEwODc3LDM5NS4zMTg4ODkgNzcuMTM2NTE1LDM5My42NTU1NTYgNzcuMTM2NTE1LDM4OS43NzQ0NDQgTDc3LjEzNjUxNSwxMTEuNDQzMzMzIEM3Ny4xMzY1MTUsMTA3LjU2MjIyMiA4Mi4xMzA5NjU2LDEwNS44OTg4ODkgODQuMzUwNzIxNCwxMDguNjcxMTExIEwzOTUuMTE2NTM3LDQ4MC4xNDg4ODkgQzQwNS4xMDU0MzgsNDkyLjM0NjY2NyA0MjAuMDg4NzksNDk5IDQzNS42MjcwODEsNDk5IEw0NDYuNzI1ODYsNDk5IEM0NzYuMTM3NjI1LDQ5OSA1MDAsNDc1LjE1ODg4OSA1MDAsNDQ1Ljc3MzMzMyBMNTAwLDUzLjIyNjY2NjcgQzUwMCwyMy44NDExMTExIDQ3Ni4xMzc2MjUsMCA0NDYuNzI1ODYsMCBDNDI3Ljg1NzkzNiwwIDQxMC42NTQ4MjgsOS40MjU1NTU1NiA0MDAuNjY1OTI3LDI1LjUwNDQ0NDQgWiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) */
export const NearCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-near-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NearCircleFilled.displayName = 'NearCircleFilled';
