//区分环境 生产环境development or 开发环境production

const DEVELOPMENT = 'https://dev.usemock.com/65e29cdadd3f27069aee64cd';

const PRODUCTION = 'https://dev.usemock.com/65e29cdadd3f27069aee64cd'
// 假设公司生成的数据接口是这个

const BASE_URL = process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION;

const TIMEOUT = 3000

export { BASE_URL, TIMEOUT }