export const convertPrice = (price) => {
  const convertedPrice = price.toString()

  if (convertedPrice.split('').includes('.')) {
    return `${convertedPrice.slice(0, -6)} ${convertedPrice.slice(-6)}`
  }

  return `${convertedPrice.slice(0, -3)} ${convertedPrice.slice(-3)}`
}
