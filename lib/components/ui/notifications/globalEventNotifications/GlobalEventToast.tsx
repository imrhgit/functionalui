"use client";

import { useTransition } from "@react-spring/web";
import {
  Container,
  GlobalEventPortal,
  Layout,
  Text_P,
  UIcon,
  useGlobalEventContext,
} from "functionalui";
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
import { useEffect, useMemo, useState } from "react";
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
    { key: number; msg: string; type: ToastNotification }[]
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
    // onRest: (result: any, ctrl: any, item: any) => {
    onRest: (_result: any, _ctrl: any, item: any) => {
      setItems((state: any) =>
        state.filter((i: any) => {
          return i.key !== item.key;
        })
      );
    },
    // config: (item, index, phase) => key => phase === 'enter' && key === 'life' ? { duration: toastTypes[item.type].isTimeout ? timeout : 1000 * 60 * 60 * 24 } : config,
    config: (item, _index, phase) => (key) =>
      phase === "enter" && key === "life"
        ? { duration: item.type.isTimeout ? timeout : 1000 * 60 * 60 * 24 }
        : // ? { duration: item?.isTimeout ? timeout : 1000 * 60 * 60 * 24 }
          config,
  });

  useEffect(() => {
    children((msg: string, type: ToastNotification) => {
      setItems((prev: any[]) => [...prev, { key: id++, msg, type }]);
    });
  }, [children]);
  return (
    // <Container>
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
        />
      ))}
    </Layout>
    // </Container>
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
};
const MessageItem = ({
  style,
  refMap,
  cancelMap,
  type,
  msg,
  life,
  item,
}: ItemProps) => {
  const [isCanceled, setIsCanceled] = useState(false);
  return (
    <Container
      style={style}
      className={isCanceled ? `${cstyles.message} disabled` : cstyles.message}
    >
      {/* <Content ref={(ref) => ref && refMap.set(item, ref)}> */}
      <div ref={(ref) => ref && refMap.set(item, ref)}>
        <Container
          bgColor={ColorPalettes.Secondary2}
          borderRadius={Radiuses.Size4}
          padding={Spacings.Size3}
          boxShadow={BoxShadows.Size5}
          style={{ borderBottom: "none" }}

          // ref={(ref) => ref && refMap.set(item, ref)}
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
            {/* <p>{msg ? msg : toastTypes[type].default}</p> */}
            <Text_P fontSize={FontSizes.Size4}>
              {msg ? msg : type.default}
            </Text_P>
            <Container marginLeft={Spacings.Auto} paddingLeft={Spacings.Size3}>
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
      {/* </Content> */}
    </Container>
  );
};
