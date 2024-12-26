// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bnb-colorful.svg';

/**![BnbColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Ym5iLWJuYi1sb2dvX0NpcmNsZUNvbG9yZnVsPC90aXRsZT4KICAgIDxnIGlkPSJibmItYm5iLWxvZ29fQ2lyY2xlQ29sb3JmdWwiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJibmItYm5iLWxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MiwgMTEyKSIgZmlsbD0iI0YwQjkwQiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTc2LjUzOTg0MDEsNDAwIEw3Ni45NjE2NzYzLDU1NC43Mjk4MDkgTDIwOC4zODcwOTcsNjMyLjA5NDcxMyBMMjA4LjM4NzA5Nyw3MjIuNjgxOTgzIEwwLjA0Njg3MDY5Miw2MDAuNDQ1NDM0IEwwLjA0Njg3MDY5MiwzNTQuNzUzMjUzIEw3Ni41Mzk4NDAxLDQwMCBMNzYuNTM5ODQwMSw0MDAgWiBNNzYuNTM5ODQwMSwyNDUuMjcwMTkxIEw3Ni41Mzk4NDAxLDMzNS40MzU0NzEgTDAsMjkwLjE0MTgzNiBMMCwxOTkuOTc2NTU2IEw3Ni41Mzk4NDAxLDE1NC42ODI5MjEgTDE1My40NTQ2NDYsMTk5Ljk3NjU1NiBMNzYuNTM5ODQwMSwyNDUuMjcwMTkxIEw3Ni41Mzk4NDAxLDI0NS4yNzAxOTEgWiBNMjYzLjI3MjY3NywxOTkuOTc2NTU2IEwzMzkuODEyNTE3LDE1NC42ODI5MjEgTDQxNi43MjczMjMsMTk5Ljk3NjU1NiBMMzM5LjgxMjUxNywyNDUuMjcwMTkxIEwyNjMuMjcyNjc3LDE5OS45NzY1NTYgTDI2My4yNzI2NzcsMTk5Ljk3NjU1NiBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzEuODQ3MjU3LDUyMi42NTg1MzkgTDEzMS44NDcyNTcsNDMyLjA3MTI2OSBMMjA4LjM4NzA5Nyw0NzcuMzY0OTA0IEwyMDguMzg3MDk3LDU2Ny41MzAxODQgTDEzMS44NDcyNTcsNTIyLjY1ODUzOSBMMTMxLjg0NzI1Nyw1MjIuNjU4NTM5IFogTTI2My4yNzI2NzcsNjY0LjU0MTA4NSBMMzM5LjgxMjUxNyw3MDkuODM0NzIgTDQxNi43MjczMjMsNjY0LjU0MTA4NSBMNDE2LjcyNzMyMyw3NTQuNzA2MzY1IEwzMzkuODEyNTE3LDgwMCBMMjYzLjI3MjY3Nyw3NTQuNzA2MzY1IEwyNjMuMjcyNjc3LDY2NC41NDEwODUgTDI2My4yNzI2NzcsNjY0LjU0MTA4NSBaIE01MjYuNDk4NDg0LDE5OS45NzY1NTYgTDYwMy4wMzgzMjQsMTU0LjY4MjkyMSBMNjc5Ljk1MzEyOSwxOTkuOTc2NTU2IEw2NzkuOTUzMTI5LDI5MC4xNDE4MzYgTDYwMy4wMzgzMjQsMzM1LjQzNTQ3MSBMNjAzLjAzODMyNCwyNDUuMjcwMTkxIEw1MjYuNDk4NDg0LDE5OS45NzY1NTYgTDUyNi40OTg0ODQsMTk5Ljk3NjU1NiBMNTI2LjQ5ODQ4NCwxOTkuOTc2NTU2IFogTTYwMy4wMzgzMjQsNTU0LjcyOTgwOSBMNjAzLjQ2MDE2LDQwMCBMNjgwLDM1NC43MDYzNjUgTDY4MCw2MDAuMzk4NTQ2IEw0NzEuNjU5Nzc0LDcyMi42MzUwOTYgTDQ3MS42NTk3NzQsNjMyLjA0NzgyNiBMNjAzLjAzODMyNCw1NTQuNzI5ODA5IEw2MDMuMDM4MzI0LDU1NC43Mjk4MDkgTDYwMy4wMzgzMjQsNTU0LjcyOTgwOSBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIHBvaW50cz0iNTQ4LjE1Mjc0MyA1MjIuNjU4NTM5IDQ3MS42MTI5MDMgNTY3LjUzMDE4NCA0NzEuNjEyOTAzIDQ3Ny4zNjQ5MDQgNTQ4LjE1Mjc0MyA0MzIuMDcxMjY5Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NDguMTUyNzQzLDI3Ny4zNDE0NjEgTDU0OC41NzQ1OCwzNjcuOTI4NzMxIEw0MTYuNzc0MTk0LDQ0NS4yOTM2MzUgTDQxNi43NzQxOTQsNjAwLjM5ODU0NiBMMzQwLjIzNDM1Myw2NDUuMjcwMTkxIEwyNjMuNjk0NTEzLDYwMC4zOTg1NDYgTDI2My42OTQ1MTMsNDQ1LjI5MzYzNSBMMTMxLjg5NDEyNywzNjcuOTI4NzMxIEwxMzEuODk0MTI3LDI3Ny4zNDE0NjEgTDIwOC43NjIwNjIsMjMyLjA0NzgyNiBMMzM5Ljc2NTY0NywzMDkuNzg3ODMzIEw0NzEuNTY2MDMzLDIzMi4wNDc4MjYgTDU0OC40ODA4MzgsMjc3LjM0MTQ2MSBMNTQ4LjE1Mjc0MywyNzcuMzQxNDYxIEw1NDguMTUyNzQzLDI3Ny4zNDE0NjEgWiBNMTMxLjg0NzI1NywxMjIuNjU4NTM5IEwzMzkuODEyNTE3LDAgTDU0OC4xNTI3NDMsMTIyLjY1ODUzOSBMNDcxLjYxMjkwMywxNjcuOTUyMTc0IEwzMzkuODEyNTE3LDkwLjIxMjE2NzQgTDIwOC4zODcwOTcsMTY3Ljk1MjE3NCBMMTMxLjg0NzI1NywxMjIuNjU4NTM5IEwxMzEuODQ3MjU3LDEyMi42NTg1MzkgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) */
export const BnbColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bnb-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BnbColorful.displayName = 'BnbColorful';
