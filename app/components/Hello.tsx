import { useState, useEffect } from 'react'
import { DatePicker } from 'antd';

import getTime from '@/utils/getTime'

export function Hello() {
  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    const now = new Date()
    setFormattedDate(getTime.formatDate(now, 'YYYY-MM-DD HH:mm:ss'))
  }, [])

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md bg-gray-50 mt-6">
      <div className="space-y-2">
        <div className="flex justify-between align-center">
          <DatePicker />
          <span className="font-mono text-green-500">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
