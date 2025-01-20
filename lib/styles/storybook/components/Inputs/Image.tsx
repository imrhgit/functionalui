import { InputImage } from "functionalui";

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
