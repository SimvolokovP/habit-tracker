import { hapticFeedback } from "@telegram-apps/sdk-react";

type THapticStyle = "heavy" | "light" | "medium" | "rigid" | "soft";

export const handleHapticFeedback = (
  callback: () => void,
  hapticStyle: THapticStyle
) => {
  if (hapticFeedback.impactOccurred.isAvailable()) {
    hapticFeedback.impactOccurred(hapticStyle);
  }
  callback();
};
