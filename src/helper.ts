import { useEffect, useState } from "react";
import { IKeyInfo } from "./IKeyInfo";

interface PrepareHookReturn {
  isPressed: boolean;
  keyInfos: IKeyInfo[];
}

const usePrepareHook = (): PrepareHookReturn => {
  const [isPressed, setIsPressed] = useState(false);
  const [keyInfos, setKeyInfos] = useState<IKeyInfo[]>([]);
  useEffect(() => {
    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => handlePressKey(e),
      true
    );

    return document.removeEventListener(
      "keydown",
      (e: KeyboardEvent) => handlePressKey(e),
      true
    );
  }, []);

  const handlePressKey = (event: KeyboardEvent) => {
    const data: IKeyInfo[] = [];
    data.push({ label: "Key", value: event.key });
    data.push({ label: "Location", value: event.location.toString() });
    data.push({ label: "Which", value: event.which.toString() });
    data.push({ label: "Code", value: event.code.toString() });

    setKeyInfos(data);
    setIsPressed(true);
  };

  return {
    isPressed,
    keyInfos,
  };
};

export { usePrepareHook };
