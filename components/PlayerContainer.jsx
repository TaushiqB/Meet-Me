// import { motion } from "framer-motion";
// import { slideIn } from "@/utils/motion";
// import { PlayerCanvas } from "./canvas";

// function PlayerContainer({ isMobile }) {
//   return (
//     <motion.div
//       variants={slideIn("right", "tween", 0.2, 1)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer"
//     >
//       <PlayerCanvas isMobile={isMobile} />
//     </motion.div>
//   );
// }

// export default PlayerContainer;

import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

function PlayerContainer({ isMobile }) {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer flex justify-center items-center"
    >
      <motion.img
        src="/assets/player.png"
        alt="Floating Image"
        className="w-full h-auto max-w-[450px]" 
        animate={{
          y: [0, -20, 0], 
        }}
        transition={{
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export default PlayerContainer;

