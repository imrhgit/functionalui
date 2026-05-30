import { InputImage } from "functionalui/input-image";

const Image = () => {
	const handleImageChange = (v: File | undefined) => {
		console.log(v);
	};
	return (
		<div>
			<InputImage
				handleImageChange={handleImageChange}
				id="img-id"
				labelname="Add image"
				name="img-id"
			/>
		</div>
	);
};

export default Image;
