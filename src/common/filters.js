export const signed = (input) => {
  if (Number(input) > 0) {
    return `+${input}`
  }
  return `${input}`
}

export const modifier = input => {
  const level = Number(input)
  const modifier = Math.floor((level - 10) / 2)
  return modifier
}
