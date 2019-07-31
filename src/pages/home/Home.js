import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h3>首页</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("Home渲染完毕")
  }

}

export default Home
