import React from 'react';
import { Button } from 'antd';
import E from 'wangeditor'

class Rich extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: ''
    }
  }

  render() {
    return (
      <div className="content-wrap">
        <div className="rich-info">
          <div>wangEditor —— 轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器。</div>
          <div>官网：<a href="http://www.wangEditor.com">www.wangEditor.com</a></div>
          <div>文档：<a href="http://www.kancloud.cn/wangfupeng/wangeditor3/332599">www.kancloud.cn/wangfupeng/wangeditor3/332599</a></div>
        </div>
        {/* 将生成编辑器 */}
        <div ref="editorElem" style={{textAlign: 'left'}}>
        </div>
        <Button onClick={this.clickHandle.bind(this)}>获取内容</Button>
      </div>
    );
  }

  componentDidMount() {
    const elem = this.refs.editorElem;
    const editor = new E(elem);
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片
    // editor.customConfig.uploadImgServer = '/upload';  // 上传图片到服务器
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    };
    editor.create()
  }

  clickHandle() {
    alert(this.state.editorContent)
  }

}

export default Rich
