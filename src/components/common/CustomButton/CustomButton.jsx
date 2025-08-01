import './CustomButton.css';

const CustomButton = ({ name, click }) => {
  return (
        <button className="mt-4 px-4 py-2 bg-dark-purple text-white rounded cursor-pointer transition-transform hover:scale-105" onClick={click()}>{name}</button>
  );
};

export default CustomButton;