// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bnb-circle-filled.svg';

/**![BnbCircleFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmJpdGNvaW4tYnRjLWxvZ29fQ2lyY2xlIEZpbGxlZDwvdGl0bGU+CiAgICA8ZyBpZD0iYml0Y29pbi1idGMtbG9nb19DaXJjbGUtRmlsbGVkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYm5iLWJuYi1sb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIsIDExMikiPgogICAgICAgICAgICA8cGF0aCBkPSJNNDAwLDAgQzYyMC45Mjk0ODcsMCA4MDAsMTc5LjA3MDUxMyA4MDAsNDAwIEM4MDAsNjIwLjkyOTQ4NyA2MjAuOTI5NDg3LDgwMCA0MDAsODAwIEMxNzkuMDcwNTEzLDgwMCAwLDYyMC45Mjk0ODcgMCw0MDAgQzAsMTc5LjA3MDUxMyAxNzkuMDcwNTEzLDAgNDAwLDAgTDQwMCwwIFoiIGlkPSLot6/lvoQiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIxOS44Mzk3NDQsNDAwIEwyMjAuMTI4MjA1LDUwNS43NjkyMzEgTDMxMCw1NTguNjUzODQ2IEwzMTAsNjIwLjU3NjkyMyBMMTY3LjUzMjA1MSw1MzcuMDE5MjMxIEwxNjcuNTMyMDUxLDM2OS4wNzA1MTMgTDIxOS44Mzk3NDQsNDAwIEwyMTkuODM5NzQ0LDQwMCBaIE0yMTkuODM5NzQ0LDI5NC4yMzA3NjkgTDIxOS44Mzk3NDQsMzU1Ljg2NTM4NSBMMTY3LjUsMzI0LjkwMzg0NiBMMTY3LjUsMjYzLjI2OTIzMSBMMjE5LjgzOTc0NCwyMzIuMzA3NjkyIEwyNzIuNDM1ODk3LDI2My4yNjkyMzEgTDIxOS44Mzk3NDQsMjk0LjIzMDc2OSBMMjE5LjgzOTc0NCwyOTQuMjMwNzY5IFogTTM0Ny41MzIwNTEsMjYzLjI2OTIzMSBMMzk5Ljg3MTc5NSwyMzIuMzA3NjkyIEw0NTIuNDY3OTQ5LDI2My4yNjkyMzEgTDM5OS44NzE3OTUsMjk0LjIzMDc2OSBMMzQ3LjUzMjA1MSwyNjMuMjY5MjMxIEwzNDcuNTMyMDUxLDI2My4yNjkyMzEgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNTcuNjYwMjU2LDQ4My44NDYxNTQgTDI1Ny42NjAyNTYsNDIxLjkyMzA3NyBMMzEwLDQ1Mi44ODQ2MTUgTDMxMCw1MTQuNTE5MjMxIEwyNTcuNjYwMjU2LDQ4My44NDYxNTQgTDI1Ny42NjAyNTYsNDgzLjg0NjE1NCBaIE0zNDcuNTMyMDUxLDU4MC44MzMzMzMgTDM5OS44NzE3OTUsNjExLjc5NDg3MiBMNDUyLjQ2Nzk0OSw1ODAuODMzMzMzIEw0NTIuNDY3OTQ5LDY0Mi40Njc5NDkgTDM5OS44NzE3OTUsNjczLjQyOTQ4NyBMMzQ3LjUzMjA1MSw2NDIuNDY3OTQ5IEwzNDcuNTMyMDUxLDU4MC44MzMzMzMgTDM0Ny41MzIwNTEsNTgwLjgzMzMzMyBaIE01MjcuNTMyMDUxLDI2My4yNjkyMzEgTDU3OS44NzE3OTUsMjMyLjMwNzY5MiBMNjMyLjQ2Nzk0OSwyNjMuMjY5MjMxIEw2MzIuNDY3OTQ5LDMyNC45MDM4NDYgTDU3OS44NzE3OTUsMzU1Ljg2NTM4NSBMNTc5Ljg3MTc5NSwyOTQuMjMwNzY5IEw1MjcuNTMyMDUxLDI2My4yNjkyMzEgTDUyNy41MzIwNTEsMjYzLjI2OTIzMSBMNTI3LjUzMjA1MSwyNjMuMjY5MjMxIFogTTU3OS44NzE3OTUsNTA1Ljc2OTIzMSBMNTgwLjE2MDI1Niw0MDAgTDYzMi41LDM2OS4wMzg0NjIgTDYzMi41LDUzNi45ODcxNzkgTDQ5MC4wMzIwNTEsNjIwLjU0NDg3MiBMNDkwLjAzMjA1MSw1NTguNjIxNzk1IEw1NzkuODcxNzk1LDUwNS43NjkyMzEgTDU3OS44NzE3OTUsNTA1Ljc2OTIzMSBMNTc5Ljg3MTc5NSw1MDUuNzY5MjMxIFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iNTQyLjMzOTc0NCA0ODMuODQ2MTU0IDQ5MCA1MTQuNTE5MjMxIDQ5MCA0NTIuODg0NjE1IDU0Mi4zMzk3NDQgNDIxLjkyMzA3NyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQyLjMzOTc0NCwzMTYuMTUzODQ2IEw1NDIuNjI4MjA1LDM3OC4wNzY5MjMgTDQ1Mi41LDQzMC45NjE1MzggTDQ1Mi41LDUzNi45ODcxNzkgTDQwMC4xNjAyNTYsNTY3LjY2MDI1NiBMMzQ3LjgyMDUxMyw1MzYuOTg3MTc5IEwzNDcuODIwNTEzLDQzMC45NjE1MzggTDI1Ny42OTIzMDgsMzc4LjA3NjkyMyBMMjU3LjY5MjMwOCwzMTYuMTUzODQ2IEwzMTAuMjU2NDEsMjg1LjE5MjMwOCBMMzk5LjgzOTc0NCwzMzguMzMzMzMzIEw0ODkuOTY3OTQ5LDI4NS4xOTIzMDggTDU0Mi41NjQxMDMsMzE2LjE1Mzg0NiBMNTQyLjMzOTc0NCwzMTYuMTUzODQ2IEw1NDIuMzM5NzQ0LDMxNi4xNTM4NDYgWiBNMjU3LjY2MDI1NiwyMTAuNDE2NjY3IEwzOTkuODcxNzk1LDEyNi41NzA1MTMgTDU0Mi4zMzk3NDQsMjEwLjQxNjY2NyBMNDkwLDI0MS4zNzgyMDUgTDM5OS44NzE3OTUsMTg4LjIzNzE3OSBMMzEwLDI0MS4zNzgyMDUgTDI1Ny42NjAyNTYsMjEwLjQxNjY2NyBMMjU3LjY2MDI1NiwyMTAuNDE2NjY3IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) */
export const BnbCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bnb-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BnbCircleFilled.displayName = 'BnbCircleFilled';
