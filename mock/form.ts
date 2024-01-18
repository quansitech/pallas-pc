import dayjs from 'dayjs';

export default {
  'GET /api/Staging': {
    status: 1,
    info: '',
    data: {
      assistance_list_id: '1',
      amount: 100,
      start_date: {
        type: 'dayjs',
        value: dayjs('2024-01-01'),
      },
    },
  },
  'POST /api/Staging': {
    status: 1,
    data: null,
    info: '',
  },
  'POST /api/submit': {
    status: 1,
    data: null,
    info: '',
  },
};
