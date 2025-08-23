import './CustomButton.css';

const CustomButton = ({ name, click, disabled = false }) => {
  return (
    <button
      className={`mt-4 px-4 py-2 bg-dark-purple text-white rounded cursor-pointer transition-transform hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={click} disabled={disabled}>{name}</button>
  );
};

export default CustomButton;