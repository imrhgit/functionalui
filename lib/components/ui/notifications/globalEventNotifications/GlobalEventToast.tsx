"use client";

import { useTransition } from "@react-spring/web";
import { Container } from "functionalui/container";
import { useGlobalEventContext } from "functionalui/contexts/notifications";
import { GlobalEventPortal } from "functionalui/global-event-portal";
import { UIcon } from "functionalui/icons";
import { Layout } from "functionalui/layout";
import { Text_P } from "functionalui/texts/p";
import {
  BoxShadows,
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexDirections,
  FontSizes,
  Radiuses,
  Sizings,
  Spacings,
  ToastNotification,
} from "functionalui/types";
import { ReactNode, useEffect, useMemo, useState } from "react";
import cstyles from "./styles.module.css";

const GlobalEventToast = () => {
  const { globalEventRef } = useGlobalEventContext();
  return (
    <GlobalEventPortal>
      <MessageHub
        children={(add: any) => {
          globalEventRef.current = add;
        }}
      />
    </GlobalEventPortal>
  );
};

export default GlobalEventToast;

let id = 0;
type HubProps = {
  config?: any;
  children: any;
  timeout?: number;
};
function MessageHub({
  config = { tension: 125, friction: 20, precision: 0.1 },
  timeout = 3000,
  children,
}: HubProps) {
  const refMap = useMemo(() => new WeakMap(), []);
  const cancelMap = useMemo(() => new WeakMap(), []);
  const [items, setItems] = useState<
    Array<{
      key: number;
      msg: string;
      type: ToastNotification;
      customAction?: ReactNode;
    }>
  >([]);

  //animation definition
  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, life: "100%", y: 0 },
    keys: (item) => item.key,
    enter: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({
        opacity: 1,
        height: refMap.get(item).offsetHeight + 10,
        y: 30,
      });
      await next({ life: "0%" });
    },
    leave: [{ opacity: 0, y: 50 }, { height: 0 }],
    onRest: (_result: any, _ctrl: any, item: any) => {
      setItems((state: any) =>
        state.filter((i: any) => {
          return i.key !== item.key;
        }),
      );
    },
    config: (item, _index, phase) => (key) =>
      phase === "enter" && key === "life"
        ? { duration: item.type.isTimeout ? timeout : 1000 * 60 * 60 * 24 }
        : config,
  });

  useEffect(() => {
    children(
      (msg: string, type: ToastNotification, customAction?: ReactNode) => {
        setItems((prev: any[]) => [
          ...prev,
          { key: id++, msg, type, customAction: customAction },
        ]);
      },
    );
  }, [children]);

  return (
    <Layout
      display={Displays.Flex}
      flexDirection={FlexDirections.Column}
      flexAlignItem={FlexAlignItems.FlexEnd}
      style={{ position: "fixed", zIndex: 1000, bottom: "30px", right: "30px" }}
    >
      {transitions(({ life, ...style }, item) => (
        <MessageItem
          style={style}
          refMap={refMap}
          cancelMap={cancelMap}
          type={item.type}
          msg={item.msg}
          life={life}
          item={item}
          customAction={item.customAction}
        />
      ))}
    </Layout>
  );
}

type ItemProps = {
  style: any;
  refMap: any;
  cancelMap: any;
  type: ToastNotification;
  msg: any;
  life: any;
  item: any;
  customAction?: ReactNode;
};
const MessageItem = ({
  style,
  refMap,
  cancelMap,
  type,
  msg,
  life,
  item,
  customAction,
}: ItemProps) => {
  const [isCanceled, setIsCanceled] = useState(false);
  return (
    <Container
      style={style}
      className={isCanceled ? `${cstyles.message} disabled` : cstyles.message}
    >
      <div ref={(ref) => ref && refMap.set(item, ref)}>
        <Container
          bgColor={ColorPalettes.Secondary2}
          borderRadius={Radiuses.Size4}
          padding={Spacings.Size3}
          boxShadow={BoxShadows.Size5}
          style={{ borderBottom: "none" }}
        >
          <Layout
            display={Displays.Flex}
            flexAlignItem={FlexAlignItems.Center}
            style={{ position: "relative", minWidth: "200px" }}
          >
            <Container marginRight={Spacings.Size2}>
              <UIcon
                name={type.icon}
                size={Sizings.Size6}
                colorLight={type.color}
                colorDark={type.color}
                withMargin={false}
              />
            </Container>
            <Text_P fontSize={FontSizes.Size4}>
              {msg ? msg : type.default}
            </Text_P>
            <Container marginLeft={Spacings.Auto} paddingLeft={Spacings.Size3}>
              {/* custom action */}
              {customAction && (
                <Container marginRight={Spacings.Size3}>
                  {customAction}
                </Container>
              )}
              {/* close action */}
              <UIcon
                name="x-circle"
                size={Sizings.Size4}
                iconAction={() => {
                  // e.stopPropagation()
                  if (isCanceled) return;
                  if (cancelMap.has(item) && life.get() !== "0%")
                    cancelMap.get(item)();
                  setIsCanceled(true);
                }}
                withMargin={false}
              />
            </Container>
            {type?.isTimeout && (
              <Container
                className={`${cstyles.life} ${type.classname}`}
                style={{ right: life, transform: "translateY(8px)" }}
              />
            )}
          </Layout>
        </Container>
      </div>
    </Container>
  );
};
