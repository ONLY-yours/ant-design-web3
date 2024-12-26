// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/astr-circle-colorful.svg';

/**![AstrCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2MCA2MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOS41MjYiIHkxPSI5LjQxOTIiIHgyPSI0Ny43NzUiIHkyPSI0Ny42NzMyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTkuODkyMSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRTYwMDdBIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuMjEiIHN0b3AtY29sb3I9IiM3MDNBQzIiLz4KCTxzdG9wIG9mZnNldD0iMC40NiIgc3RvcC1jb2xvcj0iIzAwNzBFQiIvPgoJPHN0b3Agb2Zmc2V0PSIwLjc3IiBzdG9wLWNvbG9yPSIjMDI5N0ZCIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwQUUyRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggZD0iTTU5LjksMjhjLTEuMS0xNi41LTE1LjQtMjktMzItMjcuOUMxOS43LDAuNiwxMi41LDQuNSw3LjUsMTAuMmwwLDBjMCwwLTAuMSwwLjEtMC4xLDAuMQoJYy01LDUuOC03LjgsMTMuNS03LjMsMjEuN2MwLjEsMC44LDAuMSwxLjYsMC4zLDIuM2MwLDAsMCwwLjEsMCwwLjFjMC4xLDAuNSwwLjIsMSwwLjMsMS41YzAuMSwwLjUsMC4yLDAuOSwwLjMsMS40CglDNC40LDUxLjEsMTcuMyw2MC45LDMyLDU5LjlDNDguNiw1OC44LDYxLjEsNDQuNSw1OS45LDI4QzU5LjksMjgsNTkuOSwyOCw1OS45LDI4eiBNNTMuNCwyOC40YzAuMSwyLDAsNC0wLjQsNS45YzAsMCwwLDAsMCwwCgljLTIuMi01LjMtNi41LTkuMi0xMC4zLTExLjNjMC44LTktMi4zLTEyLjgtNS44LTEzLjRjLTIuNy0wLjUtNS4zLDEuMy01LjgsNGMwLDAuMSwwLDAuMiwwLDAuM2MtMC40LDIuNywxLjYsNS4zLDQuMyw1LjYKCWMwLDAsMCwwLDAsMGMwLjIsMCwwLjUsMCwwLjcsMGMwLDAuMywwLDAuNiwwLDFjLTMuMi0wLjgtNi4yLTEtOC45LTAuN2MtMSwwLjEtMiwwLjItMy4xLDAuNGMwLjMtMywxLjUtNi41LDMuNy05CgljMi4xLTIuNCw1LjMtMy44LDguOC0zLjRjMC43LDAuMSwxLjQsMC4yLDIsMC40YzAsMCwwLjEsMCwwLjEsMEM0Ni44LDExLjYsNTIuOCwxOS4yLDUzLjQsMjguNEM1My40LDI4LjQsNTMuNCwyOC40LDUzLjQsMjguNHoKCSBNMzIuNSwzM0MzMi41LDMzLDMyLjUsMzMsMzIuNSwzM2MtMC44LDEuMS0xLjYsMi4xLTIuNiwzYy0xLjQtMS41LTIuNy0zLjItMy42LTUuMWMwLTAuMS0wLjEtMC4yLTAuMS0wLjN2MAoJYy0wLjYtMS4yLTEtMi41LTEuMy0zLjdjMi4xLTAuNSw0LjItMC43LDYuMi0wLjZsMC4zLDBoMGMxLjMsMC4xLDIuNiwwLjMsMy45LDAuN0MzNC42LDI5LjEsMzMuNywzMS4yLDMyLjUsMzMKCUMzMi41LDMzLDMyLjUsMzMsMzIuNSwzM3ogTTIyLjIsNy45TDIyLjIsNy45Yy0zLjUsNC42LTQuNywxMC4yLTQuNywxNC41Yy04LjIsMy44LTkuOSw4LjQtOC43LDExLjdjMCwwLjEsMC4xLDAuMiwwLjEsMC4zCgljMS4xLDIuNiw0LDMuOCw2LjYsMi43YzIuNi0xLjEsMy44LTQsMi43LTYuNmMtMC4xLTAuMi0wLjItMC40LTAuMy0wLjZjMC4zLTAuMiwwLjUtMC4zLDAuOC0wLjVjMC45LDMuMiwyLjMsNS44LDMuOCw4LjEKCWMwLjYsMC44LDEuMiwxLjcsMS45LDIuNGMtMi44LDEuMi02LjMsMS45LTkuNiwxLjNjLTMuMi0wLjYtNS45LTIuNy03LjQtNS45Yy0wLjMtMC42LTAuNS0xLjMtMC42LTEuOWMtMC4xLTAuNi0wLjEtMS4yLTAuMi0xLjcKCUM1LjksMjAuOCwxMi41LDExLjMsMjIuMiw3Ljl6IE0zMS42LDUzLjRjLTYuNCwwLjQtMTIuMy0xLjctMTYuOS01LjZjNS43LDAuOCwxMS4yLTEsMTQuOS0zLjJjNy40LDUuMiwxMi4yLDQuNCwxNC41LDEuNwoJYzEuOC0yLjEsMS42LTUuMy0wLjUtNy4xYy0wLjEtMC4xLTAuMi0wLjEtMC4yLTAuMmMtMi4yLTEuNy01LjMtMS4zLTcsMC45YzAsMCwwLDAsMCwwYy0wLjEsMC4yLTAuMywwLjQtMC40LDAuNgoJYy0wLjMtMC4xLTAuNi0wLjMtMC45LTAuNWMyLjEtMi4yLDMuOC00LjYsNS4xLTcuNGMwLjUtMC45LDAuOS0xLjksMS4yLTIuOGMyLjUsMS44LDQuOSw0LjUsNS45LDcuN2MxLDMuMSwwLjYsNi41LTEuNCw5LjMKCWMtMC40LDAuNS0wLjksMS4xLTEuNCwxLjVsMCwwQzQwLjgsNTEuNCwzNi4zLDUzLjEsMzEuNiw1My40QzMxLjYsNTMuNCwzMS42LDUzLjQsMzEuNiw1My40eiIgZmlsbD0iIHVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8xXykiLz4KPHJhZGlhbEdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTAzOTc2NTA3Mjg2MTk0MzEyNDcwMDAwMDE0NDgxNDMzMjI5MTc3NjY4NzM3XyIgY3g9Ii0xODUuMjA1MiIgY3k9IjQxNi42MTY4IiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDExLjQwOCAwIDAgLTExLjQwOCAyMTUxLjM3MTEgNDc3Ni42ODk1KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC45O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTAzOTc2NTA3Mjg2MTk0MzEyNDcwMDAwMDE0NDgxNDMzMjI5MTc3NjY4NzM3Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTM3LDkuNmMtMC42LTAuMS0xLjEtMC4xLTEuNywwYzIuOSwxLjYsNSw1LjksMy45LDE0LjVjLTAuNCwyLjgtMS4yLDUuNS0yLjQsOGMtMS4xLDIuMy0yLjUsNC40LTQuMSw2LjRjMC44LDAuNiwxLjYsMS4xLDIuNSwxLjYKCWMyLjEtMi4yLDMuOC00LjYsNS4xLTcuNGMxLjItMi41LDIuMS01LjIsMi40LThDNDMuOSwxNC41LDQwLjcsMTAuMywzNyw5LjZMMzcsOS42TDM3LDkuNnoiLz4KPHBhdGggZD0iTTM5LjIsMjQuMWMxLjEtOC42LTEtMTIuOS0zLjktMTQuNWMtMC4xLDAtMC4yLDAtMC4zLDAuMWMyLjgsMS42LDQuOCw2LDMuNywxNC40Yy0wLjQsMi44LTEuMiw1LjUtMi40LDgKCWMtMSwyLjItMi40LDQuMy00LDYuMmMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMmMxLjctMS45LDMuMS00LjEsNC4xLTYuNEMzOCwyOS42LDM4LjgsMjYuOSwzOS4yLDI0LjFMMzkuMiwyNC4xeiIgc3R5bGU9Im9wYWNpdHk6IDAuODsgZmlsbDogI0ZGRkZGRjsgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsiLz4KPHJhZGlhbEdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDA1MjYwMTk4NzYxNDQyMTgzMzIwMDAwMDA3MTIzODUxMTIyMzEyNjgzOTA1XyIgY3g9Ii0xNzIuNDIiIGN5PSIzOTEuOTkxMSIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg2LjYzODQgMCAwIC02LjYzODQgMTE2Ni4yNzk1IDI2NDcuMjc4MykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAwNTI2MDE5ODc2MTQ0MjE4MzMyMDAwMDAwNzEyMzg1MTEyMjMxMjY4MzkwNV8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU0yOC4zLDQzLjZjLTAuMy0wLjItMC41LTAuNC0wLjgtMC42Yy00LjIsMS44LTEwLjEsMi45LTE1LjksMS41YzAuOSwxLjIsMiwyLjMsMy4yLDMuM2M1LjcsMC44LDExLjItMSwxNC45LTMuMgoJQzI5LjIsNDQuMiwyOC43LDQzLjksMjguMyw0My42TDI4LjMsNDMuNnoiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDUxMzUwNzA0NDgwMzU5MDY2MDAwMDAwMDA4NjYyMjgyNzY3MDQxNTg2ODQxXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMS43MjkzIiB5MT0iMTUuOTI3OSIgeDI9IjE4LjEyNzMiIHkyPSIxNi4wMTU5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTkuODkyMSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC42O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDUxMzUwNzA0NDgwMzU5MDY2MDAwMDAwMDA4NjYyMjgyNzY3MDQxNTg2ODQxXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTI3LjUsNDIuOWMtMC4xLTAuMS0wLjMtMC4yLTAuNC0wLjNjLTQuMywxLjctMTAuMiwyLjctMTYsMS4zYzAuMSwwLjIsMC4zLDAuNCwwLjQsMC42QzE3LjQsNDUuOCwyMy4yLDQ0LjcsMjcuNSw0Mi45TDI3LjUsNDIuOXoiLz4KPHJhZGlhbEdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDYxNDUzNzM3NTM3MzQ4OTkyMjgwMDAwMDA3MTI5NzU2NzcyMjM3MjM3ODg4XyIgY3g9Ii0yNDEuNTc5MyIgY3k9IjQ1Mi42MTc2IiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC01LjcwNCAtOS44Nzk2IC05Ljg3OTYgNS43MDQgMzExNC4xODQ2IC00OTQyLjgxMzUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjk7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAwNjE0NTM3Mzc1MzczNDg5OTIyODAwMDAwMDcxMjk3NTY3NzIyMzcyMzc4ODhfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iCglNOC44LDM0LjFjMCwwLjEsMC4xLDAuMiwwLjEsMC4zYzAuMiwwLjUsMC40LDAuOSwwLjcsMS4yYy0wLjEtMy4zLDIuNi03LjMsMTAuNi0xMC42YzIuNi0xLjEsNS40LTEuNyw4LjItMS45CgljMi41LTAuMiw1LjEtMC4xLDcuNiwwLjRjMC4xLTEuMSwwLjItMi4xLDAuMi0zYy0yLjktMC43LTUuOS0xLTguOS0wLjdjLTIuOCwwLjItNS42LDAuOC04LjIsMS45QzkuNiwyNS43LDcuNiwzMC42LDguOCwzNC4xCglMOC44LDM0LjFMOC44LDM0LjF6Ii8+CjxwYXRoIGQ9Ik0yMC4zLDI1Yy04LDMuMy0xMC43LDcuMy0xMC42LDEwLjZjMC4xLDAuMSwwLjEsMC4yLDAuMiwwLjNjMC0zLjIsMi43LTcuMiwxMC42LTEwLjVjMi42LTEuMSw1LjQtMS43LDguMi0xLjkKCWMyLjQtMC4yLDQuOS0wLjEsNy4zLDAuNGMwLTAuMSwwLTAuMiwwLTAuM2MtMi41LTAuNS01LTAuNi03LjYtMC40QzI1LjcsMjMuMywyMi45LDIzLjksMjAuMywyNUMyMC4zLDI1LDIwLjMsMjUsMjAuMywyNXoiIHN0eWxlPSJvcGFjaXR5OiAwLjg7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+CjxyYWRpYWxHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDEzNDk0NDUyODIyNzM1NzIzMTk4MDAwMDAxMzk3MTc4NTMwOTMxMjg1OTgyN18iIGN4PSItMjY5LjI5ODQiIGN5PSI0NTMuODU4MSIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMy4zMTkyIC01Ljc0OSAtNS43NDkgMy4zMTkyIDE3NjIuNjAzMSAtMzAyNC45OTAyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC40O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTM0OTQ0NTI4MjI3MzU3MjMxOTgwMDAwMDEzOTcxNzg1MzA5MzEyODU5ODI3Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTQyLjYsMjQuN2MwLDAuMy0wLjEsMC43LTAuMiwxYzMuNiwyLjgsNy41LDcuMyw5LjMsMTNjMC42LTEuNCwxLTIuOSwxLjMtNC40Yy0yLjItNS4zLTYuNS05LjEtMTAuMy0xMS4zCglDNDIuNywyMy42LDQyLjcsMjQuMSw0Mi42LDI0LjdDNDIuNiwyNC43LDQyLjYsMjQuNyw0Mi42LDI0Ljd6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAyOTAyNTEzOTk5NjQwNTg0MDk4MDAwMDAwNDkyNzU1MzY3NzEwMTM4MDc1MF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTEuMjIyNSIgeTE9IjIxLjA1NjEiIHgyPSI0Ny45NDc1IiB5Mj0iMjYuNTUyMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAyOTAyNTEzOTk5NjQwNTg0MDk4MDAwMDAwNDkyNzU1MzY3NzEwMTM4MDc1MF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU00Mi40LDI1LjdjMCwwLjItMC4xLDAuMy0wLjEsMC41YzMuNiwyLjgsNy40LDcuNCw5LjEsMTMuMmMwLjEtMC4yLDAuMi0wLjQsMC4zLTAuN0M1MCwzMyw0Ni4xLDI4LjUsNDIuNCwyNS43CglDNDIuNCwyNS43LDQyLjQsMjUuNyw0Mi40LDI1Ljd6Ii8+CjxyYWRpYWxHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA3NDQyODM2NTY3NzcwOTI0NDU0MDAwMDAwMTE3MDczMDg3Nzk0NjI5NjIyN18iIGN4PSItMTgyLjIxNDciIGN5PSI0ODMuNDM4NiIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtNS43MDQgOS44Nzk2IDkuODc5NiA1LjcwNCAtNTc4NS4wOTk2IC05MTcuNDEwMikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuOTtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA3NDQyODM2NTY3NzcwOTI0NDU0MDAwMDAwMTE3MDczMDg3Nzk0NjI5NjIyN18pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU00NC4xLDQ2LjNjMC40LTAuNCwwLjctMC45LDAuOS0xLjVjLTIuOCwxLjctNy42LDEuMy0xNC41LTMuOWMtMi4yLTEuNy00LjItMy44LTUuNy02LjFjLTEuNS0yLjEtMi42LTQuNC0zLjQtNi44CgljLTEsMC40LTEuOSwwLjktMi43LDEuM2MwLjgsMi45LDIuMSw1LjYsMy45LDguMWMxLjUsMi4zLDMuNSw0LjQsNS43LDYuMUMzNi41LDQ5LjgsNDEuNyw0OS4xLDQ0LjEsNDYuM0w0NC4xLDQ2LjNMNDQuMSw0Ni4zeiIvPgo8cGF0aCBkPSJNMzAuNSw0MC45YzYuOSw1LjIsMTEuNyw1LjYsMTQuNSwzLjljMC0wLjEsMC4xLTAuMiwwLjEtMC4zYy0yLjgsMS42LTcuNiwxLjItMTQuNC00Yy0yLjItMS43LTQuMi0zLjgtNS43LTYuMQoJYy0xLjQtMi0yLjUtNC4yLTMuMy02LjVjLTAuMSwwLTAuMiwwLjEtMC4zLDAuMWMwLjgsMi40LDIsNC43LDMuNCw2LjhDMjYuMywzNy4xLDI4LjIsMzkuMiwzMC41LDQwLjlMMzAuNSw0MC45TDMwLjUsNDAuOXoiIHN0eWxlPSJvcGFjaXR5OiAwLjg7IGZpbGw6ICNGRkZGRkY7IGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7Ii8+CjxyYWRpYWxHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAxODIxMzYyMjU3MDMxNzAyNTQxMDAwMDAwNzQxNTUxNjg2MDE5NDQ5NDM4NV8iIGN4PSItMTY3LjI4MDgiIGN5PSI1MDYuODIzOCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMy4zMTkyIDUuNzQ5IDUuNzQ5IDMuMzE5MiAtMzQ0Ny44ODY3IC03MDUuMjg1KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC4zO2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDE4MjEzNjIyNTcwMzE3MDI1NDEwMDAwMDA3NDE1NTE2ODYwMTk0NDk0Mzg1Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTE5LjEsMjEuN2MwLjMtMC4xLDAuNi0wLjIsMC45LTAuNGMwLjYtNC41LDIuNi0xMC4yLDYuNi0xNC42Yy0xLjUsMC4yLTMsMC42LTQuNSwxLjFjLTMuNSw0LjUtNC43LDEwLjItNC42LDE0LjUKCUMxOC4xLDIyLjIsMTguNiwyMS45LDE5LjEsMjEuN0wxOS4xLDIxLjdMMTkuMSwyMS43eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxODEwODUzOTM5MjQ4NjI3MjgyNDAwMDAwMTYyODg4MTc3MTI0NTY2NDczNDJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI3LjAyNTYiIHkxPSI1Mi43MDE3IiB4Mj0iMjMuOTA2NiIgeTI9IjQ3LjExNDciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1OS44OTIxKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjQ7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxODEwODUzOTM5MjQ4NjI3MjgyNDAwMDAwMTYyODg4MTc3MTI0NTY2NDczNDJfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iCglNMjAuMSwyMS40YzAuMi0wLjEsMC4zLTAuMSwwLjUtMC4yYzAuNy00LjYsMi43LTEwLjIsNi45LTE0LjVjLTAuMiwwLTAuNSwwLjEtMC43LDAuMUMyMi42LDExLjIsMjAuNiwxNi44LDIwLjEsMjEuNEwyMC4xLDIxLjQKCUwyMC4xLDIxLjR6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAzMTIwMjg3NzQ2NjQ1NDc1MjgwMDAwMDAwNzg1MTk4MDczMTQ0OTQ1OTM4Ml8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjguNDI2NyIgeTE9IjU1LjUzNjUiIHgyPSIxOC42NTA3IiB5Mj0iNTIuNjkyNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNDtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDAzMTIwMjg3NzQ2NjQ1NDc1MjgwMDAwMDAwNzg1MTk4MDczMTQ0OTQ1OTM4Ml8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU0yOCwwLjFDMTkuNywwLjYsMTIuNSw0LjUsNy41LDEwLjJsLTAuMSwwLjFjMSwxLDQuMiwyLjksNS41LDMuN2MyLjYtMi44LDUuOC00LjksOS40LTYuMmMwLjMtMC4zLDAuNS0wLjcsMC44LTEKCWMzLjQtMy44LDgtNS44LDEzLjQtNS44YzAuNiwwLDEuOCwwLjEsMS44LDAuMUMzNC45LDAuMiwzMS40LTAuMiwyOCwwLjFMMjgsMC4xeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxNTg3Mjk5MTYwNjE0NDQ2Njk0NTAwMDAwMTM4Mzc0NTE0MDA3MTQwMzUwODlfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjkuOTU2NiIgeTE9IjE4LjI2MjQiIHgyPSIxOC4xMzA2IiB5Mj0iOS43MzA0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTkuODkyMSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjMxRjIwIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC40O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTU4NzI5OTE2MDYxNDQ0NjY5NDUwMDAwMDEzODM3NDUxNDAwNzE0MDM1MDg5Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTMxLjYsNTMuNGMtNi40LDAuNC0xMi4zLTEuNy0xNi45LTUuNmMtMC40LTAuMS0wLjgtMC4xLTEuMy0wLjJjLTUtMS05LjEtNC0xMS44LTguN2MtMC4zLTAuNS0wLjYtMS0wLjgtMS42CglDNC40LDUxLjEsMTcuMyw2MC45LDMyLDU5LjlDMzIuMSw1OC40LDMxLjcsNTQuOSwzMS42LDUzLjRDMzEuNiw1My40LDMxLjYsNTMuNCwzMS42LDUzLjR6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDEyOTIwMzkzMzY3OTEzOTUxMjQ1MDAwMDAwMTA5NTI3ODA0MzQ3OTA1MDE3NF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTMuODI0NiIgeTE9IjE5LjU0ODIiIHgyPSI1Ni42Njg2IiB5Mj0iMjguMTk0MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNDtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDEyOTIwMzkzMzY3OTEzOTUxMjQ1MDAwMDAwMTA5NTI3ODA0MzQ3OTA1MDE3NF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU01OS45LDI4Yy0wLjktMC4xLTUuNCwwLjMtNi41LDAuNGMwLjEsMiwwLDQtMC40LDUuOWMwLjIsMC40LDAuMywwLjgsMC40LDEuMmMxLjYsNC44LDEuMSw5LjktMS42LDE0LjVjLTAuMywwLjUtMC42LDEtMSwxLjUKCWMwLDAsMCwwLDAsMEM1Nyw0NS42LDYwLjUsMzcuMSw1OS45LDI4QzU5LjksMjgsNTkuOSwyOCw1OS45LDI4eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAwNTA2NTEwOTMxMTczNjM3MDUzNjAwMDAwMTM2ODkxNzAyMDY4NTYyNzQ4NjlfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMyLjg3NzciIHkxPSI1MC41OTA3IiB4Mj0iNDUuOTgwNyIgeTI9IjQ3LjU5MTciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1OS44OTIxKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyMzFGMjAiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAwNTA2NTEwOTMxMTczNjM3MDUzNjAwMDAwMTM2ODkxNzAyMDY4NTYyNzQ4NjlfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iCglNMzYuNyw3LjhjMC43LDAuMSwxLjQsMC4yLDIsMC40YzAsMCwwLjEsMCwwLjEsMGMyLjYsMS4xLDQuOSwyLjUsNyw0LjRjMCwwLDAsMCwwLDBjMS0xLjEsMi45LTIuNCwyLjktMi40cy0yLjktMy03LjMtMy45CgljLTMuMS0wLjYtMTAuMS0xLjMtMTQuNSw2LjNsMCwwYzAuMy0wLjUsMC43LTEsMS4xLTEuNEMzMC4xLDguOCwzMy4zLDcuNCwzNi43LDcuOHoiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTQyMTM3MjQ5MzE5MTMyOTQ1NDYwMDAwMDA0NDY0NDM3MDk0NDE2NzIyNTc5XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0Ni40ODU4IiB5MT0iMTcuMDUxNCIgeDI9IjM3LjMzMDgiIHkyPSI3LjIwMTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1OS44OTIxKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyMzFGMjAiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxNDIxMzcyNDkzMTkxMzI5NDU0NjAwMDAwMDQ0NjQ0MzcwOTQ0MTY3MjI1NzlfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iCglNNDUuOSw0Ni45Yy0wLjQsMC41LTAuOSwxLjEtMS40LDEuNWMwLDAsMCwwLTAuMSwwLjFjLTIuMiwxLjctNC43LDMtNy4zLDMuOGMwLDAsMCwwLDAsMGMwLjUsMS40LDAuNiwzLjcsMC42LDMuN3M0LTEsNy00LjQKCWMyLjEtMi40LDYuMi04LjEsMS45LTE1LjdjMCwwLDAsMCwwLDAuMWMwLjMsMC41LDAuNSwxLjEsMC43LDEuNkM0OC4zLDQwLjYsNDcuOSw0NC4xLDQ1LjksNDYuOUM0NS45LDQ2LjksNDUuOSw0Ni45LDQ1LjksNDYuOXoiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDQ5MTk3MDU0MjkzMjg5MzQxNjEwMDAwMDAzNDU3MTkzMDA1MTQyMzYwNDUyXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMC42MzIiIHkxPSIyMi4wMjk2IiB4Mj0iNi42ODIiIHkyPSIzNC44Nzg2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTkuODkyMSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjMxRjIwIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC41O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDQ5MTk3MDU0MjkzMjg5MzQxNjEwMDAwMDAzNDU3MTkzMDA1MTQyMzYwNDUyXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTcuNCwzNS4zYy0wLjMtMC42LTAuNS0xLjMtMC42LTEuOWMwLDAsMC0wLjEsMC0wLjFjLTAuNC0yLjgtMC4zLTUuNiwwLjMtOC4zdjBjLTEuNS0wLjMtMy41LTEuMy0zLjUtMS4zcy0xLjEsNCwwLjMsOC4zCgljMSwzLDQsOS40LDEyLjcsOS41YzAsMCwwLDAtMC4xLDBjLTAuNiwwLTEuMi0wLjEtMS44LTAuMkMxMS42LDQwLjUsOC44LDM4LjUsNy40LDM1LjNDNy40LDM1LjMsNy40LDM1LjMsNy40LDM1LjN6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA2MDc1Mjg1MjM3MDg5OTE3ODMwMDAwMDAxNjMxNTQ5OTA1MjcxOTQyNDY5M18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzUuNzQwNiIgeTE9IjQ1Ljc1OTYiIHgyPSIzMS41OTc2IiB5Mj0iNDEuNjEwNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNjtmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA2MDc1Mjg1MjM3MDg5OTE3ODMwMDAwMDAxNjMxNTQ5OTA1MjcxOTQyNDY5M18pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU0zNS41LDE5LjVjMC4yLDAsMC41LDAsMC43LDBjMCwwLTAuMi0zLjEtMC41LTQuN2MtMC40LTEuNi0xLTIuNy0xLjYtMy4zYy0wLjQtMC40LTEuOC0xLTIuOSwyLjNDMzAuOCwxNi42LDMyLjcsMTkuMiwzNS41LDE5LjUKCUMzNS41LDE5LjUsMzUuNSwxOS41LDM1LjUsMTkuNUwzNS41LDE5LjVMMzUuNSwxOS41eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAwOTc0NTkwNDAyNDI1MTMzOTc4MjAwMDAwMDg2MDYxMDMxMzIzMzM5NzcyNjFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEzLjM4NzciIHkxPSIyNi45MzQiIHgyPSIxOS4wNDk3IiB5Mj0iMjUuNDEzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTkuODkyMSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjMxRjIwIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC41O2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDk3NDU5MDQwMjQyNTEzMzk3ODIwMDAwMDA4NjA2MTAzMTMyMzMzOTc3MjYxXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTE4LjIsMzAuNWMtMC4xLTAuMi0wLjItMC40LTAuMy0wLjZjMCwwLTIuNiwxLjctMy44LDIuOGMtMS4yLDEuMS0xLjgsMi4yLTIsM2MtMC4xLDAuNiwwLjEsMi4xLDMuNSwxLjQKCUMxOC4xLDM2LDE5LjMsMzMuMSwxOC4yLDMwLjVMMTguMiwzMC41eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxMDYxNDgzMTYzOTUzNjk3NzMzMjAwMDAwMDI3NTc5MjMyOTE4ODYwNzgzODlfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQwLjg2MjIiIHkxPSIxNi45ODgyIiB4Mj0iMzkuMzQ1MiIgeTI9IjIyLjY0ODIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1OS44OTIxKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyMzFGMjAiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjY7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxMDYxNDgzMTYzOTUzNjk3NzMzMjAwMDAwMDI3NTc5MjMyOTE4ODYwNzgzODlfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iCglNMzYuMyw0MGMtMC4xLDAuMi0wLjMsMC40LTAuNCwwLjZjMCwwLDIuOCwxLjQsNC40LDEuOWMxLjYsMC41LDIuOCwwLjUsMy42LDAuM2MwLjYtMC4yLDEuOC0xLjEtMC41LTMuN0M0MS4yLDM3LjMsMzgsMzcuOCwzNi4zLDQwCglDMzYuMyw0MCwzNi4zLDQwLDM2LjMsNDBDMzYuMyw0MCwzNi4zLDQwLDM2LjMsNDB6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA4MjMzNDk3NDAzNjcyNzA3NDk2MDAwMDAxMjU1Njc3MDc4OTE1NjgwOTg1OV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzIuMjM3OSIgeTE9IjIyLjAyNjEiIHgyPSIzNC43Mjc5IiB5Mj0iMjUuNDYwMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA4MjMzNDk3NDAzNjcyNzA3NDk2MDAwMDAxMjU1Njc3MDc4OTE1NjgwOTg1OV8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU0zNS4zLDI3Yy0wLjYsMi4xLTEuNSw0LTIuNiw1LjdjLTAuMSwwLjEtMC4xLDAuMi0wLjIsMC4zYzAsMCwwLDAsMCwwYy0wLjgsMS4xLTEuNiwyLjEtMi42LDNjMC43LDAuNywxLjQsMS40LDIuMiwyLjEKCWMwLjksMC43LDEuOSwxLjQsMi45LDJjMi4xLTIuMiwzLjgtNC42LDUuMS03LjRjMC41LTAuOSwwLjgtMS45LDEuMi0yLjhjLTEuMS0wLjgtMi4xLTEuNC0zLjEtMS44QzM3LjMsMjcuNywzNi4zLDI3LjMsMzUuMywyNwoJTDM1LjMsMjdMMzUuMywyN3oiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDYxNDU5NTM3MjM3NTAyODEyMTIwMDAwMDE3ODkxMjkyODIyNzk0NzU1NzE1XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMy42NzcyIiB5MT0iMjMuNTEzMyIgeDI9IjE4LjcwMjIiIHkyPSIyMS4xNDEzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTkuODkyMSkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjMxRjIwIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC4zO2ZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMDYxNDU5NTM3MjM3NTAyODEyMTIwMDAwMDE3ODkxMjkyODIyNzk0NzU1NzE1Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9IgoJTTE0LjcsNDcuOGM1LjcsMC44LDExLjItMSwxNC45LTMuMmMtMC41LTAuMy0wLjktMC42LTEuNC0xYy0xLjQtMS4xLTIuNy0yLjMtMy45LTMuN2MtMi44LDEuMi02LjMsMS45LTkuNiwxLjMKCWMtMy4yLTAuNi01LjktMi43LTcuNC01LjljLTAuMy0wLjYtMC41LTEuMy0wLjYtMS45QzcuNiwzOS4xLDEwLjUsNDQuMiwxNC43LDQ3LjhMMTQuNyw0Ny44TDE0LjcsNDcuOHoiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWFzdHItY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzAwMDAwMTc5NjIzMDExMzg3MzY4Mzk1NDEwMDAwMDEwODEyNzE4NjIxODQ1NDc2NTAyXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMS44NzYiIHkxPSIzMS43OTU3IiB4Mj0iMjMuNDE2IiB5Mj0iMjguNTk2NyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDE3OTYyMzAxMTM4NzM2ODM5NTQxMDAwMDAxMDgxMjcxODYyMTg0NTQ3NjUwMl8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU0yOS45LDM2Yy0xLjQtMS41LTIuNy0zLjItMy42LTUuMWMwLTAuMS0wLjEtMC4yLTAuMS0wLjN2MGMtMC42LTEuMi0xLTIuNS0xLjMtMy43Yy0xLDAuMi0yLDAuNS0yLjksMC45Yy0xLjEsMC40LTIuMiwxLTMuMiwxLjUKCWMwLjksMy4yLDIuMyw1LjgsMy44LDguMWMwLjYsMC44LDEuMiwxLjcsMS45LDIuNGMxLjItMC41LDIuMy0xLjEsMy4xLTEuOEMyOC40LDM3LjUsMjkuMiwzNi44LDI5LjksMzZDMjkuOSwzNiwyOS45LDM2LDI5LjksMzZ6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA2MDc0MDcwOTU0MzU0MTkxNjIwMDAwMDAxNjY1ODE0MTgxMDI5OTU4ODc2OV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjkuMDI5NiIgeTE9IjQxLjY2OTkiIHgyPSIyNy45NjY2IiB5Mj0iNDUuMzQwOSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDA2MDc0MDcwOTU0MzU0MTkxNjIwMDAwMDAxNjY1ODE0MTgxMDI5OTU4ODc2OV8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU0yMi4yLDcuOWMtMy41LDQuNS00LjcsMTAuMi00LjYsMTQuNWMwLjUtMC4yLDEtMC41LDEuNS0wLjdjMS42LTAuNywzLjQtMS4yLDUuMS0xLjVjMC4zLTMsMS41LTYuNSwzLjctOWMyLjEtMi40LDUuMy0zLjgsOC44LTMuNAoJYzAuNywwLjEsMS40LDAuMiwyLDAuNGMwLDAsMC4xLDAsMC4xLDBjLTMuMy0xLjMtNi45LTEuOS0xMC40LTEuN0MyNi4yLDYuNywyNC4yLDcuMiwyMi4yLDcuOUMyMi4yLDcuOSwyMi4yLDcuOSwyMi4yLDcuOUwyMi4yLDcuOQoJTDIyLjIsNy45eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxNTI5NzA4MzI2NTg4NDM3OTQxOTAwMDAwMTYwODQwNDM3MTY5NTc4MDY3NTNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQwLjUyMzciIHkxPSIyNC44NTkiIHgyPSI0My42MDM3IiB5Mj0iMjQuMTUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1OS44OTIxKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyMzFGMjAiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjM7ZmlsbDp1cmwoI2FudC13ZWIzLWljb24tYXN0ci1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMDAwMDAxNTI5NzA4MzI2NTg4NDM3OTQxOTAwMDAwMTYwODQwNDM3MTY5NTc4MDY3NTNfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iCglNNTMsMzQuM0M1MC45LDI5LDQ2LjYsMjUuMiw0Mi44LDIzYzAsMC41LTAuMSwxLjEtMC4yLDEuN2MtMC4yLDEuOC0wLjYsMy41LTEuMiw1LjJjMi41LDEuOCw0LjksNC41LDUuOSw3LjdjMSwzLjEsMC42LDYuNS0xLjQsOS4zCgljLTAuNCwwLjUtMC45LDEuMS0xLjQsMS41bDAsMEM0OC45LDQ1LDUyLDQwLDUzLDM0LjNDNTMuMSwzNC4zLDUzLDM0LjMsNTMsMzQuM0w1MywzNC4zTDUzLDM0LjN6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDEwMzk0OTQ0NTUyMTc4NTYzMDc2MDAwMDAwMDM1NDk4OTQ5MjUwODM5Mzg4OF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzUuNjkxNiIgeTE9IjM1LjI2NDgiIHgyPSIzMS43ODQ2IiB5Mj0iMzUuOTczOCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU5Ljg5MjEpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMUYyMCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1hc3RyLWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDEwMzk0OTQ0NTUyMTc4NTYzMDc2MDAwMDAwMDM1NDk4OTQ5MjUwODM5Mzg4OF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSIKCU0yNC4yLDIzLjhjMC4xLDEsMC4zLDIuMSwwLjYsMy4xYzIuMS0wLjUsNC4yLTAuNyw2LjItMC42bDAuMywwaDBjMS4zLDAuMSwyLjYsMC4zLDMuOSwwLjdjMC4zLTEsMC41LTIsMC43LTMKCWMwLjItMS4zLDAuMi0yLjUsMC4yLTMuNWMtMy4yLTAuOC02LjItMS04LjktMC43Yy0xLDAuMS0yLDAuMi0zLjEsMC40QzI0LjEsMjEuNSwyNC4xLDIyLjcsMjQuMiwyMy44CglDMjQuMiwyMy44LDI0LjIsMjMuOCwyNC4yLDIzLjh6Ii8+Cjwvc3ZnPgo=) */
export const AstrCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-astr-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

AstrCircleColorful.displayName = 'AstrCircleColorful';
