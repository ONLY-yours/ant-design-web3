// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/poe-circle-colorful.svg';

/**![PoeCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXBvZS1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDY2IDQ2NiIgPjxnIGlkPSJhbnQtd2ViMy1pY29uLXBvZS1jaXJjbGUtY29sb3JmdWwtUG8uZXQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjEgLTI5MikiIGlkPSJhbnQtd2ViMy1pY29uLXBvZS1jaXJjbGUtY29sb3JmdWwtRWxsaXBzZSI+PHBhdGggaWQ9ImFudC13ZWIzLWljb24tcG9lLWNpcmNsZS1jb2xvcmZ1bC1wYXRoMF9maWxsIiBkPSJNNTg3IDUyNWMwIDEyOC43LTEwNC4zIDIzMy0yMzMgMjMzUzEyMSA2NTMuNyAxMjEgNTI1czEwNC4zLTIzMyAyMzMtMjMzIDIzMyAxMDQuMyAyMzMgMjMzeiIgc3R5bGU9ImZpbGw6ICMzOTM1MzQ7Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTkgLTI5MCkiIGlkPSJhbnQtd2ViMy1pY29uLXBvZS1jaXJjbGUtY29sb3JmdWwtRWxsaXBzZV8xXyI+PHBhdGggaWQ9ImFudC13ZWIzLWljb24tcG9lLWNpcmNsZS1jb2xvcmZ1bC1wYXRoMV9maWxsIiBkPSJNNTU3LjkgNTI1YzAgMTEyLjYtOTEuMyAyMDMuOS0yMDMuOSAyMDMuOVMxNTAuMSA2MzcuNiAxNTAuMSA1MjUgMjQxLjQgMzIxLjEgMzU0IDMyMS4xIDU1Ny45IDQxMi40IDU1Ny45IDUyNXoiIHN0eWxlPSJmaWxsOiAjZjJmMmYyOyIvPjwvZz48ZyBpZD0iYW50LXdlYjMtaWNvbi1wb2UtY2lyY2xlLWNvbG9yZnVsLXBvZSI+PGcgaWQ9ImFudC13ZWIzLWljb24tcG9lLWNpcmNsZS1jb2xvcmZ1bC1Hcm91cCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMC41NiAtMjgzLjYxNikiIGlkPSJhbnQtd2ViMy1pY29uLXBvZS1jaXJjbGUtY29sb3JmdWwtVmVjdG9yIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1wb2UtY2lyY2xlLWNvbG9yZnVsLXBhdGgyX2ZpbGwiIGQ9Ik00MjIuNyA0NTkuOUwyNzYuMyA2MDkuNmwtMy4yLTYwLjMgODguMy04OS40IDM2LjYtMzggMjMuNy03LjggMTcuMiA0LjVMNDU1IDQzMmwtMTkuNCAyMi4zLTEyLjkgNS42eiIgc3R5bGU9ImZpbGw6ICNmZmY7Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuOTY5IC0yODIuMzI4KSIgaWQ9ImFudC13ZWIzLWljb24tcG9lLWNpcmNsZS1jb2xvcmZ1bC1TaGFwZSI+PHBhdGggaWQ9ImFudC13ZWIzLWljb24tcG9lLWNpcmNsZS1jb2xvcmZ1bC1wYXRoM19maWxsIiBkPSJNNDI3LjQgNDYyLjhMMzk4LjEgNDkzaDQ0LjRsNS01LjFjMy41LTMuNiA2LjMtOCA4LjItMTIuNyAxLjktNC44IDIuOC05LjkgMi44LTE1IDAtMTAuMi0zLjgtMTkuOS0xMC42LTI3LjNsLTIwLjIgMjFjMS4xIDEuMiAxLjYgMi45IDEuNiA0LjUtLjEgMS42LS44IDMuMi0xLjkgNC40eiIgc3R5bGU9ImZpbGw6ICNlMWRlZDk7Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDkuMzYyIC0yNzIuMjM0KSIgaWQ9ImFudC13ZWIzLWljb24tcG9lLWNpcmNsZS1jb2xvcmZ1bC1TaGFwZV8xXyI+PHBhdGggaWQ9ImFudC13ZWIzLWljb24tcG9lLWNpcmNsZS1jb2xvcmZ1bC1wYXRoNF9maWxsIiBkPSJNMzE0LjQgNTc5LjhsLTIzLjkgMjQuOGg0NC40bDI0LjEtMjQuOGgtNDQuNnoiIHN0eWxlPSJmaWxsOiAjZTFkZWQ5OyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3LjA1NiAtMjc0LjgxMSkiIGlkPSJhbnQtd2ViMy1pY29uLXBvZS1jaXJjbGUtY29sb3JmdWwtU2hhcGVfMl8iPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXBvZS1jaXJjbGUtY29sb3JmdWwtcGF0aDVfZmlsbCIgZD0iTTMyNC4xIDU2OS44aDQ0LjRsMjYuNS0yNy41aC00NC40bC0yNi41IDI3LjV6IiBzdHlsZT0iZmlsbDogI2UxZGVkOTsiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNC41NzEgLTI3Ny41MTEpIiBpZD0iYW50LXdlYjMtaWNvbi1wb2UtY2lyY2xlLWNvbG9yZnVsLVNoYXBlXzNfIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1wb2UtY2lyY2xlLWNvbG9yZnVsLXBhdGg2X2ZpbGwiIGQ9Ik00MzMgNTAzaC00NC40bC0yOC40IDI5LjNoNDQuNEw0MzMgNTAzeiIgc3R5bGU9ImZpbGw6ICNlMWRlZDk7Ii8+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEzIC0yODQpIiBpZD0iYW50LXdlYjMtaWNvbi1wb2UtY2lyY2xlLWNvbG9yZnVsLVNoYXBlXzRfIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1wb2UtY2lyY2xlLWNvbG9yZnVsLXBhdGg3X2ZpbGwiIGQ9Ik00NTYuMSA0MjMuN2MtNC42LTQuOC0xMC4xLTguNi0xNi4xLTExLjJzLTEyLjUtMy45LTE5LTMuOS0xMyAxLjMtMTkgMy45LTExLjUgNi41LTE2LjEgMTEuM2wtMTE1IDExOC44Yy0xLjEgMS4zLTEuOCAzLTEuNyA0Ljd2NjEuMmwtMzEuNyAzMy4xaDE3LjRsMjMuNS0yNC4zaDU4LjhjLjggMCAxLjYtLjEgMi40LS41LjctLjMgMS40LS45IDEuOS0xLjVsMTE0LjMtMTE4LjQuMi0uMmM5LjMtOS43IDE0LjUtMjIuOCAxNC40LTM2LjQuMS02LjgtMS4yLTEzLjUtMy43LTE5LjctMi4zLTYuNS02LTEyLjEtMTAuNi0xNi45em0tNjYuOCAxMy44bDUtNS4xYzcuMS03LjMgMTYuNy0xMS40IDI2LjctMTEuNHMxOS42IDQuMSAyNi43IDExLjRjLjIuMi4yLjQuNC40IDYuOCA3LjQgMTAuNiAxNy4zIDEwLjYgMjcuNi0uMSAxMC4zLTQgMjAuMS0xMSAyNy40bC01IDUuMWgtNDQuNGwyOS4xLTMwLjJjMS4xLTEuMSAxLjgtMi43IDEuOC00LjNzLS41LTMuMi0xLjYtNC40Yy0uMi0uMi0uMi0uMi0uMi0uNC0xLjEtMS4yLTIuNy0xLjgtNC4zLTEuOC0xLjYgMC0zLjIuNy00LjMgMS44bC0yOS41IDMwLjZ2LTQ2Ljd6bS05OC44IDE2Ny4xbDIzLjktMjQuOGg0NC40bC0yMy45IDI0LjhoLTQ0LjR6bTY5LjctNzIuM2wyOC40LTI5LjVINDMzbC0yOC40IDI5LjVoLTQ0LjR6bTM0LjcgMTBsLTI2LjUgMjcuNUgzMjRsMjYuNS0yNy41aDQ0LjR6bS00My43LTY1LjRsMjguNC0yOS41djQ2LjdsLTI4LjQgMjkuNXYtNDYuN3pNMzE1IDUxNC40bDI2LjUtMjcuNXY0Ni43TDMxNSA1NjEuMXYtNDYuN3ptLTMzLjggMzUuMWwyNC4zLTI1djQ2LjdsLTI0LjMgMjUiIHN0eWxlPSJmaWxsOiAjMzkzNTM0OyIvPjwvZz48L2c+PC9nPjwvc3ZnPg==) */
export const PoeCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-poe-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PoeCircleColorful.displayName = 'PoeCircleColorful';
