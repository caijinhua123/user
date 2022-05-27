import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img-1309371092.cos.ap-chengdu.myqcloud.com/img/header.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/caijinhua123",
    qq: "1269931149",
    qqQrCode:
      "https://img-1309371092.cos.ap-chengdu.myqcloud.com/img/qq.png",
    weixin: "15328620800",
    weixinQrCode:
      "https://img-1309371092.cos.ap-chengdu.myqcloud.com/img/WX.png",
    mail: "1269931149@qq.com",
    icp: "川ICP备17001719号",
    githubName: "caijinhua123",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
