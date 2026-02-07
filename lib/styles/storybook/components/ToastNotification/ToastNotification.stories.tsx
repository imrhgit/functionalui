import { Meta } from "@storybook/react-vite";
import Component from "./component.tsx";
import GlobalEventToast from "../../../../components/ui/notifications/globalEventNotifications/GlobalEventToast.tsx";

const meta: Meta<typeof GlobalEventToast> = {
  title: "Components/ToastNotification",
  component: GlobalEventToast,
};

export default meta;

export const ToastNotification = () => {
  return <Component />;
};
