// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/poocoin-colorful.svg';

/**![PoocoinColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1wb29jb2luLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODY1LjggODg4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NjUuOCA4ODg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnPgoJPGcgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij4KCQk8cGF0aCBkPSJNMTc4LjksNjYwLjFjNC4zLTAuMyw3LjUtMC41LDkuOC0wLjdjNi44LTAuNSwxNy4yLTAuOSwyMC44LTAuOWMxOS4yLDAsMjguOSwyLjQsMzYuNSw5LjMKCQkJYzcuMSw2LjIsMTEsMTUuMywxMSwyNS4xYzAsMjEuNS0xNS40LDM0LjUtNDAuOCwzNC41Yy0xLjEsMC0zLDAtNS0wLjF2MjAuNGgtMzIuM0wxNzguOSw2NjAuMUwxNzguOSw2NjAuMXogTTIxMS4yLDcwMi45CgkJCWMxLjMsMCwzLDAuMSwzLjYsMC4xYzcuMywwLDExLjQtMy4yLDExLjQtOWMwLTUuNC00LjctOS40LTExLTkuNGgtNFY3MDIuOUwyMTEuMiw3MDIuOXoiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmU7Ii8+CgkJPHBhdGggZD0iTTMyNC4xLDY5MC44YzUuOCw1LjQsOSwxMi44LDkuNSwyMS42YzEuMywyMS43LTE1LDM3LjQtMzguOCwzNy40Yy0xMS45LDAtMjEuNy0zLjUtMjguMy0xMC4xCgkJCWMtNS44LTUuOC05LjUtMTQuNi05LjUtMjIuOGMwLTIwLjgsMTQuNC0zNC45LDM2LjgtMzYuMkMzMDUuMyw2ODAuMSwzMTYuNyw2ODMuOCwzMjQuMSw2OTAuOHogTTI4Ni42LDcxNS4xCgkJCWMwLjQsNi44LDQuMiwxMS43LDkuMSwxMS43YzUuNSwwLDguNy00LjgsNy45LTEyLjJjLTAuNy02LjMtNC4zLTEwLjUtOS0xMC41QzI4OS43LDcwNC4xLDI4Ni4yLDcwOC42LDI4Ni42LDcxNS4xeiIgc3R5bGU9ImRpc3BsYXk6IGlubGluZTsiLz4KCQk8cGF0aCBkPSJNNDAzLjYsNjkwLjhjNS44LDUuNCw5LDEyLjgsOS41LDIxLjZjMS4zLDIxLjctMTUsMzcuNC0zOC44LDM3LjRjLTExLjksMC0yMS43LTMuNS0yOC4zLTEwLjEKCQkJYy01LjgtNS44LTkuNS0xNC42LTkuNS0yMi44YzAtMjAuOCwxNC40LTM0LjksMzYuOC0zNi4yQzM4NC44LDY4MC4xLDM5Ni4yLDY4My44LDQwMy42LDY5MC44eiBNMzY2LjIsNzE1LjEKCQkJYzAuNCw2LjgsNC4yLDExLjcsOS4xLDExLjdjNS41LDAsOC43LTQuOCw3LjktMTIuMmMtMC43LTYuMy00LjMtMTAuNS05LTEwLjVDMzY5LjMsNzA0LjEsMzY1LjgsNzA4LjYsMzY2LjIsNzE1LjF6IiBzdHlsZT0iZGlzcGxheTogaW5saW5lOyIvPgoJCTxwYXRoIGQ9Ik00NzkuNCw2OTIuMWMtNC44LTMuOS04LjUtNS40LTEzLjctNS40Yy04LjksMC0xNS40LDcuMS0xNS40LDE2LjhzNy40LDE3LjMsMTYuNSwxNy4zCgkJCWM1LjgsMCwxMC4yLTEuNywxNS42LTUuOGwxMy44LDI1Yy0xMS40LDcuOS0yMy4zLDExLjMtMzYuNSwxMC4zYy0yNS45LTEuNy00My42LTIwLjktNDMuNi00Ny41YzAtMTEuOSw0LjgtMjQuMiwxMi45LTMyLjIKCQkJYzguNS04LjUsMjEuNS0xMy43LDMzLjktMTMuN2MxMy4zLDAsMjIuNSwzLDMzLjMsMTAuNkw0NzkuNCw2OTIuMXoiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmU7Ii8+CgkJPHBhdGggZD0iTTU2MC42LDY5MC44YzUuOCw1LjQsOSwxMi44LDkuNSwyMS42YzEuMywyMS43LTE1LDM3LjQtMzguOCwzNy40Yy0xMS45LDAtMjEuNy0zLjUtMjguMy0xMC4xCgkJCWMtNS44LTUuOC05LjUtMTQuNi05LjUtMjIuOGMwLTIwLjgsMTQuNC0zNC45LDM2LjgtMzYuMkM1NDEuOCw2ODAuMSw1NTMuMiw2ODMuOCw1NjAuNiw2OTAuOHogTTUyMy4yLDcxNS4xCgkJCWMwLjQsNi44LDQuMiwxMS43LDkuMSwxMS43YzUuNSwwLDguNy00LjgsNy45LTEyLjJjLTAuNy02LjMtNC4zLTEwLjUtOS0xMC41QzUyNi4zLDcwNC4xLDUyMi44LDcwOC42LDUyMy4yLDcxNS4xeiIgc3R5bGU9ImRpc3BsYXk6IGlubGluZTsiLz4KCQk8cGF0aCBkPSJNNjA1LDc0Ny43aC0zMC4zdi02NC4zSDYwNVY3NDcuN3ogTTYwMy4zLDY2OC4xYzAsNy00LjgsMTEuNS0xMi4yLDExLjVjLTcuMywwLTEyLjItNC43LTEyLjItMTEuNQoJCQlzNS0xMS41LDEyLjItMTEuNVM2MDMuMyw2NjEuMyw2MDMuMyw2NjguMXoiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmU7Ii8+CgkJPHBhdGggZD0iTTYzMy41LDY4MS4zYzQsMi41LDUuMiw0LjcsNi4yLDEwLjNjNi4zLTcuNCwxMy41LTEwLjksMjMuMS0xMC45YzguNywwLDE2LjQsNC4zLDE5LjcsMTEKCQkJYzEuNywzLjMsMi4zLDcuMywyLjMsMTQuNXY0MS41aC0zMC4zdi0zMy40YzAtNS41LTEuNy03LjgtNi4yLTcuOGMtMi4zLDAtNC42LDEuMS02LjcsMy4zdjM3LjloLTMwLjN2LTQwCgkJCWMwLTE0LjEtMC41LTE2LjgtMy44LTIxLjZMNjMzLjUsNjgxLjN6IiBzdHlsZT0iZGlzcGxheTogaW5saW5lOyIvPgoJPC9nPgoJPHBhdGggZD0iTTczMC43LDU5Ny44Yy0xNC0yMy43LTMzLjItNDUuOC01MS42LTYzYy0xMy4yLTIuNC0yNi4zLTQuOS0zOC40LTEwLjNjLTguOC0zLjktMTYuNi0xMS4zLTE4LjQtMjAuOAoJCWMtMy41LTE4LjksMTQuOC0yOS40LDMxLjQtMjkuMWMxMS44LDAuMSwxOC4yLDMuNSwzMy44LDguNmM1LjMtNC42LTAuNy0zMi40LTEuOS0zOC44Yy04LjQtNDYuOC01MC41LTc0LjgtODMuNi0xMDQuMwoJCWMtMjguNy0yNS42LTYxLjQtNTAuOC04MS44LTgzLjRjLTIwLTMxLjktMzEuNC02OS4yLTMxLjQtMTA2LjljMC0zMi40LDguNS02NC41LDI0LjMtOTIuN2MtMzAuMyw3LjMtNTksMTkuNi04NiwzNC43CgkJYy01Miw0OC4xLTg4LjksMTA5LjQtMTI0LDE3MC43Yy05LjYsMTUuNC0xNC44LDMzLjctMTUuNiw1MS42YzAuMSwwLDAuMywwLjEsMC40LDAuMWMxNS41LDQsMzMuOSw5LjYsNDIuNiwyNC4yCgkJYzExLjYsMTkuMi04LjUsNDAuNi0yOC4zLDM2Yy0xNi4zLTMuOC0zMS40LTkuNy00Ni45LTE0LjZjLTQxLjksNC4yLTc2LjMsMzguOC05MS4xLDc2LjhjLTEwLjIsMjguNy03LjIsNTksOS4yLDg0LjMKCQljNi0wLjIsMTEuOSwwLDE3LjksMC40YzE3LjYsMS40LDM5LjYsNSw1NS4xLDEzLjhjMTMuNyw3LjgsMjIsMjQuMSwxMS43LDM4LjNjLTE0LjksMjAuNS0zNy41LDMuNC01NS4zLTAuOAoJCWMtMS42LTAuNC0zLjItMC43LTQuOC0wLjljLTc0LjYsMTkuNC05NC42LDExMC44LTU2LjIsMTY5LjhjMTEuNSwxNy43LDI2LjMsMzIuOSw0Mi4xLDQ2LjhjMTEuNywxMC4zLDMzLjYsMzMsNDguOSwzNS45CgkJYzU2LjgsMTAuOCwxMTYsMTUsMTcxLjgsMTZjODksMS41LDE3OC4xLTcuNSwyNjUuMi0yNS43YzguMi0xLjcsMTYuNC0zLjYsMjQuNi01LjdjNy43LTIsMTkuOS0yMS42LDI0LjgtMjcuOQoJCUM3NjAsNzI4LjMsNzY0LjUsNjU0LjksNzMwLjcsNTk3Ljh6IiBzdHlsZT0iZmlsbDogIzgyNUMzQzsiLz4KCTxwYXRoIGQ9Ik04MTYuNyw1NTQuNmMtMTUuMS0xNy0zMy4yLTMxLjgtNTMuNC00My43YzcuMS04LjYsMjEuNS00Mi45LDIyLjktNDguNGM0LjMtMTcuMiw0LjctMzUuNCwxLjktNTIuOQoJCWMtMTAuNy02Ny4xLTcxLTk3LTEyMy4zLTEyOS4xYy0zNy42LTIzLjEtNzUtNTYuNi04Ny43LTEwMC4zYy04LjEtMjcuNy0zLTU3LjYsMTAuNi04Mi42YzctMTIuOSwxNi4zLTI0LjcsMjcuMy0zNC40CgkJYzkuNi04LjUsMjEuNi0xMy43LDI1LjEtMjcuMkM2NTIuOS0xMy4zLDU0NiwxLDUyMS44LDUuMWMtODMuMywxNC4zLTE1OC43LDYyLjgtMjIxLjcsMTE3LjFjLTI4LjQsMjQuNS01Ny4xLDQ4LjUtNzkuMiw3OS4xCgkJYy0xMC44LDE1LTIwLjEsMzEuMi0yNi40LDQ4LjZjLTEuNiw0LjQtMTEuNCw1NC41LTguOSw1NGMtMTIuNCwyLjItMjQuNCw2LjEtMzUuOSwxMS42Yy00NywyMi43LTc4LjksNzIuMi04OS4zLDEyMi4zCgkJYy03LjgsMzcuOC0zLDgwLjcsMjAuNiwxMTIuM2MtMS40LTEuOC0yNC40LDE3LjMtMjYuNywxOS4zQzEyLjUsNjA2LTguNCw2NjQuOCwzLjEsNzE5LjVjNS42LDI2LjcsMTguNyw1MS41LDM3LjIsNzEuNgoJCWM0OC4xLDUyLjIsMTIyLjMsNzAuMiwxODkuNiw4MS43YzEwNSwxOCwyMTQuNywxOC41LDMyMC43LDkuNGMxMDIuMi04LjcsMjMxLjQtMjUuNCwyOTAuMS0xMjAuNQoJCUM4ODQuNyw2OTAuNyw4NjYuOSw2MTEsODE2LjcsNTU0LjZ6IE04MTcuOCw2OTEuNWMtNC42LDM3LjQtMjYuMSw2OS44LTU3LjYsOTAuMmMtMjcsMTcuNS01OC43LDI2LjMtOTAuMiwzMi45CgkJYy04Ny4xLDE4LjItMTc2LjIsMjcuMy0yNjUuMiwyNS43Yy04My43LTEuNC0xNzQuNy0xMC4zLTI1NC41LTM3LjNjLTQyLjEtMTQuMy04My00Mi42LTk2LjctODVjLTIyLjEtNjcuOCwzNi41LTEyNy41LDk4LjMtMTQzLjkKCQljMTYuNi00LjQsMzQuNC01LjMsNTEuMS0xLjNjMTcuOSw0LjIsNDAuNSwyMS4zLDU1LjMsMC44YzEwLjMtMTQuMiwyLTMwLjUtMTEuNy0zOC4zYy0xNS41LTguOS0zNy42LTEyLjQtNTUuMS0xMy44CgkJYy0xMC40LTAuOC0yMS0wLjctMzEuNCwwLjVjLTMuNiwwLjQtMzAuMyw4LjItMzEuMyw3LjJjLTYwLjktNTguNSwyLjMtMTc1LjYsODAuNC0xNzcuMmMzNC0wLjcsNjEuMywxNSw5My4yLDIyLjQKCQljMTkuOCw0LjYsMzkuOS0xNi44LDI4LjMtMzZjLTguOC0xNC42LTI3LjItMjAuMi00Mi42LTI0LjJjLTQuMS0xLTUyLjUtOS43LTUyLjUtMTAuNmMtMS4zLTUzLjQsNDQuNC05NS45LDgwLjctMTI5CgkJYzY0LjgtNTksMTQ3LjUtMTE5LDI0My42LTEyNC41Yy0zNy42LDI0LjctNDEuMyw4OC44LTM0LjQsMTI4LjZjMTQuNSw4My4xLDgyLjMsMTI2LjgsMTUwLjMsMTY1LjFjMTkuNSwxMSwzOS43LDIzLjcsNTIuNCw0Mi41CgkJYzExLjUsMTcsMTQuNSwzOC45LDEwLjcsNTguOGMtMS42LDguNC00LjcsMTYuNC03LjksMjQuMmMtMC45LDIuMS05LDIzLjMtMTEsMjIuOGMtNDIuOS0xMC4xLTQ4LjQtMTcuNC02Ni4xLTE3LjYKCQljLTE2LjYtMC4yLTM0LjksMTAuMi0zMS40LDI5LjFjMS43LDkuNSw5LjYsMTYuOSwxOC40LDIwLjhjMjUuNywxMS4zLDU1LjUsOS44LDgxLjgsMjJDNzc5LDU3Mi40LDgyNS45LDYyNS44LDgxNy44LDY5MS41eiIvPgoJPGc+CgkJPHBhdGggZD0iTTM1Mi41LDY3Ny42YzYuMiw1LjIsMTMuNyw5LjIsMjAuMSwxMi4yYzQxLjcsMTkuNiw5My4yLDE5LjcsMTM0LjMtMS41YzEwLjktNS42LDI0LjgtMTIsMzEuMy0yMwoJCQljNy41LTEyLjgsMC4zLTMxLjQtMTQuMS0zNS40Yy01LjctMS42LTExLjgtMC45LTE3LjQsMWMtMTYuNiw1LjUtMjcuMiwxNS44LTQ0LjUsMjAuMWMtMTUuNSwzLjgtMzIsMy41LTQ3LjQtMC42CgkJCWMtMTUuMS00LjEtMzEuOS0xNi44LTQ3LjEtMTkuMmMtMTEuNC0xLjgtMjIuNCw3LTI2LjQsMTcuM0MzMzcuMiw2NTkuOCwzNDMuOSw2NzAuNSwzNTIuNSw2NzcuNnoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMjEuOSw1MDcuMWMtMS43LDIyLjYsMTMuNSw0Ni45LDM4LjYsNDVjMjMuNS0xLjgsMzguMS0yNy4yLDMzLjUtNDkuMWMtNi4xLTI5LjItNDMuOS00Mi41LTYzLjgtMTcuOAoJCQlDMzI1LjIsNDkxLjQsMzIyLjUsNDk5LjIsMzIxLjksNTA3LjF6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBkPSJNNDg2LjYsNTA3LjFjLTEuNywyMi42LDEzLjUsNDYuOSwzOC42LDQ1YzIzLjUtMS44LDM4LjEtMjcuMiwzMy41LTQ5LjFjLTYuMS0yOS4yLTQzLjktNDIuNS02My44LTE3LjgKCQkJQzQ4OS45LDQ5MS40LDQ4Ny4yLDQ5OS4yLDQ4Ni42LDUwNy4xeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZD0iTTY0MC43LDgyMC40YzIuNC0wLjQsNC44LTAuOSw3LjItMS4zQzY0NS41LDgxOS41LDY0My4xLDgxOS45LDY0MC43LDgyMC40eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTY2OS41LDUzMi45Yy0wLjIsMC0wLjQtMC4xLTAuNi0wLjFDNjY5LjEsNTMyLjksNjY5LjMsNTMyLjksNjY5LjUsNTMyLjl6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjI1LjQsODIzLjFjMi41LTAuNCw1LTAuOSw3LjYtMS4zQzYzMC41LDgyMi4yLDYyOCw4MjIuNiw2MjUuNCw4MjMuMXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02MjMuMyw1MDcuMmMwLjQsMS4xLDAuOSwyLjEsMS40LDMuMkM2MjQuMSw1MDkuNCw2MjMuNyw1MDguMyw2MjMuMyw1MDcuMnoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02MjIuNCw1MDMuOWMwLjIsMS4xLDAuNSwyLjIsMC45LDMuM0M2MjIuOSw1MDYuMSw2MjIuNiw1MDUsNjIyLjQsNTAzLjl6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjI0LjcsNTEwLjVjMC41LDEsMS4yLDIsMS44LDIuOUM2MjUuOSw1MTIuNSw2MjUuMyw1MTEuNSw2MjQuNyw1MTAuNXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02NTguMSw0NzQuOGMtMC4xLDAtMC4zLDAtMC41LDBDNjU3LjgsNDc0LjgsNjU4LDQ3NC44LDY1OC4xLDQ3NC44eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTY2NC43LDUzMS45Yy0wLjMtMC4xLTAuNy0wLjItMS4xLTAuMkM2NjMuOSw1MzEuOCw2NjQuMyw1MzEuOSw2NjQuNyw1MzEuOXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02NTYuMiw0NzQuN2MtMC4xLDAtMC4yLDAtMC40LDBDNjU1LjksNDc0LjcsNjU2LDQ3NC43LDY1Ni4yLDQ3NC43eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTY1OS44LDUzMC44Yy0wLjQtMC4xLTAuOS0wLjItMS4zLTAuM0M2NTguOSw1MzAuNiw2NTkuNCw1MzAuNyw2NTkuOCw1MzAuOHoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02NTUuOCw4MTcuNWMyLTAuNCw0LTAuOCw2LTEuMkM2NTkuOCw4MTYuNyw2NTcuOCw4MTcuMSw2NTUuOCw4MTcuNXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02MjguOCw1MTYuMmMtMC44LTAuOC0xLjUtMS43LTIuMi0yLjdDNjI3LjMsNTE0LjQsNjI4LDUxNS4zLDYyOC44LDUxNi4yeiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTY0OC41LDUyNy41YzAuNSwwLjIsMS4xLDAuNCwxLjYsMC41QzY0OS42LDUyNy45LDY0OS4xLDUyNy43LDY0OC41LDUyNy41eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTY0My42LDUyNS43YzAuNiwwLjIsMS4xLDAuNSwxLjcsMC43QzY0NC44LDUyNi4yLDY0NC4yLDUyNS45LDY0My42LDUyNS43eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTU1OS44LDUwLjFjLTE5LjksMS4xLTM5LjEsNC43LTU3LjgsMTBjMy43LTEsNy40LTIsMTEuMi0yLjljLTE1LjgsMjguMi0yNC4zLDYwLjMtMjQuMyw5Mi43CgkJCWMwLDM3LjcsMTEuNSw3NSwzMS40LDEwNi45YzIwLjQsMzIuNyw1My4yLDU3LjksODEuOCw4My40YzMzLjEsMjkuNSw3NS4yLDU3LjUsODMuNiwxMDQuM2MxLjEsNi40LDcuMSwzNC4yLDEuOSwzOC44CgkJCWMtOC4zLTIuNy0xNC01LTE5LjMtNi41YzEwLjIsMi45LDIyLjEsOC41LDUxLjUsMTUuNGMyLDAuNSwxMC4xLTIwLjcsMTEtMjIuOGMzLjItNy45LDYuMy0xNS44LDcuOS0yNC4yCgkJCWMzLjktMjAsMC44LTQxLjgtMTAuNy01OC44Yy0xMi43LTE4LjktMzIuOS0zMS42LTUyLjQtNDIuNWMtNjcuOS0zOC4zLTEzNS44LTgyLTE1MC4zLTE2NS4yQzUxOC41LDEzOC45LDUyMi4zLDc0LjgsNTU5LjgsNTAuMXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02NTMuNCw1MjkuMWMwLjUsMC4xLDEsMC4zLDEuNSwwLjRDNjU0LjQsNTI5LjQsNjUzLjksNTI5LjIsNjUzLjQsNTI5LjF6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjM3LjYsNTIzYzEsMC41LDIsMSwzLDEuNUM2MzkuNiw1MjQsNjM4LjYsNTIzLjUsNjM3LjYsNTIzeiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTYzMS42LDUxOC44YzAuOCwwLjcsMS43LDEuNCwyLjYsMkM2MzMuMyw1MjAuMiw2MzIuNCw1MTkuNSw2MzEuNiw1MTguOHoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02MzEuNCw1MTguNmMtMC44LTAuNy0xLjctMS41LTIuNC0yLjNDNjI5LjcsNTE3LjEsNjMwLjUsNTE3LjksNjMxLjQsNTE4LjZ6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjM0LjUsNTIxLjFjMC45LDAuNiwxLjksMS4yLDIuOCwxLjhDNjM2LjQsNTIyLjMsNjM1LjQsNTIxLjcsNjM0LjUsNTIxLjF6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjIyLjMsNDk1LjZjMS40LTguNiw4LTE0LjgsMTYuMi0xOC4yQzYzMC4yLDQ4MC44LDYyMy43LDQ4Nyw2MjIuMyw0OTUuNnoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik00ODAuMiw2Ny4yYzIuMi0wLjgsNC4zLTEuNSw2LjUtMi4zQzQ4NC41LDY1LjYsNDgyLjMsNjYuNCw0ODAuMiw2Ny4yeiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTQ3NS4yLDY5LjFjLTEuOCwwLjctMy42LDEuMy01LjQsMi4xbDAsMEM0NzEuNiw3MC41LDQ3My40LDY5LjgsNDc1LjIsNjkuMXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik00NzcuNSw4MzkuMmMxLjMtMC4xLDIuNy0wLjEsNC4xLTAuMkM0ODAuMiw4MzkuMSw0NzguOCw4MzkuMiw0NzcuNSw4MzkuMnoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik01MzAuMiw4MzUuNmMxLjYtMC4xLDMuMy0wLjMsNC45LTAuNEM1MzMuNSw4MzUuMyw1MzEuOCw4MzUuNSw1MzAuMiw4MzUuNnoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik00OTkuNiw2MC44Yy0yLjksMC44LTUuNywxLjctOC42LDIuNkM0OTMuOSw2Mi41LDQ5Ni43LDYxLjYsNDk5LjYsNjAuOHoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik00OTIuMiw4MzguNWMxLjItMC4xLDIuNC0wLjEsMy42LTAuMkM0OTQuNiw4MzguMyw0OTMuNCw4MzguNCw0OTIuMiw4MzguNXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02OTQuMyw4MDljLTMuNywxLTcuNCwxLjktMTEuMSwyLjdDNjg2LjksODEwLjgsNjkwLjYsODA5LjksNjk0LjMsODA5eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTQ2My4zLDgzOS44YzEuMSwwLDIuMi0wLjEsMy40LTAuMUM0NjUuNiw4MzkuNyw0NjQuNCw4MzkuOCw0NjMuMyw4MzkuOHoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik03MjIuNiw1NDYuNWMtMTMuOS02LjQtMjguNy05LTQzLjUtMTEuN2MxOC41LDE3LjIsMzcuNiwzOS4zLDUxLjYsNjNjMzMuOCw1Ny4xLDI5LjMsMTMwLjUtMTEuNCwxODMuMgoJCQljLTQuOSw2LjMtMTcsMjUuOC0yNC43LDI3LjljMjMuMS02LjEsNDUuNi0xNC4zLDY1LjYtMjcuMWMzMS42LTIwLjQsNTMtNTIuOCw1Ny42LTkwLjJDODI1LjksNjI1LjgsNzc5LDU3Mi40LDcyMi42LDU0Ni41eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTY2MC4xLDQ3NS4xYy0wLjEsMC0wLjIsMC0wLjMsMEM2NTkuOSw0NzUsNjYwLDQ3NSw2NjAuMSw0NzUuMXoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02ODEuOCw4MTJjLTMuMywwLjgtNi43LDEuNS0xMC4xLDIuMkM2NzUuMSw4MTMuNSw2NzguNSw4MTIuOCw2ODEuOCw4MTJ6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjY0LDQ3NS43Yy0wLjMsMC0wLjUtMC4xLTAuOC0wLjJDNjYzLjUsNDc1LjYsNjYzLjcsNDc1LjcsNjY0LDQ3NS43eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTU0NC4yLDgzNC4yYzIuMS0wLjIsNC4xLTAuNCw2LjItMC42QzU0OC4zLDgzMy44LDU0Ni4yLDgzNCw1NDQuMiw4MzQuMnoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02NjguMiw0NzYuN2MtMC40LTAuMS0wLjktMC4yLTEuMy0wLjNDNjY3LjQsNDc2LjUsNjY3LjgsNDc2LjYsNjY4LjIsNDc2Ljd6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjYyLjMsNDc1LjRjLTAuMiwwLTAuNS0wLjEtMC43LTAuMUM2NjEuOCw0NzUuMyw2NjIuMSw0NzUuMyw2NjIuMyw0NzUuNHoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02NjYuOCw0NzYuM2MtMC43LTAuMi0xLjQtMC4zLTItMC41QzY2NS40LDQ3Niw2NjYuMSw0NzYuMiw2NjYuOCw0NzYuM3oiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik01NTguOSw4MzIuNmMyLjItMC4yLDQuNS0wLjUsNi43LTAuOEM1NjMuNCw4MzIuMSw1NjEuMiw4MzIuNCw1NTguOSw4MzIuNnoiIHN0eWxlPSJmaWxsOiAjNkI0QjMyOyIvPgoJCTxwYXRoIGQ9Ik02MTAsODI1LjZjMi43LTAuNCw1LjMtMC44LDcuOS0xLjNDNjE1LjMsODI0LjgsNjEyLjcsODI1LjIsNjEwLDgyNS42eiIgc3R5bGU9ImZpbGw6ICM2QjRCMzI7Ii8+CgkJPHBhdGggZD0iTTU3My45LDgzMC44YzIuNS0wLjMsNS0wLjcsNy41LTFDNTc4LjksODMwLjIsNTc2LjQsODMwLjUsNTczLjksODMwLjh6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCQk8cGF0aCBkPSJNNjAyLjgsODI2LjdjLTMuOCwwLjYtNy42LDEuMS0xMS41LDEuN0M1OTUuMiw4MjcuOSw1OTksODI3LjMsNjAyLjgsODI2Ljd6IiBzdHlsZT0iZmlsbDogIzZCNEIzMjsiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTguNCw1NzMuNmMwLjYtMC45LDEuMi0xLjgsMS43LTIuN0MyNTkuNiw1NzEuOCwyNTksNTcyLjcsMjU4LjQsNTczLjZjLTgsMTEuMS0xOC4zLDExLjItMjguOCw4LjMKCQkJQzI0MC4xLDU4NC44LDI1MC4zLDU4NC43LDI1OC40LDU3My42eiIgc3R5bGU9ImZpbGw6ICM5MzY3NDc7Ii8+CgkJPHBhdGggZD0iTTMwMy4zLDI2Mi41YzM1LTYxLjMsNzItMTIyLjYsMTI0LTE3MC43YzMuMy0xLjksNi43LTMuNywxMC4xLTUuNWMtNDUuMiwyMy44LTg1LjgsNTYuMi0xMjEuMSw4OC4zCgkJCWMtMzYuMywzMy4xLTgyLDc1LjYtODAuNywxMjljMCwwLjksNDYsOS4xLDUyLjEsMTAuNUMyODguNSwyOTYuMiwyOTMuNywyNzcuOSwzMDMuMywyNjIuNXoiIHN0eWxlPSJmaWxsOiAjOTM2NzQ3OyIvPgoJCTxwYXRoIGQ9Ik0yNDYuNiw1MzUuM2MtMC44LTAuNC0xLjYtMC45LTIuNC0xLjNDMjQ1LDUzNC40LDI0NS44LDUzNC44LDI0Ni42LDUzNS4zYzAuNSwwLjMsMC45LDAuNiwxLjQsMC45CgkJCUMyNDcuNiw1MzUuOSwyNDcuMSw1MzUuNiwyNDYuNiw1MzUuM3oiIHN0eWxlPSJmaWxsOiAjOTM2NzQ3OyIvPgoJCTxwYXRoIGQ9Ik0zMDIuNCwzNzQuNGM2LjMsMS41LDEyLjcsMC4zLDE4LTIuNkMzMTUsMzc0LjcsMzA4LjcsMzc1LjksMzAyLjQsMzc0LjRjLTE2LjMtMy44LTMxLjQtOS43LTQ2LjktMTQuNgoJCQlDMjcwLjksMzY0LjcsMjg2LjEsMzcwLjcsMzAyLjQsMzc0LjR6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCQk8cGF0aCBkPSJNNDQ0LjEsODIuOWMtMi4yLDEuMS00LjUsMi4yLTYuNywzLjRDNDM5LjcsODUuMSw0NDEuOSw4NCw0NDQuMSw4Mi45eiIgc3R5bGU9ImZpbGw6ICM5MzY3NDc7Ii8+CgkJPHBhdGggZD0iTTI5My40LDMxNS43YzQuNiwxLjMsOS4zLDIuOCwxMy45LDQuN0MzMDIuNywzMTguNCwyOTgsMzE2LjksMjkzLjQsMzE1Ljd6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCQk8cGF0aCBkPSJNNDY5LjgsNzEuMkw0NjkuOCw3MS4yYy0wLjEsMC0wLjIsMC4xLTAuNCwwLjFDNDY5LjUsNzEuMyw0NjkuNyw3MS4yLDQ2OS44LDcxLjJ6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCQk8cGF0aCBkPSJNNDYzLjYsNzMuOGMtMS43LDAuNy0zLjQsMS40LTUsMi4xQzQ2MC4zLDc1LjIsNDYxLjksNzQuNSw0NjMuNiw3My44eiIgc3R5bGU9ImZpbGw6ICM5MzY3NDc7Ii8+CgkJPHBhdGggZD0iTTQ1My41LDc4LjRjLTEuOCwwLjktMy43LDEuNy01LjYsMi42QzQ0OS44LDgwLjEsNDUxLjYsNzkuMiw0NTMuNSw3OC40eiIgc3R5bGU9ImZpbGw6ICM5MzY3NDc7Ii8+CgkJPHBhdGggZD0iTTIzMyw4MjQuM2MtMTUuMi0yLjktMzcuMi0yNS42LTQ4LjktMzUuOWMtMTUuNy0xMy45LTMwLjUtMjkuMS00Mi4xLTQ2LjhjLTM4LjUtNTktMTguNS0xNTAuNCw1Ni4xLTE2OS43CgkJCWMtMTUuMy0yLjctMzEuMy0xLjYtNDYuMywyLjNDOTAsNTkwLjYsMzEuNSw2NTAuMyw1My41LDcxOC4xYzEzLjgsNDIuMyw1NC42LDcwLjYsOTYuNyw4NWM0My4xLDE0LjYsODkuNiwyMy45LDEzNi40LDI5LjYKCQkJQzI2OC43LDgzMC40LDI1MC43LDgyNy43LDIzMyw4MjQuM3oiIHN0eWxlPSJmaWxsOiAjOTM2NzQ3OyIvPgoJCTxwYXRoIGQ9Ik0zMTcsODM1LjhjLTYuNC0wLjYtMTIuNy0xLjItMTkuMS0xLjlDMzA0LjMsODM0LjYsMzEwLjcsODM1LjIsMzE3LDgzNS44eiIgc3R5bGU9ImZpbGw6ICM5MzY3NDc7Ii8+CgkJPHBhdGggZD0iTTI4Ni44LDgzMi42YzMuNiwwLjQsNy4xLDAuOCwxMC43LDEuMkMyOTMuOSw4MzMuNSwyOTAuMyw4MzMsMjg2LjgsODMyLjZ6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCQk8cGF0aCBkPSJNNDI2LjcsODQwLjVjMS4yLDAsMi40LDAsMy43LDBDNDI5LjEsODQwLjUsNDI3LjksODQwLjUsNDI2LjcsODQwLjV6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCQk8cGF0aCBkPSJNMzM0LjMsODM3LjJjNCwwLjMsOCwwLjYsMTEuOSwwLjhDMzQyLjIsODM3LjgsMzM4LjMsODM3LjUsMzM0LjMsODM3LjJ6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCQk8cGF0aCBkPSJNMTYwLjEsNTIxLjljNC41LTAuNSw5LTAuOCwxMy41LTAuOWMtMTYuMy0yNS4zLTE5LjQtNTUuNi05LjItODQuM2MxNC44LTM4LjEsNDkuMS03Mi42LDkxLjEtNzYuOAoJCQljLTE0LjctNC42LTI5LjctOC4yLTQ2LjMtNy45Yy03OCwxLjYtMTQxLjMsMTE4LjYtODAuNCwxNzcuMkMxMjkuOCw1MzAuMSwxNTYuNSw1MjIuNCwxNjAuMSw1MjEuOXoiIHN0eWxlPSJmaWxsOiAjOTM2NzQ3OyIvPgoJCTxwYXRoIGQ9Ik0zODcuMiw4MzkuOWMxLjIsMCwyLjUsMC4xLDMuNywwLjFDMzg5LjYsODQwLDM4OC40LDgzOS45LDM4Ny4yLDgzOS45eiIgc3R5bGU9ImZpbGw6ICM5MzY3NDc7Ii8+CgkJPHBhdGggZD0iTTMyMC4yLDgzNi4xYzIuOSwwLjIsNS45LDAuNSw4LjgsMC43QzMyNi4xLDgzNi42LDMyMy4xLDgzNi4zLDMyMC4yLDgzNi4xeiIgc3R5bGU9ImZpbGw6ICM5MzY3NDc7Ii8+CgkJPHBhdGggZD0iTTM1My45LDgzOC41YzIsMC4xLDQuMSwwLjIsNi4yLDAuM0MzNTgsODM4LjcsMzU1LjksODM4LjYsMzUzLjksODM4LjV6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCQk8cGF0aCBkPSJNMzcxLDgzOS4zYzEuMywwLDIuNiwwLjEsMy45LDAuMkMzNzMuNiw4MzkuNCwzNzIuMyw4MzkuNCwzNzEsODM5LjN6IiBzdHlsZT0iZmlsbDogIzkzNjc0NzsiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K) */
export const PoocoinColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-poocoin-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PoocoinColorful.displayName = 'PoocoinColorful';
