// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/moonbeam-colorful.svg';

/**![MoonbeamColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE0LjEgMTEuOCI+CjxwYXRoIGZpbGw9IiM1RkMwQzEiIGQ9Ik05LjksMC40YzEuNiwwLjcsMi43LDIuNCwyLjYsNC4xYy0yLjksMC01LjgsMC04LjYsMGMwLTEuMSwwLjQtMi4zLDEuMi0zLjFDNi4yLDAsOC4zLTAuNCw5LjksMC40eiIvPgo8cGF0aCBmaWxsPSIjRTExNzdDIiBkPSJNOS43LDExLjNjMC4yLDAsMC4zLDAuMSwwLjMsMC4yYzAsMC4xLTAuMSwwLjItMC4zLDAuMkg1LjFjLTAuMiwwLTAuMy0wLjEtMC4zLTAuMmMwLTAuMSwwLjEtMC4yLDAuMy0wLjJIOS43egoJIi8+CjxwYXRoIGZpbGw9IiNFMTE3N0MiIGQ9Ik00LjEsMTEuOGMwLjIsMCwwLjMtMC4xLDAuMy0wLjNzLTAuMS0wLjMtMC4zLTAuM2MtMC4yLDAtMC4zLDAuMS0wLjMsMC4zUzMuOSwxMS44LDQuMSwxMS44eiIvPgo8cGF0aCBmaWxsPSIjRTExNzdDIiBkPSJNNi45LDEwLjZjMC4yLDAsMC4zLTAuMSwwLjMtMC4zUzcuMSwxMCw2LjksMTBzLTAuMywwLjEtMC4zLDAuM1M2LjcsMTAuNiw2LjksMTAuNnoiLz4KPHBhdGggZmlsbD0iI0UxMTc3QyIgZD0iTTEyLjMsMTBjMC4yLDAsMC4zLDAuMSwwLjMsMC4zYzAsMC4yLTAuMSwwLjMtMC4zLDAuM0g3LjhjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM2MwLTAuMiwwLjEtMC4zLDAuMy0wLjNIMTIuM3oKCSIvPgo8cGF0aCBmaWxsPSIjRTExNzdDIiBkPSJNMC45LDkuNGMwLjIsMCwwLjMtMC4xLDAuMy0wLjNjMC0wLjItMC4xLTAuMy0wLjMtMC4zUzAuNiw4LjksMC42LDkuMUMwLjYsOS4zLDAuOCw5LjQsMC45LDkuNHoiLz4KPHBhdGggZmlsbD0iI0UxMTc3QyIgZD0iTTUuNCw4LjhjMC4yLDAsMC4zLDAuMSwwLjMsMC4zYzAsMC4yLTAuMSwwLjMtMC4zLDAuM0gxLjdjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM2MwLTAuMiwwLjEtMC4zLDAuMy0wLjNINS40eiIKCS8+CjxwYXRoIGZpbGw9IiNFMTE3N0MiIGQ9Ik0xMy44LDguOGMwLjIsMCwwLjMsMC4xLDAuMywwLjNjMCwwLjItMC4xLDAuMy0wLjMsMC4zSDYuNGMtMC4yLDAtMC4zLTAuMS0wLjMtMC4zYzAtMC4yLDAuMS0wLjMsMC4zLTAuM0gxMy44Cgl6Ii8+CjxwYXRoIGZpbGw9IiNFMTE3N0MiIGQ9Ik0xMi40LDcuNmMwLjIsMCwwLjMsMC4xLDAuMywwLjNjMCwwLjItMC4xLDAuMy0wLjMsMC4zSDMuM0MzLjIsOC4zLDMsOC4xLDMsNy45YzAtMC4yLDAuMS0wLjMsMC4zLTAuM0gxMi40eiIKCS8+CjxwYXRoIGZpbGw9IiNFMTE3N0MiIGQ9Ik0yLjMsOC4zYzAuMiwwLDAuMy0wLjEsMC4zLTAuM1MyLjUsNy42LDIuMyw3LjZTMiw3LjgsMiw3LjlTMi4xLDguMywyLjMsOC4zeiIvPgo8cGF0aCBmaWxsPSIjRTExNzdDIiBkPSJNMTAuNSw2LjVjMC4yLDAsMC4zLDAuMSwwLjMsMC4zYzAsMC4yLTAuMSwwLjMtMC4zLDAuM0gxLjRDMS4zLDcuMSwxLjEsNywxLjEsNi44YzAtMC4yLDAuMS0wLjMsMC4zLTAuM0gxMC41egoJIi8+CjxwYXRoIGZpbGw9IiNFMTE3N0MiIGQ9Ik0wLjMsNy4xYzAuMiwwLDAuMy0wLjEsMC4zLTAuM2MwLTAuMi0wLjEtMC4zLTAuMy0wLjNDMC4xLDYuNSwwLDYuNiwwLDYuOEMwLDcsMC4xLDcuMSwwLjMsNy4xeiIvPgo8cGF0aCBmaWxsPSIjRTExNzdDIiBkPSJNMi4zLDUuOWMwLjIsMCwwLjMtMC4xLDAuMy0wLjNjMC0wLjItMC4xLTAuMy0wLjMtMC4zUzIsNS41LDIsNS42QzIsNS44LDIuMSw1LjksMi4zLDUuOXoiLz4KPHBhdGggZmlsbD0iI0UxMTc3QyIgZD0iTTEzLjMsNS4zYzAuMiwwLDAuMywwLjEsMC4zLDAuM2MwLDAuMi0wLjEsMC4zLTAuMywwLjNIMy40Yy0wLjIsMC0wLjMtMC4xLTAuMy0wLjNjMC0wLjIsMC4xLTAuMywwLjMtMC4zSDEzLjMKCXoiLz4KPC9zdmc+Cg==) */
export const MoonbeamColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-moonbeam-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

MoonbeamColorful.displayName = 'MoonbeamColorful';
