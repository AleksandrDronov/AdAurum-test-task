export const currentTime = () => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }
  const date = new Date()
  return date.toLocaleString('en-US', options)
}
