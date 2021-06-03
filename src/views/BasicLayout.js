import React from "react";
import { Card, Layout } from "antd";

const { Content } = Layout;

export const BasicLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content>
        <Card>{children}</Card>
      </Content>
    </Layout>
  );
};
