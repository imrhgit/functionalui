import { Meta } from "@storybook/react-vite";
import {
  Button,
  TextArea as COMPONENT,
  Container,
  Layout,
  Text_Header,
} from "functionalui";
import {
  ButtonIconPositions,
  ButtonSizes,
  Displays,
  FlexAlignItems,
  FlexDirections,
  Icons,
  Spacings,
  TextAreaSizes,
  TextAreaStyles,
} from "functionalui/types";
import { ChangeEvent, useRef, useState } from "react";

const meta: Meta<typeof COMPONENT> = {
  title: "Components/Inputs/TextArea",
  component: COMPONENT,
};

export default meta;

export const InputTextarea = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="textarea-id"
        label="Textarea label"
        name="textarea-id"
        value={value}
      />

      {/* sizes */}
      <br />
      <br />
      <Text_Header header="h3">Sizes</Text_Header>
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="text-id-small"
        label="Textarea label -- Small"
        name="text-id-small"
        value={value}
        size={TextAreaSizes.Small}
      />
      <br />
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="text-id-default"
        label="Textarea label -- Default"
        name="text-id-default"
        value={value}
      />
      <br />
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="text-id-big"
        label="Textarea label -- Big"
        name="text-id-big"
        value={value}
        size={TextAreaSizes.Big}
      />
      <br />
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="text-id-huge"
        label="Textarea label -- Huge"
        name="text-id-huge"
        value={value}
        size={TextAreaSizes.Huge}
      />
      <br />

      {/* styles */}
      <br />
      <br />
      <Text_Header header="h3">Styles</Text_Header>
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="textarea-id-st-1"
        label="TextAreaStyles.Default"
        name="textarea-id-st-1"
        value={value}
        textAreaStyle={TextAreaStyles.Default}
      />
      <br />
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="textarea-id-st-2"
        label="TextAreaStyles.BorderBottom"
        name="textarea-id-st-2"
        value={value}
        textAreaStyle={TextAreaStyles.BorderBottom}
      />
      <br />
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="textarea-id-st-3"
        label="TextAreaStyles.Filled"
        name="textarea-id"
        value={value}
        textAreaStyle={TextAreaStyles.Filled}
      />
      <br />
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="textarea-id-st-4"
        label="TextAreaStyles.Outlined"
        name="textarea-id"
        value={value}
        textAreaStyle={TextAreaStyles.Outlined}
      />
      <br />
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        id="textarea-id-st-5"
        label="TextAreaStyles.Transparent"
        name="textarea-id"
        value={value}
        textAreaStyle={TextAreaStyles.Transparent}
      />

      {/* styles */}
      <br />
      <br />
      <Text_Header header="h3">Unit tests</Text_Header>
      <Text_Header header="h4">Forward ref</Text_Header>
      <FocusTextArea />

      {/* styles */}
      <br />
      <br />
      <Text_Header header="h3">Styles Composition</Text_Header>
      <Layout
        display={Displays.Flex}
        flexDirection={FlexDirections.Column}
        style={{
          width: 250,
          height: 400,
          backgroundColor: "darkred",
        }}
      >
        <Container style={{ flex: 1, width: "100%", minWidth: 300 }} />
        <Layout display={Displays.Flex} flexAlignItem={FlexAlignItems.Center}>
          <Container marginRight={Spacings.Size2} style={{ flex: 1 }}>
            <COMPONENT
              id="textarea-id-sc-1"
              label="Styles Composition"
              name="textarea-id-sc-1"
              textAreaStyle={TextAreaStyles.Default}
              fullWidth
              noLabel
            />
          </Container>
          <Button
            name="Send"
            icon={Icons.Send}
            buttonSize={ButtonSizes.Small}
            iconPosition={ButtonIconPositions.Right}
          />
        </Layout>
      </Layout>
    </>
  );
};

/**
 * is a unit test
 * to test ref prop
 */
function FocusTextArea() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  return (
    <div>
      <COMPONENT
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target?.value || "")
        }
        ref={ref}
        id="textarea-id-st-3"
        label="TextAreaStyles.Filled"
        name="textarea-id"
        value={value}
        defaultValue={value}
        textAreaStyle={TextAreaStyles.Outlined}
      />

      <Button
        name="Focus"
        icon={Icons.MousePointer}
        buttonSize={ButtonSizes.Small}
        iconPosition={ButtonIconPositions.Right}
        clickAction={() => {
          if (ref.current) ref.current.focus();
        }}
      />
    </div>
  );
}
