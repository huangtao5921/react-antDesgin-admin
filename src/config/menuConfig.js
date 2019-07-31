const menuConfig = [
  {
    title: '首页',
    key: '/',
    icon: 'home'
  },
  {
    title: '用户',
    key: '/user',
    icon: 'user',
    children: [
      {
        title: '联系',
        key: '/user/connect',
      },
    ]
  }
];

export default menuConfig;
