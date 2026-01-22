// components/ui/Button.jsx
import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <motion.button
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
