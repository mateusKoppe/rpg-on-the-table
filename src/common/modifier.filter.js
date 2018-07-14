const modifier = (input) => {
  if (Number(input) > 0) {
    return `+${input}`
  }
  return `${input}`
}

export default modifier
