// src/SlideUp.js


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// eslint-disable-next-line react/prop-types
const SlideUp = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 1}}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
