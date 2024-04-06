import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";

export default function useBottomSheetModal() {
  const ref = useRef<BottomSheetModal>(null);

  function handlePresent() {
    ref.current?.present();
  }

  function handleDismiss() {
    ref.current?.dismiss();
  }

  return { ref, handlePresent, handleDismiss };
}
