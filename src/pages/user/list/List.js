import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Nicholas H.Tao ${i}`,
    email: `huangtao5921@163.com`,
    age: 27,
    address: `China, Shanghai`,
  });
}

class List extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    this.setState({
      selectedRowKeys: [],
      loading: false,
    });
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="content-wrap">
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            取消
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选择 ${selectedRowKeys.length} 条记录` : ''}
          </span>
        </div>
        <Table bordered={true} rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }

}

export default List
