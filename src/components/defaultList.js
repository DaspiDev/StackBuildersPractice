import React, { useEffect, useState } from 'react';
import { Card, Layout, Spin } from 'antd';

function defaultList (props) {
    const { loadingServerData, serverData } = props;
    return(
        <Layout>
            <Spin spinning={loadingServerData} wrapperClassName="loadingSpinner" tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Layout>
    )
}

export default defaultList;