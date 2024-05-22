import React from "react";

const ButtonBase = ({ onClick, label, width, colorClasses }) => {
	return (
		<button
			type="button"
			className={`w-${width} px-3 py-2 text-sm font-semibold text-white rounded-md shadow
      ${colorClasses} hover:bg-opacity-90 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-5`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

const PrimaryButton = ({ onClick, label, width }) => (
	<ButtonBase
		onClick={onClick}
		label={label}
		width={width}
		colorClasses="bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
	/>
);

const SuccessButton = ({ onClick, label, width }) => (
	<ButtonBase
		onClick={onClick}
		label={label}
		width={width}
		colorClasses="bg-green-600 hover:bg-green-500 focus-visible:outline-green-600"
	/>
);

const DangerButton = ({ onClick, label, width }) => (
	<ButtonBase
		onClick={onClick}
		label={label}
		width={width}
		colorClasses="bg-red-600 hover:bg-red-500 focus-visible:outline-red-600"
	/>
);

const WarningButton = ({ onClick, label, width }) => (
	<ButtonBase
		onClick={onClick}
		label={label}
		width={width}
		colorClasses="bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600"
	/>
);

const SecondaryButton = ({ onClick, label, width }) => (
	<ButtonBase
		onClick={onClick}
		label={label}
		width={width}
		colorClasses="bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600"
	/>
);

export { PrimaryButton, SuccessButton, DangerButton, WarningButton, SecondaryButton };