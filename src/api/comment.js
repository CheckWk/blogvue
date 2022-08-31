import request from '@/utils/request'

// 发送文章评论
// export function sendComment(type,articleId,rootId,toCommentId,toCommentUserId,content) {
//     return request({
//         url: '/comment',
//         method: 'post',
//         data: {"articleId":articleId,"type":type,"rootId":rootId,"toCommentId":toCommentId,"toCommentUserId":toCommentUserId,"content":content}
//     })
// }
// 新发送文章评论
export function sendComment(commentData) {
    return request({
        url: '/comment',
        method: 'post',
        data: commentData
    })
}


export function getArticleComment(query) {
    return request({
        url: '/comment/commentList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}


export function getLinkComment(query) {
    return request({
        url: '/comment/linkCommentList',
        method: 'get',
        params: query
    })
}


export function getQQInfo(qq){
    return request({
        url:'/comment/qqInfo/'+qq,
        method:'get',
        timeout:30000
    })
}