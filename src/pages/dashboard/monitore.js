import React, { Fragment, Component } from 'react';
import UEditor from "components/ueditor"
import { Button } from 'antd'

class Monitore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initData: ''
        }
    }
    // 富文本编辑器 保存
    saveEditor = () => {
        console.log(this.refs.ueditor.getUEContent())
    }
    render() {
        return (
            <div>
                Statistics
            {/* 使用UEditor 组件 */}
                <UEditor ref="ueditor" initData={this.state.initData} />
                <Button type="primary" onClick={this.saveEditor}>
                    保存
            </Button>
            </div>
        )
    }

}

export default Monitore;
