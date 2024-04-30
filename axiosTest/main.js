axios({
  method: "post",
  url: "http://127.0.0.1:3000/signin",
  headers: {},
  data: {
    email: "test113@naver.com",
    password: "zxcv12asdf",
    nickname: "이제끝인가",
    hwId: "5",
  },
});

async function dummy() {
  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:3000/signin",
      headers: {},
      data: {   
        email: "test113@naver.com",
      password: "zxcv12asdf",
      nickname: "이제끝인가",
      hwId: "5",},
    });

    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

dummy();