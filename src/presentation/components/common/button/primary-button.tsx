import { motion } from 'framer-motion';
interface PrimaryButtonProps {
  btnText: string;
  onClick: () => void;
}

const PrimaryButton = ({ btnText, onClick }: PrimaryButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-50 text-white rounded-[20px] font-semibold hover:bg-primary-100 transition-colors duration-300 cursor-pointer py-[10px] px-[20px]"
      onClick={onClick}
    >
      {btnText}
    </motion.button>
  );
};

export default PrimaryButton;
