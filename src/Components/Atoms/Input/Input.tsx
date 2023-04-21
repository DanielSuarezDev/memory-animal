import { InputProps } from './types';

const Input = ({ className = '', type = 'text', placeholder = '', value = '', onChange }: InputProps) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <input
        className="w-full p-4 border border-gray-400 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
