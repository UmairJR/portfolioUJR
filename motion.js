export const msgboxVariant = {
    hidden: {
      scale: 0
    },
    show: {
      scale: 1,
      x: 0,
      y: [0, 6],
      transition: {
        type: "spring",
        bounce: 0,
        delay: 0.5,
        duration: 1,
        y: {
            repeatType: "reverse",
          repeat: Infinity,
          duration: 0.3,
          ease: "easeOut"
        }
      }
    }
  };

  export const homeContainerVariant =(delay)=>( {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 3
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut',
      }
    }
  
  })

  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });