// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/kndc-circle-colorful.svg';

/**![KndcCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1rbmRjLWNpcmNsZS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyMCAzMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjx0aXRsZT5LTkRDPC90aXRsZT4KPHBhdGggZD0iTTAuNDg3LDE2Ni44NzNIMC4yNDRIMHYtMTQuOTI2YzAuMTY3LDAsMC4zMzQsMCwwLjUsMGMwLjU1OCwwLjQ5NywwLjg2NiwxLjIxOCwwLjgzOSwxLjk2NQoJYzAuMTQ5LDMuNjY3LDAuMTQ5LDcuMzM2LDAsMTEuMDA3QzEuMzY2LDE2NS42NjYsMS4wNTMsMTY2LjM4NCwwLjQ4NywxNjYuODczeiIgc3R5bGU9ImZpbGw6ICNGRUY1RjY7Ii8+CjxwYXRoIGQ9Ik0xMzAuMzczLDEwNC42MTRjNi40NjMsMi4zNCwxMy4xODMsMy43NiwxOS44LDUuNTMzYzM0LjU2NCw5LjI2MSw2OS4xMzUsMTguNDk0LDEwMy43MTMsMjcuNwoJYzIxLjIyMiw1LjY1OSw0Mi40NTEsMTEuMjkzLDYzLjY4NiwxNi45YzEuODMxLDAuNDgyLDIuNTM4LDEuMjczLDIuNDExLDMuMjIxYy0wLjIsMy4wMjctMC4wNCw2LjA3Ni0wLjE0LDkuMTEyCgljLTAuMDY2LDIuMDA1LTAuNzUzLDIuODUzLTMuMTEzLDIuMTQ1Yy02LjA0LTEuODEyLTEyLjE4OC0zLjI2Mi0xOC4yNzYtNC45MThjLTEuNDcxLTAuNC0yLjEzMi0wLjItMS42MzksMS40NjcKCWMwLjA3OCwwLjI2MywwLjA5MywwLjU0NSwwLjE2NywwLjgwOWMxLjM1Myw0Ljg2MiwwLjQ2MiwzLjk1LDUuMTU0LDQuMTE4YzUuMTI1LDAuMTgzLDEwLjI0NywwLjQ2NCwxNS4zNzMsMC41NjgKCWMxLjY4MiwwLjAzNCwyLjA0OSwwLjc4NCwxLjg4NCwyLjIxOGMtMC40LDMuNDYtMC43NTQsNi45MjUtMS4xODcsMTAuMzgxYy0wLjE2NywxLjMzMS0wLjg3NCwxLjcxNi0yLjMxOSwxLjUxCgljLTQuMTcyLTAuNTkzLTguNDI4LDAtMTIuNjA3LTAuNzUyYy0xLjctMC4zLTEuOTgsMC40MTctMS41NzUsMmMwLjg4NCwzLjQ2NSwxLjYxNiw2Ljk3MSwyLjM0MywxMC40NzUKCWMwLjMsMS40NTEsMS4xMDYsMS44NTgsMi41MTYsMS44NzdjMi4yODMsMC4wMyw0LjU2MSwwLjM0Niw2Ljg0NiwwLjQzNGMxLjI2MiwwLjA0OCwxLjU3MSwwLjQxNCwxLjE2NCwxLjY3MwoJYy0xLjE1NywzLjU3OC0yLjE5MSw3LjItMy4yODMsMTAuOGMtMC4xODMsMC42LTAuMzA2LDEuNDQ5LTEuMTE4LDEuMzUxYy0yLjg2Mi0wLjM0NS0xLjk2MywxLjQ1Ni0xLjY3MSwyLjg3MQoJYzAuMTY2LDAuOCwwLjYyMSwxLjU4NywwLjMsMi40MTdjLTIuNTY0LDYuOTEyLTUuNzM5LDEzLjU4Mi05LjQ4NywxOS45MzFjLTEuNDI5LTUuOTktMi43NDQtMTEuMzU3LTMuOTg3LTE2Ljc0MQoJYy0zLjU5Mi0xNS41NTctNy4xNy0zMS4xMTgtMTAuNzMzLTQ2LjY4M2MtMS4wMDktNC4zODEtMi4xNzgtOC43MjktMy4wMzgtMTMuMTM5Yy0wLjE3Ny0xLjQ4NC0xLjM0Ni0yLjY1NS0yLjgzLTIuODM1CgljLTMuNTUxLTAuODg2LTcuMTEzLTEuNzUyLTEwLjYwNy0yLjgzNGMtMi4yNTYtMC43LTIuMjg5LDAuMS0xLjg1MywxLjk0YzIuNDI4LDEwLjI2OSw0Ljc3NiwyMC41NTgsNy4xNTUsMzAuODM5CgljNC45NDUsMjEuMzY3LDkuOTAyLDQyLjczLDE0Ljg3LDY0LjA5MWMwLjM2MiwxLjA1MywwLjE4NCwyLjIxNi0wLjQ3NiwzLjExM2MtMi44MjIsMy42Mi01LjYsNy4yNzctOC43MzksMTAuNjM3CgljLTEuNDI3LDEuNTI1LTEuODE4LDEuMTgyLTIuMjUyLTAuNzFjLTMuNzMzLTE2LjI3OS03LjU2Mi0zMi41MzUtMTEuMzM0LTQ4LjgwNWMtMy41ODUtMTUuNDY3LTcuMTUyLTMwLjkzNy0xMC43LTQ2LjQxCgljLTEuMzYyLTUuOS0yLjgtMTEuNzg0LTQuMDY0LTE3LjdjLTAuMTA2LTEuMTAyLTAuOTM2LTEuOTk2LTIuMDI3LTIuMTg0Yy0zLjgxMy0wLjk3LTcuNjM3LTEuOTEtMTEuNDE0LTMuMDEKCWMtMi4xMjItMC42MTgtMi4yNTQsMC0xLjgsMS45MTJjMi45ODEsMTIuNSw1Ljg2MywyNS4wMTgsOC43NjUsMzcuNTM0YzYuMDc0LDI2LjE5MywxMi4xNDEsNTIuMzg4LDE4LjIsNzguNTg1CgljMC4xMzksMC44MTMsMC4yMjgsMS42MzQsMC4yNjYsMi40NThjLTAuMjc1LDAuMzc3LTAuNzQxLDAuNTYzLTEuMiwwLjQ3OWMtNC44ODEtMS4yOS05LjktMi4xNDctMTQuMzkyLTQuNjYKCWMtMC41NzUtMS4wMzQtMC45MzUtMi4xNzMtMS4wNi0zLjM0OWMtMC44NjYtNC4wNy0wLjkzMy00LjExNS01LjA3My0zLjA4MWMtMi4yODYsMC41NzEtNC41NTgsMS4yLTYuODY5LDEuNjY5CgljLTQuNTYtMC43MjgtOC40NDMtMy4yNDItMTIuNjU4LTQuODgyYy0yLjE4LTAuOTIxLTQuMjk5LTEuOTc4LTYuMzQ2LTMuMTY2Yy0wLjktMC40ODgtMi4xMzctMC43NjctMi4wNTktMi4yMTYKCWMwLjgxOC0xLjAzOCwyLjA2OS0xLjExNSwzLjItMS40MDdjNy4xLTEuODM0LDE0LjI3NS0zLjM2MSwyMS4zNjgtNS4yMjhjMC43MTYtMC4xNiwxLjQyMy0wLjM1OCwyLjExOC0wLjU5MgoJYzAuNy0wLjI2NCwxLjQxNS0wLjU1OCwxLjMxNS0xLjUwOWMtMC4wNTMtMC43NjctMC42MzgtMS4zOTEtMS40LTEuNDkyYy0xLjMzMy0wLjM0NC0yLjY5OS0wLjU0My00LjA3NC0wLjU5NAoJYy00Ljk1NCwwLjA3OS05Ljg3NS0wLjQ5NC0xNC44MTUtMC42MjljLTIuMzgtMC4wMS00Ljc1OS0wLjE1LTcuMTI0LTAuNDE4Yy00LjcxOC0wLjY0Mi05LjMsMC4yMS0xMy44MjcsMS41NDUKCWMtMS4zOTIsMC40NjYtMi44MzEsMC43NzYtNC4yOTEsMC45MjdjLTEuMjkyLTAuMDQzLTIuNTM4LTAuNDg5LTMuNTYzLTEuMjc2Yy03LjM3NS00LjgyNC0xNC42NzUtOS43NTUtMjEuNi0xNS4yMjUKCWMtMC44MTktMC41OTItMS41NTgtMS4yODctMi4yLTIuMDY3Yy0wLjU3NC0wLjc2MS0wLjE1My0xLjE1MiwwLjU1OS0xLjQyNWM1LjY4My0wLjc0NCwxMS4zMzksMC4yNDQsMTYuOTg2LDAuNDg3CgljNS4wMTIsMC4yMTUsMTAuMDYxLDAuNTMyLDE1LjA3MiwwLjczN2M5LjMyOCwwLjM4MiwxOC42MzUsMS4yNjgsMjcuOTc5LDEuMjg0YzEuOTI4LDAsMy44MDksMC41MjYsNS43NDYsMC41MDkKCWMxLjc3MS0wLjAxNSwyLjU0Mi0wLjY5LDIuMDg1LTIuNTVjLTAuNjM2LTIuNTg5LTEuMzMxLTUuMTY1LTEuODYtNy43NzljLTAuMTg0LTEuNDMzLTEuNDczLTIuNDYtMi45MTEtMi4zMgoJYy03Ljc3NS0wLjI2OC0xNS41NDMtMC43MzUtMjMuMzA3LTEuMTg2Yy05LjIyNy0wLjUzNy0xOC40NzEtMC42NzctMjcuNjg5LTEuNDUxYy00LjQ2MS0wLjM3NC04Ljk2LTAuNDY3LTEzLjQzNS0wLjYKCWMtNS4wMzgtMC4xNTItMTAuMDQ1LTAuNzYtMTUuMDc5LTAuNzY3Yy0wLjY0Ny0wLjAyLTEuMjctMC4yNDktMS43NzUtMC42NTRjLTQuNTQ1LTQuMjU1LTkuMTY1LTguNDQyLTEyLjk2LTEzLjQyNAoJYy0wLjU3OS0wLjc2MS0xLjA3LTEuNjM2LDAuMzQ2LTIuMTQyYzUuMjMtMC40MzYsMTAuNDQ0LDAuMjA4LDE1LjYzNiwwLjVjNC42NTgsMC4yNjMsOS4zNDMsMC41MzksMTMuOTk1LDAuNzQ1CgljOS41MjMsMC40MjIsMTkuMDQ1LDAuODc0LDI4LjU2NywxLjM1N2M5LjA1OSwwLjQ1LDE4LjE0MSwwLjU5MSwyNy4xOCwxLjQ3NmMxLjY0OCwwLjEyNSwzLjMwMywwLjEzMyw0Ljk1MiwwLjAyNAoJYzEuNDA4LTAuMDYyLDEuOTY5LTAuNzcyLDEuNzA4LTIuMTY0Yy0wLjUzMi0yLjgwNS0xLjIwOS01LjU4LTIuMDI5LTguMzE1Yy0wLjUxNy0xLjc0MS0xLjk1Mi0yLjA5LTMuNDg2LTIuMQoJYy0zLjU4MS0wLjAxNy03LjE0Ny0wLjQ0Ni0xMC43MS0wLjUyMWMtMTMuMzg1LTAuMjgxLTI2LjczNi0xLjI2Ni00MC4xLTEuODY2Yy0xMi42MjktMC41NjctMjUuMjctMS4wODQtMzcuODg0LTIuMDE5CgljLTMuNzctMC4yNzktMy45ODItMC4xLTQuNDMyLDMuNTg5YzAuMDQzLDAuODM4LTAuMjgzLDEuNjUyLTAuODksMi4yM2MtMS4zNTYtMC40ODYtMS4yODItMS43MTgtMS4yODItMi43NjcKCWMwLTE4LjAxOC0wLjI0NS0zNi4wMzcsMC4xLTU0LjA0NmMwLjM3NC0xLjk4NiwyLjQ3Mi0yLjE5MSwzLjU2Ny0zLjQ0M2MwLjM4NS0wLjQ0LDEuMjc2LTAuNiwxLTEuNAoJYy0wLjE4OS0wLjU0NS0wLjg4MS0wLjUyNy0xLjM3OS0wLjcwNmMtMS4xMTEtMC40LTIuNjU4LDAtMy4wNzUtMS42OTJjLTAuMi00LjcyLTAuNjI1LTkuNDM5LDAuMjM2LTE0LjEzNwoJYzAuMDg5LTAuMjQ5LDAuMzYzLTAuMzc5LDAuNjEyLTAuMjlDMTMwLjI3LDEwNC41MzcsMTMwLjMyNiwxMDQuNTcxLDEzMC4zNzMsMTA0LjYxNHoiIHN0eWxlPSJmaWxsOiAjQUJBQ0FDOyIvPgo8cGF0aCBkPSJNMTM3LjE1MywxOTAuNzQ4YzQuMzQ1LDUuMjgsOS4wNzEsMTAuMjMzLDE0LjE0LDE0LjgyMmMyLjg2OCwxLjIyMSw0LjU4NywzLjg0NCw2LjgyLDUuODEyCgljMy4zODcsMi45ODYsNy4yMjYsNS41LDEwLjAyMSw5LjE0NGM4LjMwMyw3LjA1NywxNy4yMjMsMTMuMzUzLDI2LjY1NCwxOC44MTJjMy4xMTYsMC44NjMsNS42LDIuOTI5LDguMzc4LDQuNDQ0CgljMi42MjYsMS40MzQsNS4yMTIsMi45MzgsNy45MTIsNC4yMzRjMC44NzUsMC4yNzgsMS42MSwwLjg4MiwyLjA1MSwxLjY4N2M2LjcwOCwzLjY2NywxMy42ODcsNi44MTUsMjAuODc2LDkuNDE2CgljNC42NTUsMS4wNiw5LjIzMywyLjMzMSwxMy4zMjIsNC45MzFjNS4wMTMsMS44NjEsMTAuMTU2LDMuMzUyLDE1LjM4Nyw0LjQ2M2MzLjY2NSwxLjUxNSw3LjYzMSwxLjg3OCwxMS45NywzLjE3MwoJYy0yLjIsMi4xMDYtNC4xNzMsNC4wNjgtNi4yMjMsNS45NDZjLTYuMjc4LDUuNzUzLTYuMjksNS43NDEtMTQuMjg1LDMuNDM4QzE1OC43MTIsMjUzLjU3Niw4Ni45NjIsMTc2Ljg1Nyw2NS43MDksNzkuNTA1CgljLTIuODktMTMuNzgtNC43OC0yNy43NTItNS42NTMtNDEuODA1Yy0wLjI4OC0xLjgyLDAuNTM5LTMuNjM2LDIuMS00LjYxNWMzLjc4MS0yLjcxMyw3LjQ1MS01LjU4MSwxMS43MzUtOC4yMTYKCWMwLjA2NiwyNy40NTYsNC44NTIsNTQuNjk3LDE0LjE0OSw4MC41MzF2LTIuNzhjMC0yNy43MjEtMC4wMTctNTUuNDQzLTAuMDUtODMuMTY0Yy0wLjAwNS0yLjAzMiwwLjUxMi0zLjE5LDIuNDEzLTMuOTc5CgljMy43ODctMS41NzEsNy40OTMtMy4zMzgsMTEuMjM1LTUuMDI2YzAuNDU2LDEuMDAxLDAuNjAxLDIuMTE2LDAuNDE3LDMuMmMwLjAxNSw0MS4yNTksMC4wMjEsODIuNTE5LDAuMDIsMTIzLjc3OQoJYy0wLjA5NSwwLjgyLTAuMDEzLDEuNjUxLDAuMjQxLDIuNDM2YzMuOTE0LDcuOTU3LDguNTM3LDE1LjU0NSwxMy44MTQsMjIuNjcxdi0yLjg2NGMwLTUwLjI4NS0wLjAxOC0xMDAuNTctMC4wNTMtMTUwLjg1NQoJYzAtMi4zOTUsMC40MzktMy41NjEsMy4wMjYtNC4wNTZjMy42NjMtMC43LDcuMjUzLTEuODE1LDEwLjk1OC0yLjM3OWMwLjkxNSwxLjA3OSwwLjcwNSwyLjQsMC43NjgsMy42NTcKCWMwLjI1Miw1LTAuMjc0LDkuOTc5LTAuNTI3LDE0Ljk2NWMwLjYyOSw1LjU5NCwwLjk0MiwxMS4xODMtMC4yNDEsMTYuNzUxYy0wLjAwNSw1LjAyNi0wLjAwOSwxMC4wNTItMC4wMTMsMTUuMDc4CgljMC40MDUsMC42MDksMC42MzMsMS4zMTgsMC42NTgsMi4wNDljMC4wNjcsNC40NTEsMC4wNjcsOC45MDMsMCwxMy4zNTRjLTAuMDczLDAuOTA4LTAuMjk4LDEuNzk3LTAuNjY1LDIuNjNsMC4wMjMsMTUuNjM2CgljMC4zODgsMC42MjIsMC42MDksMS4zMzMsMC42NDIsMi4wNjVjMC4wNjcsNC40NjcsMC4wNjcsOC45MzMsMCwxMy40Yy0wLjA2NSwwLjkxMi0wLjI5MSwxLjgwNS0wLjY2NiwyLjYzOWwwLjE5LDE1LjA2NwoJYzAuODcxLDEuNywwLjg1OSwzLjcxOC0wLjAzMiw1LjQwOGMtMC4wNDcsMTguODY3LTAuMDkxLDM3LjczMy0wLjEzMSw1Ni42YzAuMDQ4LDAuMzU0LDAuMTQyLDAuNywwLjI4MSwxLjAyOQoJQzEzMy4xODYsMTg0Ljg1LDEzNS41MTEsMTg3LjU5NiwxMzcuMTUzLDE5MC43NDh6IiBzdHlsZT0iZmlsbDogI0VFMUQ1NTsiLz4KPHBhdGggZD0iTTAuNDg3LDE2Ni44NzNMMC41LDE1MS45NDRjLTAuMzg3LTcuMDE1LDMuNzc1LTEyLjE1NCw3LjItMTcuNmMwLjgyMy0xLjMxMSwxLjYtMi42NTUsMi4zOTEtMy45ODQKCWMxLjEtMy40NzMsMy40NzEtNi4xODYsNS41NjUtOS4wMTljMS4yNDMtMS40ODEsMS41NjUtMy41MjcsMC44MzYtNS4zMThjLTAuNjYxLTEuOTU1LTEuNzQzLTMuODY5LTEuMjEtNi4wNzkKCWMtMC4xNTQtMC45OTctMC40LTEuOTc3LTAuNzMzLTIuOTI5Yy0yLjY1Ny01Ljg4Mi0xLjU3Mi0xMS4zMjEsMS41NS0xNi43YzIuMTUyLTMuNzEsMy44MDYtNy43MDgsNi41LTExLjc4NQoJYzkuODgzLDUyLjc0MywzMS4zNjIsOTkuNjM5LDY0LjkxOCwxNDAuODEzYzMzLjU5NSw0MS4yMjEsNzUuMTksNzEuNjczLDEyNC43LDkxLjk4OWMtNi44MDksMi4zODgtMTMuNzc0LDQuMzA1LTIwLjg0Niw1LjczOQoJYy0wLjkxOCwwLjA5Ny0xLjg0MS0wLjEzMi0yLjYwNi0wLjY0OGMtMy44MDQtMS44MDYtNy42MDQtMy42MjMtMTEuNC01LjQ1MWMtMi44NDEtMC41MDktNS4xMjQtMi4yNDItNy41NzItMy41NzMKCWMtNy4zLTMuOTY4LTE0LjI4OC04LjQ1OC0yMS4yOTQtMTIuOTE2Yy00LjkxOC0zLjU0Mi0xMC4wMzUtNi44LTE0LjgxOS0xMC41MzhjLTEuMDYzLTEuMDItMi41LTEuNjI0LTMuMjctMi45NTEKCWMtMC4wOTItMC4xMzctMC4xOC0wLjQzOC0wLjI0OS0wLjQzN2MtMC4yNDIsMC0wLjE1OCwwLjA3OSwwLjAxMywwLjI4YzAuMjc3LDAuMzY1LDAuNDUsMC43OTksMC41LDEuMjU0CgljMC4xMjUsOS40NzksMC4xMTksMTguOTUtMC4wMTcsMjguNDE0Yy0wLjA2NywyLjE4NC0wLjI4OCw0LjM2LTAuNjYyLDYuNTEyYy00LjI5Mi0wLjM5NS04LjM3Ny0xLjc0Ny0xMi41NDktMi43CgljLTEuNzMtMC40LTEuMzA5LTEuNzM1LTEuMzEtMi44NThjLTAuMDE0LTEzLjI1NS0wLjA1MS0yNi41MTEsMC4wMzctMzkuNzY1YzAuMTAxLTEuNzI3LTAuNjYtMy4zOTMtMi4wMzMtNC40NDYKCWMtMy45NTEtMy40LTcuNzQ4LTYuOTc4LTExLjY1My0xMC41MjhjLTAuNzUyLDAuOTM3LTAuNCwxLjg4Mi0wLjQsMi43MzhjLTAuMDI3LDE1LjU1Ny0wLjAzNCwzMS4xMTMtMC4wMjEsNDYuNjY5CgljMCwzLjAzLTAuMDIzLDMuMDY1LTIuOSwxLjgxMmMtMy4wMi0xLjMxNC01Ljk3OC0yLjc3Ni05LjAyMS00LjAzMmMtMS43MS0wLjcwNi0yLjE1My0xLjc4Mi0yLjE0Ni0zLjU5MgoJYzAuMDcxLTE4LjY4NiwwLjAyMy0zNy4zNzIsMC4wNzctNTYuMDU4YzAuMDc3LTEuNjM1LTAuNTExLTMuMjMyLTEuNjMxLTQuNDI3Yy00LjAxNS00LjQ5My03Ljg4Mi05LjExOS0xMi4xODEtMTQuMTMzCgljLTAuMDY5LDEuNDU2LTAuMTUyLDIuNDA4LTAuMTUzLDMuMzYxYy0wLjAwNywyMC45ODctMC4wMjgsNDEuOTc1LTAuMDYxLDYyLjk2MmMwLDAuNjIyLDEuMTA4LDIuMTgzLTAuOTI1LDIuMDI4CgljLTAuMTkzLTEuMzY2LTAuMjM4LTIuNzQ5LTAuMTM1LTQuMTI1Yy0wLjAwNi0yMC4wNDQtMC4wNDQtNDAuMDg3LDAuMDM4LTYwLjEzYzAuMTEyLTIuODU2LTAuODc4LTUuNjQ2LTIuNzY0LTcuNzkzCgljLTMuNjcxLTQuNDY5LTcuMDg1LTkuMTQzLTEwLjIyNS0xNGMtMS4yMi0yLjQ1NS0yLjYzOC00LjgwNi00LjIzOC03LjAzMmMtMC4wNTctMC4wNjktMC4xLTAuMTUyLTAuMTU4LTAuMjE5CgljLTAuNzM5LTAuODM2LTAuOTEyLTIuNTctMi4yMzctMi4zNjljLTEuMDM1LDAuMTU3LTEuMTI2LDEuNzE1LTEuNTU0LDIuN2MtMS45NjIsNC4zLTMuODg1LDguNjEyLTUuNjc1LDEyLjk4NgoJYy0xLjgsNC43OTUtMy42ODQsOS41NTYtNS4yNCwxNC40MzljLTAuNjU0LDIuMDA4LTEuMzkyLDMuOTg3LTEuOTE2LDYuMDM3Yy0xLjg1Nyw2LjI4Ny0zLjUxNiwxMi42MjUtNS4wNDUsMTkKCWMtMC4yMTgsMC45MTEtMC4xMjEsMi4wODMtMS4zOTEsMi40MTdjLTMuODcyLTQuNTU2LTYuODgzLTkuNy0xMC4wNDQtMTQuNzQ0Yy0wLjcyNC0xLjE1NS0wLjI3LTIuMSwwLjAxLTMuMTMzCgljNS4wNjQtMTguNjkxLDEyLjE4My0zNi43NjQsMjEuMjI3LTUzLjg4N2MwLjkxNS0xLjM2OCwwLjkyNC0zLjE1LDAuMDI0LTQuNTI4Yy0yLjI2OC0zLjk3Ny00LjI3Mi04LjEwNy02LjM4Mi0xMi4xNzUKCWMtMC42MDEtMC44NC0xLjAwOC0xLjgwMi0xLjE5Mi0yLjgxOGMtMC4yNiwxLjA2NywxLjA3MywxLjc1MSwwLjcsMi44MTVjLTkuODEsMTcuMDY1LTE3Ljg0MSwzNS4wOTMtMjMuOTY4LDUzLjc5OQoJYy0xLjc0Ny0yLjY4LTIuNDQ5LTUuNDM1LTMuMzk1LTguMDUzYy00LjYtMTIuNzI5LTQuNTQ0LTEyLjczMSwxLjAyOS0yNS4xYzUuMjc2LTExLjgyOCwxMS4zMzQtMjMuMjkyLDE4LjEzNC0zNC4zMTUKCWMwLjk3OS0xLjMyOCwxLjExOS0zLjA5NiwwLjM2Mi00LjU2MWMtMS44NzMtNC4yNjgtMy41NDMtOC42MjYtNS40NzYtMTMuMzk1Yy04LjM1NiwxMi40NDMtMTUuODExLDI1LjQ2OS0yMi4zMDYsMzguOTc4CglMMC40ODcsMTY2Ljg3M3oiIHN0eWxlPSJmaWxsOiAjRUUxRDU1OyIvPgo8cGF0aCBkPSJNNDYuNjczLDQ2Ljk3NmMxMC41NjEsMTE4LjA2MSw5MS42MjEsMjE0LjM0OCwyMDAuNjU0LDI0Ni43OTJjLTEuNSwxLjc2NS0zLjUyMSwyLjYzMS01LjMzOCwzLjcxOAoJYy0xMC41NDksNi4zMDgtMTAuNjI1LDYuNDQzLTIyLDEuNzQxQzEzMC4wNDgsMjYyLjAzNiw3MC45NTQsMTk2LjcxOCw0Mi43MDcsMTAzLjI3MkMzOC45LDkwLjEwNywzNi4xMDQsNzYuNjcsMzQuMzQxLDYzLjA3OQoJYy0wLjI2Mi0wLjg4OS0wLjEwOS0xLjg0OCwwLjQxNS0yLjYxMkMzOC40ODYsNTUuNzYxLDQyLjQ2NCw1MS4yNTgsNDYuNjczLDQ2Ljk3NnoiIHN0eWxlPSJmaWxsOiAjRUUxRDU1OyIvPgo8cGF0aCBkPSJNMjgwLjUyNiw1NC4yMjRjMi42MTQsMy41MjEsMi42MTksMy41MjgtMC44NCw2LjIxOGMtMS44MDcsMS40LTMuNjM0LDIuNzgzLTUuNDUzLDQuMTczCgljLTEuNjg2LDAuMDYzLTAuNiwxLjAzNC0wLjU0MSwxLjY2N2MwLjkyNCwzLjgzMSwxLjk0OSw3LjY0MSwyLjczNiwxMS41YzAuNDY3LDIuMjg5LDEuMDUzLDIuNTE1LDIuODU4LDAuOTU5CgljMy40NzItMi45OTQsNy4yLTUuNjg3LDEwLjY4OS04LjY2MWMxLjQtMS4xOTUsMi4xMDctMC45MzEsMi45NjEsMC40NzljMS42NjQsMi43NDksMy4zNjcsNS40NzYsNS4xNDMsOC4xNTMKCWMwLjk5MywxLjUsMC45NjYsMi41LTAuNjUyLDMuNjA3Yy0yLjI2NywxLjU0Ny00LjM2MiwzLjM1Mi02LjQ5MSw1LjA5NGMtMC40NDYsMC4zNjUtMS4yNDUsMC42ODItMC45NDksMS40NzYKCWMwLjIxNywwLjU4MiwwLjkwNiwwLjUsMS40MjksMC42NDNjMy45NzQsMS4wNzMsNy45MjEsMi4yNTQsMTEuOTIyLDMuMjEyYzEuNTU3LDAuMjQ5LDIuODQ1LDEuMzQ3LDMuMzM2LDIuODQ1CgljMS40NDMsMy44NzIsMyw3LjcsNC40ODcsMTEuNTU2YzAuMjIzLDAuNTc5LDAuNzYxLDEuMjQ5LDAuMzQ5LDEuODJjLTAuNTcyLDAuNzkyLTEuMzQyLDAuMTM2LTItMC4wNAoJYy0xOC40ODktNC44OTktMzYuOTc3LTkuODA2LTU1LjQ2My0xNC43MmMtMjIuNDYzLTUuOTg0LTQ0LjkyMi0xMS45ODEtNjcuMzc5LTE3Ljk5MWMtMS41OTEtMC40MjUtMy4xODMtMC44NDgtNC43NzYtMS4yNjkKCWMtMC4wOTMtMC43MTMsMC40NjMtMC45NjEsMC45MzYtMS4xNjdjNy4wNDgtMy4yMTQsMTQuMzU2LTUuODIzLDIxLjg0Ni03LjhjMS41ODIsMC4yNjEsMi44MywxLjUxOSw0LjQzOSwxLjQ3NgoJYy0wLjYtMC42NzItMi45NDMsMC4zNi0yLjA1NS0xLjk4OGMyLjU2NS0xLjQzLDUuMi0yLjU4MSw4LjI0Mi0yLjI1M2MxLjI0NCwwLjc2MSwxLjM4OCwyLjExMSwxLjY0OSwzLjMzNgoJYzAuMjI3LDEuNjg1LDEuNTUsMy4wMTMsMy4yMzQsMy4yNDZjMy41NjQsMC43MjQsNi45NzMsMi4wOTQsMTAuODIsMi43MjdjLTAuMi0zLjA1NS0xLjEyNC01LjgtMS43MjQtOC42CgljLTAuMjc5LTEuMy0xLjAyNC0yLjYwOC0wLjIwOC0zLjk4M2M0LjUzNC0xLjgzMiw5LjM4NC0yLjc1NCwxNC4yNzQtMi43MTJjMS4zOTIsMi43MjcsMS41ODYsNS43ODYsMi4zMTcsOC42OTMKCWMwLjcxNiwyLjg0NSwxLjQ3NSw1LjY4OSwxLjk3NCw4LjU4NWMwLjIwNywxLjc4OSwxLjU2MiwzLjIzLDMuMzM1LDMuNTQ1YzIuOTI4LDAuNzM2LDUuODc1LDEuNCw4Ljc3NSwyLjI0NQoJYzEuNzQ0LDAuNTA2LDIuMTktMC4xMzksMS43NzktMS43NjljLTEuNjE4LTYuNDA4LTMuMDM4LTEyLjg2My00LjUtMTkuMzA3Yy0wLjMzMS0xLjQ2MS0xLjg0MS0xLjk3Ny0yLjA2OC0zLjM3NgoJYzAuNDE5LTAuNDk2LDEuMDM1LTAuNzgzLDEuNjg0LTAuNzg3YzcuMTUtMC41MjEsMTQuMzE2LTAuNzU2LDIxLjQ3MS0xLjIwOUMyNzguOTI4LDUzLjg4MiwyNzkuNzM4LDU0LjAwOSwyODAuNTI2LDU0LjIyNHoiIHN0eWxlPSJmaWxsOiAjQUJBQ0FDOyIvPgo8cGF0aCBkPSJNMTYyLjQxNyw4NC4xODRjMTQuMTM3LDMuOCwyOC4yNzUsNy42LDQyLjQxMywxMS40YzM2LjMzMyw5LjcyNiw3Mi42NywxOS40MzIsMTA5LjAxMSwyOS4xMTcKCWMxLjc1NCwwLjQ2NiwyLjYxNywxLjEyNiwyLjksMy4wMTVjMC41MjIsMy40NCwxLjE3NCw2Ljg2MywxLjczMywxMC4zYzAuMzY0LDIuMjM1LDAuMDc2LDIuNTgyLTIuMDg2LDEuOTgyCgljLTguMTEyLTIuMjUzLTE2LjI2Ny00LjM1LTI0LjQtNi41MjJjLTQ4LjM1OS0xMi45MTctOTYuNzE4LTI1LjgzOC0xNDUuMDc3LTM4Ljc2M2MtMC42MTktMC4xNjUtMS4yNDUtMC4zLTEuODY4LTAuNDQ5CgljLTAuMTc3LTAuODQ1LDAuNTI3LTEuMDk0LDEuMDE5LTEuNDMzYzQuNjc2LTMuMjI0LDkuNzE3LTUuODI3LDE0LjY1NC04LjZDMTYxLjIyLDgzLjk0NCwxNjEuODM1LDgzLjQ4NCwxNjIuNDE3LDg0LjE4NHoiIHN0eWxlPSJmaWxsOiAjQUJBQ0FDOyIvPgo8cGF0aCBkPSJNMTYyLjQxNyw4NC4xODRjLTUuOTksMy4wMDgtMTEuNzkzLDYuMzc1LTE3LjM3NywxMC4wODJsLTEzLjgsOS4xNTljLTAuNzMyLDAuMTEzLTAuOTk0LTAuMzE5LTAuOTc4LTAuOTM5CgljMC4xMzUtNS4yMzktMC4zNTYtMTAuNDg5LDAuMjYxLTE1LjcyYzMyLjc5NS0yMi4zMTUsNzAuMTY4LTM3LjAwNywxMDkuMzgtNDNjOC42MDktMS4zNDMsMTcuMjgzLTIuMTI2LDI1Ljk3NC0yLjczCgljMS4xODktMC4wNiwyLjM0LDAuNDI4LDMuMTIzLDEuMzI0YzQuMDU3LDMuNzQzLDcuODA2LDcuNzg0LDExLjUyLDExLjg2M2MtMi44NTksMS4xLTUuODc3LDAuNjItOC44MTQsMC43OTQKCWMtNS41MTQsMC4zMjgtMTEuMDQxLDAuNDM2LTE2LjUyOSwxLjE0OWMtMS4yNDgsMS40NzMtMy4wNjgsMS4wNzktNC42MjYsMS4yNDhjLTIuNDEyLDAuMjYxLTQuODQyLDEuMjg4LTcuMywwLjIxOAoJYy00Ljc0LDAuNTg5LTkuNDQsMS40NjYtMTQuMDc0LDIuNjI0Yy00LjM4MiwxLjg5Ni05LjA2MSwzLjAxMi0xMy44MjcsMy4zYy0yLjgzMiwwLjQ3Mi01LjYwOCwxLjIzLTguMjg2LDIuMjY0CgljLTAuNTM0LDAuNjIyLTEuMzg1LDAuODY4LTIuMTY5LDAuNjI4Yy03Ljg1MywyLjMxMy0xNS41NDIsNS4xNTMtMjMuMDEzLDguNUMxNzUuMTg2LDc3LjU2NywxNjguNjgxLDgwLjY1NCwxNjIuNDE3LDg0LjE4NHoiIHN0eWxlPSJmaWxsOiAjRUUxRDU1OyIvPgo8cGF0aCBkPSJNMTMxLjU5NSw1Mi45NjJjMTUuNTY5LTkuMzE1LDMyLjAyNy0xNy4wNTcsNDkuMTI5LTIzLjExM2MxNi4xMTgtNS43OTksMzIuNzEyLTEwLjE3NSw0OS41OTQtMTMuMDc3CgljMC44ODQtMC4yMzYsMS44MjQtMC4xNTYsMi42NTUsMC4yMjdjNi4zMjMsMy4yMzcsMTIuNDA5LDYuOTE3LDE4LjIxMywxMS4wMTJjLTUuNDEsMC43OTItMTAuNDE4LDEuNDcyLTE1LjQwOSwyLjI2NAoJYy0zNi4zLDUuNzM2LTcxLjA5NywxOC42MzgtMTAyLjM2MiwzNy45NTRjLTAuNzc3LDAuNDc3LTEuNTg2LDAuOS0yLjM4MSwxLjM0N2MtMS4yLTAuMTA3LTAuNzU4LTEuMDU5LTAuNzY0LTEuNjYyCgljLTAuMDQxLTQuMjEyLDAuMDI0LTguNDI2LTAuMDUxLTEyLjYzN0MxMzAuMDQ2LDU0LjI3MiwxMzAuNjI5LDUzLjI5LDEzMS41OTUsNTIuOTYyeiIgc3R5bGU9ImZpbGw6ICNFRTFENTU7Ii8+CjxwYXRoIGQ9Ik0xMzEuMDY3LDIxLjAzOGMxNS4xMTgtOC4wNzYsMzAuOTItMTQuODAyLDQ3LjIyMi0yMC4wOTljMi43OTMtMC45MTgsNS41OTIsMC4yODgsOC4zNSwwLjcyMwoJYzcuMzc2LDEuMTQ4LDE0LjY0NCwyLjkwNywyMS43MjksNS4yNTljLTkuMjM1LDIuMzM2LTE3Ljk1OCw0Ljc3NS0yNi41NDUsNy42NzhjLTE3LjAyNyw1Ljc0Ni0zMy41MiwxMi45NjUtNDkuMjkzLDIxLjU3NQoJYy0wLjYzOSwwLjM0OS0xLjMxOCwwLjYyMi0xLjk3OCwwLjkzMWMtMC42NjctNS0wLjE2OC0xMC4wMi0wLjI1OC0xNS4wM0MxMzAuMzIyLDIxLjYwNiwxMzAuNjI2LDIxLjE5OSwxMzEuMDY3LDIxLjAzOHoiIHN0eWxlPSJmaWxsOiAjRUUxRDU1OyIvPgo8cGF0aCBkPSJNMTQ4LjcyNCwyOTMuOTc4YzkuNCw1LjkxOCwxOC45NzUsMTEuNTI3LDI4LjYzOSwxNi45OWMtMC4yMTEsMi4yMjctMC40MjMsNC40NTUtMC42MzUsNi42ODIKCWMtMC41NTEsMC43NDMtMC42MzIsMS43OTUtMi4wNTIsMS44MDljLTMuNDY4LDAuMDM2LTYuOTM0LDAuMy0xMC40LDAuNTE1Yy0xLjYyNiwwLjEtMi41MzIsMC4wMS0yLjAyMy0yLjIwOAoJYzAuODE1LTMuNTU5LDEuMTE5LTcuMjMzLDEuNzExLTEwLjg0NmMwLjI0Ni0xLjUtMC4xMzUtMi4xLTEuNzEzLTEuN2MtMy43MTksMC45NDktNy40NDMsMS44NzUtMTEuMTczLDIuNzc2CgljLTEuMTE4LDAuMTI5LTEuOTQ4LDEuMDk5LTEuOSwyLjIyNGMtMC4xODksMi40NTktMC43NTEsNC44ODctMS4wMjgsNy4zNDJjLTAuMTU3LDEuMzg0LTAuNzY1LDItMi4xMjcsMS44NTIKCWMtMy42MjYtMC40LTcuMjU0LTAuNzg3LTEwLjg3NS0xLjIyNWMtMC44MjEtMC4xLTEuMzU4LTAuNTY1LTEuMDUtMS41MjljMC4wMzUtMC4wODUsMC4wNjEtMC4xNzQsMC4wNzctMC4yNjQKCWMwLjQwNi00LjMxMiwwLjQwNi00LjMxMi0zLjU1NS0zLjZjLTAuODEtMy42LTAuMTY3LTcuMjUyLTAuMzU4LTEwLjg3NWMtMC4wNTMtMS0wLjAxLTIuMDE0LTAuMDA2LTMuMDE4CgljMC4wOTItMC42NTUsMC41OTgtMS4xNzUsMS4yNS0xLjI4NWM1LjIwNS0xLjU5NSwxMC41MDktMi44NDcsMTUuODc4LTMuNzQ3QzE0Ny44MzMsMjkzLjgwMywxNDguMjkyLDI5My44MzksMTQ4LjcyNCwyOTMuOTc4eiIgc3R5bGU9ImZpbGw6ICNBQkFDQUM7Ii8+CjxwYXRoIGQ9Ik0xMzAuMDIzLDIwLjgzM2MwLjAxLTYuMTQ5LDAuMDIxLTEyLjI5OSwwLjAzMy0xOC40NDhjOC43NDEtMS44MjMsMTcuNjY2LTIuNjIxLDI2LjU5Mi0yLjM3NgoJYy01LjMwMiwzLjUxMy0xMC42MDQsNy4wMjYtMTUuOTA3LDEwLjUzOWMtMi4zNjYsMS41NjUtNC42NTgsMy4yNjgtNy4xMzYsNC42MjZjLTIuMzIxLDEuMjcyLTMuNjQ4LDIuODgyLTMuMjYzLDUuNjIKCUMxMzAuMjc2LDIxLjE0NywxMzAuMTY4LDIxLjE0MywxMzAuMDIzLDIwLjgzM3oiIHN0eWxlPSJmaWxsOiAjQUJBQkFDOyIvPgo8cGF0aCBkPSJNMTUuMjgsMTA5Ljk0M2MyLjkzNyw1LjksMi44NjcsMTEuMzU4LTIuMTY3LDE2LjI0MmMtMS4xMzEsMS4yOTgtMi4xNDMsMi42OTUtMy4wMjUsNC4xNzRsLTcuNjE0LDQuNjUzCgljMC44MzUtNi4zMzMsMi4xNzEtMTIuNTksMy45OTQtMTguNzEyYzAuMzU0LTEuMiwxLjUtMS41NjgsMi4zNzctMi4xNzFDMTAuOTUzLDExMi42OCwxMy4xMzEsMTExLjMzMiwxNS4yOCwxMDkuOTQzeiIgc3R5bGU9ImZpbGw6ICNBQkFDQUM7Ii8+CjxwYXRoIGQ9Ik0xMzEuNTk1LDUyLjk2MmMtMC4zOTQsMC42NzQtMS4xMTYsMS4xLTEuMSwyLjA3OGMwLjA2NCw0LjUzNSwwLjAzLDkuMDcyLDAuMDY4LDEzLjYwOAoJYzAsMC4zMTEsMC4zMDgsMC42MTksMC40NzMsMC45MjhsLTAuOTk1LDEuMjkzYzAtNi4wMSwwLjAwMi0xMi4wMjEsMC4wMDctMTguMDMyQzEzMC41MzMsNTMuMjQ5LDEzMS4wNjksNTMuMDQzLDEzMS41OTUsNTIuOTYyeiIgc3R5bGU9ImZpbGw6ICNFRjQ0NjQ7Ii8+CjxwYXRoIGQ9Ik0xMzAuNTI2LDg2Ljc2NmMwLDQuNjM5LTAuMDI0LDkuMjc4LDAsMTMuOTE3YzAuMDA1LDAuOTU0LTAuMzM0LDIuMDQ0LDAuNzE2LDIuNzQybC0wLjg2OSwxLjE4N2wtMC4xNjgtMC4wMzIKCWwtMC4xNjksMC4wMjljMC4wMDktNi4wMzQsMC4wMTctMTIuMDY3LDAuMDI1LTE4LjFDMTMwLjI0Myw4Ni41MzIsMTMwLjQxLDg2LjYyNCwxMzAuNTI2LDg2Ljc2NnoiIHN0eWxlPSJmaWxsOiAjRUY0MjYzOyIvPgo8cGF0aCBkPSJNMTMwLjAyMywyMC44MzNjMC4xMDYsMC4wNDMsMC4yMjYsMC4wMjksMC4zMi0wLjAzN2wwLjcyNCwwLjI0M2MtMS4wOTEsMi4yNjctMC40MzcsNC42NzgtMC41MjMsNy4wMTkKCWMtMC4xMTEsMy4wMTItMC4wMDUsNi4wMzEsMC4wMDcsOS4wNDdsLTAuNDkyLDAuNjUzQzEzMC4wNDcsMzIuMTE5LDEzMC4wMzUsMjYuNDc4LDEzMC4wMjMsMjAuODMzeiIgc3R5bGU9ImZpbGw6ICNFRjQyNjM7Ii8+CjxwYXRoIGQ9Ik0yNzMuNjkxLDY2LjI4MmMtMC45MzgtMC44MTItMC4zNTgtMS45NzctMC43NjctMi45NzJjMS4wODUtMC4xMSwwLjYsMS4xNzQsMS4zMDgsMS4zTDI3My42OTEsNjYuMjgyeiIgc3R5bGU9ImZpbGw6ICNCMUIyQjI7Ii8+CjxwYXRoIGQ9Ik02MC4wNjQsMjA3LjIzYzMuNDYxLDQuNTc1LDYuNzA1LDkuMzQsMTAuNDU2LDEzLjY2MmMyLjY4MywzLjA5MSwzLjMzMSw2LjMzNywzLjMsMTAuMjY3CgljLTAuMTUsMTkuOTMxLTAuMDYyLDM5Ljg2My0wLjA4OSw1OS43OTVjMCwxLjA0MSwwLjQ0NSwyLjIzMy0wLjYxMSwzLjA4OWMtNC4xODMtMi41NjMtOC4xOTMtNS4zOTctMTIuMDA1LTguNDg0CgljLTAuODctMC42NjUtMS4zMi0xLjc0NC0xLjE4LTIuODNjMC4wMDYtMy40NjYtMC4wNTYtNi45MzItMC4wOTItMTAuNGMtMC41MTYtMC43NTgtMC43NS0xLjY3NC0wLjY2MS0yLjU4NwoJYy0wLjA0NS00LjM2LTAuMDMxLTguNzItMC4wMTItMTMuMDhjMC4wMzctMS4wMDEsMC4yNjctMS45ODYsMC42NzctMi45Yy0wLjAwNS01Ljk0Ny0wLjAxMS0xMS44OTMtMC4wMTYtMTcuODQKCWMtMC41NDgtMC44NjItMC43ODEtMS44ODYtMC42NjEtMi45YzAtNS45ODYtMC4xLTExLjk3MywwLjA0NS0xNy45NTlDNTkuNDIzLDIxMi40NDYsNTguNDQxLDIwOS43LDYwLjA2NCwyMDcuMjN6IiBzdHlsZT0iZmlsbDogI0VEMUE0NzsiLz4KPHBhdGggZD0iTTU5LjgzNCwyMTQuOTk0YzAsNi45NzksMCwxMy45NTgsMCwyMC45MzZjLTguMDI2LDYuMzYxLTE2LjAyNiwxMi43NTYtMjQuMTE5LDE5LjAzMgoJYy0wLjc4LDAuNi0xLjUxLDIuNi0zLjEyOCwwLjk4N2MxLjkxOS03LjIwNiwzLjMyOS0xNC41NSw1LjgzNC0yMS42YzIuMjE0LTIuMTQ2LDQuMzMzLTQuNDE5LDcuMjkyLTUuNTg0CgljMS4xNTUtMC4yNzgsMi4zNDctMC4zNjgsMy41My0wLjI2NGMtMS4zMjktMC4xMTMtMi42NjgtMC4wMTEtMy45NjUsMC4zYy0xLjcwNSwwLjIxLTMuNDM4LDAuNjUtNC45MjEtMC42OTMKCWMxLjUwMS00LjgsMy4yNi05LjUxNSw1LjI3MS0xNC4xMjRDNTAuMzc2LDIxMy4xNzgsNTUuMjQ4LDIxMy41MjUsNTkuODM0LDIxNC45OTR6IiBzdHlsZT0iZmlsbDogI0FCQUNBQzsiLz4KPHBhdGggZD0iTTU5Ljg0OCwyNTMuNzY5YzAsNi4xODksMCwxMi4zNzcsMCwxOC41NjRjLTMuMTE5LDAuMjcxLTYuMDY1LDEuMzMzLTkuMDg3LDIuMDQKCWMtMS4wMzIsMC40MjMtMi4yMTcsMC4xNTYtMi45NjktMC42NjdjLTIuOTExLTMuMTgyLTUuODUtNi4zMzgtOC44MTgtOS40NjdjLTEuMDM4LTEuMS0wLjU3Mi0xLjUsMC42NTUtMS43NDQKCWMxLjQzMi0wLjI4NywyLjgyOS0wLjgsNC4yNzEtMC45ODFDNDkuOTI3LDI2MC43Nyw1NS41MzYsMjU4LjA0NSw1OS44NDgsMjUzLjc2OXoiIHN0eWxlPSJmaWxsOiAjQUJBQ0FDOyIvPgo8cGF0aCBkPSJNMTMwLjU5NSwyOTguNDM5YzAuMDA2LDQuNzg3LDAuMDEyLDkuNTc1LDAuMDE5LDE0LjM2M2MtMC41MzQsMS4zNTYsMC4zOSwyLjkyOS0wLjYxOCw0LjIxNAoJYzAuMDMzLTEyLjA3NSwwLjA2Ni0yNC4xNDgsMC4xLTM2LjIyYzAuMDkyLTAuMjk0LDAuMjM0LTAuMzM3LDAuNDM0LTAuMDg2bDMuMjg2LDIuNjI5Yy0yLjE4NiwxLjM4My0yLjUzOCwzLjQyOC0yLjU0OCw1Ljg3OQoJQzEzMS4yNDksMjkyLjI4OCwxMzIuMDI3LDI5NS40NjEsMTMwLjU5NSwyOTguNDM5eiIgc3R5bGU9ImZpbGw6ICNDMUEwQTQ7Ii8+CjxwYXRoIGQ9Ik0zNi45MjUsMTY3LjQ3OWMtMC4zMjEtMC45MjQtMS4xMjctMS42NjktMS0zLjE3MmMwLjgyOCwwLjg3LDEuMzU0LDEuOTgzLDEuNSwzLjE3NWwtMC4yNDgtMC4wMjUKCUwzNi45MjUsMTY3LjQ3OXoiIHN0eWxlPSJmaWxsOiAjRUYzQzYwOyIvPgo8cGF0aCBkPSJNMTM3LjE1MywxOTAuNzQ4Yy0yLjQ4OC0yLjQ4NC00Ljc2NS01LjE3MS02LjgwNi04LjAzM2MwLjAzLTAuNTUyLDAuMDg1LTEuMSwwLjA5LTEuNjUzCgljMC4wNDYtNC45MDUsMC4wNDYtNC45NzEsNS4wNi00LjczN2MxNS4yNzIsMC43MTMsMzAuNTQ2LDEuNDA5LDQ1LjgxMSwyLjI1MmMxMC45NjksMC42MDYsMjEuOTM2LDEuMjI3LDMyLjkxMywxLjY4OAoJYzMuNzQ3LDAuMTU3LDcuNSwwLjQsMTEuMjQ4LDAuNDljMS45NTEsMC4wNDgsMy4xNTEsMC43NDEsMy41LDIuOTMxYzAuNSwzLjA3MywxLjI3MSw2LjEwOSwyLjA3MSw5LjEyMwoJYzAuNDQ2LDEuNjgxLDAuMTQ2LDIuNDEtMS43MjcsMi4zMDljLTEwLjQxOS0wLjU2MS0yMC44NC0xLjA5NS0zMS4yNjMtMS42Yy00LjIwNy0wLjIwOS04LjQxNS0wLjMzMS0xMi42MjMtMC41NjYKCWMtMTMuNTMxLTAuNzU2LTI3LjA3OS0xLjItNDAuNjE1LTEuODc1QzE0Mi4yNjMsMTkwLjk1MiwxMzkuNzI1LDE5MC40OTIsMTM3LjE1MywxOTAuNzQ4eiIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CjxwYXRoIGQ9Ik0xNjguMTMzLDIyMC41MjdjLTYuMDA0LTQuNTI4LTExLjYzNi05LjUzLTE2Ljg0MS0xNC45NTdjMTQuMTc3LDAuNDQ3LDI4LjM0LDEuMTc4LDQyLjUsMi4wOAoJYzQuMzg0LDAuMjc5LDguNzc3LDAuMjYzLDEzLjE3LDAuNTdjOC42NzIsMC42LDE3LjM2OSwwLjg3NywyNi4wNTksMS4xODNjMS4xMzItMC4xNSwyLjE3MiwwLjY0NywyLjMyMSwxLjc3OQoJYzAuMDA5LDAuMDY4LDAuMDE1LDAuMTM3LDAuMDE3LDAuMjA2YzAuNzEsMy40MTEsMS41NzYsNi43OSwyLjQxNywxMC4xNzNjMC40MjQsMS43MDYtMC4xNDMsMi4zNDMtMS45MTQsMi4yMzUKCWMtOC45NDgtMC41NDUtMTcuOS0xLTI2Ljg1LTEuNTQ0Yy0zLjgzOC0wLjIzMy03LjY3OS0wLjIxMi0xMS41MjQtMC40NjRDMTg3LjcxNCwyMjEuMTQ3LDE3Ny45MTgsMjIwLjkyLDE2OC4xMzMsMjIwLjUyN3oiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNMTYwLjc4NiwxMzcuNWMtNS40NTMsMy43MDctMTAuMzgsOC4xLTE1LjU2OSwxMi4xNDZjLTQuODEyLDMuNzU0LTkuNTYzLDcuNTg2LTE0Ljc2NywxMS43MjIKCWMwLTYsMC4wMDUtMTEuNDc1LDAtMTYuOTUzYzAtMS4wNzIsMC43MTYtMS42MjksMS40NDItMi4yYzYuNjEtNS4yMzMsMTMuMjM5LTEwLjQ0MywxOS44MDUtMTUuNzMyCgljMC42ODUtMC43NDksMS43NzItMC45NzcsMi43LTAuNTY3YzAuMzUyLDAuMSwwLjcxMSwwLjE3NCwxLjA3NCwwLjIyMWM3LjM1LDEuOTE3LDcuMzQ3LDEuOTE4LDUuOTYzLDkuNDQ3CgljLTAuMDYxLDAuNDU2LTAuMDk5LDAuOTE0LTAuMTEyLDEuMzc0QzE2MS4yMjcsMTM3LjIwNSwxNjEuMDMyLDEzNy40MDIsMTYwLjc4NiwxMzcuNXoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNMTgxLjMwOSwxNjQuNjM1Yy0yLjczOS0wLjE3LTUuNDc2LTAuNC04LjIxNy0wLjQ4NWMtMS4zNDEtMC4wNDItMS42NDQtMC4zODctMS40MTktMS44CgljMS4zMTMtOC4yMzcsMi4zODYtMTYuNTEzLDMuNzUyLTI0Ljc0MWMwLjk4Mi01LjkxNCwxLjE1OC01Ljk5LDYuOTI0LTQuMjYzYzIuNDM0LDAuNzI5LDUuNzUsMC40NDUsNy4wODgsMi40CgljMS4yNTIsMS44My0wLjMzNSw0LjcyNC0wLjY0MSw3LjE0NWMtMC44LDYuMzY0LTIuMDI3LDEyLjY3OC0yLjc0MywxOS4wNUMxODUuNjU2LDE2NS40NzksMTgzLjM0NiwxNjQuNTY4LDE4MS4zMDksMTY0LjYzNXoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNMjEzLjEyOSwyNDkuN2MtNi40MDEtMi45Mi0xMi41MzgtNi4zODgtMTguMzQxLTEwLjM2NmMyLjU4NC0wLjYsNS4yMTUtMS4wNDMsNy43NDEtMS44MjcKCWM0LjIzMi0xLjMxNCw4LjQ2Mi0xLDEyLjc3Ny0wLjY1MmM1LjU2NiwwLjQ1LDExLjE2MywwLjUxMSwxNi43NDQsMC43NzRjMi4zNiwwLjI4LDQuNzM2LDAuNDE0LDcuMTEzLDAuNAoJYzIuNDA5LTAuMTg5LDIuNywxLjI3LDMuMDMyLDIuOTE4YzAuNDQxLDIuMjA2LTEuNTQxLDEuNzczLTIuNTE4LDIuMDIyYy04LjQyMiwyLjE0Ni0xNi44NzksNC4xNTYtMjUuMzIyLDYuMjIKCUMyMTMuOTMzLDI0OS4zMjcsMjEzLjUyNCwyNDkuNDk4LDIxMy4xMjksMjQ5Ljd6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPHBhdGggZD0iTTIxNy4wMDcsMTQ0LjM3OGMtMS4wNzQsNi43OTUtMi4xNzgsMTMuNTg1LTMuMiwyMC4zODhjLTAuMjEsMS40LTAuOTg0LDEuNjc1LTIuMSwxLjQyOAoJYy0yLjk5LTAuNDk1LTYuMDI4LTAuNjM0LTkuMDUxLTAuNDEyYy0yLjMzNSwwLjA0My0zLjEyOC0wLjcxLTIuNzQ0LTMuMDE4YzAuODczLTUuMjQ3LDEuNjQ5LTEwLjUxMSwyLjQ1NC0xNS43NwoJYzAuMzA1LTEuOTk1LDAuNjE4LTMuOTg5LDAuODU2LTUuOTkyYzAuMTY2LTEuNCwwLjctMS45MzksMi4xODMtMS41MTNjMy4zNDMsMC45NTcsNi43MjIsMS43ODgsMTAuMDg2LDIuNjY5CgljMC45NjYsMC4wOTksMS42NywwLjk2MiwxLjU3MSwxLjkyOUMyMTcuMDUyLDE0NC4xODUsMjE3LjAzMywxNDQuMjgzLDIxNy4wMDcsMTQ0LjM3OHoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNMjQ3LjMyNywyNjQuMDUxYy00LjU1Ni0xLjMxNC05LjAwOS0yLjk2Mi0xMy4zMjItNC45MzFjMy4yMTEtMS4zMDgsNi42NS0xLjc2LDkuOTctMi42NjMKCWMwLjc5NC0wLjMzMywxLjcwNywwLjA0MSwyLjAzOSwwLjgzNWMwLjA3OCwwLjE4NiwwLjExOSwwLjM4NSwwLjEyMSwwLjU4NkMyNDYuNSwyNTkuOTQxLDI0Ni45MjcsMjYxLjk5NCwyNDcuMzI3LDI2NC4wNTF6IiBzdHlsZT0iZmlsbDogI0ZERkNGQzsiLz4KPHBhdGggZD0iTTE1Ny43NiwxNTcuNzQyYzAuNTE2LDUuNjY5LDAuMiw1LjkyOC02LjEzLDUuMDU3QzE1My41MDUsMTYwLjkxOSwxNTUuNTU4LDE1OS4yMjUsMTU3Ljc2LDE1Ny43NDJ6IiBzdHlsZT0iZmlsbDogI0Y2RjZGNTsiLz4KPHBhdGggZD0iTTEzMC4yLDEyNS4wODVjMC4wMS0xLjgsMC4wMi0zLjYwMiwwLjAzMS01LjQwNmMxLjc2OSwwLjEyNiw0LjI1MywwLjAxMiw0Ljc4NCwxLjUyNAoJYzAuNDcyLDEuMzQ0LTIuMTY3LDEuOTg5LTMuMiwzLjE4N0MxMzEuMzkxLDEyNC44NjksMTMwLjkyOCwxMjUuMzExLDEzMC4yLDEyNS4wODV6IiBzdHlsZT0iZmlsbDogI0ZCRjFGMDsiLz4KPHBhdGggZD0iTTE2MC43ODYsMTM3LjVsMC41MzQtMC41NDVjLTAuMDQxLDIuOTg1LTAuNTAzLDUuOTUtMS4zNzMsOC44MDZDMTU5LjYsMTQyLjk0NywxNjAuMzU0LDE0MC4yMzcsMTYwLjc4NiwxMzcuNQoJeiIgc3R5bGU9ImZpbGw6ICNCMEIxQjE7Ii8+CjxwYXRoIGQ9Ik0xNjQuMjc1LDE2My40MTNjLTEuMzE5LDAuOTc4LTIuNzE0LDAuNTU4LTQuNTg2LDAuNzRDMTYxLjM5MSwxNjIuMzMsMTYyLjksMTYzLjMsMTY0LjI3NSwxNjMuNDEzeiIgc3R5bGU9ImZpbGw6ICNCMEIxQjE7Ii8+CjxwYXRoIGQ9Ik0yMjUuNDY5LDE2OS44MTZjLTAuMzE0LTIuOTc5LTIuMzItMy4zMzktNC43NS0zLjA0MkMyMjUuMTY3LDE2NS44ODksMjI1Ljc5MSwxNjYuMywyMjUuNDY5LDE2OS44MTZ6IiBzdHlsZT0iZmlsbDogI0IyQjNCMzsiLz4KPHBhdGggZD0iTTIyMi4zMTEsMTU1LjE5MWMtMS4wMTYtMS44OC0xLjUxNy0zLjk5Ni0xLjQ1My02LjEzMkMyMjEuODEzLDE1MC45NjIsMjIyLjMxMSwxNTMuMDYyLDIyMi4zMTEsMTU1LjE5MXoiIHN0eWxlPSJmaWxsOiAjQjFCMkIyOyIvPgo8cGF0aCBkPSJNMTQwLjAzMywxNjIuMzcxYy0xLjE5MiwwLjc0Ni0yLjY4NCwwLjgyMS0zLjk0NSwwLjJDMTM3LjU1LDE2MS40MjksMTM4LjgxMSwxNjIuMDU3LDE0MC4wMzMsMTYyLjM3MXoiIHN0eWxlPSJmaWxsOiAjQjBCMUIxOyIvPgo8cGF0aCBkPSJNMjUxLjkzMiwxNTIuMTUyYzEuODE5LTAuMTYsMy42NDQsMC4yMzYsNS4yMzMsMS4xMzVDMjU1LjU0OCwxNTMuNDksMjU0LjA4MSwxNTMuMDI5LDI1MS45MzIsMTUyLjE1MnoiIHN0eWxlPSJmaWxsOiAjQjFCMkIyOyIvPgo8cGF0aCBkPSJNMjMzLjAyMiwxNDYuODg0Yy0yLjAwOCwwLjAxOS0zLjk5MS0wLjQ1NC01Ljc3NC0xLjM3OUMyMjkuMjY5LDE0NS4zNSwyMzEuMjg5LDE0NS44MzIsMjMzLjAyMiwxNDYuODg0eiIgc3R5bGU9ImZpbGw6ICNCMUIyQjI7Ii8+CjxwYXRoIGQ9Ik0zMDYuMTE5LDIwNC40MjFsMS4yNTksNC44ODRDMzA1Ljk1OSwyMDcuOTY2LDMwNi4wNzQsMjA2LjIsMzA2LjExOSwyMDQuNDIxeiIgc3R5bGU9ImZpbGw6ICNCMUIyQjI7Ii8+CjxwYXRoIGQ9Ik0xOTQuODQzLDIzNS44NThoLTMuNjQ5bC0wLjAwOC0wLjI3N2gzLjY1TDE5NC44NDMsMjM1Ljg1OHoiIHN0eWxlPSJmaWxsOiAjQjVCNkI2OyIvPgo8cGF0aCBkPSJNMjAwLjQxMSwyMzYuMzU2aC0zLjIzN2wwLjAwNS0wLjI1NmgzLjIzN0wyMDAuNDExLDIzNi4zNTZ6IiBzdHlsZT0iZmlsbDogI0IzQjRCNDsiLz4KPHBhdGggZD0iTTE5MS4xODcsMTY0Ljk0MWMxLjE0MS0wLjM2NCwyLjM2Ny0wLjM3LDMuNTExLTAuMDE2QzE5My41NTgsMTY1LjI5OCwxOTIuMzMsMTY1LjMwMywxOTEuMTg3LDE2NC45NDF6IiBzdHlsZT0iZmlsbDogI0I0QjRCNTsiLz4KPHBhdGggZD0iTTE3MC4wMzMsMTY0LjAwNWgtMy4xbC0wLjAwNy0wLjI3N2gzLjE1MkwxNzAuMDMzLDE2NC4wMDV6IiBzdHlsZT0iZmlsbDogI0I1QjZCNjsiLz4KPHBhdGggZD0iTTE0NS43ODUsMTYyLjg4NGgtMy4xMkMxNDMuNjM5LDE2Mi4zNjEsMTQ0LjgxMSwxNjIuMzYxLDE0NS43ODUsMTYyLjg4NHoiIHN0eWxlPSJmaWxsOiAjQjVCNkI2OyIvPgo8cGF0aCBkPSJNMTMzLjcyMSwxNjIuMWMtMC44NTQsMC40MTItMS44MzcsMC40NjYtMi43MzEsMC4xNUMxMzEuOTYzLDE2MS41NTUsMTMyLjg3OCwxNjIuMSwxMzMuNzIxLDE2Mi4xeiIgc3R5bGU9ImZpbGw6ICNCNUI2Qjc7Ii8+CjxwYXRoIGQ9Ik0xMTguNTgzLDE2Ny4zNzZjMS40ODMsMC40NTcsMS42MzQsMS44NjcsMi4zNzksMi44NTNDMTE5LjQ4NSwxNjkuNzY3LDExOS4zMzEsMTY4LjM1OSwxMTguNTgzLDE2Ny4zNzZ6IiBzdHlsZT0iZmlsbDogI0VFMzY1RDsiLz4KPHBhdGggZD0iTTk0LjYxOSwxMjMuMDVsMS4zMSwyLjc1MUM5NC44NDgsMTI1LjM1OSw5NC4yOCwxMjQuMTY4LDk0LjYxOSwxMjMuMDV6IiBzdHlsZT0iZmlsbDogI0VFMzc1RTsiLz4KPHBhdGggZD0iTTk5LjUzMywxMzQuNTg1Yy0wLjcyNS0wLjY4NS0xLjEzNS0xLjYzOS0xLjEzMy0yLjYzNkM5OS4yNiwxMzIuNTMxLDk5LjcwMiwxMzMuNTYxLDk5LjUzMywxMzQuNTg1eiIgc3R5bGU9ImZpbGw6ICNFRTM2NUU7Ii8+CjxwYXRoIGQ9Ik0xMjcuNTU0LDE3OS4wNjRjLTAuOTktMC4yNDQtMS43NjItMS4wMi0yLTIuMDEyQzEyNi40OTksMTc3LjM3MywxMjcuMjM5LDE3OC4xMTgsMTI3LjU1NCwxNzkuMDY0eiIgc3R5bGU9ImZpbGw6ICNFRTM1NUQ7Ii8+CjxwYXRoIGQ9Ik0xMjMuNzE3LDE3NC4wNDNjLTAuODYzLDAuMDA5LTEuMi0wLjQ2OS0xLjM0NC0xLjI0MkMxMjMuMzIsMTcyLjgxMywxMjMuNDMyLDE3My41LDEyMy43MTcsMTc0LjA0M3oiIHN0eWxlPSJmaWxsOiAjRUYzODVFOyIvPgo8cGF0aCBkPSJNOTEuNDY0LDExNi40MzJjLTAuNjQxLTEuMjEyLTEuMzMxLTEuNzY0LTAuOTI4LTIuNzMxQzkxLjQwNiwxMTQuMyw5MS4zODIsMTE1LjE3NCw5MS40NjQsMTE2LjQzMnoiIHN0eWxlPSJmaWxsOiAjRUYzOTVFOyIvPgo8cGF0aCBkPSJNOTEuMzYzLDExNS42MDVjMC42NDMsMS4yMjEsMS4zNCwxLjc2OSwwLjkzNCwyLjczNkM5MS40MTYsMTE3Ljc0Niw5MS40NTMsMTE2Ljg3LDkxLjM2MywxMTUuNjA1eiIgc3R5bGU9ImZpbGw6ICNFRTM3NUQ7Ii8+CjxwYXRoIGQ9Ik0xMzAuNTk1LDI5OC40MzljLTAuMDQtNC4xOTItMC4wMjItOC4zODUtMC4xNDMtMTIuNTc1Yy0wLjA3NC0yLjU4MiwxLjg1Ny0yLjIsMy4zNi0yLjUyNWwxNC45MTIsMTAuNjM5CglMMTMwLjU5NSwyOTguNDM5eiIgc3R5bGU9ImZpbGw6ICNGRkZERkQ7Ii8+CjxwYXRoIGQ9Ik01Ni4xMzQsMjAwLjU1N2MtMS41NTQtMC4wMjctMy4xMDctMC4wNTYtNC42Ni0wLjA4NWMwLjU2LTEuMjMsMS4xMTktMi40NTcsMS44LTMuOTU1CglDNTQuNTA2LDE5Ny42NDMsNTUuNDgyLDE5OS4wMjEsNTYuMTM0LDIwMC41NTd6IiBzdHlsZT0iZmlsbDogI0I0QTlBQTsiLz4KPHBhdGggZD0iTTEwMS42NDgsMjU1LjM1NWwtNi40Mi02LjQ2MWwtMC4yMTYsMC4yMWw2LjE0Niw2LjczNEwxMDEuNjQ4LDI1NS4zNTV6IiBzdHlsZT0iZmlsbDogI0VFMzU1QzsiLz4KPHBhdGggZD0iTTIxLjQ4MiwxMzAuNTI2bC0xLjctNC45NzZsMC41NDQtMC4ybDEuNzYsNC45TDIxLjQ4MiwxMzAuNTI2eiIgc3R5bGU9ImZpbGw6ICNFRTM3NUU7Ii8+CjxwYXRoIGQ9Ik0xMTcuMTc4LDI2OS45NjRjMS4wNTUsMC4xLDEuNDg0LDAuODUxLDIuNDExLDEuOUMxMTguNTExLDI3MS42ODksMTE3LjYsMjcwLjk3MSwxMTcuMTc4LDI2OS45NjR6IiBzdHlsZT0iZmlsbDogI0VFMzY1RDsiLz4KPHBhdGggZD0iTTEyMi44MDYsMjc0LjY0YzEuMjQ4LDAuMDU5LDEuODA4LDAuOTU5LDIuNzczLDIuMjU3Yy0xLjE5LTAuMzQ5LTIuMTktMS4xNjEtMi43NzUtMi4yNTRMMTIyLjgwNiwyNzQuNjR6IiBzdHlsZT0iZmlsbDogI0VFMzQ1QzsiLz4KPHBhdGggZD0iTTMxLjkzOSwxNTUuODE3Yy0xLjMtMC41NDktMS4wNzQtMS44MjItMS4zNi0yLjg1MmMwLjk3NiwwLjcsMS4xLDEuODA5LDEuMzYyLDIuODVMMzEuOTM5LDE1NS44MTd6IiBzdHlsZT0iZmlsbDogI0VFMzY1RTsiLz4KPHBhdGggZD0iTTEyMi44LDI3NC42NDNjLTAuOTA1LTAuMDQxLTEuNjkyLTAuNjMxLTEuOTg2LTEuNDg4YzAuODk2LDAuMDYzLDEuNjczLDAuNjQzLDEuOTg4LDEuNDg1TDEyMi44LDI3NC42NDN6IiBzdHlsZT0iZmlsbDogI0VFMzc1RTsiLz4KPHBhdGggZD0iTTEzMC41MjUsMjgwLjcwOWMtMC4xMzQsMC4wNjktMC4yODQsMC4wOTgtMC40MzQsMC4wODZjLTAuNTg1LTAuMzYxLTEuMzA3LTAuNi0xLjM3My0xLjUyMwoJQzEyOS43NTEsMjc5LjI3NSwxMzAuMDg4LDI4MC4wNTUsMTMwLjUyNSwyODAuNzA5eiIgc3R5bGU9ImZpbGw6ICNFRjM5NUU7Ii8+CjxwYXRoIGQ9Ik0zMS45NDEsMTU1LjgxNWMwLjc1MiwwLjUyMywxLjExLDEuNDUsMC45MDUsMi4zNDNjLTAuNzAxLTAuNTYxLTEuMDQ3LTEuNDU1LTAuOTA3LTIuMzQyTDMxLjk0MSwxNTUuODE1eiIgc3R5bGU9ImZpbGw6ICNFRjM4NUU7Ii8+CjxwYXRoIGQ9Ik0yNDMuMjU0LDU3LjYzMmwxMS45MjUtMS40NjZjMS4wNzgtMC4xNzgsMi4wOTYsMC41NSwyLjI3NSwxLjYyOGMwLjAwNywwLjA0MSwwLjAxMiwwLjA4MiwwLjAxNiwwLjEyMwoJYzEuNjYxLDcuMzA5LDMuNDI4LDE0LjU5NCw1LjEyMSwyMS45YzAuMywxLjI5NCwwLjE1NSwyLjE3LTEuNjQzLDEuNjQzYy0zLjc2MS0xLjEtNy41NzEtMi4wMzMtMTEuMzUzLTMuMDY2CgljLTAuOTYyLTAuMjYzLTItMC41MTgtMi4yMzgtMS43MzhDMjQ2LjEzMiw3MC4yODEsMjQ0LjEzNCw2NC4wNzgsMjQzLjI1NCw1Ny42MzJ6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPHBhdGggZD0iTTIxNS4zNTQsNjMuNTUzYzQuNDk2LTEuNTI5LDkuMTI0LTIuNjM0LDEzLjgyNi0zLjNjMC44ODUsMy44MTgsMS43NDYsNy42NDIsMi42NjQsMTEuNDUyCgljMC4zNTMsMS40NjcsMC4xMzYsMi4wNDgtMS41NDgsMS41NTRjLTMuNTc4LTEuMDQ4LTcuMTY4LTIuMDgxLTEwLjgwNS0yLjg4Yy0xLjg3NS0wLjQxMi0yLjg4LTEuMi0zLjEyLTMuMTU0CglDMjE2LjEyNyw2NS45NzcsMjE1Ljc4Nyw2NC43NDksMjE1LjM1NCw2My41NTN6IiBzdHlsZT0iZmlsbDogI0ZGRkVGRTsiLz4KPHBhdGggZD0iTTIwNC45LDY2LjQ0NWMwLjcyNC0wLjIsMS4zMDktMC45LDIuMTY5LTAuNjI4YzAuMjI3LDEuNjc1LDIuMjI2LDAuNTc4LDIuODI1LDEuOTg0CglDMjA4LjEyNyw2Ny44OTMsMjA2LjM3OCw2Ny40MTgsMjA0LjksNjYuNDQ1eiIgc3R5bGU9ImZpbGw6ICNCMUIyQjE7Ii8+CjxwYXRoIGQ9Ik0yNjkuMyw4My45MTljMS41NDktMC4zODcsMy4xODgsMC4wNCw0LjM1MSwxLjEzM0wyNjkuMyw4My45MTl6IiBzdHlsZT0iZmlsbDogI0IxQjFCMTsiLz4KPHBhdGggZD0iTTI3Mi4xODUsNTkuMzY4YzAuNzU3LDAuNTg2LDEuMDgzLDEuNTczLDAuODIzLDIuNDk1QzI3MS45ODksNjEuNCwyNzIuMDMsNjAuNTgsMjcyLjE4NSw1OS4zNjh6IiBzdHlsZT0iZmlsbDogI0IxQjJCMjsiLz4KPHBhdGggZD0iTTI3MS41LDU2LjkzOWMwLjU3OSwwLjM1LDAuODQ4LDAuNzc2LDAuNjExLDEuM2MtMC4wMTMsMC4wMjgtMC4zNzctMC4wMjYtMC4zOTQtMC4wOQoJQzI3MS42MTEsNTcuNzUxLDI3MS41NjIsNTcuMzQzLDI3MS41LDU2LjkzOXoiIHN0eWxlPSJmaWxsOiAjQjFCMkIyOyIvPgo8cGF0aCBkPSJNMTQ0LjI0OCwzMDkuNjYyYy0xLjMyLDEuMzEzLTMuMiwwLjcyNC00Ljc1OSwxLjM4OUMxNDAuODYxLDMwOS45MzYsMTQyLjUyOCwzMDkuODA2LDE0NC4yNDgsMzA5LjY2MnoiIHN0eWxlPSJmaWxsOiAjQjFCMkIyOyIvPgo8cGF0aCBkPSJNNDUuNjE5LDIyOS4yOWMwLjAxNS0wLjM1MSwwLjAzMS0wLjcwMSwwLjA0Ni0xLjA1MmgzLjc2MUM0OC4yMDksMjI4Ljg3OSw0Ni43OTEsMjI4LjU4MSw0NS42MTksMjI5LjI5eiIgc3R5bGU9ImZpbGw6ICNCNkI2Qjc7Ii8+CjxwYXRoIGQ9Ik01Ni4xODEsMjI5Yy0xLjQ0MywwLjM5OC0yLjk2MiwwLjQzMy00LjQyMSwwLjFDNTMuMjAzLDIyOC43MDMsNTQuNzIyLDIyOC42NjgsNTYuMTgxLDIyOXoiIHN0eWxlPSJmaWxsOiAjQjJCNEIzOyIvPgo8L3N2Zz4K) */
export const KndcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-kndc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

KndcCircleColorful.displayName = 'KndcCircleColorful';
