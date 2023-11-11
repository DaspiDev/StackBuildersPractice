import React, { useEffect, useState } from 'react';
import { Card, Layout, Spin } from 'antd';

function ItemsList (props) {
    const { loadingServerData, serverData, showMore, setShowMore } = props;
    return(
        <Layout className='list-layout' data-testid="list-layout">
            <Spin data-testid="loadingSpinner" spinning={loadingServerData} wrapperClassName="loadingSpinner" tip="Loading" size="large">
                <div className="content" />
            </Spin>
            {
                serverData && !loadingServerData && serverData.map((e, idx) => (
                    <Card title={`${e.orderNumber} - ${e.title}`} bordered={false} style={{ width: 'auto', margin: 15 }} key={`Card ${idx}`}>
                        {
                            showMore.includes(idx) ?
                            <>
                                <p>It has <span className='important'>{e.commentsNumber}</span> comments</p>
                                <p>It scored <span className='important'>{e.points}</span> points</p>
                                <a onClick={() => {
                                    let aux = [...showMore];
                                    aux.splice(showMore.indexOf(idx), 1);
                                    setShowMore(aux)
                                }}>Show less...</a>
                            </> : 
                                <a data-testid="itemCard" onClick={() => setShowMore([...showMore, idx])}>Show more...</a>
                        }
                    </Card>
                ))
            }
        </Layout>
    )
}

export default ItemsList;