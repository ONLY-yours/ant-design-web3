// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/osmo-colorful.svg';

/**![OsmoColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9ImFudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1MYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MDAgMjUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwMCAyNTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Zz4KCTxwYXRoIGQ9Ik0yMzg3LjksNDQxLjljLTI1LjQtOTgtMTA3LjEtMTk2LTI1NC4yLTMwNS4xQzIwMTUuNyw0OS45LDE4OTAuNCwwLDE3OTAuNSwwYy0yMCwwLTM4LjEsMS44LTU2LjMsNS41ICAgYy00NS40LDkuMi04NS4zLDQyLjUtMTEwLjgsOTIuNWMtMzAuOSw1OS4yLTM4LjEsMTM4LjctMTguMiwxODYuOGM3LjMsMTQuOCwxNi4zLDMzLjMsMjcuMiw0OS45Yy05Ni4yLDU5LjItMTUwLjcsNzUuOC0xNTgsNzcuNyAgIGMyNTAuNiw4NS4xLDQ1OS40LDI2Mi42LDU5MC4yLDQ5My43bDEuOC0yMi4yYzUuNC02MSwyMy42LTEzMS4zLDQ5LTIwMy40YzI1LjQsNy40LDUwLjgsMTEuMSw3Ni4zLDExLjEgICBjNjcuMiwwLDEyNS4zLTI3LjcsMTYxLjYtNzcuN0MyMzg5LjgsNTY0LDI0MDQuMyw0OTcuNCwyMzg3LjksNDQxLjl6IiBzdHlsZT0iZmlsbDogIzYwMkY5MjsiLz4KCQoJCTxyYWRpYWxHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzFfIiBjeD0iMTAzNi40MDA2IiBjeT0iMTY5My40NjkiIHI9IjQ5LjAxOTYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTYuNTU2NCAwIDAgLTE2Ljg1OTYgLTE0ODU1LjA2NTQgMjg4OTEuNDkyMikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQkVBRjM7c3RvcC1vcGFjaXR5OjAuNiIvPgoJCTxzdG9wIG9mZnNldD0iMC42ODA3IiBzdHlsZT0ic3RvcC1jb2xvcjojQTA4N0JGIi8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMTcxMDJFIi8+Cgk8L3JhZGlhbEdyYWRpZW50PgoJPHBhdGggZD0iTTIxMjYuNSw2MjYuOWMxNjUuMiw0Ni4yLDIzMi40LTgzLjIsMjEwLjYtMTcwLjFjLTIzLjYtODYuOS05OS45LTE3NS43LTIzNC4yLTI3NS41ICAgYy0xMzQuNC05OS45LTI3MC42LTE0MC41LTM1Ny43LTEyMmMtODcuMiwxOC41LTExMi42LDE1My41LTkwLjgsMjA1LjNjOS4xLDIwLjMsMjkuMSw0OS45LDU2LjMsODMuMmMtMzQuNSwyNC02Ny4yLDQyLjUtOTQuNCw1OS4yICAgYzE2Ny4xLDc1LjgsMzEyLjMsMTk0LjIsNDIxLjMsMzQyLjFjMTIuNy00OS45LDMwLjktOTQuMyw0Ny4yLTEzMy4xQzIwOTcuNCw2MTcuNiwyMTExLjksNjIxLjMsMjEyNi41LDYyNi45eiIgc3R5bGU9ImZpbGw6IHVybCgjYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzFfKTsiLz4KCQoJCTxyYWRpYWxHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDQ4NTAxNDA5NDY3NTM5MDI5MjMwMDAwMDEzODYzMTE1NjQ1NTEzNTUxMjUzXyIgY3g9Ijk3Ni4xNjg2IiBjeT0iMTY3MS44MTMyIiByPSI0OS4wMTk2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQwLjUwNzQgMCAwIC00MS4yNDkzIC0zNzY4OS41NzgxIDY5NjUzLjc1KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZCRUFGMztzdG9wLW9wYWNpdHk6MC42Ii8+CgkJPHN0b3Agb2Zmc2V0PSIwLjY4MDciIHN0eWxlPSJzdG9wLWNvbG9yOiNBMDg3QkYiLz4KCQk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNzEwMkUiLz4KCTwvcmFkaWFsR3JhZGllbnQ+Cgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI2FudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA0ODUwMTQwOTQ2NzUzOTAyOTIzMDAwMDAxMzg2MzExNTY0NTUxMzU1MTI1M18pOyIgZD0iTTExODAuNCwyNDM5ICAgYzU2MC42LDAsMTAxNS4xLTQ2Mi44LDEwMTUuMS0xMDMzLjdTMTc0MSwzNzEuNywxMTgwLjQsMzcxLjdjLTU2MC42LDAtMTAxNS4xLDQ2Mi44LTEwMTUuMSwxMDMzLjdTNjE5LjgsMjQzOSwxMTgwLjQsMjQzOXoiLz4KCTxwYXRoIGQ9Ik0yMjUzLjYsMzcxLjdjLTEzOC0xNDcuOS0yNTQuMi0xODYuOC0zOTQtMjE4LjJjLTEwOS0yNS45LTc5LjktODguOCw1Mi43LTc1LjggICBjLTYzLjYtMjIuMi0xMjMuNS0yNy43LTE2Ny4xLTE4LjVjLTg3LjIsMTguNS0xMTIuNiwxNTMuNS05MC44LDIwNS4zYzkuMSwyMC4zLDI5LjEsNDkuOSw1Ni4zLDgzLjJjLTQ5LDMzLjMtOTAuOCw1Ny4zLTEyNS4zLDc1LjggICBjMTYuMyw3LjQsMzYuMywxNi42LDU5LjksMjkuNmM2MS43LDMzLjMsMTI4LjksODguOCwxMjguOSw4OC44Yy0xMDEuNy04OC44LTc5LjktMTI5LjQsNTkuOS0yMjkuMyAgIGM0My42LTMxLjQsMTIzLjUtMjcuNywxOTcuOSwxMS4xYzc0LjQsMzguOCwxNjEuNiwxMzYuOCwxNjEuNiwxMzYuOGwtODMuNSwxNjIuN2M1LjQsMS45LDEwLjksMy43LDE2LjMsNS42ICAgYzUyLjcsMTQuOCw5NC40LDExLjEsMTI3LjEtMS45QzIyOTEuNyw2MDIuOCwyMzkxLjYsNTIxLjQsMjI1My42LDM3MS43eiIgc3R5bGU9Im9wYWNpdHk6IDAuNjsgZmlsbDogI0E5ODc5ODsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiLz4KCTxwYXRoIGQ9Ik0xODU3LjcsMjQyLjJjMzYuMywxNC44LDgzLjUsNDAuNywxNDEuNiw3OS41YzY5LDQ2LjIsMTI4LjksOTgsMTY3LjEsMTM4LjcgICBjLTYzLjYsODUuMS0xMDUuMywyMDEuNi0xMzAuNywyODIuOWMxMi43LDE4LjUsMjcuMiwzNyw0MCw1NS41YzEyLjctNDYuMiwzNC41LTExNC43LDYzLjYtMTgzLjFjNy4zLDEuOSwxNi4zLDEuOSwyNS40LDEuOSAgIGMyMS44LDAsNDcuMi0zLjcsNjcuMi0yMC4zYzE0LjUtMTEuMSwzMC45LTMxLjQsMjkuMS02OC40YzAtMzUuMS0yNy4yLTc5LjUtODMuNS0xMzMuMWMtNDAtMzguOC05NC40LTgxLjQtMTQ4LjktMTIwLjIgICBjLTE1Ni4yLTEwNS40LTI2NS4xLTEzNS0zMTQuMS04NS4xYy0zMi43LDMzLjMtMjkuMSw3NC0xOC4yLDEwMy42Yy01OC4xLDM4LjgtMTA3LjEsNjYuNi0xMzkuOCw4NS4xYzIxLjgsNy40LDQxLjgsMTYuNiw2My42LDI1LjkgICBDMTY3Ny45LDM3My41LDE3NjEuNSwzMTkuOSwxODU3LjcsMjQyLjJ6IE0yMjAwLjksNTA2LjdjNS40LDkuMiw3LjMsMTguNSw3LjMsMjRjMCwxNi42LTUuNCwyMi4yLTkuMSwyNS45ICAgYy03LjMsNS41LTIxLjgsOS4yLTM0LjUsOS4yQzIxNzUuNSw1NDMuNiwyMTg4LjIsNTI1LjEsMjIwMC45LDUwNi43eiBNMTc1Mi40LDIzMS4xYzUuNC01LjUsMjAtOS4yLDQzLjYtNS41ICAgYy0xOC4yLDE0LjgtMzYuMywyNy43LTU0LjUsNDAuN0MxNzM5LjcsMjUzLjMsMTc0MS41LDI0MC40LDE3NTIuNCwyMzEuMXoiIHN0eWxlPSJmaWxsOiAjNjAyRjkyOyIvPgoJPHBhdGggZD0iTTExODAuNCwzMTAuNmMtNTkzLjgsMC0xMDc1LDQ5MC0xMDc1LDEwOTQuN2MwLDYwNC43LDQ4MS4yLDEwOTQuNywxMDc1LDEwOTQuN2M1OTMuOCwwLDEwNzUtNDkwLDEwNzUtMTA5NC43ICAgQzIyNTUuNCw4MDAuNywxNzcyLjQsMzEwLjYsMTE4MC40LDMxMC42eiBNMTE4MC40LDI0MzljLTU2MS4xLDAtMTAxNS4xLTQ2Mi4zLTEwMTUuMS0xMDMzLjdjMC01NzEuNCw0NTQtMTAzMy43LDEwMTUuMS0xMDMzLjcgICBjNTYxLjEsMCwxMDE1LjEsNDYyLjMsMTAxNS4xLDEwMzMuN0MyMTk1LjQsMTk3Ni43LDE3MzkuNywyNDM5LDExODAuNCwyNDM5eiIgc3R5bGU9ImZpbGw6ICM2MDJGOTI7Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAyNDY4ODQ5NzkyNDYxMDI4MDYwMDAwMDAxODQxNDUxNDAyODcyOTMxNDk4NF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTAxMi4xMDc2IiB5MT0iNzUuMjYxMiIgeDI9IjEzNDguNjczNyIgeTI9IjIxMTQuMzA4OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDI1MDAuMTEwMSkiPgoJCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzlBRDlFNSIvPgoJCTxzdG9wIG9mZnNldD0iMC42MjAyIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggc3R5bGU9Im9wYWNpdHk6MC42O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAwMjQ2ODg0OTc5MjQ2MTAyODA2MDAwMDAwMTg0MTQ1MTQwMjg3MjkzMTQ5ODRfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iICAgTTExODAuNCwyNDM5YzU2MC42LDAsMTAxNS4xLTQ2Mi44LDEwMTUuMS0xMDMzLjdTMTc0MSwzNzEuNywxMTgwLjQsMzcxLjdjLTU2MC42LDAtMTAxNS4xLDQ2Mi44LTEwMTUuMSwxMDMzLjcgICBTNjE5LjgsMjQzOSwxMTgwLjQsMjQzOXoiLz4KCTxwYXRoIGQ9Ik0xMTczLjEsMjMxMy4yYy01NTMuOC05MC42LTkyOS43LTYyMS4zLTgzOC45LTExODUuM2M0MC0yNDkuNiwxNjMuNC00NjIuMywzMzcuOC02MTUuOCAgIEM0MTcuNyw2NjIsMjI4LjksOTIyLjcsMTc4LDEyNDAuOGMtODksNTY0LDI4Ni45LDEwOTQuNyw4MzguOSwxMTg1LjNjMzA4LjcsNTEuOCw2MDYuNS00Ni4yLDgyNi4yLTIzOC41ICAgQzE2NDguOSwyMzAyLjEsMTQxMi44LDIzNTIuMSwxMTczLjEsMjMxMy4yeiIgc3R5bGU9Im9wYWNpdHk6IDAuNjsgZmlsbDogI0E5ODc5ODsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTEwNDMwNTkzNjM0NjExODkyNDAwMDAwMDA5Njg3MDA1Mzc3MzEwNDUzNjM4XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxOTA0Ljk5MzIiIHkxPSIxNzg2LjQ5NjgiIHgyPSIxMDUxLjcyNzMiIHkyPSIxMDE3LjY3OTMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNTAwLjExMDEpIj4KCQk8c3RvcCBvZmZzZXQ9IjAuMjg4OCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJCTxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggc3R5bGU9Im9wYWNpdHk6MC42O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAxMTA0MzA1OTM2MzQ2MTE4OTI0MDAwMDAwMDk2ODcwMDUzNzczMTA0NTM2MzhfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iICAgTTEzNDIsMzg2LjVjLTI1Ni00Mi41LTUwNC44LDE2LjYtNzA4LjIsMTQ3LjljLTMuNiwzLjctNy4zLDcuNC03LjMsNy40Yzc4LjEtNDguMSwxOTIuNS05MC42LDE5Mi41LTkwLjYgICBjLTI5NC4yLDE3My44LTM4NSwzNzEuNy0zODUsMzcxLjdjMTE0LjQtMjI1LjYsNDUwLjMtMzg0LjYsNzEzLjYtMzk1LjdjMjYzLjMtMTEuMSw0MzUuOCw2OC40LDY0Ni40LDI0MC40ICAgYzIxMC42LDE3My44LDMzNy44LDUyOC44LDMyNSw4MDkuOWMtMTAuOSwyODEuMS0xNTYuMiw1MDguNS0xNTYuMiw1MDguNWM5OS45LTEzMS4zLDE1OS44LTIyNy40LDE5Ny45LTMyNS40ICAgYzcuMy0yOS42LDE0LjUtNTkuMiwxOC4yLTkwLjZDMjI2OS45LDEwMDcuOCwxODk1LjgsNDc3LjEsMTM0MiwzODYuNXoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTczODU1NzY1MTY2MDU0MjEzMjcwMDAwMDA2MDA5MTIyNzg1NDUwNTU3MDY1XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMTQuMzY0MiIgeTE9IjYxMy4wOTc0IiB4Mj0iMjE0NC42MTUyIiB5Mj0iNjEzLjA5NzQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNTAwLjExMDEpIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMzODRFQTIiLz4KCQk8c3RvcCBvZmZzZXQ9IjAuOTk1MiIgc3R5bGU9InN0b3AtY29sb3I6I0Q1NDc5OSIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIHN0eWxlPSJmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTczODU1NzY1MTY2MDU0MjEzMjcwMDAwMDA2MDA5MTIyNzg1NDUwNTU3MDY1Xyk7IiBkPSJNMjE0NC42LDEzOTYuMSAgIGMwLDU0MS44LTQzMi4yLDk4MS45LTk2NC4yLDk4MS45Yy01MzIsMC05NjYtNDQwLjEtOTY2LTk4MS45SDIxNDQuNnoiLz4KCTxnIHN0eWxlPSJvcGFjaXR5OiAwLjY7Ij4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAxMDg5ODg2NzcyMjA3NTE0MDIxMDAwMDAwMTI1ODQxMTY3MjEwMjY3MjUyNTJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIyNDAuODIzNSIgeTE9IjEwMTIuMDgyMyIgeDI9IjExNzIuOTMxNCIgeTI9IjIxLjAyMjQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNTAwLjExMDEpIj4KCQkJPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNjtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTA4OTg4Njc3MjIwNzUxNDAyMTAwMDAwMDEyNTg0MTE2NzIxMDI2NzI1MjUyXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IiAgICBNMjA2OC4zLDEzOTYuMWMwLDUyOC44LTQxMC40LDk2MS41LTkyNi4xLDk4MS45YzEyLjcsMCwyNS40LDAsMzguMSwwYzUzMiwwLDk2NC4yLTQ0MC4xLDk2NC4yLTk4MS45SDIwNjguM3oiLz4KCTwvZz4KCTxnIHN0eWxlPSJvcGFjaXR5OiAwLjc7Ij4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAxNDU3NzcxNjU3NjEzMjk5MDQxMTAwMDAwMTcyMDAwNTU5MzMzMTc3OTAxMTdfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIxNC4zNjQyIiB5MT0iNjEzLjA5NzQiIHgyPSIxMjQ1Ljc2NzMiIHkyPSI2MTMuMDk3NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDI1MDAuMTEwMSkiPgoJCQk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMyQjJGODIiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjk5NTIiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MjQzOUEiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNztmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTQ1Nzc3MTY1NzYxMzI5OTA0MTEwMDAwMDE3MjAwMDU1OTMzMzE3NzkwMTE3Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IiAgICBNMzUwLjYsMTM5Ni4xSDIxNC40YzAsNTQxLjgsNDMyLjIsOTgxLjksOTY0LjIsOTgxLjljMjMuNiwwLDQ1LjQsMCw2Ny4yLTEuOUM3NDYuNCwyMzM5LjEsMzUwLjYsMTkxMy44LDM1MC42LDEzOTYuMXoiLz4KCTwvZz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDMyNjQ5MDk5MDY5OTEyOTU1NzcwMDAwMDE1ODcwMDg4MTA0OTgyODQ5OTI4XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMTYuNDc1NyIgeTE9IjEwMTMuODE5MyIgeDI9IjIxNDIuODUwOCIgeTI9IjEwMTMuODE5MyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDI1MDAuMTEwMSkiPgoJCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzJCMkY4MiIvPgoJCTxzdG9wIG9mZnNldD0iMC45OTUyIiBzdHlsZT0ic3RvcC1jb2xvcjojQTE0Mjk4Ii8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAwMzI2NDkwOTkwNjk5MTI5NTU3NzAwMDAwMTU4NzAwODgxMDQ5ODI4NDk5MjhfKTsiIGQ9Ik0yMTQyLjgsMTQwNS4zICAgYzAtMTEyLjgtMTkyLjUtMTc3LjUtNDQ4LjUtMTk5LjdjLTE4NS4yLTE0LjgtMzcyLjIsMy43LTU4Ni41LDcwLjNjLTE4NS4yLDU1LjUtMzUyLjMsNDYuMi00NzMuOSwzMS40ICAgYy0yNzAuNi0zMS40LTQxOS41LTM1LjEtNDE5LjUsOThjMCwxOTIuMywzODUsNDMyLjcsOTYyLjQsMzQ5LjVjMjkyLjQtNDIuNSw0NDMuMS0xMjkuNCw2MTUuNi0xODguNiAgIEMxOTc5LjQsMTUwMy4zLDIxNDIuOCwxNTA1LjIsMjE0Mi44LDE0MDUuM3oiLz4KCTxwYXRoIGQ9Ik0xNDk2LjMsOTM5LjNjOTAuMywwLDE2My40LTc0LjUsMTYzLjQtMTY2LjRzLTczLjItMTY2LjQtMTYzLjQtMTY2LjRzLTE2My40LDc0LjUtMTYzLjQsMTY2LjQgICBTMTQwNi4xLDkzOS4zLDE0OTYuMyw5MzkuM3oiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgoJPHBhdGggZD0iTTE3NjMuMywxMDYzLjJjMzguMSwwLDY5LTMxLjUsNjktNzAuM2MwLTM4LjgtMzAuOS03MC4zLTY5LTcwLjNjLTM4LjEsMC02OSwzMS41LTY5LDcwLjMgICBDMTY5NC4zLDEwMzEuOCwxNzI1LjIsMTA2My4yLDE3NjMuMywxMDYzLjJ6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCTxnIHN0eWxlPSJvcGFjaXR5OiAwLjY7Ij4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAwODY2ODUzNjAwMTY3NTU0NTU0ODAwMDAwMDg2MjMzMzU0OTY5OTI4MTkwOTRfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIxMTMuNzc3MyIgeTE9IjIwNjMuNzQ2MyIgeDI9IjE5NzEuNjUxIiB5Mj0iMTgzNi45NDQ5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjUwMC4xMTAxKSI+CgkJCTxzdG9wIG9mZnNldD0iMC4yODg4IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+CgkJCTxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjY7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA4NjY4NTM2MDAxNjc1NTQ1NTQ4MDAwMDAwODYyMzMzNTQ5Njk5MjgxOTA5NF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIgICAgTTIwMTAuMiw2MzkuOGMtMS44LDAtMy42LDAtMy42LDBjLTEwLjktMS45LTE4LjItMTIuOS0xNi4zLTI1LjljMTYuMy04NS4xLDg1LjMtMTY2LjQsODktMTcwLjFjNy4zLTkuMiwyMS44LTkuMiwyOS4xLTEuOSAgICBjOS4xLDcuNCw5LjEsMjIuMiwxLjgsMjkuNmMtMS44LDEuOC02NS40LDc3LjctNzkuOSwxNTEuNkMyMDI4LjQsNjM0LjIsMjAxOS4zLDYzOS44LDIwMTAuMiw2MzkuOHoiLz4KCTwvZz4KCTxwYXRoIGQ9Ik0xMTEzLjMsMjE3Ni40YzI4LjEsMCw1MC44LTIzLjIsNTAuOC01MS44YzAtMjguNi0yMi44LTUxLjgtNTAuOC01MS44Yy0yOC4xLDAtNTAuOCwyMy4yLTUwLjgsNTEuOCAgIEMxMDYyLjUsMjE1My4yLDEwODUuMiwyMTc2LjQsMTExMy4zLDIxNzYuNHoiIHN0eWxlPSJvcGFjaXR5OiAwLjI7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+Cgk8ZyBzdHlsZT0ib3BhY2l0eTogMC40OyI+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTIwNTIwNzExMjM5MDY1NjMwOTQwMDAwMDAyMTg2MzkyNTA5MjM2NTgyODM0XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMDYxLjkxMzIiIHkxPSIzNzUuMDI1NCIgeDI9IjExMzguNzM5MSIgeTI9IjM3NS4wMjU0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjUwMC4xMTAxKSI+CgkJCTxzdG9wIG9mZnNldD0iMC4yODg4IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+CgkJCTxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjY7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1TVkdJRF8wMDAwMDEyMDUyMDcxMTIzOTA2NTYzMDk0MDAwMDAwMjE4NjM5MjUwOTIzNjU4MjgzNF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIgICAgTTEwODQuMiwyMTU4Yy0yMC0yMC4zLTIwLTUzLjYsMC03NGMzLjYtMy43LDcuMy01LjUsMTAuOS05LjJjLTcuMywxLjktMTIuNyw1LjUtMTguMiwxMS4xYy0yMCwyMC4zLTIwLDUzLjYsMCw3NCAgICBjMTYuMywxNi42LDQxLjgsMjAuMyw2MS43LDkuMkMxMTIwLjUsMjE3Ni41LDEwOTguNywyMTcyLjgsMTA4NC4yLDIxNTh6Ii8+Cgk8L2c+Cgk8cGF0aCBkPSJNMTEzMS40LDIxMDkuOGM2LDAsMTAuOS01LDEwLjktMTEuMWMwLTYuMS00LjktMTEuMS0xMC45LTExLjFjLTYsMC0xMC45LDUtMTAuOSwxMS4xICAgQzExMjAuNSwyMTA0LjksMTEyNS4zLDIxMDkuOCwxMTMxLjQsMjEwOS44eiIgc3R5bGU9Im9wYWNpdHk6IDAuMzsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiLz4KCTxwYXRoIGQ9Ik0xMzc4LjQsMjE1MC41YzI4LjEsMCw1MC44LTIzLjIsNTAuOC01MS44YzAtMjguNi0yMi44LTUxLjgtNTAuOC01MS44Yy0yOC4xLDAtNTAuOCwyMy4yLTUwLjgsNTEuOCAgIEMxMzI3LjYsMjEyNy4zLDEzNTAuNCwyMTUwLjUsMTM3OC40LDIxNTAuNXoiIHN0eWxlPSJvcGFjaXR5OiAwLjI7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+Cgk8ZyBzdHlsZT0ib3BhY2l0eTogMC40OyI+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDMxMjAzMjAzNzEwMTA5MTczMzAwMDAwMDA4NDgwNzQwNjM3MDc3NjQ5MDY2XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMzI2Ljc5MDYiIHkxPSI0MDAuOTIiIHgyPSIxNDAzLjYxNjciIHkyPSI0MDAuOTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNTAwLjExMDEpIj4KCQkJPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNjtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDMxMjAzMjAzNzEwMTA5MTczMzAwMDAwMDA4NDgwNzQwNjM3MDc3NjQ5MDY2Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IiAgICBNMTM0OS4zLDIxMzIuMWMtMjAtMjAuMy0yMC01My42LDAtNzRjMy42LTMuNyw3LjMtNS41LDEwLjktOS4yYy03LjMsMS45LTEyLjcsNS41LTE4LjIsMTEuMWMtMjAsMjAuMy0yMCw1My42LDAsNzQgICAgYzE2LjMsMTYuNiw0MS44LDIwLjMsNjEuNyw5LjJDMTM4NS42LDIxNTAuNiwxMzYzLjgsMjE0Ni45LDEzNDkuMywyMTMyLjF6Ii8+Cgk8L2c+Cgk8cGF0aCBkPSJNMTM5Ni41LDIwODRjNiwwLDEwLjktNSwxMC45LTExLjFjMC02LjEtNC45LTExLjEtMTAuOS0xMS4xYy02LDAtMTAuOSw1LTEwLjksMTEuMSAgIEMxMzg1LjYsMjA3OSwxMzkwLjUsMjA4NCwxMzk2LjUsMjA4NHoiIHN0eWxlPSJvcGFjaXR5OiAwLjM7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+Cgk8cGF0aCBkPSJNMTI0Ny42LDIyNzAuN2MyMS4xLDAsMzguMS0xNy40LDM4LjEtMzguOHMtMTcuMS0zOC44LTM4LjEtMzguOGMtMjEuMSwwLTM4LjEsMTcuNC0zOC4xLDM4LjggICBTMTIyNi41LDIyNzAuNywxMjQ3LjYsMjI3MC43eiIgc3R5bGU9Im9wYWNpdHk6IDAuMjsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiLz4KCTxnIHN0eWxlPSJvcGFjaXR5OiAwLjQ7Ij4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAxMTA0NTM3NTAzMTcwNDYyOTc4NDAwMDAwMDUwNTEyMjgzNDk2ODM5Njc4OTVfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEyMDkuMjEwOSIgeTE9IjI2Ny4xNDE0IiB4Mj0iMTI2Ni44ODg3IiB5Mj0iMjY3LjE0MTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNTAwLjExMDEpIj4KCQkJPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNjtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTEwNDUzNzUwMzE3MDQ2Mjk3ODQwMDAwMDA1MDUxMjI4MzQ5NjgzOTY3ODk1Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IiAgICBNMTIyNS44LDIyNTZjLTE0LjUtMTQuOC0xNC41LTQwLjcsMC01NS41YzEuOC0xLjksNS40LTMuNyw3LjMtNS42Yy01LjQsMS45LTkuMSw1LjYtMTIuNyw5LjJjLTE0LjUsMTQuOC0xNC41LDQwLjcsMCw1NS41ICAgIGMxMi43LDEyLjksMzAuOSwxNC44LDQ3LjIsNS42QzEyNTMsMjI3MC44LDEyMzYuNywyMjY3LjEsMTIyNS44LDIyNTZ6Ii8+Cgk8L2c+Cgk8cGF0aCBkPSJNMTI2MC4zLDIyMTguOWM0LDAsNy4zLTMuMyw3LjMtNy40YzAtNC4xLTMuMy03LjQtNy4zLTcuNGMtNCwwLTcuMywzLjMtNy4zLDcuNCAgIEMxMjUzLDIyMTUuNiwxMjU2LjMsMjIxOC45LDEyNjAuMywyMjE4Ljl6IiBzdHlsZT0ib3BhY2l0eTogMC4zOyBmaWxsOiAjRkZGRkZGOyBlbmFibGUtYmFja2dyb3VuZDogbmV3OyIvPgoJPHBhdGggZD0iTTE0ODEuOCwyMjQzYzIxLjEsMCwzOC4xLTE3LjQsMzguMS0zOC44cy0xNy4xLTM4LjgtMzguMS0zOC44cy0zOC4xLDE3LjQtMzguMSwzOC44UzE0NjAuOCwyMjQzLDE0ODEuOCwyMjQzICAgeiIgc3R5bGU9Im9wYWNpdHk6IDAuMjsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiLz4KCTxnIHN0eWxlPSJvcGFjaXR5OiAwLjQ7Ij4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLW9zbW8tY29sb3JmdWwtU1ZHSURfMDAwMDAxODAzMzM5ODc2NTI2MTU4NTA5NzAwMDAwMDMzNTYyNTk0MDc2OTAwOTgwNzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE0NDIuNjkxNCIgeTE9IjI5NC44NzYxIiB4Mj0iMTUwMC4zNjI5IiB5Mj0iMjk0Ljg3NjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNTAwLjExMDEpIj4KCQkJPHN0b3Agb2Zmc2V0PSIwLjI4ODgiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjc3OTYiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNjtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTgwMzMzOTg3NjUyNjE1ODUwOTcwMDAwMDAzMzU2MjU5NDA3NjkwMDk4MDcxXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IiAgICBNMTQ2MC4xLDIyMjguMmMtMTQuNS0xNC44LTE0LjUtNDAuNywwLTU1LjVjMS44LTEuOSw1LjQtMy43LDcuMy01LjVjLTUuNCwxLjktOS4xLDUuNS0xMi43LDkuMmMtMTQuNSwxNC44LTE0LjUsNDAuNywwLDU1LjUgICAgYzEyLjcsMTIuOSwzMC45LDE0LjgsNDcuMiw1LjVDMTQ4Ny4zLDIyNDMsMTQ3MSwyMjM5LjMsMTQ2MC4xLDIyMjguMnoiLz4KCTwvZz4KCTxwYXRoIGQ9Ik0xNDk0LjUsMjE5MS4yYzQsMCw3LjMtMy4zLDcuMy03LjRjMC00LjEtMy4zLTcuNC03LjMtNy40Yy00LDAtNy4zLDMuMy03LjMsNy40ICAgQzE0ODcuMywyMTg3LjksMTQ5MC41LDIxOTEuMiwxNDk0LjUsMjE5MS4yeiIgc3R5bGU9Im9wYWNpdHk6IDAuMzsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiLz4KCTxwYXRoIGQ9Ik04OTcuMSwyMTU3LjljNDYuMSwwLDgzLjUtMzguMSw4My41LTg1LjFjMC00Ny0zNy40LTg1LjEtODMuNS04NS4xYy00Ni4xLDAtODMuNSwzOC4xLTgzLjUsODUuMSAgIEM4MTMuNiwyMTE5LjgsODUxLDIxNTcuOSw4OTcuMSwyMTU3Ljl6IiBzdHlsZT0ib3BhY2l0eTogMC4yOyBmaWxsOiAjRkZGRkZGOyBlbmFibGUtYmFja2dyb3VuZDogbmV3OyIvPgoJPGcgc3R5bGU9Im9wYWNpdHk6IDAuNDsiPgoJCQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA3NDQwNzUyOTQxNjI2MzMyMDE3MDAwMDAxNTI3MTIwNDIxNjQyMzYxNjY1NF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iODEzLjcxNDciIHkxPSI0MjQuODM1IiB4Mj0iOTM5LjE3NDMiIHkyPSI0MjQuODM1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjUwMC4xMTAxKSI+CgkJCTxzdG9wIG9mZnNldD0iMC4yODg4IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+CgkJCTxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjY7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA3NDQwNzUyOTQxNjI2MzMyMDE3MDAwMDAxNTI3MTIwNDIxNjQyMzYxNjY1NF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIgICAgTTg1MCwyMTI2LjVjLTMyLjctMzMuMy0zMi43LTg2LjksMC0xMjAuMmM1LjQtNS41LDEwLjktOS4yLDE4LjItMTIuOWMtMTAuOSwzLjctMjAsMTEuMS0yOS4xLDE4LjVjLTMyLjcsMzMuMy0zMi43LDg2LjksMCwxMjAuMiAgICBjMjcuMiwyNy43LDY5LDMzLjMsMTAxLjcsMTIuOUM5MDkuOSwyMTU3LjksODczLjYsMjE1Mi40LDg1MCwyMTI2LjV6Ii8+Cgk8L2c+Cgk8cGF0aCBkPSJNOTI2LjIsMjA0N2MxMCwwLDE4LjItOC4zLDE4LjItMTguNWMwLTEwLjItOC4xLTE4LjUtMTguMi0xOC41Yy0xMCwwLTE4LjIsOC4zLTE4LjIsMTguNSAgIEM5MDgsMjAzOC43LDkxNi4xLDIwNDcsOTI2LjIsMjA0N3oiIHN0eWxlPSJvcGFjaXR5OiAwLjM7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+Cgk8cGF0aCBkPSJNMTY0My41LDE5NDljNDYuMSwwLDgzLjUtMzguMSw4My41LTg1LjFjMC00Ny0zNy40LTg1LjEtODMuNS04NS4xYy00Ni4xLDAtODMuNSwzOC4xLTgzLjUsODUuMSAgIEMxNTYwLDE5MTAuOSwxNTk3LjMsMTk0OSwxNjQzLjUsMTk0OXoiIHN0eWxlPSJvcGFjaXR5OiAwLjI7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+Cgk8ZyBzdHlsZT0ib3BhY2l0eTogMC40OyI+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1vc21vLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDMxMTk0Nzk3OTI3MjgxMDUwMjkwMDAwMDEyNDYwNTY1MjYxNjc1MDMzMjc4XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNTU4Ljg1NTYiIHkxPSI2MzMuNzkxMSIgeDI9IjE2ODQuMzIxMyIgeTI9IjYzMy43OTExIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjUwMC4xMTAxKSI+CgkJCTxzdG9wIG9mZnNldD0iMC4yODg4IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+CgkJCTxzdG9wIG9mZnNldD0iMC43Nzk2IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjY7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tb3Ntby1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAzMTE5NDc5NzkyNzI4MTA1MDI5MDAwMDAxMjQ2MDU2NTI2MTY3NTAzMzI3OF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIgICAgTTE1OTQuNCwxOTE3LjVjLTMyLjctMzMuMy0zMi43LTg2LjksMC0xMjAuMmM1LjQtNS42LDEwLjktOS4yLDE4LjItMTIuOWMtMTAuOSwzLjctMjAsMTEuMS0yOS4xLDE4LjUgICAgYy0zMi43LDMzLjMtMzIuNyw4Ni45LDAsMTIwLjJjMjcuMiwyNy43LDY5LDMzLjMsMTAxLjcsMTIuOUMxNjU0LjMsMTk0OSwxNjE5LjgsMTk0My40LDE1OTQuNCwxOTE3LjV6Ii8+Cgk8L2c+Cgk8cGF0aCBkPSJNMTY3Mi41LDE4MzhjMTAsMCwxOC4yLTguMywxOC4yLTE4LjVjMC0xMC4yLTguMS0xOC41LTE4LjItMTguNWMtMTAsMC0xOC4yLDguMy0xOC4yLDE4LjUgICBDMTY1NC4zLDE4MjkuNywxNjYyLjQsMTgzOCwxNjcyLjUsMTgzOHoiIHN0eWxlPSJvcGFjaXR5OiAwLjM7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+CjwvZz4KPC9zdmc+Cg==) */
export const OsmoColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-osmo-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

OsmoColorful.displayName = 'OsmoColorful';
