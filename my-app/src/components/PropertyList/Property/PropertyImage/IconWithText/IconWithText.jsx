import "./IconWithText.css"

const IconWithText = ({Icon, text}) => {
    return (
        <div className="icon-with-text">
            <Icon size={14} />{" "}{text}
        </div>
    )
}

export default IconWithText