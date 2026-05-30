import { Button } from "functionalui/button";
import { GalleryModal } from "functionalui/gallery-modal";
import { ButtonSizes } from "functionalui/types";
import { useState } from "react";

const Component = () => {
	const [openModal, setOpenModal] = useState(false);
	const images = [
		<img src="./telegram_t1.jpg" alt="telegram_t1" />,
		<img src="./telegram_t2.jpg" alt="telegram_t2" />,
		<img src="./telegram_t3.jpg" alt="telegram_t3" />,
		<img src="./telegram_t4-1.jpg" alt="telegram_t4-1" />,
		<img src="./telegram_t5.jpg" alt="telegram_t5" />,
	];
	return (
		<div>
			<Button
				name="Open modal"
				buttonSize={ButtonSizes.Smaller}
				clickAction={() => setOpenModal((prev) => !prev)}
			/>
			<GalleryModal
				images={images}
				showModal={openModal}
				closeModal={() => setOpenModal((prev) => !prev)}
				// setActiveIdx={() => }
				// activeIdx={0}
			/>
		</div>
	);
};

export default Component;
