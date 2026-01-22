// // components/ui/SectionTitle.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const SectionTitle = ({ title, subtitle, className = "" }) => {
//   return (
//     <div className={`text-center mb-12 ${className}`}>
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-white"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         {title}
//       </motion.h2>
//       {subtitle && (
//         <motion.p
//           className="text-lg text-gray-600 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//         >
//           {subtitle}
//         </motion.p>
//       )}
//     </div>
//   );
// };

// export default SectionTitle;

// components/ui/SectionTitle.jsx
import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  subtitle,
  titleColor = "text-white",
  subtitleColor = "text-white/80",
  className = "",
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <motion.h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`text-lg max-w-2xl mx-auto ${subtitleColor}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
