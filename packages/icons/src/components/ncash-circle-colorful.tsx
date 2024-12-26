// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ncash-circle-colorful.svg';

/**![NcashCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiMzNmE5Y2YiIGZpbGwtcnVsZT0ibm9uemVybyIgcj0iMTYiLz48cGF0aCBkPSJNMjYuMzEgMTguNDc1Yy4xNzYuMDc3LjI0MS4zMTYuMTQ2LjUzNGEuNDQ1LjQ0NSAwIDAgMS0uMzQ1LjI3N2wtMi4yMjUgNC4xMDNhLjUzOC41MzggMCAwIDEtLjE2Mi41MDkuNTQ1LjU0NSAwIDAgMS0uNDI5LjE2N2wtNC4zMzkgMi41OThhLjUyNC41MjQgMCAwIDEtLjQxLjMyNmMtLjIxNC4wNDEtLjQxOC0uMDM3LS41MTYtLjE4MmwtNS4wOTgtLjM1N2EuNTM0LjUzNCAwIDAgMS0uNDUxLjA5NGMtLjI1Mi0uMDU1LS40MjYtLjI1Ni0uNDE2LS40NjNsLTMuOTM5LTIuODQyYS41MjguNTI4IDAgMCAxLS40Ni0uMTRjLS4xNzItLjE1Ni0uMjM0LS4zODMtLjE2OC0uNTU1bC0xLjYyLTMuNzU3Yy0uMTc3LS4wMzUtLjMzLS4yMDktLjM3LS40MzktLjAzMy0uMjA3LjAzNS0uNDAyLjE2Mi0uNTA2bC4yMzktNS42ODdhLjU0NS41NDUgMCAwIDEtLjA3LS41MTZjLjA4LS4yMzMuMjczLS4zOC40NjMtLjM3bDQuMjUyLTQuNDU1Yy0uMDM3LS4yMS4xMjMtLjQzMy4zNzQtLjUxMmEuNTMyLjUzMiAwIDAgMSAuNDcuMDYzbDYuMTE4LTEuMTEyYy4wNzktLjE4LjMwMy0uMjg2LjU0NS0uMjQzLjIyLjAzOC4zODUuMTg5LjQyNC4zNjNsMi44MjYgMS42MTJhLjU3LjU3IDAgMCAxIC40NzMuMDU4LjU4Ni41ODYgMCAwIDEgLjI4Ni40MjhsMS4yMTYuODE4YS41My41MyAwIDAgMSAuNDYuMDljLjIyOC4xNjQuMzEuNDUuMTguNjRsLS4wMDguMDEgMS43ODMgMy40OGMuMTctLjAyMy4zNDQuMTA5LjQwNi4zMTguMDY4LjIyOS0uMDI2LjQ2Mi0uMjA4LjUyLS4xODMuMDYtLjM4Ni0uMDc4LS40NTMtLjMwNmwtLjAxMi0uMDUtMy42NjktMS45NjVhLjU2Mi41NjIgMCAwIDEtLjIzLjE4OHY5Ljc5NGEuNTY2LjU2NiAwIDAgMSAuMzI0LjY0MWwxLjQ5IDEuNTE4YS40NzMuNDczIDAgMCAxIC4yNDItLjAzNGwyLjI1LTMuOTc2YS40NS40NSAwIDAgMS0uMDIxLS40MjhjLjA5NS0uMjE4LjMxNS0uMzMxLjQ5LS4yNTR6bS4wMDQuNDc1Yy4wMzgtLjA4OC4wMTEtLjE4My0uMDU5LS4yMTQtLjA3LS4wMy0uMTU4LjAxNS0uMTk2LjEwMi0uMDM4LjA4Ny0uMDEyLjE4Mi4wNTkuMjE0LjA3LjAzLjE1Ny0uMDE1LjE5Ni0uMTAyem0tMi42NjUgNC43OTJjLjA4LS4wOC4wOTQtLjE5OC4wMzEtLjI2NHMtLjE3OS0uMDU1LS4yNi4wMjRjLS4wOC4wOC0uMDk0LjE5OS0uMDMxLjI2NXMuMTguMDU1LjI2LS4wMjV6bS0uNjI5LS4yNWwuMDExLS4wMjQtMS40MjktMS40NTRhLjU0LjU0IDAgMCAxLS4yODUuMDgyLjU1MS41NTEgMCAwIDEtLjQ5OS0uMzJIMTguOWEuNTY2LjU2NiAwIDAgMS0uMjMuMjQ4bC4xODcgMi43MDdjLjA3NC4wMzIuMTQuMDc4LjE5LjEzNXptLTQuMTY4IDIuNzg2bDMuNDY3LTIuMDc2LTMuMTYgMS4wOTJhLjUyLjUyIDAgMCAxLS4zMTMuMzUxbC0uMDk2LjU2NGEuNDQuNDQgMCAwIDEgLjEwMi4wNjl6bS0uMzI1LjUzOGMuMTEtLjAyLjE4NS0uMTEuMTY5LS4yMDItLjAxNi0uMDktLjEyLS4xNDgtLjIzLS4xMjYtLjEwOS4wMi0uMTg1LjExLS4xNjkuMjAxLjAxNy4wOTEuMTIuMTQ4LjIzLjEyN3ptLS41MDQtLjM5OGEuNTMuNTMgMCAwIDEgLjI5Mi0uMjNsLjA5MS0uNTM1YS41NTcuNTU3IDAgMCAxLS4yMTMtLjE0MmwtMy45NzguNjQyem0tMy43MjEtNC4zMzZsLTEuMjk0IDMuODE3IDUuMDE2LS44MS0zLjU0OS0zLjA4YS41NTQuNTU0IDAgMCAxLS4xNzMuMDczem0tMS42NjUgMy41NTVsMS4yMzQtMy42MzlhLjU1OS41NTkgMCAwIDEtLjE4OC0uMjIzaC0yLjI1NmEuNjk3LjY5NyAwIDAgMS0uMDQ3LjA4em0tLjE1My43MzVjLjExLjAyNC4yMTQtLjAzLjIzMi0uMTIuMDItLjA5LS4wNTMtLjE4My0uMTYzLS4yMDgtLjExLS4wMjMtLjIxNC4wMy0uMjMzLjEyLS4wMTkuMDkyLjA1NC4xODQuMTY0LjIwOHpNOC4zOTcgMjIuOTZsMy44MDUgMi43NDZMMTEgMjIuMDlhLjU1LjU1IDAgMCAxLS40NzMtLjE3bC0yLjEyMy45MjVhLjQ0LjQ0IDAgMCAxLS4wMDYuMTE1em0tLjM1Ni0uNTk4YS42MzQuNjM0IDAgMCAxIC4xNS4wOTNsMi4xODMtLjk1YS41NzYuNTc2IDAgMCAxIC4xLS4zMDJsLTMuMzc2LTMuNDg5em0tLjAyMy42MDljLjA2LS4wNjguMDQtLjE4Ni0uMDQzLS4yNjItLjA4NC0uMDc1LS4yLS4wODEtLjI2LS4wMTItLjA2LjA3LS4wNDIuMTg4LjA0Mi4yNjMuMDg0LjA3NS4yMDEuMDguMjYuMDExem0tMS43OS00LjMzM2wxLjE2MiAyLjY5My0uNzc5LTMuODM4LS4zMDcuNjU0YS41NzQuNTc0IDAgMCAxLS4wNzYuNDkxem0tLjAyOC00LjM0bC0uMTQgMy4zNTIuMjc4LS41OWEuNTU4LjU1OCAwIDAgMSAuMDIzLS41NnpNNiAxMS42NDdjLS4wMzguMTA4LjAwMy4yMi4wODguMjUxLjA4Ni4wMy4xODQtLjAzMi4yMjEtLjE0LjAzNy0uMTA4LS4wMDItLjIyLS4wODgtLjI1MS0uMDg2LS4wMy0uMTg0LjAzMi0uMjIyLjE0em0uODQ0IDUuMTUzYzAtLjExNC0uMDgzLS4yMDYtLjE4My0uMjA2LS4xMDEgMC0uMTg0LjA5Mi0uMTg0LjIwNiAwIC4xMTUuMDgzLjIwNy4xODQuMjA3LjEgMCAuMTgzLS4wOTIuMTgzLS4yMDd6bS0uMjMtNC44ODZhLjYuNiAwIDAgMS0uMTM3LjIyN2wuMjkgMy45OSAxLjc4LTUuNjI5LTEuOTA1IDEuMjkzYS42NTQuNjU0IDAgMCAxLS4wMjguMTE5ek05LjY0IDguMzI5bC0yLjQzNCAyLjU1IDEuMjQ3LS44NDZhLjU5Ny41OTcgMCAwIDEgLjE0Mi0uMzA3LjU3LjU3IDAgMCAxIC4zMDItLjE4N3ptMS4yNTQtMS4yMDdMOS4zMDcgOS43MDRhLjQxNi40MTYgMCAwIDEgLjA0OC4yMzNsMS4xNzUuMzYxYS41NDYuNTQ2IDAgMCAxIC44OTcuMTQ4aDEuOTY3YS41NTcuNTU3IDAgMCAxIC4zOS0uMzFsMS4wNjktMi4yNzRhLjU3My41NzMgMCAwIDEtLjExLS4yNTlsLTMuMjY4LS43MjRhLjU3Mi41NzIgMCAwIDEtLjMwOC4yMjQuNTg0LjU4NCAwIDAgMS0uMjczLjAyem0uMDU4LS42NTNjLS4xMDcuMDMzLS4xNzIuMTMyLS4xNDYuMjIuMDI3LjA4OS4xMzUuMTMzLjI0MS4xLjEwNy0uMDMzLjE3My0uMTMyLjE0Ni0uMjItLjAyNi0uMDg5LS4xMzMtLjEzNC0uMjQxLS4xem02LjI0OC0uNzY0bC00LjkzMi44OTggMi41OC41NzFhLjU0OC41NDggMCAwIDEgLjYyNS0uMTkzem0uNjA1LjA5N2wtMS44MzkgMS4zNiA1LjA0NS4xNC4wMTEtLjAzOC0yLjY3NC0xLjUyNGEuNTQ1LjU0NSAwIDAgMS0uNDI4LjA5NS41OS41OSAwIDAgMS0uMTE1LS4wMzN6bS4yMzgtLjYxOWMtLjExLS4wMi0uMjEzLjAzOC0uMjI4LjEzLS4wMTUuMDkuMDYuMTguMTcxLjIuMTEuMDIuMjEyLS4wMzguMjI4LS4xMy4wMTYtLjA5LS4wNjEtLjE4LS4xNzEtLjJ6bTMuMjMzIDIuNzI1YS42Mi42MiAwIDAgMS0uMTc1LS4xNjJMMTUuODM4IDcuNmEuNDg5LjQ4OSAwIDAgMS0uMDIxLjA5MmwyLjEyNCAyLjQ0OWEuNTU1LjU1NSAwIDAgMSAuNjIuMzA2aDIuMjU3YS41NjIuNTYyIDAgMCAxIC4yNjYtLjI2OHptLjA0IDIuNTU4Yy0uMTIxIDAtLjIyLjEwMi0uMjIuMjI3cy4wOTkuMjI2LjIyLjIyNmMuMTIzIDAgLjIyMy0uMTAxLjIyMy0uMjI2cy0uMS0uMjI3LS4yMjItLjIyN3ptLjA5OS0zLjJjLS4wNTUuMDk2LS4wMTQuMjI2LjA5Mi4yODguMTA1LjA2NC4yMzYuMDM3LjI5LS4wNi4wNTYtLjA5Ni4wMTUtLjIyNS0uMDkxLS4yODgtLjEwNi0uMDYzLS4yMzYtLjAzNi0uMjkxLjA2em0zLjkxNSA1LjMxOGwtMy42MjctNC41ODctLjE4MyAyLjE2OWEuNTY2LjU2NiAwIDAgMSAuMzUuNDh6bS0yLjI5My0zLjk5N2wtLjgxNC0uNTQ2IDIuNjI3IDMuNDItMS4yNzgtMi4yODdhLjU4LjU4IDAgMCAxLS4yOTYtLjEwOWMtLjE3LS4xMjEtLjI2LS4zMS0uMjQtLjQ3OHptLjM4LS4wNTdjLS4wNTIuMDc2LS4wMi4xOS4wNzIuMjU2LjA5MS4wNjUuMjA4LjA1Ny4yNi0uMDIuMDUyLS4wNzUuMDItLjE5LS4wNzEtLjI1NS0uMDkzLS4wNjUtLjIwOS0uMDU3LS4yNi4wMnptLTUuNTcgMi4xNjNjMCAuMTIyLjA5NS4yMjEuMjE2LjIyMWEuMjIuMjIgMCAwIDAgLjIxNy0uMjIxLjIyLjIyIDAgMCAwLS4yMTctLjIyMi4yMi4yMiAwIDAgMC0uMjE3LjIyMnptLjExOSA0Ljc3M2EuMjI0LjIyNCAwIDAgMC0uMjIyLjIyNmMwIC4xMjUuMS4yMjcuMjIyLjIyN2EuMjI0LjIyNCAwIDAgMCAuMjIxLS4yMjcuMjIzLjIyMyAwIDAgMC0uMjIxLS4yMjZ6bS0yLjg5Ny04LjAyNGMwIC4xMjUuMDk5LjIyNi4yMjEuMjI2YS4yMjQuMjI0IDAgMCAwIC4yMjItLjIyNmMwLS4xMjUtLjEtLjIyNy0uMjIyLS4yMjdhLjIyNC4yMjQgMCAwIDAtLjIyMS4yMjd6bS4xNjIuNjM3bC0xLjAxNCAyLjE1NWEuNTY4LjU2OCAwIDAgMSAuMTUzLjc0NmwzLjM4IDQuMTlhLjU2LjU2IDAgMCAxIC4wOTYtLjAzdi0zLjkyNmEuNTY2LjU2NiAwIDAgMS0uMjU3LS44MTRsLTIuMDYtMi4zNzRhLjU1My41NTMgMCAwIDEtLjI5OC4wNTN6bS0xLjU2IDIuNjE0YzAgLjEyNS4xLjIyNi4yMjIuMjI2LjEyMSAwIC4yMjEtLjEwMS4yMjEtLjIyNnMtLjEtLjIyNy0uMjIxLS4yMjdhLjIyNS4yMjUgMCAwIDAtLjIyMi4yMjd6bS0yLjk2IDBjMCAuMTIyLjA5Ni4yMjEuMjE2LjIyMXMuMjE3LS4wOTkuMjE3LS4yMjFjMC0uMTIzLS4wOTctLjIyMi0uMjE3LS4yMjJzLS4yMTYuMS0uMjE2LjIyMnptLjIxNiAxMC42MWEuMjIzLjIyMyAwIDAgMC0uMjIuMjI2YzAgLjEyNS4wOTguMjI2LjIyLjIyNmEuMjI0LjIyNCAwIDAgMCAuMjIyLS4yMjYuMjIzLjIyMyAwIDAgMC0uMjIyLS4yMjZ6TTguNzMxIDkuODQzYy0uMDczLjA4Ni0uMDc5LjIwNS0uMDEuMjY2LjA2Ny4wNi4xODIuMDQyLjI1Ni0uMDQ1LjA3NC0uMDg1LjA3OS0uMjA0LjAxMS0uMjY1LS4wNjgtLjA2Mi0uMTgyLS4wNDItLjI1Ny4wNDR6bS0xLjYyNSA2LjY1OWEuNTU1LjU1NSAwIDAgMSAuMDg1LjI5OGMwIC4xMS0uMDMuMjEyLS4wODIuMjk1bDMuNjAyIDMuNzIydi05LjYwM2EuNTY1LjU2NSAwIDAgMS0uMzM3LS41MDFsLTEuMjIyLS4zNzVhLjU3OS41NzkgMCAwIDEtLjEyNi4wODd6bTExLjI5NCA0LjQ2Yy4yMzkgMCAuNDQyLjE1NS41Mi4zN2gxLjg3OGEuNTYuNTYgMCAwIDEgLjMwMi0uMzI0di05Ljc5NGEuNTU5LjU1OSAwIDAgMS0uMzAyLS4zMjRoLTIuMjE2YS41NjUuNTY1IDAgMCAxLS4zMDIuMzI0djQuMDFhLjU3LjU3IDAgMCAxIC4yNC40NjguNTYxLjU2MSAwIDAgMS0uNTU0LjU2Ny41Ni41NiAwIDAgMS0uNTU0LS41NjdjMC0uMDcuMDEyLS4xMzcuMDM2LS4ybC0zLjQyOC00LjI0OGEuNTU1LjU1NSAwIDAgMS0uNjQ3LS4zNTRoLTEuOTI2YS41NjUuNTY1IDAgMCAxLS4zMDMuMzI0djkuNzk0Yy4xNC4wNi4yNDkuMTc4LjMwMy4zMjRoMi4yMTVhLjU2NS41NjUgMCAwIDEgLjMwMy0uMzI0di00LjA3YS41NjguNTY4IDAgMCAxLS4yNjYtLjQ4Mi41Ni41NiAwIDAgMSAuNTU1LS41NjcuNTYuNTYgMCAwIDEgLjUyLjc2M2wzLjQ4MyA0LjMzYS41OS41OSAwIDAgMSAuMTQzLS4wMnptLjI0IDQuMDQ3Yy0uMTIgMC0uMjIuMDktLjIyLjIwMnMuMS4yMDEuMjIuMjAxYy4xMjMgMCAuMjIzLS4wOS4yMjMtLjJzLS4xLS4yMDMtLjIyMi0uMjAzem0tLjQ2MS0zLjQ4YzAgLjEyNS4wOTkuMjI2LjIyLjIyNmEuMjI0LjIyNCAwIDAgMCAuMjIzLS4yMjYuMjI0LjIyNCAwIDAgMC0uMjIyLS4yMjYuMjI0LjIyNCAwIDAgMC0uMjIxLjIyNnptLTQuMTQ3LTUuMDczYzAgLjEyNS4xLjIyNi4yMjIuMjI2cy4yMjEtLjEwMS4yMjEtLjIyNmMwLS4xMjYtLjA5OS0uMjI2LS4yMjEtLjIyNnMtLjIyMi4xLS4yMjIuMjI2em0uMTUgNC44NDdhLjIyNC4yMjQgMCAwIDAtLjIyMi4yMjZjMCAuMTI1LjEuMjI2LjIyMi4yMjZzLjIyMS0uMTAxLjIyMS0uMjI2YS4yMjMuMjIzIDAgMCAwLS4yMjEtLjIyNnptLjIxNi0uMjk1YS41NjYuNTY2IDAgMCAxIC4zMjYuNjM3bDMuNTkzIDMuMTE3YS41NzUuNTc1IDAgMCAxIC4xMDMtLjA0N2wtLjE4NC0yLjY0NGEuNTY3LjU2NyAwIDAgMS0uMzktLjU0MmMwLS4xLjAyNS0uMTkzLjA3LS4yNzNsLTMuNDQzLTQuMjhhLjQ5NS40OTUgMCAwIDEtLjA3NS4wMjZ6bTcuMTQuNTJhLjIyMy4yMjMgMCAwIDAtLjIyMS0uMjI1LjIyNC4yMjQgMCAwIDAtLjIyMi4yMjZjMCAuMTI1LjEuMjI2LjIyMi4yMjZzLjIyMi0uMTAxLjIyMi0uMjI2em0tMTUuNzEtMy4wMjFjLjA5LS4wMTUuMTQ3LS4xMTkuMTI4LS4yMzEtLjAyLS4xMTMtLjEwNy0uMTkyLS4xOTYtLjE3Ni0uMDkuMDE1LS4xNDYuMTItLjEyNy4yMzIuMDE4LjExMy4xMDYuMTkyLjE5NS4xNzV6TTI1LjggMTIuNzkzYy0uMDcyLjAyMy0uMTEuMTE3LS4wODMuMjA4LjAyNy4wOTEuMTA4LjE0Ni4xOC4xMjMuMDc0LS4wMjMuMTEtLjExNy4wODQtLjIwOC0uMDI2LS4wOTItLjEwOC0uMTQ2LS4xOC0uMTIzeiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=) */
export const NcashCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ncash-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

NcashCircleColorful.displayName = 'NcashCircleColorful';
