import React from 'react';
import { ConfigProvider } from 'antd';

export function rootContainer(container: React.ReactNode) {
  return <ConfigProvider>{container}</ConfigProvider>;
}
