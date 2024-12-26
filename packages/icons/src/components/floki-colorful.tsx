// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/floki-colorful.svg';

/**![FlokiColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1mbG9raS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDc0LjUgNzEuNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzQuNSA3MS40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZyBpZD0iYW50LXdlYjMtaWNvbi1mbG9raS1jb2xvcmZ1bC1MYXllcl8yXzAwMDAwMDk2NzU4NDM2NjQxNzU4MzM0NDUwMDAwMDE3ODQxNzI1NDc4NTk5MDM1NTUzXyI+Cgk8ZyBpZD0iYW50LXdlYjMtaWNvbi1mbG9raS1jb2xvcmZ1bC1MYXllcl80Ij4KCQk8cGF0aCBkPSJNNjUuOSw1My43Yy0wLjgsOS41LTEyLDE3LjUtMjguOCwxNy4xbDAsMGMtMTUuOC0wLjQtMjYuOS03LTI3LjctMTYuNWMtMC4xLTEuMiwwLTIuNCwwLjEtMy43CgkJCWMwLjUtMy43LDEuOC03LjIsMy43LTEwLjRsMS4yLDAuNWMzLjEtMS4yLDYuMy0yLjEsOS42LTIuN2M0LjMtMC42LDguNy0wLjcsMTMtMC40bDAsMGM0LjMtMC4zLDguNy0wLjIsMTMsMC40CgkJCWMzLjMsMC42LDYuNSwxLjUsOS42LDIuN2wxLjItMC41bDAuOC0wLjRjMS45LDMuMiwzLjIsNi43LDMuOSwxMC40YzAuMiwxLjEsMC4zLDIuMywwLjIsMy40IiBzdHlsZT0iZmlsbDogI0Y0QTQyNzsiLz4KCQk8cGF0aCBkPSJNNjUuOSw1My43QzY1LjEsNjMuMSw1NCw3MC44LDM3LjEsNzAuN2wwLDBjLTE1LjgtMC40LTI2LjktNy0yNy43LTE2LjVjLTAuMS0xLjIsMC0yLjQsMC4xLTMuNwoJCQljMS43LTAuNCwzLjQtMC40LDUuMS0wLjFjMy4yLDAuNSw1LDIuNSw3LjMsMy41YzEuMywwLjYsMi42LTAuNCwzLjgtMS41YzMuMi0zLjEsNy41LTQuOSwxMS45LTVjNC41LTAuMSw4LjIsMS43LDEyLjEsNS4zCgkJCWMwLjgsMC44LDEuOSwxLjMsMywxLjJjMS0wLjMsMi0wLjgsMi44LTEuNWMzLTIsNi42LTIuOCwxMC4xLTIuM0M2NS45LDUxLjQsNjYsNTIuNSw2NS45LDUzLjciIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgoJCTxwYXRoIGQ9Ik0xOS40LDMwLjNjLTEuMSwxLjEtMi41LDEuOS00LDIuMmwtMC42LDAuMWMtMC42LDAuMi0xLjIsMC4zLTEuOSwwLjNjLTAuMSwwLTAuMywwLTAuNCwwCgkJCWMtMC4zLTAuMS0wLjctMC4yLTEtMC4zYy0xLjEtMC41LTIuMS0xLjEtMy0xLjljLTEuOC0xLjUtMy41LTMuMi00LjgtNS4yQy0xLjgsMTcuNS0wLjEsNi43LDcuNSwwLjdDOCwwLjQsOC42LDAuNCw5LDAuOQoJCQljMC4yLDAuMywwLjMsMC42LDAuMiwwLjlDOC41LDUsNy45LDEwLDEwLjksMTQuM2MyLjYsMy42LDgsNy4xLDExLjMsNy4xQzIyLjksMjUuNCwyMS44LDI4LjEsMTkuNCwzMC4zIiBzdHlsZT0iZmlsbDogI0Y3OTQyMjsiLz4KCQk8cGF0aCBkPSJNMTkuNCwzMC4zYy0xLjEsMS4xLTIuNSwxLjktNCwyLjJsLTAuNiwwLjFjLTAuNiwwLjItMS4yLDAuMy0xLjksMC4zYy0wLjEsMC0wLjMsMC0wLjQsMAoJCQljLTAuMy0wLjEtMC43LTAuMi0xLTAuM2MtMS4xLTAuNS0yLjEtMS4xLTMtMS45Yy0xLjgtMS41LTMuNS0zLjItNC44LTUuMkMtMS44LDE3LjUtMC4xLDYuNyw3LjUsMC43QzgsMC40LDguNiwwLjQsOSwwLjkKCQkJYzAuMiwwLjMsMC4zLDAuNiwwLjIsMC45QzguNSw1LDcuOSwxMCwxMC45LDE0LjNjMi42LDMuNiw4LDcuMSwxMS4zLDcuMUMyMi45LDI1LjQsMjEuOCwyOC4xLDE5LjQsMzAuM3oiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICMyMjFGMUY7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTMzLjgsMTYuNWwtMS4zLDEyLjhoLTAuMWMtMiwwLjMtNC43LDAuNy04LjQsMS4zYy0zLjQsMC41LTgsMi45LTEwLjcsNC41TDEzLDMzYzAuNi0wLjEsMS4zLTAuMiwxLjktMC4zCgkJCWwwLjYtMC4xYzEuNS0wLjMsMi45LTEuMSw0LTIuMmMyLjMtMi4zLDMuNS00LjksMi43LTlsMC40LDAuMWMxLjItMS4zLDIuNi0yLjMsNC4yLTMuMUMyOC45LDE3LjIsMzEuMywxNi42LDMzLjgsMTYuNSIgc3R5bGU9ImZpbGw6ICM1QTU5NUM7Ii8+CgkJPHBhdGggZD0iTTMzLjgsMTYuNWwtMS4zLDEyLjhoLTAuMWMtMiwwLjMtNC43LDAuNy04LjQsMS4zYy0zLjQsMC41LTgsMi45LTEwLjcsNC41TDEzLDMzYzAuNi0wLjEsMS4zLTAuMiwxLjktMC4zCgkJCWwwLjYtMC4xYzEuNS0wLjMsMi45LTEuMSw0LTIuMmMyLjMtMi4zLDMuNS00LjksMi43LTlsMC40LDAuMWMxLjItMS4zLDIuNi0yLjMsNC4yLTMuMUMyOC45LDE3LjIsMzEuMywxNi42LDMzLjgsMTYuNXoiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICMyMjFGMUY7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTYzLDM5LjVsLTAuOCwwLjRsMCwwbC0wLjgsMC40bC0xLjIsMC41Yy0zLjEtMS4yLTYuMy0yLjEtOS42LTIuN2MtNC4zLTAuOC04LjYtMS4yLTEzLTEuMmwwLDAKCQkJYy00LjQsMC04LjcsMC4zLTEzLDEuMmMtMy4zLDAuNi02LjUsMS41LTkuNiwyLjdjLTAuNC0wLjItMC44LTAuNC0xLjItMC41bC0xLjctMC44YzAuMS0xLjQsMC0yLjIsMC0zLjZjMC4zLTAuMiwwLjgtMC41LDEuMy0wLjgKCQkJYzAsMCwwLjEtMC4xLDAuMS0wLjFjMi42LTEuNiw3LjItMy45LDEwLjYtNC41YzMuNy0wLjYsNi4zLTEsOC40LTEuM2MxLjMtMC4xLDIuNy0wLjEsNC4xLTAuMWMyLjEsMCw0LDAsNS45LDAuMQoJCQljMiwwLjMsNC43LDAuNyw4LjUsMS4zYzMuNSwwLjUsOC4xLDIuOSwxMC44LDQuNWwwLjEsMGMwLjUsMC4zLDAuOSwwLjUsMS4yLDAuOEM2MywzNy4zLDYyLjksMzguMSw2MywzOS41IiBzdHlsZT0iZmlsbDogIzkyOTQ5NzsiLz4KCQk8cGF0aCBkPSJNNjMsMzkuNWwtMC44LDAuNGwwLDBsLTAuOCwwLjRsLTEuMiwwLjVjLTMuMS0xLjItNi4zLTIuMS05LjYtMi43Yy00LjMtMC43LTguNi0xLjEtMTMtMS4xbDAsMAoJCQljLTQuNCwwLTguNywwLjMtMTMsMS4xYy0zLjMsMC42LTYuNSwxLjUtOS42LDIuN2MtMC40LTAuMi0wLjgtMC40LTEuMi0wLjVsLTEuNy0wLjhjMC4xLTEuNCwwLTIuMiwwLTMuNmMwLjMtMC4yLDAuOC0wLjUsMS4zLTAuOAoJCQljMCwwLDAuMS0wLjEsMC4xLTAuMWMyLjYtMS42LDcuMi0zLjksMTAuNi00LjVjMy43LTAuNiw2LjMtMSw4LjQtMS4zYzEuMy0wLjEsMi43LTAuMSw0LjEtMC4xYzIuMSwwLDQsMCw1LjksMC4xCgkJCWMyLDAuMyw0LjcsMC43LDguNSwxLjNjMy41LDAuNSw4LjEsMi45LDEwLjgsNC41bDAuMSwwYzAuNSwwLjMsMC45LDAuNSwxLjIsMC44QzYzLDM3LjMsNjIuOSwzOC4xLDYzLDM5LjV6IiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMjIxRjFGOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTQyLjQsMjkuM2MtMS44LTAuMS0zLjgtMC4yLTUuOS0wLjFjLTEuNCwwLTIuOCwwLjEtNC4xLDAuMWgwLjFsMS4zLTEyLjhsMC4zLTIuNmMxLTAuNiwyLjItMC45LDMuMy0wLjloMC4yCgkJCWMxLjIsMCwyLjMsMC4zLDMuMywwLjlsMC4zLDIuNnYwLjFMNDIuNCwyOS4zeiIgc3R5bGU9ImZpbGw6ICM5Mjk0OTc7Ii8+CgkJPHBhdGggZD0iTTQyLjQsMjkuM2MtMS44LTAuMS0zLjgtMC4yLTUuOS0wLjFjLTEuNCwwLTIuOCwwLjEtNC4xLDAuMWgwLjFsMS4zLTEyLjhsMC4zLTIuNmMxLTAuNiwyLjItMC45LDMuMy0wLjloMC4yCgkJCWMxLjIsMCwyLjMsMC4zLDMuMywwLjlsMC4zLDIuNnYwLjFMNDIuNCwyOS4zeiIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogIzIyMUYxRjsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyIvPgoJCTxsaW5lIHgxPSI2Mi4yIiB5MT0iMzkuOSIgeDI9IjYyLjIiIHkyPSIzOS45IiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMjIxRjFGOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTY1LjksNTMuOEM2NS4xLDYzLjMsNTMsNzAuOSwzNy4xLDcwLjlsMCwwYy0xNS44LTAuNC0yNi45LTctMjcuNi0xNi41Yy0wLjEtMS4yLDAtMi40LDAuMS0zLjcKCQkJYzAuNS0zLjcsMS44LTcuMiwzLjctMTAuNGwxLjIsMC41YzMuMS0xLjIsNi4zLTIuMSw5LjYtMi43YzQuMy0wLjgsOC42LTEuMSwxMy0xLjJsMCwwYzQuNCwwLDguNywwLjQsMTMsMS4yCgkJCWMzLjMsMC42LDYuNSwxLjUsOS42LDIuN2wxLjMtMC41bDAuOC0wLjRjMS45LDMuMiwzLjIsNi43LDMuOSwxMC40QzY2LDUxLjUsNjYsNTIuNyw2NS45LDUzLjh6IiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMjIxRjFGOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTcwLjgsMjUuNWMtMS40LDEuOS0zLDMuNy00LjksNS4yYy0wLjksMC44LTEuOSwxLjQtMywxLjlsLTAuNSwwLjJsLTAuMywwLjFjLTAuNywwLjItMS4xLDAtMi40LTAuMgoJCQlsLTAuNi0wLjFjLTEuNS0wLjMtMi45LTEuMS00LTIuMmMtMi4zLTIuMy0zLjUtNC45LTIuNy05YzMuMiwwLjEsOC43LTMuNCwxMS4zLTcuMUM2Ni42LDEwLDY2LDUsNjUuMywxLjgKCQkJYy0wLjEtMC42LDAuMi0xLjEsMC44LTEuM2MwLjMtMC4xLDAuNywwLDAuOSwwLjJDNzQuNiw2LjcsNzYuMywxNy42LDcwLjgsMjUuNSIgc3R5bGU9ImZpbGw6ICNGNzk0MjI7Ii8+CgkJPHBhdGggZD0iTTcwLjgsMjUuNWMtMS40LDEuOS0zLDMuNy00LjksNS4yYy0wLjksMC44LTEuOSwxLjQtMywxLjlsLTAuNSwwLjJsLTAuMywwLjFjLTAuNywwLjItMS4xLDAtMi40LTAuMgoJCQlsLTAuNi0wLjFjLTEuNS0wLjMtMi45LTEuMS00LTIuMmMtMi4zLTIuMy0zLjUtNC45LTIuNy05YzMuMiwwLjEsOC43LTMuNCwxMS4zLTcuMUM2Ni42LDEwLDY2LDUsNjUuMywxLjgKCQkJYy0wLjEtMC42LDAuMi0xLjEsMC44LTEuM2MwLjMtMC4xLDAuNywwLDAuOSwwLjJDNzQuNiw2LjcsNzYuMywxNy42LDcwLjgsMjUuNXoiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICMyMjFGMUY7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTYyLjEsMzIuOWwtMC40LDIuMmMtMi43LTEuNi03LjMtNC0xMC44LTQuNWMtMy44LTAuNi02LjQtMS04LjUtMS4zbC0xLjMtMTIuOGMyLjMsMC4xLDQuNiwwLjgsNi43LDEuOQoJCQljMS42LDAuOCwzLDEuOSw0LjIsMy4xbDAuNC0wLjFjLTAuOCw0LDAuNCw2LjcsMi43LDljMS4xLDEuMSwyLjUsMS45LDQsMi4yYzAuMSwwLDAuNSwwLjIsMC42LDAuMkM2MC41LDMzLjEsNjEuMywzMy4xLDYyLjEsMzIuOQoJCQkiIHN0eWxlPSJmaWxsOiAjNUE1OTVDOyIvPgoJCTxwYXRoIGQ9Ik02Mi4xLDMyLjlsLTAuNCwyLjJjLTIuNy0xLjYtNy4zLTQtMTAuOC00LjVjLTMuOC0wLjYtNi40LTEtOC41LTEuM2wtMS4zLTEyLjhjMi4zLDAuMSw0LjYsMC44LDYuNywxLjkKCQkJYzEuNiwwLjgsMywxLjksNC4yLDMuMWwwLjQtMC4xYy0wLjgsNCwwLjQsNi43LDIuNyw5YzEuMSwxLjEsMi41LDEuOSw0LDIuMmwwLjYsMC4xQzYxLDMyLjksNjEuNCwzMy4xLDYyLjEsMzIuOXoiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICMyMjFGMUY7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTQxLjEsMTYuNWgtMC40IiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMjIxRjFGOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyIvPgoJCTxwYXRoIGQ9Ik02Mi4yLDMyLjRjMC43LDAuOCwwLjUsMi0wLjMsMi43Yy0wLjEsMC4xLTAuMSwwLjEtMC4yLDAuMiIgc3R5bGU9ImZpbGw6ICNGNzk0MjI7Ii8+CgkJPHBhdGggZD0iTTYyLjIsMzIuNGMwLjcsMC44LDAuNSwyLTAuMywyLjdjLTAuMSwwLjEtMC4xLDAuMS0wLjIsMC4yIiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMjIxRjFGOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7Ii8+CgkJPHBhdGggZD0iTTEyLjksMzIuNGMtMC43LDAuOC0wLjUsMiwwLjMsMi43YzAuMSwwLjEsMC4xLDAuMSwwLjIsMC4yIiBzdHlsZT0iZmlsbDogI0Y3OTQyMjsiLz4KCQk8cGF0aCBkPSJNMTIuOSwzMi40Yy0wLjcsMC44LTAuNSwyLDAuMywyLjdjMC4xLDAuMSwwLjEsMC4xLDAuMiwwLjIiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICMyMjFGMUY7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsiLz4KCQk8cGF0aCBkPSJNMzMuOCw1Ny42YzAuNywwLjIsMS41LDAuMSwyLjItMC4zYzEuMS0wLjQsMS44LTEuNSwxLjctMi43Yy0wLjEsMS4yLDAuNiwyLjMsMS43LDIuNwoJCQljMC43LDAuMywxLjQsMC40LDIuMSwwLjMiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICMxNzE3MTc7IHN0cm9rZS1saW5lY2FwOiByb3VuZDsgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsiLz4KCQk8cGF0aCBkPSJNNDEuNiw1MS4yYzAsMS4yLTEuOCwyLjgtNCwyLjhzLTQtMS42LTQtMi44czEuOC0xLjYsNC0xLjZTNDEuNiw1MC4xLDQxLjYsNTEuMiIgc3R5bGU9ImZpbGw6ICMxNzE3MTc7Ii8+CgkJPHBhdGggZD0iTTM5LjIsNTAuOGMwLDAuMy0wLjgsMC43LTEuNywwLjdzLTEuNy0wLjQtMS43LTAuNnMwLjgtMC4yLDEuNy0wLjJTMzkuMiw1MC41LDM5LjIsNTAuOCIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CgkJPHBhdGggZD0iTTMxLjMsNTQuNmMtMC4xLDEuNCwwLjgsMi42LDIuMiwyLjloMC4zIiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMTcxNzE3OyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTM3LjcsNTMuMmMwLDAuNSwwLDAuOSwwLDEuNCIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogIzE3MTcxNzsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyIvPgoJCTxwYXRoIGQ9Ik00MS42LDU3LjZoMC4zYzEuNC0wLjMsMi40LTEuNSwyLjItMi45IiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMTcxNzE3OyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTY3LDAuN2M3LjYsNiw5LjIsMTYuOCwzLjcsMjQuNyIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogIzIyMUYxRjsgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsiLz4KCQk8cGF0aCBkPSJNMTkuNCwzMC4zYy0xLjEsMS4xLTIuNSwxLjktNCwyLjJsLTAuNiwwLjFjLTAuNiwwLjItMS4yLDAuMy0xLjksMC4zYy0wLjEsMC0wLjMsMC0wLjQsMAoJCQljLTAuMy0wLjEtMC43LTAuMi0xLTAuM2MtMS4xLTAuNS0yLjEtMS4xLTMtMS45Yy0xLjgtMS41LTMuNS0zLjItNC44LTUuMkMtMS44LDE3LjUtMC4xLDYuNyw3LjUsMC43QzgsMC40LDguNiwwLjQsOSwwLjkKCQkJYzAuMiwwLjMsMC4zLDAuNiwwLjIsMC45QzguNSw1LDcuOSwxMCwxMC45LDE0LjNjMi42LDMuNiw4LDcuMSwxMS4zLDcuMUMyMi45LDI1LjQsMjEuOCwyOC4xLDE5LjQsMzAuM3oiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICMyMjFGMUY7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7Ii8+CgkJPHBhdGggZD0iTTMwLjMsNDQuN2MwLDIuMi0xLjMsMy45LTIuOSwzLjlzLTIuOS0xLjgtMi45LTMuOWMwLTEuOSwxLTMuNSwyLjMtMy45bDMuMiwyLjQKCQkJQzMwLjIsNDMuNywzMC4zLDQ0LjIsMzAuMyw0NC43eiIgc3R5bGU9ImZpbGw6ICMyMjFGMUY7Ii8+CgkJPHBhdGggZD0iTTI5LjIsNDQuMmMwLDAuOC0wLjUsMS40LTEsMS40cy0xLTAuNi0xLTEuNHMwLjUtMS40LDEtMS40UzI5LjIsNDMuNCwyOS4yLDQ0LjIiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgoJCTxwYXRoIGQ9Ik0yNi44LDQ3LjdjLTEuMSwwLjktMi4xLDEuOS0zLDNjLTAuNCwwLjUtMC44LDEuMS0xLjEsMS44Yy0wLjMsMC42LTAuNSwxLjMtMC42LDJjLTAuMSwwLjMtMC4xLDAuNy0wLjEsMQoJCQlsMCwwLjV2MC41YzAsMC43LDAsMS40LDAsMi4yYzAuMSwwLjcsMC4yLDEuNSwwLjMsMi4yYzAuMSwwLjQsMC4xLDAuNywwLjIsMS4xYzAuMSwwLjMsMC4yLDAuNywwLjQsMWMtMC4yLTAuMy0wLjMtMC43LTAuNS0xCgkJCWMtMC4xLTAuMy0wLjMtMC43LTAuNC0xYy0wLjItMC43LTAuNC0xLjQtMC42LTIuMmMtMC4xLTAuNy0wLjItMS41LTAuMy0yLjJsMC0wLjV2LTAuNmMwLTAuNCwwLTAuOCwwLTEuMQoJCQljMC4xLTAuOCwwLjItMS42LDAuNS0yLjNjMC4zLTAuNywwLjYtMS40LDEtMi4xYzAuOS0xLjMsMS44LTIuNSwyLjktMy41YzAuNC0wLjMsMC45LTAuMywxLjMsMEMyNy4xLDQ2LjcsMjcuMiw0Ny4zLDI2LjgsNDcuNwoJCQlMMjYuOCw0Ny43TDI2LjgsNDcuN3oiIHN0eWxlPSJmaWxsOiAjMjIxRjFGOyIvPgoJCTxwYXRoIGQ9Ik0yNi4xLDQ3LjRjLTAuMSwwLTAuMSwwLTAuMiwwaC0wLjFoLTAuMmwtMC41LTAuMWMtMC4zLTAuMS0wLjYtMC4xLTAuOS0wLjFjLTAuNiwwLTEuMywwLTEuOSwwLjIKCQkJYy0wLjMsMC4xLTAuNiwwLjItMC45LDAuM2MtMC45LDAuNC0xLjcsMS4xLTIuMiwxLjljMC4zLTAuNywwLjYtMS4zLDEuMS0xLjhjMC4yLTAuMywwLjUtMC41LDAuOC0wLjdjMC4zLTAuMiwwLjYtMC40LDAuOS0wLjYKCQkJYzAuNi0wLjQsMS4zLTAuNiwyLjEtMC44YzAuNC0wLjEsMC43LTAuMSwxLjEtMC4xYzAuMiwwLDAuNCwwLDAuNiwwaDAuNGMwLDAsMC4xLDAsMCwwYzAuNSwwLDAuOSwwLjQsMSwwLjlTMjYuNyw0Ny40LDI2LjEsNDcuNAoJCQlDMjYuMiw0Ny40LDI2LjEsNDcuNCwyNi4xLDQ3LjQiIHN0eWxlPSJmaWxsOiAjMjIxRjFGOyIvPgoJCTxwYXRoIGQ9Ik01MC44LDQ0LjdjMCwyLjItMS4zLDMuOS0yLjgsMy45cy0yLjktMS44LTIuOS0zLjljMC0wLjUsMC4xLTEsMC4yLTEuNWwzLjItMi40CgkJCUM0OS44LDQxLjIsNTAuOCw0Mi44LDUwLjgsNDQuN3oiIHN0eWxlPSJmaWxsOiAjMjIxRjFGOyIvPgoJCTxwYXRoIGQ9Ik00Ni4xLDQ0LjJjMCwwLjgsMC41LDEuNCwxLDEuNHMxLTAuNiwxLTEuNHMtMC41LTEuNC0xLTEuNFM0Ni4xLDQzLjQsNDYuMSw0NC4yIiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCQk8cGF0aCBkPSJNNDkuOCw0Ni4zYzEuMSwxLjEsMiwyLjIsMi44LDMuNWMwLjQsMC42LDAuOCwxLjMsMS4xLDJjMC4zLDAuNywwLjUsMS41LDAuNiwyLjJjMC4xLDAuOCwwLjEsMS41LDAsMi4zCgkJCWMtMC4xLDAuNy0wLjIsMS41LTAuMywyLjJjLTAuMSwwLjctMC4zLDEuNC0wLjUsMi4xYy0wLjEsMC4zLTAuMiwwLjctMC40LDFjLTAuMSwwLjMtMC4zLDAuNy0wLjUsMWMwLjEtMC4zLDAuMy0wLjcsMC40LTEKCQkJYzAuMS0wLjMsMC4yLTAuNywwLjMtMWMwLjEtMC43LDAuMy0xLjQsMC4zLTIuMWMwLjEtMC43LDAuMS0xLjQsMC4xLTIuMmMwLTAuNy0wLjEtMS40LTAuMi0yLjFjLTAuMi0wLjctMC40LTEuMy0wLjctMS45CgkJCWMtMC4zLTAuNi0wLjctMS4yLTEuMi0xLjdjLTAuOS0xLjEtMS45LTIuMS0zLTNsMCwwYy0wLjQtMC40LTAuNC0wLjksMC0xLjNjMC4zLTAuMywwLjgtMC40LDEuMi0wLjFMNDkuOCw0Ni4zIiBzdHlsZT0iZmlsbDogIzIyMUYxRjsiLz4KCQk8cGF0aCBkPSJNNDkuMiw0NS42TDQ5LjIsNDUuNmgwLjVjMC4yLDAsMC40LDAsMC42LDBjMC40LDAsMC44LDAsMS4yLDAuMWMwLjgsMC4xLDEuNSwwLjMsMi4yLDAuNgoJCQljMC43LDAuMywxLjMsMC44LDEuOSwxLjNjMC41LDAuNSwwLjksMS4yLDEuMiwxLjhjLTAuNC0wLjYtMC45LTEuMS0xLjUtMS41Yy0wLjYtMC40LTEuMi0wLjctMS45LTAuOEM1Mi43LDQ3LDUyLDQ3LDUxLjMsNDcKCQkJYy0wLjMsMC0wLjcsMC4xLTEsMC4xbC0wLjUsMC4xaC0wLjJoLTAuMWgtMC4xaC0wLjFjLTAuNSwwLjEtMS0wLjMtMS0wLjhjLTAuMS0wLjUsMC4zLTEsMC44LTFjMC4xLDAsMC4xLDAsMC4yLDAiIHN0eWxlPSJmaWxsOiAjMjIxRjFGOyIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=) */
export const FlokiColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-floki-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

FlokiColorful.displayName = 'FlokiColorful';
