import request from './request.js';

export function post(url, data = {}) {
  return request({
    method: 'post',
    url: url,
    data: data,
  })
}

export function get(url, params = {}) {
  return request({
    method: 'get',
    url: url,
    params: params,
  })
}

export function put(url, data = {}) {
  return request({
    method: 'put',
    url: url,
    data: data,
  })
}

/**
 * 下载文件
 * @param url
 * @param params
 * @param method
 * @param filename
 */
export const downloadFile = function ({
  url,
  params,
  method,
  filename = '文件导出'
}) {
  request({
    url: url,
    method: method,
    params: params,
    responseType: 'blob'
  }).then(res => {
    const xlsxName = window.decodeURI(res.headers['content-disposition'].split('=')[1])
    const fileName = xlsxName || `${filename}.xlsx`
    if (res) {
      const blob = new Blob([res.data], { type: 'charset=utf-8' })
      const elink = document.createElement('a')
      elink.download = fileName
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href) // 释放URL 对象0
      document.body.removeChild(elink)
    }
  })
}

export function remove(url, data = {}) {
  return request({
    method: 'delete',
    url: url,
    data: data,
  })
}

export function patch(url, data = {}) {
  return request({
    method: 'patch',
    url: url,
    data: data,
  })
}

export default {
  install: (app) => {
    app.provide('post', post);
    app.provide('get', get);
    app.provide('put', put);
    app.provide('remove', remove);
    app.provide('patch', patch);
    app.provide('downloadFile', downloadFile);
  }
}
