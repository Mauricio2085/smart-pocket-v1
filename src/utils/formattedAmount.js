const formattedAmount = (amount) => {
	return new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
		currencyDisplay: "code",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(amount);
};

export { formattedAmount };
