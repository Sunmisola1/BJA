/* eslint-disable react/prop-types */
// src/SlideDown.js

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideDown = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideDown;
