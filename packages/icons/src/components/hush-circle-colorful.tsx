// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/hush-circle-colorful.svg';

/**![HushCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjMjkyOTI5IiByPSIxNiIvPjxwYXRoIGQ9Ik0xNS4wMDcgMTguNjU3YzAtLjQ2LjAwMi0uOTE5LS4wMDEtMS4zNzgtLjAwMS0uMTI4LjAzNi0uMjI2LjE1NS0uMjc4LjExLS4wNDguMjI1LS4wMTQuMzIxLjA5OC4yODYuMzM0LjU3LjY3Ljg1NSAxLjAwNi4xLjExNy4yMDEuMjMzLjI5OC4zNTRhLjE3NS4xNzUgMCAwIDEgLjAzOC4xYy4wMDIuNDg1LjAwMy45Ny4wMDEgMS40NTRhLjg0OC44NDggMCAwIDEtLjc3MS44NTUuODQyLjg0MiAwIDAgMS0uODg4LS43MjZjLS4wMDktLjA1NS0uMDA4LS4xMTItLjAwOC0uMTY4di0xLjMxN3ptLjAwMy05LjAxYy0uMDAxLS4wMi0uMDAzLS4wMzktLjAwMy0uMDU5VjYuODU2Yy4wMDEtLjQyLjI4OS0uNzc0LjY3OS0uODQzYS44MzEuODMxIDAgMCAxIC45ODMuODIxYy4wMS45MzEuMDA0IDEuODYzLjAwNiAyLjc5NGwtLjAwNS4wNDhjLS4xOTQtLjMzMi0uNDYyLS40OTgtLjgyOC0uNDk3LS4zNjIgMC0uNjMyLjE2LS44MzIuNDY4em0tLjAwMyAxMi42MTNjLjIwNC4zMS40NzYuNDY4Ljg0MS40NjcuMzY0LS4wMDEuNjI5LS4xNjcuODI3LS40NzV2Mi4zMTRjLS4wMDEuMjI3LjAwNi40NTYtLjAxNC42OGEuODI5LjgyOSAwIDAgMS0uODcuNzUzLjgzOC44MzggMCAwIDEtLjc4Mi0uODMyYy0uMDA1LS44OTMtLjAwMi0xLjc4Ni0uMDAyLTIuNjh2LS4yMjd6bTEuNjY4LTguODI2djEuNjYxYzAgLjE1OC0uMDUuMjQ0LS4xNy4yOTJhLjMwOS4zMDkgMCAwIDEtLjM2LS4wOTRsLS43MjQtLjg0OGMtLjEyNS0uMTQ2LS4yNS0uMjkxLS4zNzMtLjQ0YS4xNzQuMTc0IDAgMCAxLS4wNC0uMWMtLjAwMi0uNzE0LS4wMDMtMS40MjkgMC0yLjE0M2EuODQuODQgMCAwIDEgLjc2Ni0uODQyYy4zOTUtLjA0NC43ODcuMjUuODc5LjY2NC4wMTUuMDY5LjAyLjE0MS4wMi4yMTIuMDAyLjU0Ni4wMDIgMS4wOTIuMDAyIDEuNjM4em0xLjczMS0zLjM3N3YtMi4yMmMuMDAyLS40MDIuMjMxLS43My41ODctLjg0Mi41NC0uMTcxIDEuMDguMjM3IDEuMDgzLjgyNS4wMDMuNTU0IDAgMS4xMDggMCAxLjY2MXYyLjc5NWMwIC40MTMtLjI0OC43NDctLjYyNy44NS0uNDkzLjEzMy0uOTk2LS4yMy0xLjAzNy0uNzQ5YTEuOTY1IDEuOTY1IDAgMCAxLS4wMDUtLjE1M3YtMi4xNjd6TTEzLjM2MiAyMC43NnYyLjU2NWEuODQ1Ljg0NSAwIDAgMS0uNjkzLjg0N2MtLjQ4LjA5Mi0uOTU5LS4yOTgtLjk3My0uNzk3LS4wMDQtLjE0My0uMDAxLS4yODYtLjAwMS0uNDI5di00Ljc1M2MwLS4zOTkuMjU2LS43MzYuNjI4LS44MzJhLjgzNC44MzQgMCAwIDEgMS4wMzguODEyYy4wMDMuODYyIDAgMS43MjUgMCAyLjU4N3ptMC05LjQ0NnYzLjQ5OWEuODQ1Ljg0NSAwIDAgMS0uNjU2Ljg0LjgzNi44MzYgMCAwIDEtMS4wMS0uODFjLS4wMDUtLjUwNi0uMDAxLTEuMDExLS4wMDItMS41MTdWNy44MmMwLS40MTIuMjY4LS43NTYuNjUzLS44NDNhLjgzNS44MzUgMCAwIDEgMS4wMTQuODIxYy4wMDMuODk5IDAgMS43OTcgMCAyLjY5NnptNS4wNDQgOC4xODZ2LTMuOGMwLS4zNzkuMTYyLS42Ni41LS44MTguNTQyLS4yNTEgMS4xNS4xNSAxLjE3Ljc2M3Y3LjY0OGMwIC40MTgtLjIzOS43NS0uNjE2Ljg1OC0uNDk0LjE0Mi0xLjAwNi0uMjItMS4wNDgtLjc0MWEyLjAxMyAyLjAxMyAwIDAgMS0uMDA1LS4xNnYtMy43NTJ6bTUuMDk0LTMuODY2djUuOTRhLjg1Ljg1IDAgMCAxLS42NzEuODUyYy0uNDkyLjEwNy0uOTgyLS4yODYtLjk5Ni0uNzk5VjkuNzA3YzAtLjM4NS4xOTMtLjY5Mi41MTktLjgyOC41NS0uMjMgMS4xNDcuMTg0IDEuMTQ3Ljc5OHY1Ljk1NnptLTEzLjMzMy0uMDA5djUuOTQ5YzAgLjQyLS4yNi43NTctLjY1Mi44NS0uNS4xMi0xLjAwMS0uMjc0LTEuMDE1LS43OTlWOS42ODhjMC0uNDA5LjI0NS0uNzQxLjYyLS44NDVhLjgzNC44MzQgMCAwIDEgMS4wNDYuODAyYy4wMDUuNjU1LjAwMSAxLjMxMS4wMDEgMS45Njd2NC4wMTJ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==) */
export const HushCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-hush-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HushCircleColorful.displayName = 'HushCircleColorful';
