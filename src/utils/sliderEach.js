import React from "react";
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default (routes) => {
    function childrenMap(childNodes) {
        return (
            <SubMenu
                key={childNodes.key}
                title={
                    <span>
                        <Icon type={childNodes.icon} />
                        <span>{childNodes.text}</span>
                    </span>
                }
            >
                {
                    childNodes.children.map((child) => {
                        if (child.children) {
                            return childrenMap(child)
                        } else {
                            return (<Menu.Item key={child.key}>
                                <Icon type={child.icon} />
                                <span>{child.text}</span>
                            </Menu.Item>)
                        }
                    })
                }

            </SubMenu>
        )
    }

    return routes.map((item) => {
        if (item.children) {
            //2级路由的时候
            return childrenMap(item)
        } else {
            return (
                <Menu.Item key={item.key}>
                    <Icon type={item.icon} />
                    <span>{item.text}</span>
                </Menu.Item>
            )
        }

    })

}





/*








*/