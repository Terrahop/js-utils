import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const dayjsFormatFull = 'DD MMM, YYYY - HH:mm:ss'
export const dayjsFormatDMY = 'DD MMM, YYYY'
export const dayjsPickerFormat = 'YYYY-MM-DD'

export const dateFull = (timestring: string) => {
  return dayjs(timestring).format(dayjsFormatFull)
}

export const dateDMY = (timestring: string) => {
  return dayjs(timestring).format(dayjsFormatDMY)
}

export const dateTo = (timestring: string) => {
  return dayjs().to(timestring)
}

export const dateFrom = (timestring: string) => {
  return dayjs().from(timestring)
}

export const dateTimeNow = () => {
  return dayjs()
}

/**
 * Convert a datetime ISO string to a format that works with html <input/> datepickers.
 * @param datetime - Datetime string to convert.
 */
export const datePicker = (datetime: string) => {
  return dayjs(datetime).format(dayjsPickerFormat)
}
