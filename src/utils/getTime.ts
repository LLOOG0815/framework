import { dayjs } from 'element-plus'

// 格式化日期时间的工具
const getTime = {
  // 格式化指定日期
  formatDate(date: string | Date, format: string = 'YYYY-MM-DD') {
    return dayjs(date).format(format)
  },
  // 计算日期差
  getDateDiff(startDate: string | Date, endDate: string | Date, unit: 'day' | 'hour' | 'minute' | 'second' | 'month' | 'year' = 'day') {
    return dayjs(endDate).diff(dayjs(startDate), unit)
  }
}

export default getTime
