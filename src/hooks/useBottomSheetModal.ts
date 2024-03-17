import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";

export default function useBottomSheetModal() {
  const ref = useRef<BottomSheetModal>(null);

  function present() {
    ref.current?.present();
  }

  function dismiss() {
    ref.current?.dismiss();
  }

  return { ref, present, dismiss };
}
