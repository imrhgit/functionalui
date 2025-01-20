"use client";

import { Container, Layout, Text_Span, UIcon } from "functionalui";
import { Displays, FlexAlignItems, Spacings } from "functionalui/types";
import { ChangeEvent, FC, useEffect, useState } from "react";
import cstyles from "./inputImage.module.css";

interface P {
  id: string;
  name: string;
  // handleImageChange: (v: File | undefined, w: string | undefined) => Promise<void>;
  handleImageChange: (v: File | undefined) => void;
  labelname?: string;
  defaultValue?: string;
  width?: number | string;
  height?: number | string;
}
const InputImage: FC<P> = ({
  id,
  name,
  handleImageChange,
  labelname,
  defaultValue,
  width = "100%",
  height,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>(defaultValue);
  // create a preview as a side effect
  useEffect(() => {
    if (defaultValue && defaultValue !== "") {
      setPreview(defaultValue);
      return;
    } else {
      if (!selectedFile) return;
    }
    // this will only run on first upload, not when reupload
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [defaultValue, selectedFile]);

  const onSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    // kept this simple by using the first image instead of multiple
    // if multiple, need to add `multiple` attribute to input element
    setSelectedFile(e.target.files[0]);

    // to update defaultValue -- when reupload
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
    handleImageChange(e.target.files[0]);
  };

  const handleCancel = () => {
    setSelectedFile(undefined);
    setPreview(undefined);
    handleImageChange(undefined);
  };

  return (
    <Container>
      <input
        id={id}
        type="file"
        name={name}
        onChange={onSelectFile}
        accept="image/png, image/jpeg, image/webp, image/jpg"
        style={{
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
          position: "absolute",
        }}
      />
      <label
        htmlFor={id}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        style={{ width: width, height: height, cursor: "pointer" }}
      >
        {preview ? (
          <PreviewImage
            src={preview}
            width={width}
            handleCancel={handleCancel}
          />
        ) : (
          <Layout display={Displays.Flex} flexAlignItem={FlexAlignItems.Center}>
            <Container marginRight={Spacings.Size1}>
              <Text_Span>{labelname ? labelname : "Upload image"}</Text_Span>
            </Container>
            {/* Icon */}
            <Container className={`${cstyles.iconContainerDesktop}`}>
              <UIcon name="image" />
            </Container>
            <Container className={`${cstyles.iconContainerMobile}`}>
              <UIcon name="camera" />
            </Container>
          </Layout>
        )}
      </label>
    </Container>
  );
};

export default InputImage;

const PreviewImage = ({
  src,
  width,
  handleCancel,
}: {
  src: string | undefined;
  width: string | number;
  handleCancel: () => void;
}) => {
  return (
    <Layout>
      <Container>
        <img alt="preview" src={src} width={width} />
      </Container>
      <Container>
        <UIcon name="x" iconAction={() => handleCancel()} />
      </Container>
    </Layout>
  );
};
