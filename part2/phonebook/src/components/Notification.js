const Notification = ({ message }) => {
  console.log(message)
  if (message === undefined || message === null) {
    return null
  }

  return (
    <div className={ message.success === true ? 'success' : 'error'}>
      {message.message}
    </div>
  )
}

export default Notification