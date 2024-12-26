// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bake-colorful.svg';

/**![BakeColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1iYWtlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjguNSAyOC44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOC41IDI4Ljg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik0yMS42LDEzLjljMC4yLTAuMSwwLjUsMC4xLDAuNSwwLjNsMC40LDEuNWMwLjEsMC4yLTAuMSwwLjUtMC4zLDAuNWMtMC4yLDAuMS0wLjUtMC4xLTAuNS0wLjNsLTAuNC0xLjUKCUMyMS4yLDE0LjIsMjEuMywxMy45LDIxLjYsMTMuOXogTTEwLjEsMi43QzEwLDIuNSwxMCwyLjIsMTAuMiwyLjFsMS4zLTAuOWMwLjItMC4xLDAuNS0wLjEsMC42LDAuMUMxMi4yLDEuNiwxMi4yLDEuOCwxMiwyCglsLTEuMywwLjlDMTAuNSwyLjksMTAuMiwyLjksMTAuMSwyLjd6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPHBhdGggZD0iTTE2LjgsOGMtMS41LTAuMy0zLjEtMC4xLTQuNSwwLjhjMi0wLjcsNC4zLTAuMiw1LjksMS40YzIuMiwyLjMsMi4yLDYsMCw4LjJjLTAuMywwLjMtMC42LDAuNS0wLjksMC43CgljMC44LTAuMywxLjYtMC43LDIuMi0xLjRjMS42LTEuNiwyLTMuOSwxLjQtNS45QzE5LjIsMTEuMiwxNy43LDkuOCwxNi44LDh6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICNGRkFFNTQ7Ii8+CjxyYWRpYWxHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1iYWtlLWNvbG9yZnVsLVNWR0lEXzFfIiBjeD0iLTE2MC4wMjE3IiBjeT0iODI4LjgxMjIiIHI9IjAuOTk5OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg4LjgwNTcwMWUtMTYgMTQuMzgwOCAxNC4yMzU5IC04LjcxNjk3NWUtMTYgLTExNzg0LjY1MTQgMjMxNS42MTk5KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJPHN0b3Agb2Zmc2V0PSIwLjMzMzUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGN0I0NTAiLz4KCTxzdG9wIG9mZnNldD0iMC42NDc3IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZDOTc3Ii8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjk5MDAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHBhdGggZD0iTTI2LjMsMjFMMjYuMywyMWMtMy42LDYuNy0xMiw5LjItMTguNiw1LjVDMSwyMi45LTEuNCwxNC40LDIuMiw3LjdjMi40LTQuNCw2LjgtNywxMS41LTcuMgoJYzAuNiwwLDEuMSwwLjMsMS40LDAuOWMwLjMsMC42LDAuNSwxLjQsMC40LDIuMmMwLDAuMywwLDAuNiwwLDAuOWMwLDEuNCwwLjQsMi44LDEsNGMtMi45LTEuMS02LjIsMC4xLTcuNywyLjkKCWMtMS43LDMuMS0wLjUsNi45LDIuNSw4LjZjMywxLjcsNi45LDAuNSw4LjUtMi41bDAsMGMwLjktMS43LDEtMy43LDAuMy01LjRjMS4yLDAuNiwyLjUsMC45LDMuOSwwLjljMC44LDAsMS41LTAuMSwyLjMtMC4zCgljMC40LTAuMSwwLjktMC4xLDEuMiwwLjFjMC4zLDAuMiwwLjUsMC40LDAuNSwwLjdDMjguMSwxNiwyNy41LDE4LjYsMjYuMywyMXoiIHN0eWxlPSJmaWxsOiB1cmwoI2FudC13ZWIzLWljb24tYmFrZS1jb2xvcmZ1bC1TVkdJRF8xXyk7IHN0cm9rZTogI0FDNTYyQTsgc3Ryb2tlLXdpZHRoOiAxLjA3MTY7Ii8+CjxwYXRoIGQ9Ik0yMi43LDE4LjNsMC41LTAuMmMwLDAsMCwwLDAsMGMwLjQsMS0wLjEsMS45LTAuNCwyLjZjMCwwLDAsMCwwLDAuMWMtMC4yLDAuNC0wLjQsMC43LTAuNCwxCgljLTAuMSwwLjUtMC4xLDEsMCwxLjNjMC4xLDAuMywwLjQsMC42LDAuOCwwLjdjMC4zLDAuMSwwLjgsMCwxLjQtMC40YzIuNC0yLjgsMy41LTYuNCwzLjMtOS44YzAtMC4zLTAuMi0wLjYtMC41LTAuOAoJYy0wLjMtMC4yLTAuOC0wLjItMS4yLTAuMWMtMC43LDAuMi0xLjUsMC4zLTIuMiwwLjNjLTEuNCwwLTIuNy0wLjMtMy45LTFjMC43LDEuNywwLjYsMy42LTAuMiw1LjNjLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC44CgljMC40LTAuMSwwLjgtMC4zLDEuNC0wLjdDMjEuNSwxNi45LDIyLjQsMTcuNCwyMi43LDE4LjN6IE0yMi43LDE4LjNjMC4zLDAuOC0wLjEsMS41LTAuNCwyLjJjLTAuMiwwLjQtMC40LDAuOC0wLjUsMS4yTDIyLjcsMTguM3oKCSBNMTMuMSw4LjFMMTMuMSw4LjFMMTMuMSw4LjFjLTEuNCwwLjQtMi41LDAuMi0zLjMtMC4yQzksNy40LDguMyw2LjcsOCw1LjlDNy42LDUsNy41LDQuMSw3LjcsMy4zYzAuMi0wLjgsMC42LTEuNCwxLjItMS43CgljMS43LTAuNywzLjUtMS4xLDUuMi0xLjFjMC41LDAsMC45LDAuMywxLjIsMC44YzAuMywwLjUsMC40LDEuMiwwLjMsMS44Yy0wLjEsMC40LTAuMSwwLjktMC4xLDEuNGMwLDEuNCwwLjQsMi44LDEsNAoJQzE1LjQsOCwxNC4yLDcuOSwxMy4xLDguMXoiIHN0eWxlPSJmaWxsOiAjQUM1NjJBOyBzdHJva2U6ICNBQzU2MkE7IHN0cm9rZS13aWR0aDogMS4wNzE2OyIvPgo8Y2lyY2xlIGN4PSIzLjgiIGN5PSIxMS4yIiByPSIwLjciIHN0eWxlPSJmaWxsOiAjQUM1NjJBOyIvPgo8Y2lyY2xlIGN4PSIxNC4yIiBjeT0iMjMuNyIgcj0iMC43IiBzdHlsZT0iZmlsbDogI0FDNTYyQTsiLz4KPGNpcmNsZSBjeD0iOS44IiBjeT0iMjQuMyIgcj0iMS4yIiBzdHlsZT0iZmlsbDogI0FDNTYyQTsiLz4KPC9zdmc+Cg==) */
export const BakeColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bake-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BakeColorful.displayName = 'BakeColorful';
