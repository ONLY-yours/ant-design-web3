// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/edu-circle-colorful.svg';

/**![EduCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1lZHUtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZyBpZD0iYW50LXdlYjMtaWNvbi1lZHUtY2lyY2xlLWNvbG9yZnVsLWljb25fbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ny42ODIgLTEyNy4zMDQpIj4KCTxnIGlkPSJhbnQtd2ViMy1pY29uLWVkdS1jaXJjbGUtY29sb3JmdWwtR3JvdXBfNDAzMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0Ny42ODIgMTI3LjMwNCkiPgoJCTxnIGlkPSJhbnQtd2ViMy1pY29uLWVkdS1jaXJjbGUtY29sb3JmdWwtR3JvdXBfNDAzMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIj4KCQkJPGcgaWQ9ImFudC13ZWIzLWljb24tZWR1LWNpcmNsZS1jb2xvcmZ1bC1Hcm91cF8zOTA3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgoJCQkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tZWR1LWNpcmNsZS1jb2xvcmZ1bC1QYXRoXzMyOTE0IiBkPSJNMjkuNiwwQzEzLjEsMC4yLTAuMiwxMy44LDAsMzAuNFMxMy44LDYwLjIsMzAuNCw2MEM0Ni44LDU5LjgsNjAsNDYuNSw2MCwzMAoJCQkJCUM1OS45LDEzLjMsNDYuMy0wLjEsMjkuNiwweiIgc3R5bGU9ImZpbGw6ICMwMEVEQkU7Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8ZyBpZD0iYW50LXdlYjMtaWNvbi1lZHUtY2lyY2xlLWNvbG9yZnVsLUdyb3VwXzQ1ODIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS45ODYpIj4KCQk8ZyBpZD0iYW50LXdlYjMtaWNvbi1lZHUtY2lyY2xlLWNvbG9yZnVsLUdyb3VwXzQ1ODIyIj4KCQkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tZWR1LWNpcmNsZS1jb2xvcmZ1bC1QYXRoXzk1MjczIiBkPSJNMzI5LjQsMTQ2LjJjLTAuMS0xLjUsMC4zLTMsMS4xLTQuM2gtMjQuNWMtMC45LDAtMS43LDAuNy0xLjcsMS43YzAsMCwwLDAsMCwwdjUuMgoJCQkJYzAsMC45LDAuOCwxLjcsMS43LDEuN2wwLDBoMjQuNUMzMjkuNiwxNDkuMiwzMjkuMywxNDcuNywzMjkuNCwxNDYuMiIgc3R5bGU9ImZpbGw6ICMxNDFCRUI7Ii8+CgkJCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLWVkdS1jaXJjbGUtY29sb3JmdWwtUGF0aF85NTI3NCIgZD0iTTMwMC40LDE1Ny40YzAuMSwxLjUtMC4zLDMtMS4xLDQuM2gyNC41YzAuOSwwLDEuNy0wLjcsMS43LTEuN3Ywdi01LjIKCQkJCWMwLTAuOS0wLjgtMS43LTEuNy0xLjdjMCwwLDAsMCwwLDBoLTI0LjVDMzAwLjEsMTU0LjQsMzAwLjUsMTU1LjksMzAwLjQsMTU3LjQiIHN0eWxlPSJmaWxsOiAjMTQxQkVCOyIvPgoJCQk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1lZHUtY2lyY2xlLWNvbG9yZnVsLVBhdGhfOTUyNzUiIGQ9Ik0zMjkuNCwxNjguNmMtMC4xLTEuNSwwLjMtMywxLjEtNC4zaC0yNC41Yy0wLjksMC0xLjcsMC43LTEuNywxLjdsMCwwdjUuMgoJCQkJYzAsMC45LDAuOCwxLjcsMS43LDEuN2wwLDBoMjQuNUMzMjkuNiwxNzEuNiwzMjkuMywxNzAuMSwzMjkuNCwxNjguNiIgc3R5bGU9ImZpbGw6ICMxNDFCRUI7Ii8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=) */
export const EduCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-edu-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EduCircleColorful.displayName = 'EduCircleColorful';
