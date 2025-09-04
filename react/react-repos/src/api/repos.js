import axios from 'axios';//http请求库
//http 请求时候 所有接口地址的公共部分
const BASE_URL='http://api.github.com/';//基础地址
///http://api_github.com/repos/qwertyu12iop/pqy__ai
//标准http请求库
//axios method url
//返回的是promise对象  更加现代
//api 模块 应用之外  搞外交
export const getRepos=(username)=>{
    return axios.get(`${BASE_URL}users/${username}/repos`);
}
export const getRepoDetail=(username,reponame)=>{
    return axios.get(`${BASE_URL}repos/${username}/${reponame}`);
}

