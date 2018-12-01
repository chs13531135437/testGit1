const api = require('./apis');

const baseURL = '';

let get = (op={})=>{
  return api.request({
      url: baseURL + op.path,
    ...op,
    method: 'GET'
  }).then(res=>res.data)
}

let post = (op={})=>{
  if(!op.header) op.header = {}
  return api.request({
    url: baseURL + op.path,
    ...op,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...op.header
    },
    method: 'POST'
  }).then(res=>res.data);
};


exports.getShops = (data={},q)=>{
  return post({
    path: `/article/shoplist?page=${q.page}&rows=${q.rows}`,
    data
  })
};

exports.getShopDetail = id =>{
  return get({
    url: ''+'/article/detail',
    data: {id}
  })
}
