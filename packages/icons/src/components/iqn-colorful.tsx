// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/iqn-colorful.svg';

/**![IqnColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWlxbi1jb2xvcmZ1bC1Mb2dvX2NvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODguNCA5OCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWlxbi1jb2xvcmZ1bC1saW5lYXItZ3JhZGllbnQiIHgxPSI0Ljk0IiB5MT0iMjkuMzMiIHgyPSIyNC40OSIgeTI9IjYzLjE5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIC0xLCAwLCAxMDAuMSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGRhZDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwOTVmYTciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1pcW4tY29sb3JmdWwtbGluZWFyLWdyYWRpZW50LTIiIHgxPSIzMC43IiB5MT0iOTQuMTQiIHgyPSI1My4yNCIgeTI9IjU1LjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgLTEsIDAsIDEwMC4xKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzBiZjdkZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOTVmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWlxbi1jb2xvcmZ1bC1saW5lYXItZ3JhZGllbnQtMyIgeDE9Ijk0Ljg0IiB5MT0iNjQuNjYiIHgyPSIxNC4zOSIgeTI9IjguMzMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgLTEsIDAsIDEwMC4xKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZmNjNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOTVmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5pcWVvbi1pcW4tbG9nbzwvdGl0bGU+PHBhdGggZD0iTS4xLDMwLjU1YTguNTksOC41OSwwLDAsMSwxMC4zLTEuNWwzNS4yLDIwLTM1LjMsMjBBOC42MSw4LjYxLDAsMCwxLDAsNjcuNTVDLjEsNjcuNTUuMSwyOC4xNS4xLDMwLjU1WiIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLWlxbi1jb2xvcmZ1bC1saW5lYXItZ3JhZGllbnQpIi8+PHBhdGggZD0iTTgzLjksMjAuMzVhOC4xMiw4LjEyLDAsMCwxLTMuOSw5LjJMNDUuNiw0OS4wNWwtMzUuMy0yMEE4LjYxLDguNjEsMCwwLDAsMCwzMC41NWExMi4xMiwxMi4xMiwwLDAsMSw2LjMtMTAuNUwzOC43LDEuNjVhMTIuNjYsMTIuNjYsMCwwLDEsMTIuNSwwWiIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLWlxbi1jb2xvcmZ1bC1saW5lYXItZ3JhZGllbnQtMikiLz48cGF0aCBkPSJNMTAuMyw2OS4wNSw4MCwyOS41NWMzLjMtMS45LDQuMS01LjcsMy4yLTkuMiwzLjcsMi4yLDUuMiw2LjIsNS4yLDEwLjR2MzYuN2MwLDQuNC0xLjcsOC40LTUuNSwxMC42bC0zMiwxOC4zYTEyLjI5LDEyLjI5LDAsMCwxLTEyLjMsMEw2LjIsNzguMDVBMTIuNDUsMTIuNDUsMCwwLDEsMCw2Ny41NSw4LjYxLDguNjEsMCwwLDAsMTAuMyw2OS4wNVoiIGZpbGw9InVybCgjYW50LXdlYjMtaWNvbi1pcW4tY29sb3JmdWwtbGluZWFyLWdyYWRpZW50LTMpIi8+PC9zdmc+) */
export const IqnColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-iqn-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

IqnColorful.displayName = 'IqnColorful';
