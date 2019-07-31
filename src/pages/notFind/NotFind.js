import React from 'react';

class NotFind extends React.Component {

  render() {
    return (
      <div>
        <h3>404</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("404渲染完毕")
  }

}

export default NotFind
