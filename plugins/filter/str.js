//是否以某个字串开头
export function isStartWith(str, prefix) {
	if (prefix === null || prefix === "" || str === null || str.length === 0 || prefix.length > str.length) {
		return false;
	}
	return str.substr(0, prefix.length) === prefix;
}

//是否以某个字串结尾
export function isEndWith(str, suffix) {
	if (suffix === null || suffix === "" || str === null || str.length === 0 || suffix.length > str.length) {
		return false;
	}
	return str.substring(str.length - suffix.length) === suffix;
}

//获取文件后缀名
export function getExtension(filename) {
	if (filename === null || filename === "") {
		return "";
	}
	let index1 = filename.lastIndexOf(".");
	if (index1 === -1) {
		return "";
	}
	let index2 = filename.length;
	return filename.substring(index1, index2);
}

//一个字符串包含子字符串
export function isContainStr(father, child) {
	if (father === null || father === "") {
		return false;
	}
	return father.indexOf(child) !== -1;
}


//把一个大小转变成方便读的格式
//human readable file size
export function humanFileSize(bytes, si = false) {
	let thresh = si ? 1024 : 1000;
	if (Math.abs(bytes) < thresh) {
		return bytes + ' B';
	}
	let units = si
		? ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
		: ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let u = -1;
	do {
		bytes /= thresh;
		++u;
	} while (Math.abs(bytes) >= thresh && u < units.length - 1);
	return bytes.toFixed(1) + ' ' + units[u];
}
