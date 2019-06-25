import axios from 'axios'


axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data
});

export let getHome = () => {  //请求Home组件的数据接口
  return axios.get("/static/mock/index.json")   //该getHome函数执行返回的是一个promise对象
}

export let getCities = () => {  //请求city组件的数据接口
  return axios.get("/static/mock/city.json")   //该getHome函数执行返回的是一个promise对象
}

export let getDetails = (id) => {  //请求detail组件的数据接口
  return axios.get("/static/mock/detail/"+id+".json")   //该getHome函数执行返回的是一个promise对象
}

export let getWeeks = (id) => {  //请求week组件的数据接口
  return axios.get("/static/mock/week/"+id+".json")   //该getHome函数执行返回的是一个promise对象
}



