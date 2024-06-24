import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Content, Sider } = Layout;
const items = [
  {
    key: "/systemManager",
    label: "系统设置",
    children: [
      {
        key: "/user",
        label: <Link to="/user">用户</Link>,
      },
      {
        key: "/role",
        label: <Link to="/role">角色</Link>,
      },
    ],
  },
  {
    key: "/sys",
    label: <Link to="/sys">系统</Link>,
  },
  {
    key: "/test",
    label: <Link to="/test">测试</Link>,
  },
  // {
  //   key: "/react-app",
  //   label: <Link to="/react-app">react微前端</Link>,
  // },
  {
    key: "/systemMaintenance",
    label: "系统运维",
    children: [
      {
        key: "/systemMaintenance/dataImport",
        label: <Link to="/systemMaintenance/dataImport">数据导入</Link>,
      },
      {
        key: "/systemMaintenance/logQuery",
        label: <Link to="/systemMaintenance/logQuery">日志查询</Link>,
      },
    ]
  },
  {
    key: "/basicData",
    label: "基础数据",
    children: [
      {
        key: "/basicData/dataDic",
        label: <Link to="/basicData/dataDic">数据字典</Link>,
      },
    ]
  },
  {
    key: "/basicFunc",
    label: "基础功能",
    children: [
      {
        key: "/basicFunc/placeManage",
        label: <Link to="/basicFunc/placeManage">场所管理</Link>,
      },
    ]
  },
  {
    key: "/gateway",
    label: "边缘网关",
    children: [
      {
        key: "/gateway/gatewayManage",
        label: <Link to="/gateway/gatewayManage">网关管理</Link>,
      },
      {
        key: "/gateway/deviceTopology",
        label: <Link to="/gateway/deviceTopology">设备拓扑</Link>,
      },
    ]
  },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, overflow: "auto" }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* todo: 从动态菜单中获取层级 */}
          <Breadcrumb
            style={{ margin: "8px 0" }}
            items={[{ title: "一级" }, { title: "二级" }]}
          ></Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              overflow: "auto",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
