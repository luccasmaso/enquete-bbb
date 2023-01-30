export const moodIcon = {
  hidden: { opacity: 0, scale: 0.5  },
  visible: {
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01] 
    }
  }
}

export const header = {
  hidden: { opacity: 0, top: -10 },
  visible: { 
    opacity: 1, 
    top: 0,
    transition: { 
      duration: .4, 
    }
  }
}

export const text = {
  hidden: { opacity: 0, bottom: -20 },
  visible: { 
    opacity: 1, 
    bottom: 0,
    transition: { 
      delay: .3,
      duration: .3, 
    }
  }
}

export const footer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      delay: 2,
      duration: .3, 
    }
  }
}

export const total = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: { 
      delay: .8,
      duration: .4, 
    }
  }
}

export const cards = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      delay: .6,
      duration: .2, 
      staggerChildren: 0.2
    }
  }
}

export const card = {
  hidden: { opacity: 0, top: '-2rem' },
  visible: {
    opacity: 1,
    top: 0,
    transition: { 
      duration: .15, 
      ease: "easeOut"
    }
  }
}