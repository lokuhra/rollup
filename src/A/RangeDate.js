import React, {Component} from 'react'

import SimpleReactCalendar from 'simple-react-calendar'

export default class RangeDate extends Component {
  render() {
    return (
      <SimpleReactCalendar
        activeMonth={new Date()}
      />
    )
  }
}
