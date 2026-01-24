import { motion } from "framer-motion"

type EmphasisSpanProps = {
  text: string,
  color: string
}

const EmphasisSpan:React.FC<EmphasisSpanProps> = ({text, color}) => {
  return (
    <motion.span initial={{ opacity: 0.0, x: 0, scale: 1.1}}
            whileInView={{ opacity: 1, x: 0, scale: 1}}
            transition={{ duration: 1.0, ease: "easeInOut"}}
            viewport={{ once: true }} className={`inline-block ${color} font-extrabold`}>
              {text}
    </motion.span>
  )
}

export default EmphasisSpan;