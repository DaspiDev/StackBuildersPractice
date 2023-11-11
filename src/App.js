import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import menuFilters from './data/menuFilters.json';
import ItemsList from './components/ItemsList';

const { Header, Sider, Footer } = Layout;

function App() {
    const [loadingServerData, setLoadingServerData] = useState(false);
    const [serverData, setServerData] = useState([]);
    const [selectedFilter, selectFilter] = useState('0');
    const [showMore, setShowMore] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoadingServerData(true);
        fetch('/getData').then(
            response => response.json()
        ).then(
            data => {
                setLoadingServerData(false);
                setServerData(data);
            }
        );

    }
    // {title: 'Fourteen Years of Go', orderNumber: 1, commentsNumber: 8, points: 37}
    return (
        <Layout className="mainLayout" data-testid="mainlayout">
            <Header className="headerStyle">
                <img alt="stackbuilderslogo" src="https://cdn.stackbuilders.com/media/documents/SB_Logo_new.svg" style={{ width: '100%', height: '100%' }}/>
            </Header>
            <Layout>
                <Sider breakpoint="lg" collapsedWidth="0">
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        data-testid="menu"
                        defaultSelectedKeys={['0']}
                        items={menuFilters.map(
                            (e, idx) => ({
                            key: idx,
                            label: e.label,
                            }),
                        )}
                        onSelect={(e) => {
                            selectFilter(e.key);
                            setShowMore([])
                        }}
                    />
                </Sider>
                <ItemsList 
                    showMore={showMore}
                    setShowMore={(e) => setShowMore(e)}
                    loadingServerData={loadingServerData} 
                    serverData={
                        selectedFilter === '0' ?
                        serverData :
                            selectedFilter === '1' ?
                            serverData.filter(e => e.title.split(" ").length > 5).sort((a,b) => b.commentsNumber - a.commentsNumber) :
                                serverData.filter(e => e.title.split(" ").length <= 5).sort((a,b) => b.points - a.points)
                    } />
            </Layout>
            <Footer className='footerStyle'>App developed by Manuel D. Fernández Muñoz as a technical test for Stack Builders</Footer>
        </Layout>
    );
}

export default App;
