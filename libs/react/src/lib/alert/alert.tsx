import React, { ReactNode, useEffect, useState } from 'react'
import { AlertType } from '@sebgroup/extract'

export interface AlertProps {
  children: ReactNode
  type: AlertType
  header?: ReactNode
  footer?: ReactNode
  isCloseable?: boolean
  closeText?: string
}

export function Alert({
  type,
  header,
  footer,
  children,
  closeText,
  isCloseable = true,
}: AlertProps) {
  const [closeButton, setCloseButton] = useState<ReactNode>()
  useEffect(() => {
    if (!isCloseable) {
      setCloseButton(null)
    } else {
      if (closeText)
        setCloseButton(
          <button className="close">
            <span className="sr-only">{closeText}</span>
            <i></i>
          </button>
        )
      else setCloseButton(
        <button className="close">
              <span className="sr-only">Close</span>
              <i></i>
        </button>
      )
    }
  }, [isCloseable, closeText])

  return (
    <div role="alert" className={type}>
      {header && (
        <header>
          {React.isValidElement(header) ? header : <h3>{header}</h3>}
          {closeButton}
        </header>
      )}
      <p>{children}</p>
      {footer && <footer>{footer}</footer>}
    </div>
  )
}

export default Alert
