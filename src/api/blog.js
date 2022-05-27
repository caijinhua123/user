import request from './request.js'
export async  function Blog(categoryid=-1,page=1,limit=20){//主页面文章列表
    const resp =await request.get('/api/blog',{
        params: {
            categoryid,
            page,
            limit,
          }
        }
    )
    if (!resp) {
        return resp
    }
    return resp.data
}

export async  function getBlog(){//获取右侧目录
    const resp =await request.get('/api/bloglist')
    if (!resp) {
        return resp
    }
    return resp.data
}
export async function getdata(){//获取右侧目录
    const resp =await request.get('/data/asset')
    return resp
}

export async function blogdetail(id) {//获取单个博客
    const resp =await request.get(`/api/blog/${id}`)
    return resp
}
export async function comments(commentInfo) {//提交评论
    return await request.post(`/api/comment`, commentInfo);
  }
export async function  getComment(page,limit,blogId) {//获取评论
    const resp =await request.get('/api/comment',{
        params:{
            page,limit,blogId
    }})
    return resp
}