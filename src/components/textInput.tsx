import type { ReactNode } from 'react';

interface TextInputProps {
  name : string,
  placeholder: string,
  required?:boolean,
  type?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextInput = ({placeholder, name,type, required = true, onChange }: TextInputProps) => {
  return (
    <>
      <div className="pl-3 w-full h-12 gap-2 text-lg border-1 border-white/20 flex justify-start items-center rounded-xl bg-white/10">
        {/* Icon */}
        <div className="flex justify-center items-center w-full pl-1">
          <input
            name={name}
            type={type}
            className="w-full h-full text-white bg-transparent outline-none placeholder-white/40"
            placeholder={placeholder}
            required={required}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  )
}

export default TextInput;