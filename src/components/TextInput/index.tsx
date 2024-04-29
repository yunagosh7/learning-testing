
type Props = {
  classes?: string;
  setValue: (newVal: string) => void;
  hasIconButton?: boolean;
  icon?: React.ReactNode;
  onIconButtonClick?: () => void;
}

export default function TextInput({
  classes = "",
  setValue,
  hasIconButton = false,
  onIconButtonClick,
  icon,
  
}: Props) {
  return (
    <div>
      <input
        className={classes}
        onChange={(e) => setValue(e.target.value) }
      />
      {hasIconButton && 
      <button onClick={onIconButtonClick}>
        {icon}
      </button>
      }
      

    </div>
  )
}