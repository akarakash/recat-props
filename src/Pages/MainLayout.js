import React from "react"

function MainLayout({style,children}) {
  return (
    <section className={style}>{children}</section>
  )
}

export default MainLayout