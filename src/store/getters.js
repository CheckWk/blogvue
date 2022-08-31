// import request from '@/utils/request'
import axios from "axios"

//查询最热文章
export function hotArticleList() {
    // var url='http://localhost:7777/';
    var url='http://124.221.62.37:7777/';
    return axios.get(url+"config/getConfig")
}
