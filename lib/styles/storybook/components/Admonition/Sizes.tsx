import { Admonition } from "functionalui/admonition";
import { AdmonitionLevels } from "functionalui/types";

const Sizes = () => {
	return <div>
		<Admonition level={AdmonitionLevels.Info} descriptionText={"This is an Admonition component of AdmonitionLevels.Info level."} />
	</div>;
};

export default Sizes;
