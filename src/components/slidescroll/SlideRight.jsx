/* eslint-disable react/prop-types */
// src/SlideFromSide.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideRight = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideRight;
