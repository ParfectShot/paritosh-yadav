"use client"
import * as Utilities from '@common/utilities';
export default function ThemeToggle({theme = "", children}) {
  return (
    <span onClick={() => Utilities.onHandleThemeChange(theme)}>
      {children}
    </span>
  )
}