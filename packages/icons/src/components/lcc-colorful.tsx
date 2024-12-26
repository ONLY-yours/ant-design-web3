// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/lcc-colorful.svg';

/**![LccColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWxjYy1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MS4xMyA3MC41MiI+PHRpdGxlPmxpdGVjb2luLWNhc2gtbGNjLWxvZ288L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iNi42NyA2Ni43MiAwIDQ3LjUgMTIuNjYgMzIuODUgNi41NCAxNS40MiAxOS44NyAwIDM5Ljg4IDMuODIgNDYuMDYgMjEuNTggNjQuNDkgMjUuMTQgNzEuMTMgNDQuMzkgNTcuODQgNTkuNzYgMzkuMTEgNTYuMTMgMjYuNzQgNzAuNTIgNi42NyA2Ni43MiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwb2x5Z29uIHBvaW50cz0iNDQuNDUgMjMuNDMgNjIuODggMjYuOTkgNjguNzIgNDMuOTMgNTcuMDQgNTcuNDUgMzguMyA1My44MSAyNS45MyA2OC4yMSA4LjI3IDY0Ljg2IDIuNCA0Ny45NiAxNS4wNyAzMy4zIDguOTUgMTUuODggMjAuNjggMi4zMSAzOC4yOCA1LjY3IDQ0LjQ1IDIzLjQzIiBzdHlsZT0iZmlsbDpub25lIi8+PHBhdGggZD0iTTM2LDUwLjA3TDMzLjU4LDUxLjRhMTQuODEsMTQuODEsMCwwLDEsLjg1LDIuMjdjMC4yNCwwLjY4LjIyLDAuNDEtLjYyLDEuMzYtMC4xNS4xNy0uMTcsMC4yMi0wLjM2LDAuNDJsLTIuNTIsMi44N2MtMC4xNy4xNy0uMTcsMC4zLTAuMzMsMC40NWwtMC4zNC4zOWEyLjQ2LDIuNDYsMCwwLDAtLjM3LjQxbC0wLjc1LjgyYTIuMDYsMi4wNiwwLDAsMS0uNDIuNTFsLTIuNDMsMi43OWMtMC4xNy4xOC0xLjM2LDEuNjItMS40OCwxLjY0bC0xNC41LTIuNzlhMC41MiwwLjUyLDAsMCwxLC4yNy0wLjMxYzAuMDktLjEuMDgtMC4yLDAuMjMtMC4zN0wxMSw2MS42OGEwLjUsMC41LDAsMCwwLC4wOC0wLjEyLDMuNDcsMy40NywwLDAsMSwuMzItMC4zNGMwLjExLS4xMi4xNC0wLjIxLDAuMjYtMC4zM2EwLjQ5LDAuNDksMCwwLDAsLjE3LTAuMTVsMy42MS00LjIxYTAuNzcsMC43NywwLDAsMCwuMjgtMC4zMSwxLjI0LDEuMjQsMCwwLDEsLjMyLTAuMzNjMC4yLS4yMi4wNy0wLjE5LDAuMjQtMC4zNmwxLjE3LTEuMzJhMS41MiwxLjUyLDAsMCwxLC4zMS0wLjM1bDEuNzQtMmMwLjcxLTEsLjU5LDAtMC41NC0zLjQ2LTAuNC0xLjIzLS44OS0yLjQ4LTEuMjctMy43MS0wLjc3LTIuNDctMS44NC01LTIuNTctNy40M2w0LjU3LDAuODhhMTEuNzUsMTEuNzUsMCwwLDAsLjg1LTEuMDcsMS40MSwxLjQxLDAsMCwwLC41Ni0xLjMybC03LTEuMzhjLTAuNDcuNy00LDQuNTUtNC44Miw1LjYxbC0wLjczLjg0aDBMMy4wNSw0Ny4xOGE0LjEzLDQuMTMsMCwwLDEtLjM0LjM5Yy0wLjM1LjM5LS4yMSwwLjU2LDAuMTgsMS41NmwxLjU2LDQuNDljMC4yNCwwLjcyLjU0LDEuNDksMC43OCwyLjIzLDAuNSwxLjQ5LDEsMi45MiwxLjUzLDQuNDVsMS41NSw0LjQ4LDQuNCwwLjg1YzEuNDgsMC4zLDMsLjU2LDQuNC44NmwyLjIsMC40MmMxLjMxLDAuMjQsNiwxLjIyLDYuNjYsMS4yMmExLjE0LDEuMTQsMCwwLDEsLjMxLTAuNDFsNi4yLTcuMTljMC42LS42LDEuOS0yLjI0LDIuNTYtMywwLjE2LS4xNy4yMi0wLjI2LDAuMzYtMC40M2wyLjE4LTIuNTRhNC4yNiw0LjI2LDAsMCwwLS4xOC0wLjU0bC0xLjIzLTMuMzhhNC4wOCw0LjA4LDAsMCwxLS4yLTAuNjIiIHN0eWxlPSJmaWxsOiMzYWI1NGEiLz48cGF0aCBkPSJNMjMuNjIsMTAuNDRjLTAuMTguMjEtNiwzLjQ2LTYuODEsNC0wLjQyLjI2LTEsLjM3LTAuOTEsMC44M2wxLjc2LDcuMThjMC40NCwxLjg3LDEsMy43OSwxLjQ0LDUuNjVBMjIuNSwyMi41LDAsMCwxLDE5Ljc5LDMxYTE4Ljc1LDE4Ljc1LDAsMCwxLC43NywyLjg1TDIwLjg2LDM0LDIxLjI1LDM0bDEwLjQ2LDJhNC4xLDQuMSwwLDAsMCwuNzguMTMsOS41Miw5LjUyLDAsMCwxLC44OS0xLjA3YzAuMzEtLjQuNjItMC42NywwLjktMS4wOS0wLjE4LS42OS0wLjM3LTEuMzMtMC41Ny0yYTEsMSwwLDAsMSwuMDYtMWwxLjc0LTJjMC41My0uNjIsMS0xLDAuODMtMS42cy0xLjU0LTYtMS44My02LjY1YTcuNzMsNy43MywwLDAsMC0xLjM3LDEuNDJjLTAuMjEuMjctLjQ0LDAuNDgtMC42NCwwLjc0YTUsNSwwLDAsMS0uNjcuNzFsLTItNy43NmMtMC4yLS44MS0xLjctNy4wOS0yLTcuN1oiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJNNDguNSwzMi44NGwxLjM4LS43NEEyNywyNywwLDAsMSw1NCwzMGE4Miw4MiwwLDAsMSwyLjQ0LDguNzMsMzguMiwzOC4yLDAsMCwxLTMuNjQsMi4wOWMtMC42MS4zMi0xLjE5LDAuNjctMS44MiwxbC0xLjc5LDFhMS44NywxLjg3LDAsMCwxLS40My41OEw0OCw0NC4xN2EyLDIsMCwwLDEtLjIxLjMyTDQ0LjQsNDguMzRhMS4xMiwxLjEyLDAsMCwwLS4yNi4yNywxMi4yMSwxMi4yMSwwLDAsMS0xLDEuMTVsLTAuNzUuODJjLTAuMjUuNDMtLjY5LDAuNzMtMSwxLjE3TDU2LDU0LjU0bDAuNTYtLjY4YzAuMTctLjIzLjE3LTAuMTEsMC4zMi0wLjMyYTExLjc2LDExLjc2LDAsMCwxLC45LTEuMDhsMS44My0yLjExQTQuNiw0LjYsMCwwLDAsNTkuODksNTBjMC4zNi0uNDUuNDMtMC40MywwLjg5LTEuMDcsMC4xNS0uMjEuMTYtMC4xLDAuMzMtMC4zM2wwLjYtLjcxYzAuMzMtLjMyLjgyLTEsMC45MS0xLjA2bDAuOTItMS4wNWMwLjE0LS4xNS4xNi0wLjIyLDAuMjktMC4zNmwxLjU0LTEuNzVhMS45NCwxLjk0LDAsMCwxLC4zLTAuMzNjLTAuMy0xLjExLTEuOTMtNS42NC0yLjQyLTdDNjIuODUsMzUuMiw2Mi40NCwzNCw2MiwzMi44M2wtMS0zLjE0QTEuNjksMS42OSwwLDAsMCw2MSwyOS40NWwtMC4xNS0uMjJMNDYuMzQsMjYuNDRaIiBzdHlsZT0iZmlsbDojMDI4MzNkIi8+PHBhdGggZD0iTTIwLjU2LDMzLjgyQTE4Ljc1LDE4Ljc1LDAsMCwwLDE5Ljc5LDMxYTE1LjQsMTUuNCwwLDAsMS0yLjU4LS40NmwtMC4zMi0uMTFMMTgsMjkuMmExLjQ1LDEuNDUsMCwwLDAsLjIzLTAuMzYsMy4wOCwzLjA4LDAsMCwxLC4yNy0wLjI0QTEuNTYsMS41NiwwLDAsMCwxOSwyOGEwLjEzLDAuMTMsMCwwLDEsLjE1LjA5Yy0wLjQzLTEuODYtMS0zLjc4LTEuNDQtNS42NWwtMS43OS03LjE4YTEuMjQsMS4yNCwwLDAsMSwuOTEtMC44M2MwLjgtLjQ5LDYuNjMtMy43NCw2LjgxLTRhMywzLDAsMCwxLS41My0xLjI5Yy0wLjQzLTEuMzEtMS0yLjY1LTEuMzgtNEwzNi4yNSw3LjkxbDEuODksNS4zOWMwLjU2LDEuNzcsMS4yNCwzLjYsMS44Niw1LjM2LDAuMzMsMC45MS42MiwxLjgyLDAuOTQsMi43M3MwLjEzLDAuNTktLjMyLDEuMTZhMS42MSwxLjYxLDAsMCwxLS4yMi4yMywxLjM1LDEuMzUsMCwwLDAtLjIuMjdsLTAuNC40NWMtMC4xNS4xOS0uMjgsMC4yOS0wLjQzLDAuNDlzLTAuMjcuMjktLjQzLDAuNDlhMS42NiwxLjY2LDAsMCwxLS4yMi4yMywyLjgzLDIuODMsMCwwLDEtLjQzLjQ5LDAuNjksMC42OSwwLDAsMC0uMTYuMjNjLTAuMjEuMzItLjE1LDAuMS0wLjQzLDAuNXMtMC4xMi4wNi0uNDMsMC40OWEwLjcsMC43LDAsMCwxLS4yMy4yMmwtMC41Ny43NmEwLjQxLDAuNDEsMCwwLDEtLjE2LTAuMTFjMC4xMiwwLjYzLS4zLDEtMC44MywxLjZsLTEuNzQsMmExLDEsMCwwLDAtLjA2LDFjMC4yLDAuNjguMzksMS4zMiwwLjU3LDJhMy42NiwzLjY2LDAsMCwwLC40Ni0wLjUxbDEuODctMi4xNGMxLTEuMTUsMi44Ny0zLjQzLDMuNzctNC4zNmEyLDIsMCwwLDAsLjI0LTAuMjlsMy0zLjUyYzAuNzItLjc2LjQ0LTAuNi0wLjMxLTIuODZsLTIuNjEtNy41Yy0wLjE5LS41My0wLjMyLTEtMC41Mi0xLjUxLTAuNTEtMS4yNy0xLTMuMTItMS41Ny00LjU0LTAuNDYtMS4yNC0uMi0xLTAuODktMS4xNEwyMS41MSwyLjRhOCw4LDAsMCwwLS45LTAuMTVsLTUuMTQsNi0wLjE3LjIyLTYuMTcsNy4xYy0wLjMzLjM4LDAsLjc2LDAuMzYsMS44NEwxMywyNy41NWMwLjEzLDAuNDEuMywwLjg1LDAuNDQsMS4yN2wxLjQzLDMuODdhMTQuMjgsMTQuMjgsMCwwLDAsMi43OC42NFoiIHN0eWxlPSJmaWxsOiMzYWI1NGEiLz48cGF0aCBkPSJNMzQuNzcsMzUuNzljMC4yLDAuNjcuMzgsMS4zMywwLjU2LDJBNy4yOCw3LjI4LDAsMCwwLDM2LDM5LjcxYzEuMTMtLjU2LDIuMTEtMS4wNSwzLjE3LTEuNjUsMS45MS0xLjA4LDQuNDEtMi4zOSw2LjI0LTMuNDgsMC42My0uMzgsMi42OC0xLjQxLDMuMDktMS43NWwtMi4xNi02LjM2LDE0LjUzLDIuOEw2MSwyOS40OWExLjY5LDEuNjksMCwwLDEsLjA4LjI0bDEuMDYsMy4wN2MwLjQxLDEuMTguODIsMi4zNywxLjIyLDMuNTEsMC40OSwxLjQsMi4xMiw1LjkzLDIuNDIsN2ExLjk0LDEuOTQsMCwwLDAtLjMuMzNMNjQsNDUuMzljLTAuMTMuMTQtLjE1LDAuMjEtMC4yOSwwLjM2TDYyLjc1LDQ2LjhjLTAuMDkuMDgtLjU4LDAuNzQtMC45MSwxLjA2bC0wLjYuNzFjLTAuMTcuMjMtLjE4LDAuMTItMC4zMywwLjMzLTAuNDYuNjQtLjUzLDAuNjItMC44OSwxLjA3YTQuNiw0LjYsMCwwLDEtLjMxLjM1bC0xLjg0LDIuMTVhMTEuNzYsMTEuNzYsMCwwLDAtLjksMS4wOGMtMC4xNS4yMS0uMTUsMC4wOS0wLjMyLDAuMzJsLTAuNTYuNjhMNDEuNTEsNTEuNzZjMC4yNy0uNDQuNzEtMC43NCwxLTEuMTdsMC43NS0uODJjMC4zNC0uNDQuNjctMC43NCwxLTEuMTVhMS4xMiwxLjEyLDAsMCwxLC4yNi0wLjI3bDMuMzctMy44NWEyLDIsMCwwLDAsLjIxLTAuMzJsMC43NC0uODJhMS40NCwxLjQ0LDAsMCwwLC40My0wLjU4TDM3Ljg2LDQ5LjA2YzAuMjEsMC44MSwxLjUxLDQuMTEsMS43MSw1bDE1LjQxLDNjMC4zOSwwLjA4LDEuOTEuMzIsMi4xOCwwLjQ1LDAuMTgtLjI4LjUxLTAuNTksMC43Mi0wLjg2TDY4Ljg4LDQ0bC0xLjU4LTQuM2MtMC40Ny0xLjE3LTEuNzgtNS4xLTIuMi02LjM0TDYyLjg3LDI3bC0xMy4yLTIuNTVjLTEuNDYtLjMtMy0wLjUzLTQuMzktMC44NkEyLjMxLDIuMzEsMCwwLDEsNDUsMjRsLTUsNS43M2MtMC4yLjI1LS40MywwLjQ4LTAuNjUsMC43M0wzNS40MSwzNWwtMC42OS43OCIgc3R5bGU9ImZpbGw6IzNhYjU0YSIvPjxwYXRoIGQ9Ik0zMy41OCw1MS40bC0yLjcxLDEuNTFjLTAuMjguMTctLjU4LDAuMzQtMC44OCwwLjUtMC42LjMyLTEuMjEsMC42OC0xLjgsMWExMC4xLDEwLjEsMCwwLDEtMS45LjkyYy0wLjY0LTEuNjctMy4wNy0xMS40MS0zLjM4LTExLjkxYTEwLjc2LDEwLjc2LDAsMCwwLTEuMTgsMS4zMmMtMC4yNC4yNi0uMzksMC40Mi0wLjYyLDAuNjlhMi40MywyLjQzLDAsMCwxLS4zMS4zNSwyLjI5LDIuMjksMCwwLDAtLjI3LjI3QTIzLjIzLDIzLjIzLDAsMCwxLDE5LjMxLDQyYTE5LDE5LDAsMCwxLS41Mi0yLjExLDEuMzcsMS4zNywwLDAsMSwuMzctMWMwLjIyLS4yNi4zNy0wLjQ1LDAuNTgtMC43MmwtNC41Ny0uODhjMC43MywyLjQ2LDEuOCw1LDIuNTcsNy40MywwLjM4LDEuMjMuODcsMi40OCwxLjI3LDMuNzEsMS4xMywzLjQ2LDEuMjUsMi41LjU0LDMuNDZsLTcuNjgsOC45MmEwLjczLDAuNzMsMCwwLDAtLjE3LjE1LDMuMTcsMy4xNywwLDAsMS0uMjYuMzMsMy40NywzLjQ3LDAsMCwwLS4zMi4zNCwwLjUsMC41LDAsMCwxLS4wOC4xMmwtMC4yMS4xOGMtMC4xNS4xNy0uMDksMC4yMi0wLjIzLDAuMzdhMC42NSwwLjY1LDAsMCwwLS4yNy4zMWwxNC41LDIuNzlhMTkuNDQsMTkuNDQsMCwwLDAsMS40OC0xLjY0bDIuNDMtMi44MmEyLjY1LDIuNjUsMCwwLDAsLjQyLTAuNTFsMC43NS0uODJhMi40NiwyLjQ2LDAsMCwxLC4zNy0wLjQxbDAuMzQtLjM5YzAuMTYtLjE1LjE2LTAuMjgsMC4zMy0wLjQ1bDIuNTItMi44N2MwLjE5LS4yLjIxLTAuMjUsMC4zNi0wLjQyLDAuODQtMSwuODYtMC42OC42Mi0xLjM2YTE0LjgxLDE0LjgxLDAsMCwwLS44NS0yLjI3IiBzdHlsZT0iZmlsbDojMDI4MzNkIi8+PHBhdGggZD0iTTQ4LjUsMzIuODRjLTAuNDEuMzQtMi40NiwxLjM3LTMuMDksMS43NS0xLjgzLDEuMDktNC4zMywyLjQtNi4yNCwzLjQ4LTEuMDYuNi0yLDEuMDktMy4xNywxLjY1YTcuMjgsNy4yOCwwLDAsMS0uNjctMS45MmMtMC4xOC0uNjgtMC4zNi0xLjM0LTAuNTYtMmwtMS4xNiwxLjM3LDQuMTMsMTEuOSwxMS40MS02LjI4LDEuNzktMWMwLjYzLS4zMywxLjIxLTAuNjgsMS44Mi0xQTM4LjIsMzguMiwwLDAsMCw1Ni40LDM4LjcsODIsODIsMCwwLDAsNTQsMzBhMjcsMjcsMCwwLDAtNC4wOCwyLjE1WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwYXRoIGQ9Ik0xOS43MSwzOC4xOGMtMC4yMS4yNy0uMzYsMC40Ni0wLjU4LDAuNzJhMS4zNywxLjM3LDAsMCwwLS4zNywxQTE5LDE5LDAsMCwwLDE5LjI4LDQyLDIzLjIzLDIzLjIzLDAsMCwwLDIwLjUsNDYuMWEyLjI5LDIuMjksMCwwLDEsLjI3LTAuMjcsMi40MywyLjQzLDAsMCwwLC4zMS0wLjM1YzAuMjMtLjI3LjM4LTAuNDMsMC42Mi0wLjY5YTEwLjc2LDEwLjc2LDAsMCwxLDEuMTgtMS4zMmMwLjMxLDAuNSwyLjc0LDEwLjI0LDMuMzgsMTEuOTFhMTAuMSwxMC4xLDAsMCwwLDEuOS0uOTJjMC41OS0uMzMsMS4yLTAuNjksMS44LTEsMC4zLS4xNi42LTAuMzMsMC44OC0wLjVsMi43NC0xLjUxTDM2LDUwLjEyYTQsNCwwLDAsMS0uMjUtMC43MWwtNC0xMS41NC05LjIyLTEuOGE4LjQxLDguNDEsMCwwLDAtMS4zNi0uMjMsMS40MSwxLjQxLDAsMCwxLS41NiwxLjMyLDExLjc1LDExLjc1LDAsMCwxLS44NSwxLjA3IiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggZD0iTTIzLjYyLDEwLjQ0TDI3LjgsOC4xMmMwLjMxLDAuNjEsMS44MSw2Ljg5LDIsNy43bDIsNy43NmE1LDUsMCwwLDAsLjY3LTAuNzFjMC4yLS4yNi40My0wLjQ3LDAuNjQtMC43NGE3LjczLDcuNzMsMCwwLDEsMS4zNy0xLjQyYzAuMjksMC42LDEuNyw1Ljg5LDEuODMsNi42NWExLjExLDEuMTEsMCwwLDEsLjE2LjExTDM3LDI2LjcxYTAuNjgsMC42OCwwLDAsMCwuMjMtMC4yMmMwLjMxLS40My4yMi0wLjE5LDAuNDMtMC40OXMwLjIyLS4xOC40My0wLjVhMC4zOCwwLjM4LDAsMCwxLC4xNi0wLjIzLDMuMjcsMy4yNywwLDAsMCwuNDMtMC40OSwwLjQ2LDAuNDYsMCwwLDAsLjIyLTAuMjMsNC4wOCw0LjA4LDAsMCwxLC40My0wLjQ5YzAuMTYtLjIuMjgtMC4zLDAuNDMtMC40OWwwLjQtLjQ1YTEuMzUsMS4zNSwwLDAsMSwuMi0wLjI3LDEuNjEsMS42MSwwLDAsMCwuMjItMC4yM2MwLjQ1LS41Ny42Mi0wLjMyLDAuMzItMS4xNnMtMC42MS0xLjgyLS45NC0yLjczYy0wLjYyLTEuNzYtMS4zLTMuNTktMS44Ni01LjM2TDM2LjI1LDgsMjEuNjgsNS4xN2MwLjQyLDEuMzMsMSwyLjY3LDEuMzgsNGEyLjkxLDIuOTEsMCwwLDAsLjUzLDEuMjkiIHN0eWxlPSJmaWxsOiMwMjgzM2QiLz48cGF0aCBkPSJNMTkuNzksMzFhMjIuNSwyMi41LDAsMCwwLS42OS0yLjkyQzE5LjEsMjgsMTksMjgsMTksMjhhMS41NiwxLjU2LDAsMCwxLS40OC42NGMtMC4xNC4xNy0uMTQsMC4wNy0wLjI3LDAuMjRhMC43OCwwLjc4LDAsMCwxLS4yMy4zNmwtMS4wOCwxLjIsMC4zMiwwLjExYTE1LjQsMTUuNCwwLDAsMCwyLjU4LjQ2IiBzdHlsZT0iZmlsbDojMTI4MjQxIi8+PC9zdmc+) */
export const LccColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-lcc-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

LccColorful.displayName = 'LccColorful';
