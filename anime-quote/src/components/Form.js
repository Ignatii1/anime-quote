import React from 'react'

function Form(props) {
  const { onSubmit } = props
  const [value, setValue] = React.useState('')

  function onChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__name-label" for={props.label}>
        {props.label}
      </label>

      <input
        className="form__input form__input-text"
        id={props.label}
        type="text"
        value={value}
        onChange={onChange}
      />
      <input type="submit" value="GET IT" />
    </form>
  )
}

export default Form
