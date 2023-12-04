import { ButtonPropsType } from "../../types";

//* Component
const CustomButton = ({
  disabled,
  btnType,
  designs,
  title,
  handleClick,
  rIcon,
}: ButtonPropsType) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={btnType}
      className={`${designs}  rounded-full px-6 py-2 transition`}
    >
      <span className="flex-1">{title}</span>

      {rIcon && (
        <div className="relative float-right w-6 h-6">
          <img src={rIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
