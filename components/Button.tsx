import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

export const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center rounded-full border ${variant}`}
      type="button"
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-18 p-2 whitespace-nowrap">{title}</label>
    </button>
  );
};
