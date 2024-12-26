// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/orbs-colorful.svg';

/**![OrbsColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLW9yYnMtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTM1LjY4IDEzNC44NiI+PHRpdGxlPm9yYnMtb3Jicy1sb2dvPC90aXRsZT48cGF0aCBkPSJNMzksODYuMjZhMS41MywxLjUzLDAsMCwxLTIuNzUuOGwtMjItMjAuNDlhMS42NSwxLjY1LDAsMCwxLC41NS0zTDQ1LjYsNTEuMjljMS40My0uNTcsMi4yOS4xOCwxLjkxLDEuNjhaIiBzdHlsZT0iZmlsbDojNDA0YTcyIi8+PHBhdGggZD0iTTIwLjgsMTA1LjczYy0xLjE3LDEtMi4zNS41OS0yLjYyLS45M2wtNi0zMy4zYy0wLjI4LTEuNTIuNDItMS45LDEuNTUtLjg1bDIwLjksMTkuNWEyLjQ3LDIuNDcsMCwwLDEtLjA3LDMuNzVaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTQ2LDQ0LjY2YTEuODgsMS44OCwwLDAsMS0uNzgsMy4xN0wxNC42MSw2MC4wOGMtMS40NC41Ny0yLjE3LS4xNC0xLjYzLTEuNTlMMjUuNTYsMjQuNjhhMS41MiwxLjUyLDAsMCwxLDIuODEtLjUxWiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik0xMy45MiwxMDAuMDdjMC4yOCwxLjUyLS4xOSwxLjctMSwwLjQxTDEsODIuMTNhNC4zNCw0LjM0LDAsMCwxLC4xNi00LjYxbDUuMy03LjExYzAuOTMtMS4yNCwxLjkxLTEsMi4xOC41MVoiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNMTAuMTgsNTYuNDFjLTAuNTQsMS40NS0xLjM4LDEuNDQtMS44NywwTDQuMjYsNDQuMmE0LjcsNC43LDAsMCwxLDEuMTktNC41NUwxOS45MiwyNi41NGMxLjE0LTEsMS42NC0uNywxLjEuNzVaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTYuMzYsNjEuMTFBNiw2LDAsMCwxLDUuNTcsNjZMMS40Miw3MS41OWMtMC45MywxLjI0LTEuNTUsMS0xLjQtLjU0TDIsNTEuNzJjMC4xNS0xLjU0LjY5LTEuNiwxLjE3LS4xM1oiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNMjIuNjksMTcuNThjMC41MiwwLjU5LDAsMS45My0xLjE1LDNMMTUsMjYuNDVjLTEuMTUsMS0xLjMzLjg3LS40MS0wLjM3TDIwLDE4Ljc1QzIxLDE3LjUxLDIyLjE4LDE3LDIyLjY5LDE3LjU4WiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik02My43NiwxMjAuNDZhMS42NSwxLjY1LDAsMCwxLTMsLjExbC0xNy0yNC43NmExLjUzLDEuNTMsMCwwLDEsMS4yLTIuNmwzNC4xOS0zLjUzYzEuNTMtLjE2LDIuMTUuOCwxLjM3LDIuMTRaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTU2LjYzLDEyMC40OGMwLjg4LDEuMjguNCwxLjkxLTEuMDcsMS40MmwtMzItMTAuOWMtMS40Ni0uNS0xLjctMS43My0wLjUzLTIuNzRMMzYuNzIsOTYuNDRhMi40NywyLjQ3LDAsMCwxLDMuNzIuNDhaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTc5Ljg0LDgzLjkzYzEsMS4xNy41NywyLjI1LTEsMi40MWwtMzQuNywzLjU4YTEuODMsMS44MywwLDAsMS0yLjA5LTIuNDNsOC42OC0zMy43OGMwLjM5LTEuNDksMS41My0xLjc2LDIuNTMtLjU5WiIgc3R5bGU9ImZpbGw6IzZlY2NlMCIvPjxwYXRoIGQ9Ik0xMDQuNzcsMTEyLjg3YTEuNTIsMS41MiwwLDAsMS0uOTIsMi43MUw2OC41NSwxMjNjLTEuNTEuMzItMi4xMS0uNTEtMS4zMy0xLjg1TDgzLjg3LDkyLjY4YTEuODksMS44OSwwLDAsMSwzLjI1LS4zWiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik00OCwxMzEuODdhNC4zNSw0LjM1LDAsMCwxLTQuNTgtLjUzTDI3LDExNi44N2MtMS4xNS0xLS45LTEuNDUuNTYtMWwyOCw5LjUzYzEuNDcsMC41LDEuNTUsMS41MS4xOSwyLjI0WiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik04Ni4wNiwxMzMuMjVhNC42OSw0LjY5LDAsMCwxLTQuNjcuNUw3MCwxMjcuOTRjLTEuMzgtLjcxLTEuMjctMS41NC4yNC0xLjg2bDMwLjQxLTYuNGMxLjUxLS4zMiwxLjc3LjIyLDAuNTgsMS4yWiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik01NC4yMSwxMzRjLTEuNTUtLjA3LTEuNjktMC43My0wLjMzLTEuNDZMNjAsMTI5LjIyYTYsNiwwLDAsMSw1LS4wNmw4Ljk0LDQuNTVjMS4zOCwwLjcsMS4yNCwxLjIxLS4zLDEuMTRaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTExMC40NSwxMTkuNDdjMC41MSwwLjU5LS4xOCwxLjY4LTEuNTQsMi40MWwtOC4wNiw0LjNjLTEuMzcuNzMtMS41MSwwLjUyLS4zMS0wLjQ2bDYuOC01LjU2QzEwOC41NCwxMTkuMTgsMTA5Ljk0LDExOC44NywxMTAuNDUsMTE5LjQ3WiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik05MC4wOCw4My41N2MtMS40NC41Ny0yLjMtLjE4LTEuOTEtMS42OGw4LjU1LTMzLjI4YTEuNTQsMS41NCwwLDAsMSwyLjc2LS44MWwyMiwyMC41YTEuNjQsMS42NCwwLDAsMS0uNTUsM1oiIHN0eWxlPSJmaWxsOiM0MDRhNzIiLz48cGF0aCBkPSJNMTIzLjUyLDYzLjM2YzAuMjcsMS41Mi0uNDIsMS45MS0xLjU1Ljg1bC0yMC45MS0xOS41YTIuNDcsMi40NywwLDAsMSwuMDgtMy43NWwxMy43My0xMS44M2MxLjE3LTEsMi4zNi0uNTksMi42My45M1oiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNMTEwLjEyLDExMC4xOWExLjUzLDEuNTMsMCwwLDEtMi44Mi41TDg5LjY2LDkwLjJhMS44OCwxLjg4LDAsMCwxLC43Ny0zLjJsMzAuNjQtMTIuMjVjMS40My0uNTcsMi4xNy4xNCwxLjYzLDEuNTlaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTEzNC42Niw1Mi43M2E0LjM2LDQuMzYsMCwwLDEtLjE1LDQuNjFsLTUuMzEsNy4xMWMtMC45MiwxLjI0LTEuOSwxLTIuMTgtLjUxbC01LjI3LTI5LjE1Yy0wLjI3LTEuNTIuMTktMS43LDEtLjQxWiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik0xMzEuNDIsOTAuNjZhNC43LDQuNywwLDAsMS0xLjE5LDQuNTVsLTE0LjQ3LDEzLjExYy0xLjE1LDEtMS42NC43LTEuMS0uNzRMMTI1LjUsNzguNDVjMC41My0xLjQ1LDEuMzctMS40NCwxLjg2LDBaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTEzMy42Niw4My4xNGMtMC4xNiwxLjU0LS42OSwxLjU5LTEuMTguMTNsLTMuMTctOS41MmE2LDYsMCwwLDEsLjc5LTQuOTFsNC4xNi01LjU3YzAuOTItMS4yNCwxLjU1LTEsMS4zOS41NFoiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNMTE1LjYsMTE2LjExYy0wLjkzLDEuMjUtMi4xLDEuNzctMi42MiwxLjE3czAtMS45MywxLjE1LTNsNi41MS01LjljMS4xNC0xLDEuMzMtLjg3LjQxLDAuMzdaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTkxLjk0LDM5LjA1YTEuNTMsMS41MywwLDAsMS0xLjIsMi42TDU2LjU1LDQ1LjE4Yy0xLjU0LjE2LTIuMTYtLjgtMS4zOC0yLjEzTDcxLjkyLDE0LjRhMS42NSwxLjY1LDAsMCwxLDMtLjExWiIgc3R5bGU9ImZpbGw6IzQwNGE3MiIvPjxwYXRoIGQ9Ik05OSwzOC40MmEyLjQ3LDIuNDcsMCwwLDEtMy43Mi0uNDhMNzksMTQuMzhjLTAuODctMS4yOC0uMzktMS45MSwxLjA3LTEuNDFsMzIsMTAuODhjMS40NiwwLjUsMS43LDEuNzMuNTMsMi43NFoiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNODQuOSw4MS4xNWMtMC4zOCwxLjUtMS41MiwxLjc2LTIuNTMuNTlMNTUuODQsNTAuOTRjLTEtMS4xNy0uNTgtMi4yNiwxLTIuNDJsMzQuNjktMy41OGExLjgzLDEuODMsMCwwLDEsMi4xLDIuNDNaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTUxLjgsNDIuMThhMS44OCwxLjg4LDAsMCwxLTMuMjUuM0wzMC45MSwyMmExLjUyLDEuNTIsMCwwLDEsLjkxLTIuNzFsMzUuMy03LjQzYzEuNTItLjMyLDIuMTIuNTEsMS4zNCwxLjg1WiIgc3R5bGU9ImZpbGw6IzU1NjE5NSIvPjxwYXRoIGQ9Ik04MC4wNiw5LjQyYy0xLjQ2LS41LTEuNTQtMS41LTAuMTgtMi4yNEw4Ny43LDNhNC4zNSw0LjM1LDAsMCwxLDQuNTguNTNMMTA4LjY2LDE4YzEuMTYsMSwuOTEsMS40NS0wLjU1LDFaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTM1LjA3LDE1LjE4QzMzLjU2LDE1LjUsMzMuMywxNSwzNC41LDE0TDQ5LjYxLDEuNjFhNC43MSw0LjcxLDAsMCwxLDQuNjgtLjVMNjUuNzMsNi45M2MxLjM4LDAuNywxLjI3LDEuNTMtLjI0LDEuODVaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTc1LjY4LDUuNjRhNiw2LDAsMCwxLTUsLjA2bC05LTQuNTVjLTEuMy0uNy0xLjE3LTEuMjEuMzgtMS4xNUw4MS40NywwLjlDODMsMSw4My4xNiwxLjYzLDgxLjgsMi4zNloiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNMjguMzQsMTQuN2MtMS4yLDEtMi42LDEuMjktMy4xMS43czAuMTgtMS42OSwxLjU0LTIuNDFsOC4wNi00LjMxYzEuMzYtLjczLDEuNS0wLjUyLjMxLDAuNDZaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTE4LDExMi41OGMwLjU5LS41MiwxLjkzLDAsMywxLjE0bDUuOSw2LjUxYzEsMS4xNS44NywxLjMzLS4zNywwLjQxbC03LjM0LTUuNDVDMTcuOTEsMTE0LjI3LDE3LjM5LDExMy4wOSwxOCwxMTIuNThaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PHBhdGggZD0iTTExOS44NywyNC44MmMwLjYtLjUyLDEuNjkuMTgsMi40MSwxLjU0bDQuMzEsOC4wNmMwLjcyLDEuMzcuNTIsMS41LS40NiwwLjMxbC01LjU2LTYuOEMxMTkuNTksMjYuNzMsMTE5LjI4LDI1LjMzLDExOS44NywyNC44MloiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNMTE2LjUyLDE5LjY3YzEuMjQsMC45MiwxLjc3LDIuMSwxLjE3LDIuNjFzLTEuOTMsMC0zLTEuMTRsLTUuOS02LjUxYy0xLTEuMTUtLjg3LTEuMzMuMzctMC40MVoiIHN0eWxlPSJmaWxsOiM1NTYxOTUiLz48cGF0aCBkPSJNMTUuMTEsMTA2LjkzYzEsMS4yLDEuMjksMi42LjY5LDMuMTFzLTEuNjgtLjE4LTIuNDEtMS41NGwtNC4zLTguMDZjLTAuNzMtMS4zNy0uNTItMS41LjQ2LTAuMzFaIiBzdHlsZT0iZmlsbDojNTU2MTk1Ii8+PC9zdmc+) */
export const OrbsColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-orbs-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

OrbsColorful.displayName = 'OrbsColorful';
