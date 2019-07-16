import React from "react"

function MainContent() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize:30
    }
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "red"
    } else if (hours >=12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "green"
    } else {
      timeOfDay ="night"
      styles.color = "orange"
    }
    return (
      <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default MainContent