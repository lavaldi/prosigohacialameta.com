const theme = {
  initialColorModeName: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'hsl(264, 100%, 75%)',
    secondary: 'hsl(266, 79%, 47%)',
    accent: 'hsl(320, 100%, 50%)',
    muted: '#af6e6e',
    gray: '#444',
    modes: {
      dark: {
        text: '#fff',
        background: 'hsl(230,25%,18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        accent: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)',
      },
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [
    14, 16, 18, 20, 24, 32, 48, 64, 72, 96
  ],
  sizes: {
    container: 768,
    wide: 1280,
  },
  text: {
    heading: {
      fontSize: 2,
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      my: 2,
    },
    small: {
      fontSize: 0,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  small: {
    variant: 'text.small',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 2,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.4s',
    },
    a: {
      color: 'primary',
      ':hover,:focus': {
        color: 'secondary',
      }
    },
    // h1: {
    //   variant: 'text.heading',
    //   my: 6,
    // },
    // h2: {
    //   variant: 'text.heading',
    //   mt: 5,
    //   mb: 3,
    // },
    // h3: {
    //   fontSize: 2,
    // },
    // h4: {
    //   variant: 'text.heading',
    // },
    // h5: {
    //   variant: 'text.heading',
    // },
    // h6: {
    //   variant: 'text.heading',
    // },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      bg: 'muted',
      p: 3,
      borderRadius: 8,
      overflowX: 'auto',
      variant: 'prism',
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    // hr: {
    //   border: 0,
    //   my: 4,
    //   borderBottom: '1px solid',
    //   borderColor: 'muted',
    // },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      py: 2,
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      py: 2,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    blockquote: {
      fontStyle: 'italic',
      mx: 0,
      px: 3,
      my: 5,
      borderLeft: '4px solid',
    },
    navlink: {
      variant: 'text.caps',
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus': {
        color: 'primary',
      }
    },
    navitem: {
      variant: 'styles.navlink',
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'bold',
      letterSpacing: '0.2em',
    }
  }
}

export default theme;