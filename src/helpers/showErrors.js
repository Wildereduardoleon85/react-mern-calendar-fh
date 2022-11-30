export const showErrors = (error) => {
  if (error.response.data.errors) {
    const errors = error.response.data.errors

    return Object.values(errors)
      .map((item, index) => {
        if (index === Object.values(errors).length - 1) {
          return `${item.msg}.`
        }
        return item.msg
      })
      .join('. \n')
  }

  return error.response.data.msg || 'Server error'
}
