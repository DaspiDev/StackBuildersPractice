import React, { useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Spin } from 'antd';
import menuFilters from './data/menuFilters.json';
import DefaultList from './components/defaultList';

const { Header, Content, Footer, Sider } = Layout;


function App() {
    const [serverData, setServerData] = useState([]);
    const [loadingServerData, setLoadingServerData] = useState(false);

    useEffect(() => {
        console.info('LANZA');
        getData()
    }, [])

    const getData = async () => {
        setLoadingServerData(true);
        console.info('FETCH');
        fetch('/getData').then(
            response => response.json()
        ).then(
            data => {
                console.info('DATA???', data);
                setLoadingServerData(false);
                setServerData(data);
            }
        );

    }

    return (
        <Layout className="mainLayout">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                    (icon, index) => ({
                    key: String(index + 1),
                    icon: React.createElement(icon),
                    label: `nav ${index + 1}`,
                    }),
                )}
                />
            </Sider>
            <DefaultList loadingServerData={loadingServerData} serverData={serverData} />
        </Layout>
    );
}

export default App;
