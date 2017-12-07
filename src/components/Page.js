import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const Page = ({ children }) =>(
    <Layout className="layout">
        <Header>
        <Menu theme='dark' mode='horizontal' style={{lineHeight: '64px'}}>
            <Menu.Item>
                <Link to="/">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/aboutMe">
                    About Me
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/music">
                    Music
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/blog">
                    Blog
                </Link>
            </Menu.Item>
        </Menu>
        </Header>
        <Content>
            <div>
                {children}
            </div>
        </Content>
    </Layout>
);

Page.propTypes = {
    children: PropTypes.node.isRequired
};

export default Page;
