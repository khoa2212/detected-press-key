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
    handlePressKey();
  }, []);

  const handlePressKey = () => {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      const data: IKeyInfo[] = [];
      data.push({ label: "Key", value: event.key });
      data.push({ label: "Location", value: event.location.toString() });
      data.push({ label: "Which", value: event.which.toString() });
      data.push({ label: "Code", value: event.keyCode.toString() });

      setKeyInfos(keyInfos);
      setIsPressed(true);
    });
  };

  return {
    isPressed,
    keyInfos,
  };
};

export { usePrepareHook };
