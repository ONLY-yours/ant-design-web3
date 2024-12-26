// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xwc-circle-colorful.svg';

/**![XwcCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi14d2MtY2lyY2xlLWNvbG9yZnVsLeWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjguOCwxNy43djIuNkgzNmMtMC4xLTAuNy0wLjEtMS45LTAuNC0yLjZIMjguOHoiIHN0eWxlPSJmaWxsOiAjNDA1MDZCOyIvPgoJCTxwYXRoIGQ9Ik0zNiwyMmgtOC41djIuNmg4LjFDMzUuOSwyMy44LDM1LjksMjIuNywzNiwyMnoiIHN0eWxlPSJmaWxsOiAjNDA1MDZCOyIvPgoJCTxwYXRoIGQ9Ik01LjgsMjQuNWg4LjF2LTIuNkg1LjRDNS41LDIyLjcsNS41LDIzLjgsNS44LDI0LjV6IiBzdHlsZT0iZmlsbDogIzQwNTA2QjsiLz4KCQk8cGF0aCBkPSJNNS44LDE3LjdjLTAuMSwwLjctMC4zLDEuOC0wLjQsMi42aDcuMnYtMi42SDUuOHoiIHN0eWxlPSJmaWxsOiAjNDA1MDZCOyIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZD0iTTIwLjYsMjAuN2MtMC40LDEuNS0wLjksMy0xLjMsNC41cy0wLjksMy0xLjQsNC41aC0zLjVjLTAuNC0wLjktMC44LTEuOC0xLjItM2MtMC40LTEuMS0wLjktMi40LTEuMy0zLjgKCQkJYy0wLjQtMS4zLTAuOS0yLjgtMS40LTQuNHMtMC45LTMtMS4zLTQuN2g0LjdjMC4xLDAuNywwLjQsMS41LDAuNSwyLjNjMC4yLDAuOSwwLjQsMS43LDAuNiwyLjZzMC40LDEuOCwwLjYsMi43CgkJCWMwLjIsMC45LDAuNSwxLjgsMC43LDIuNmMwLjMtMC45LDAuNS0xLjgsMC44LTIuN2MwLjMtMC45LDAuNS0xLjgsMC43LTIuN2MwLjItMC45LDAuNC0xLjgsMC42LTIuNmMwLjItMC45LDAuNC0xLjYsMC42LTIuM2gzLjMKCQkJYzAuMSwwLjcsMC40LDEuNSwwLjYsMi4zYzAuMiwwLjksMC40LDEuNywwLjYsMi42czAuNCwxLjgsMC43LDIuN2MwLjIsMC45LDAuNSwxLjgsMC44LDIuN2MwLjItMC45LDAuNS0xLjcsMC43LTIuNgoJCQlzMC41LTEuOCwwLjctMi43YzAuMi0wLjksMC40LTEuOCwwLjYtMi42YzAuMi0wLjksMC40LTEuNiwwLjUtMi4zaDQuN2MtMC40LDEuNi0wLjksMy4xLTEuMyw0LjdjLTAuNSwxLjYtMC45LDMtMS40LDQuNAoJCQljLTAuNCwxLjMtMC45LDIuNi0xLjMsMy44Yy0wLjQsMS4xLTAuOCwyLjItMS4yLDNoLTMuNWMtMC41LTEuNS0xLTMtMS41LTQuNUMyMS41LDIzLjcsMjEuMSwyMi4zLDIwLjYsMjAuN3oiIHN0eWxlPSJmaWxsOiAjNDA1MDZCOyIvPgoJPC9nPgo8L2c+CjxnPgoJPHBhdGggZD0iTTIxLDQyQzkuNCw0MiwwLDMyLjYsMCwyMVM5LjQsMCwyMSwwczIxLDkuNCwyMSwyMVMzMi42LDQyLDIxLDQyeiBNMjEsM0MxMS4xLDMsMywxMS4xLDMsMjFzOC4xLDE4LDE4LDE4CgkJczE4LTguMSwxOC0xOFMzMC45LDMsMjEsM3oiIHN0eWxlPSJmaWxsOiAjNDA1MDZCOyIvPgo8L2c+Cjwvc3ZnPgo=) */
export const XwcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xwc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XwcCircleColorful.displayName = 'XwcCircleColorful';
