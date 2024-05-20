import request from '@/utils/request';

export default {
  time() {
    return request({
      url: '/test/time',
      method: 'get',
    });
  },
};
