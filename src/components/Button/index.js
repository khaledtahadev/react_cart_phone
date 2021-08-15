import "./styles.css";

const Button = ({ children, className, ...props }) => {
	const classes = className ? `button ${className}` : "button";

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
};

export default Button;
