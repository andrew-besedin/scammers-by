

function Button(props: React.HTMLProps<HTMLButtonElement>) {
    const { children, type, ...rest } = props;
    return (
        <button
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;