const getSleepHours = (day) => {
  if (day === 'Monday') return 8
  else if (day === 'Tuesday') return 5
  else if (day === 'Wednesday') return 6
  else if (day === 'Thursday') return 7
  else if (day === 'Friday') return 8
  else if (day === 'Saturday') return 5
  else if (day === 'Sunday') return 8
}

const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday')

const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours)
    console.log('You slept the ideal number of hours')
  else if (actualSleepHours > idealSleepHours)
    console.log('You slept more hours than the ideal')
  else console.log('You slept fewer hours than the ideal, get some rest')
}

console.log(`You slept ${getActualSleepHours()} hours`)
console.log(`The ideal number of sleep hours is ${getIdealSleepHours()}`)
calculateSleepDebt()
