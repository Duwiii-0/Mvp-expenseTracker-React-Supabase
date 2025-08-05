import { Plus } from 'lucide-react';

interface AddNewProps {
  Label: string;
  bgColor?: string;
  textColor?: string;
}

const AddNew = ({ Label, bgColor, textColor }: AddNewProps) => {
  return (
    <button className={`overflow-hidden rounded-full w-72 h-20 flex items-center justify-center ${bgColor} ${textColor} relative group cursor-pointer font-bold py-2 px-4 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-2xl transition-all duration-300`}>
            <Plus className="absolute left-10 w-6 h-6 transition-transform duration-400 group-hover:translate-y-20" />
            <Plus className="absolute left-10 ml-auto w-6 h-6  transition-transform duration-400 -translate-y-20 group-hover:translate-y-0" />
            <span className="absolute pl-5 transition-transform duration-400 group-hover:-translate-y-20">
                {Label}
            </span>
            <span className="absolute pl-5 transition-transform duration-400 translate-y-20 group-hover:translate-y-0">
                {Label}
            </span>
    </button>
  );
}

export default AddNew; 