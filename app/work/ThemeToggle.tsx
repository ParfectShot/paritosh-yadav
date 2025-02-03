"use client"
import * as Utilities from '@common/utilities';
export default function ThemeToggle({theme = "", children}) {
  return (
    <div onClick={() => Utilities.onHandleThemeChange(theme)}>
      {children}
    </div>
  )
}