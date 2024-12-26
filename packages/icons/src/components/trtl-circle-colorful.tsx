// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/trtl-circle-colorful.svg';

/**![TrtlCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAwODQzRCIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xNi4wMDYgNS42Yy4zOTQgMCAuNzgxLjEwMyAxLjEyMi4zbDcuMTYgNC4xMzRhMi4yNDUgMi4yNDUgMCAwIDEgMS4xMjIgMS45NDV2OC40MzRjMCAuODAyLS40MjcgMS41NDMtMS4xMjIgMS45NDRsLTcuMTYxIDQuMTM1YTIuMjQ1IDIuMjQ1IDAgMCAxLTIuMjQ1IDBMNy43MiAyMi4zNTdhMi4yNDYgMi4yNDYgMCAwIDEtMS4xMjMtMS45NDR2LTguNDM0YzAtLjgwMi40MjgtMS41NDMgMS4xMjMtMS45NDVMMTQuODggNS45Yy4zNDItLjE5Ny43My0uMzAxIDEuMTIzLS4zMDFoLjAwMnptLS4wMDItMS41NjFhMy44MSAzLjgxIDAgMCAwLTEuOTAyLjUxTDYuOTQgOC42ODJhMy44MTYgMy44MTYgMCAwIDAtMS45MDMgMy4yOTZ2OC40MzRhMy44MTYgMy44MTYgMCAwIDAgMS45MDMgMy4yOTZsNy4xNiA0LjEzNGMxLjE3OC42OCAyLjYyOS42OCAzLjgwNiAwbDcuMTYxLTQuMTM0YTMuODE2IDMuODE2IDAgMCAwIDEuOTAzLTMuMjk2di04LjQzNGEzLjgxNiAzLjgxNiAwIDAgMC0xLjkwMy0zLjI5NmwtNy4xNi00LjEzNWEzLjgxIDMuODEgMCAwIDAtMS45MDQtLjUxeiIvPjxwYXRoIGQ9Ik0xNS4xMjcgMTcuNTJhLjQ2OC40NjggMCAwIDEtLjQwNi0uMjM0bC0uODYxLTEuNDkzYS40NjguNDY4IDAgMCAxIDAtLjQ2OGwuODYxLTEuNDkzYS40NjguNDY4IDAgMCAxIC40MDYtLjIzNGgxLjc1OGEuNDcuNDcgMCAwIDEgLjQwNS4yMzRsLjg2MiAxLjQ5M2EuNDY4LjQ2OCAwIDAgMSAwIC40NjhsLS44NjIgMS40OTNhLjQ2OC40NjggMCAwIDEtLjQwNS4yMzRoLTEuNzU4em0tMi4zNDktMi4zNTFhLjQ3LjQ3IDAgMCAwIC40MDYtLjIzNGwuODYxLTEuNDkzYS40NjguNDY4IDAgMCAwIDAtLjQ2OGwtMS4wNzQtMS44NjEtMi4wOTcgMS4xNDRhLjQ2OC40NjggMCAwIDAtLjI0My40MjFjLjAxNy44MzguMTE1IDEuNjcyLjI5MSAyLjQ5MWgxLjg1NnptNi40NTUgMGEuNDY4LjQ2OCAwIDAgMS0uNDA1LS4yMzRsLS44NjItMS40OTNhLjQ2OC40NjggMCAwIDEgMC0uNDY4bDEuMDc0LTEuODYxIDIuMDk2IDEuMTQ0YS40NjguNDY4IDAgMCAxIC4yNDQuNDIgMTMuMTU3IDEzLjE1NyAwIDAgMS0uMjkgMi40OTJoLTEuODU3ek0xNi4yMyA5LjU3OGEuNDY4LjQ2OCAwIDAgMC0uNDQ4IDBsLTIuMTI2IDEuMTYgMS4wNjYgMS44NDZhLjQ2OC40NjggMCAwIDAgLjQwNS4yMzRoMS43NThhLjQ2Ny40NjcgMCAwIDAgLjQwNS0uMjM0bDEuMDY2LTEuODQ1LTIuMTI2LTEuMTZ6bS01LjExNCA2LjM3MWExMy4wNzIgMTMuMDcyIDAgMCAwIDEuODk1IDMuOTg3bDEuMDM1LTEuNzkyYS40NjguNDY4IDAgMCAwIDAtLjQ2OGwtLjg2Mi0xLjQ5M2EuNDY4LjQ2OCAwIDAgMC0uNDA1LS4yMzRoLTEuNjYzem05Ljc3OCAwQTEzLjA3MiAxMy4wNzIgMCAwIDEgMTkgMTkuOTM2bC0xLjAzNS0xLjc5MmEuNDY4LjQ2OCAwIDAgMSAwLS40NjhsLjg2My0xLjQ5M2EuNDY4LjQ2OCAwIDAgMSAuNDA1LS4yMzRoMS42NjJ6TTE1LjEyNyAxOC4zYS40NjguNDY4IDAgMCAwLS40MDYuMjM0bC0xLjIgMi4wOGExMy4yMSAxMy4yMSAwIDAgMCAyLjE5OSAyLjE1OS40Ny40NyAwIDAgMCAuNTczIDAgMTMuMjEgMTMuMjEgMCAwIDAgMi4xOTgtMi4xNmwtMS4yLTIuMDc5YS40NjguNDY4IDAgMCAwLS40MDUtLjIzNGgtMS43NnoiLz48L2c+PC9nPjwvc3ZnPg==) */
export const TrtlCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-trtl-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TrtlCircleColorful.displayName = 'TrtlCircleColorful';
