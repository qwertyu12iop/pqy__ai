# html5 王者对象Blob
- 图片转成base64字符串编码
- atob(base64) 二进制的字符串编码
- for 每一个字符
  charCodeAt() 0~255 8 byte的整数
  Unit8Array 
- 二进制文件对象描述 new Blob([unit8Array],类型)
- 二进制层面上去压缩，切割，修改
- URL.createObjectURL(二进制对象) 二进制对象的地址