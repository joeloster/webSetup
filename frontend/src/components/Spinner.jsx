function Spinner({ color, size }) {
	return (
		<div
			style={{
				height: size,
				width: size,
				border: `2px solid ${color}`,
				borderTopColor: "transparent",
			}}
			className="animate-spin rounded-full"
		/>
	);
}

export default Spinner;
