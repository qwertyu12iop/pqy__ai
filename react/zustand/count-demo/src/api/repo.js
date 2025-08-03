import axios from './config'
export const getRepo = async (username, repo) =>
    await axios.get(`/repos/${username}/${repo}`)
export const getRepoList = async (username) =>
    await axios.get(`/users/${username}/repos`)