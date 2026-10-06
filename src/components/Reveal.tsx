import { motion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  /** Vertical travel distance in pixels. */
  y?: number;
}

/**
 * Subtle scroll-triggered entrance. Animations stay small and purposeful; the
 * `prefers-reduced-motion` rules in index.css neutralise them when requested.
 */
const Reveal = ({ delay = 0, y = 20, children, ...props }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
);

export default Reveal;
