import config from "@/config/config.js"

/**
 * 发起网络请求
 * @description 发起网络请求
 * @param {String} url 请求连接
 * @param {Object} options 请求属性
 */
export const request = async (url, options) => {

	if(url.indexOf("http") == -1) {
		url = config.apiHost + url;
	}
	
	var token = uni.getStorageSync('token') 
	
	if (!token) {
		token = ''
	}

	var res = await uni.request({
		url: url,
		data: options.data,
		method: options.method,
		header: {
			Authorization: `Bearer ${token}`
		}
	});
	
	return res.data;
}