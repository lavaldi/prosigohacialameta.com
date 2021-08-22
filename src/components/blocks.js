/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Container = ({ wide, ...props }) =>
  <div
    sx={{
      maxWidth: wide ? 'wide' : 'container',
    }}>
    {props.children}
  </div>