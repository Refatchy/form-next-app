interface Props {
  label: string;
  onChange: any;
  type: string;
  input: [];
}

const FormInput = ({ label, onChange, ...input }: Props) => {
  return (
    <div className="app mb-4">
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          {...input}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FormInput;