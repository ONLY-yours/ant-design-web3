// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/solana-filled.svg';

/**![SolanaFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOCwgMTc3KSIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNzY0LjA0NTM2LDUyNy41NzUyOTggTDYzNy4yNjMxMDQsNjYwLjAzNDY2NyBDNjM0LjUwNzQzMSw2NjIuOTEyMDAzIDYzMS4xNzIzMzYsNjY1LjIwNjExNiA2MjcuNDY2OTI5LDY2Ni43NzQwNTIgQzYyMy43NjE1MjIsNjY4LjM0MTk4NyA2MTkuNzY0MTIzLDY2OS4xNTAyODcgNjE1LjcyNDkwMiw2NjkuMTQ4MDExIEwxNC43MTg0NDI3LDY2OS4xNDgwMTEgQzExLjg1MDY4NzIsNjY5LjE0ODAxMSA5LjA0NTQzNjI4LDY2OC4zMzEzNDEgNi42NDczOTIzMiw2NjYuNzk5OTA1IEM0LjI0OTMxMDM0LDY2NS4yNjc3MDggMi4zNjI4NTI4NCw2NjMuMDg2ODk0IDEuMjE5Nzk1OTcsNjYwLjUyNDM2MSBDMC4wNzY3NDEzNzgsNjU3Ljk2MjU4OSAtMC4yNzMxMTk2MTUsNjU1LjEzMDg3NiAwLjIxMzIwMTE4Nyw2NTIuMzc3NDg0IEMwLjY5OTUyMTIyOSw2NDkuNjI0MDkyIDIuMDAwODM2MTcsNjQ3LjA2OTE2NCAzLjk1NzI2NTI2LDY0NS4wMjY3NDEgTDEzMC44MzQ0MDQsNTEyLjU2NzM3MyBDMTMzLjU4MzIzMyw1MDkuNjk3NjQgMTM2LjkwNjkyMiw1MDcuNDA4MDkgMTQwLjYwMDE2Miw1MDUuODQwOTE1IEMxNDQuMjk0MTY0LDUwNC4yNzI5NzkgMTQ4LjI3ODYzNiw1MDMuNDYwODc3IDE1Mi4zMDc5NzEsNTAzLjQ1NDAzMyBMNzUzLjI4MTIwMiw1MDMuNDU0MDMzIEM3NTYuMTQ4NjUzLDUwMy40NTQwMzMgNzU4Ljk1Mzc1Miw1MDQuMjcwNjk4IDc2MS4zNTM1Niw1MDUuODAyMTM0IEM3NjMuNzQ4ODA2LDUwNy4zMzQzMzEgNzY1LjYzNDU4Niw1MDkuNTE1OTA2IDc2Ni43ODI3ODMsNTEyLjA3NzY3OCBDNzY3LjkyMzM3Nyw1MTQuNjQwMjExIDc2OC4yNzMxNTksNTE3LjQ3MTE2MyA3NjcuNzg2NTA1LDUyMC4yMjQ1NTUgQzc2Ny4yOTk4NTIsNTIyLjk3Nzk0NyA3NjUuOTk5NTc2LDUyNS41MzI4NzYgNzY0LjA0NTM2LDUyNy41NzUyOTggWiBNNjM3LjI2MzEwNCwyNjAuODM5OTc2IEM2MzQuNTA3NDMxLDI1Ny45NjI2NCA2MzEuMTcyMzM2LDI1NS42Njg1MjYgNjI3LjQ2NjkyOSwyNTQuMTAwNTkxIEM2MjMuNzYxNTIyLDI1Mi41MzM0MTYgNjE5Ljc2NDEyMywyNTEuNzI1MTE2IDYxNS43MjQ5MDIsMjUxLjcyNzM5MiBMMTQuNzE4NDQyNywyNTEuNzI3MzkyIEMxMS44NTA2ODcyLDI1MS43MjczOTIgOS4wNDU0MzYyOCwyNTIuNTQzMzAxIDYuNjQ3MzkyMzIsMjU0LjA3NTQ5OCBDNC4yNDkzMTAzNCwyNTUuNjA3Njk1IDIuMzYyODUyODQsMjU3Ljc4ODUwOSAxLjIxOTc5NTk3LDI2MC4zNTAyODEgQzAuMDc2NzQxMzc4LDI2Mi45MTI4MTQgLTAuMjczMTE5NjE1LDI2NS43NDQ1MjcgMC4yMTMyMDExODcsMjY4LjQ5NzkxOSBDMC42OTk1MjEyMjksMjcxLjI1MDU1IDIuMDAwODM2MTcsMjczLjgwNTQ3OSAzLjk1NzI2NTI2LDI3NS44NDg2NjIgTDEzMC44MzQ0MDQsNDA4LjMwODAzIEMxMzMuNTgzMjMzLDQxMS4xNzc3NjMgMTM2LjkwNjkyMiw0MTMuNDY2NTUzIDE0MC42MDAxNjIsNDE1LjAzNDQ4OCBDMTQ0LjI5NDE2NCw0MTYuNjAxNjY0IDE0OC4yNzg2MzYsNDE3LjQxNDUyNiAxNTIuMzA3OTcxLDQxNy40MjA2MDkgTDc1My4yODEyMDIsNDE3LjQyMDYwOSBDNzU2LjE0ODY1Myw0MTcuNDIwNjA5IDc1OC45NTM3NTIsNDE2LjYwNDcwNSA3NjEuMzUzNTYsNDE1LjA3MjUwOCBDNzYzLjc0ODgwNiw0MTMuNTQwMzExIDc2NS42MzQ1ODYsNDExLjM1OTQ5NyA3NjYuNzgyNzgzLDQwOC43OTc3MjUgQzc2Ny45MjMzNzcsNDA2LjIzNTE5MiA3NjguMjczMTU5LDQwMy40MDM0OCA3NjcuNzg2NTA1LDQwMC42NTAwODggQzc2Ny4yOTk4NTIsMzk3Ljg5NzQ1NiA3NjUuOTk5NTc2LDM5NS4zNDI1MjcgNzY0LjA0NTM2LDM5My4yOTkzNDUgTDYzNy4yNjMxMDQsMjYwLjgzOTk3NiBaIE0xNC43MTg0NDI3LDE2NS42OTM5NzUgTDYxNS43MjQ5MDIsMTY1LjY5Mzk3NSBDNjE5Ljc2NDEyMywxNjUuNjkzOTc1IDYyMy43NjE1MjIsMTY0Ljg4Nzk1NCA2MjcuNDY2OTI5LDE2My4zMjAwMTggQzYzMS4xNzIzMzYsMTYxLjc1MjA4MyA2MzQuNTA3NDMxLDE1OS40NTc5NyA2MzcuMjYzMTA0LDE1Ni41ODA2MzMgTDc2NC4wNDUzNiwyNC4xMjExODg4IEM3NjUuOTk5NTc2LDIyLjA3ODYxNDUgNzY3LjI5OTg1MiwxOS41MjM3NjE4IDc2Ny43ODY1MDUsMTYuNzcwNTIxOSBDNzY4LjI3MzE1OSwxNC4wMTcyODIgNzY3LjkyMzM3NywxMS4xODU2NDU0IDc2Ni43ODI3ODMsOC42MjM0OTI4NSBDNzY1LjYzNDU4Niw2LjA2MTM0MDM0IDc2My43NDg4MDYsMy44ODAyNjc2MiA3NjEuMzUzNTYsMi4zNDgyNzYwOCBDNzU4Ljk1Mzc1MiwwLjgxNjI3NjkyNCA3NTYuMTQ4NjUzLDAgNzUzLjI4MTIwMiwwIEwxNTIuMzA3OTcxLDAgQzE0OC4yNzg2MzYsMC4wMDY2NzkyOTA5MiAxNDQuMjk0MTY0LDAuODE4OTM4MzA4IDE0MC42MDAxNjIsMi4zODY0ODU5NSBDMTM2LjkwNjkyMiwzLjk1NDA0MTE5IDEzMy41ODMyMzMsNi4yNDM1MDgyOCAxMzAuODM0NDA0LDkuMTEzMTg3NTMgTDMuOTg5OTY5ODYsMTQxLjU3MjcwOCBDMi4wMzU0MzQxNiwxNDMuNjEyODQ5IDAuNzM0NjkyNTYxLDE0Ni4xNjU0OTcgMC4yNDcyNjkxODUsMTQ4LjkxNTA4NyBDLTAuMjQwMTU0OTUxLDE1MS42NjU0MzcgMC4xMDY5Mjk4MzgsMTU0LjQ5NDg2OSAxLjI0NTk1MzU3LDE1Ny4wNTU4ODEgQzIuMzg0OTgwMzUsMTU5LjYxNjg5MyA0LjI2NjQzNDQ1LDE2MS43OTc3MDcgNi42NTk1NzM4NiwxNjMuMzMyMTg1IEM5LjA1MjczNjA4LDE2NC44NjY2NjMgMTEuODUzNTAwNywxNjUuNjg3MTMgMTQuNzE4NDQyNywxNjUuNjkzOTc1IFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) */
export const SolanaFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-solana-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

SolanaFilled.displayName = 'SolanaFilled';
