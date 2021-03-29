import request from './request'
if (process.env.NODE_ENV === 'development') {
  var baseUrl = '/api/';
  window.baseUrl = '/api/';
} else {
  var baseUrl = '/';
  window.baseUrl = '/';
}
function setTime(url){
  if(url.indexOf('?')!= -1){
    return `${url}&time=${(new Date()).getTime()}`
  }else {
    return `${url}?${(new Date()).getTime()}`
  }
};
function isSafari(url){
  if(sessionStorage.getItem("isSafari") == '1'){
    return setTime(url)
  }else{
    return url
  }
};
const http ={
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url,loading=false, params){
        const config = {
            method: 'get',
            url: isSafari(baseUrl + url),
            cache: false,
            loading:loading
        }
        if (params) {
          config.params = params
        }
        return request(config)
    },
    post(url, params, loading = false){
        const config = {
            method: 'post',
            url: baseUrl + url,
            loading:loading
        }
        if (params) {
          config.data = params
        }
        // if (header) {
        //   config.headers = header.headers
        // } else {
        //   delete config.headers
        // }
        return request(config)
    },
    formData(url, params, loading = false) {
      const config = {
        method: 'post',
        url: baseUrl + url,
        loading:loading
      }
      if (params) {
        config.data = params
      }
      // if (header) {
      //   config.headers = header.headers
      // } else {
      //   delete config.headers
      // }
      return request(config)
    }
}
//导出
export default http
