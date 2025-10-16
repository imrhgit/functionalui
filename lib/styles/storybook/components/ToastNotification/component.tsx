import {
  Button,
  NotificationSystem,
  ProvideGlobalEventContext,
  useGlobalEventContext,
} from "functionalui";
import { ToastTypes } from "functionalui/types";

const Component = () => {
  return (
    <ProvideGlobalEventContext>
      <Notification />
    </ProvideGlobalEventContext>
  );
};

export default Component;

const Notification = () => {
  const { handleGlobalEventRef } = useGlobalEventContext();
  return (
    <>
      <NotificationSystem />
      <Button
        name="Info"
        clickAction={() => handleGlobalEventRef("Info", ToastTypes.Info)}
      />
      <Button
        name="Success"
        clickAction={() => handleGlobalEventRef("Success", ToastTypes.Success)}
      />
      <Button
        name="Alert"
        clickAction={() => handleGlobalEventRef("Alert", ToastTypes.Alert)}
      />
      <Button
        name="Error"
        clickAction={() => handleGlobalEventRef("Error", ToastTypes.Alert)}
      />
      <Button
        name="Loading"
        clickAction={() => handleGlobalEventRef("Loading", ToastTypes.Loading)}
      />
    </>
  );
};
