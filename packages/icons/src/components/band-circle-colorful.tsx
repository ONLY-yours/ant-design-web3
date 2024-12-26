// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/band-circle-colorful.svg';

/**![BandCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2FjYWNhIiB2aWV3Qm94PSIwIDAgNDcuNDQ0NzA2IDQ3LjQ0NDcwNiIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1iYW5kLWNpcmNsZS1jb2xvcmZ1bC1zdmcxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI2FudC13ZWIzLWljb24tYmFuZC1jaXJjbGUtY29sb3JmdWwtIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjYW50LXdlYjMtaWNvbi1iYW5kLWNpcmNsZS1jb2xvcmZ1bC0iPgogIDxkZWZzIGlkPSJhbnQtd2ViMy1pY29uLWJhbmQtY2lyY2xlLWNvbG9yZnVsLWRlZnMxIi8+CiAgPGcgaWQ9ImFudC13ZWIzLWljb24tYmFuZC1jaXJjbGUtY29sb3JmdWwtUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wOCwtMC4zMzQxMTc2NSkiPgogICAgPGcgaWQ9ImFudC13ZWIzLWljb24tYmFuZC1jaXJjbGUtY29sb3JmdWwtQmFuZFdlYnNpdGVfRGVza3RvcF9VSV9Ib21lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTM2LC00NTY3KSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgPGcgaWQ9ImFudC13ZWIzLWljb24tYmFuZC1jaXJjbGUtY29sb3JmdWwtTG9nbzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNiw0NTY3KSI+CiAgICAgICAgPHBhdGggZD0ibSAyMy44MDIzNTMsNDcuNzc4ODI0IHYgMCBDIDEwLjcwMTE3Nyw0Ny43Nzg4MjQgMC4wOCwzNy4xNTc2NDcgMC4wOCwyNC4wNTY0NzEgdiAwIEMgMC4wOCwxMC45NTUyOTQgMTAuNzAxMTc3LDAuMzM0MTE3NjUgMjMuODAyMzUzLDAuMzM0MTE3NjUgdiAwIGMgMTMuMTAxMTc2LDAgMjMuNzIyMzUzLDEwLjYyMTE3NjM1IDIzLjcyMjM1MywyMy43MjIzNTMzNSB2IDAgQyA0Ny41MiwzNy4xNTc2NDcgMzYuODk4ODIzLDQ3Ljc3ODgyNCAyMy44MDIzNTMsNDcuNzc4ODI0IFoiIGlkPSJhbnQtd2ViMy1pY29uLWJhbmQtY2lyY2xlLWNvbG9yZnVsLVBhdGgiIGZpbGw9IiM0NTIwZTYiLz4KICAgICAgICA8cGF0aCBkPSJtIDMxLjcwMzUyOSwxOS43NTA1ODggYyAwLC0xLjY4IC0wLjgyMzUyOSwtMy4xNjcwNTkgLTIuMDg5NDExLC00LjA4IGwgMy40MTY0NywtMy40MTY0NyAtMi4wNDIzNTMsMC4wMDk0IC0yLjcxNTI5NCwyLjcxNTI5NSBjIC0wLjUwMzUyOSwtMC4xNjk0MTIgLTEuMDQsLTAuMjU4ODI0IC0xLjYsLTAuMjU4ODI0IEggMTcuMzI3MDU5IFYgMjcuOTU3NjQ3IEwgMjguNTc4ODIzLDE2LjcwNTg4MiBjIDEuMDExNzY1LDAuNjM1Mjk0IDEuNjg5NDEyLDEuNzY0NzA2IDEuNjg5NDEyLDMuMDQ5NDEyIDAsMS45ODExNzcgLTEuNjE0MTE3LDMuNTk1Mjk0IC0zLjU5NTI5NCwzLjU5NTI5NCBoIC0wLjI5NjQ3IEwgMTMuODU0MTE4LDM1Ljg3Mjk0MSBoIDIuMDMyOTQxIGwgMi40NTY0NywtMi40NTY0NyBoIDguMzI5NDEyIGMgMi43NzY0NzEsMCA1LjAzMDU4OCwtMi4yNTg4MjQgNS4wMzA1ODgsLTUuMDMwNTg5IDAsLTEuODMwNTg4IC0wLjk4MzUyOSwtMy40MzA1ODggLTIuNDQ3MDU4LC00LjMxMDU4OCAxLjQ2MzUyOSwtMC44ODk0MTIgMi40NDcwNTgsLTIuNDk0MTE3IDIuNDQ3MDU4LC00LjMyNDcwNiB6IG0gLTEyLjk0MTE3Niw0LjczNDExOCB2IC04LjMyOTQxMiBoIDcuOTEwNTg4IGMgMC4xMzY0NzEsMCAwLjI2ODIzNSwwLjAwOTQgMC40LDAuMDIzNTMgeiBtIDExLjUwNTg4MiwzLjg5MTc2NSBjIDAsMS45ODExNzYgLTEuNjE0MTE3LDMuNTk1Mjk0IC0zLjU5NTI5NCwzLjU5NTI5NCBoIC02Ljg5NDExNyBsIDcuMTYyMzUyLC03LjE2MjM1MyBjIDEuODU0MTE4LDAuMTQxMTc2IDMuMzI3MDU5LDEuNjggMy4zMjcwNTksMy41NjcwNTkgeiIgaWQ9ImFudC13ZWIzLWljb24tYmFuZC1jaXJjbGUtY29sb3JmdWwtU2hhcGUiIGZpbGw9IiNmZmZmZmYiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KICA8bWV0YWRhdGEgaWQ9ImFudC13ZWIzLWljb24tYmFuZC1jaXJjbGUtY29sb3JmdWwtbWV0YWRhdGExIj4KICAgIDxyZGY6cmRmPgogICAgICA8Y2M6d29yayByZGY6YWJvdXQ9IiIvPgogICAgPC9yZGY6cmRmPgogIDwvbWV0YWRhdGE+Cjwvc3ZnPgo=) */
export const BandCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-band-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BandCircleColorful.displayName = 'BandCircleColorful';
