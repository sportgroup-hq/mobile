import { Button, Dialog, Portal, Text } from "react-native-paper";

interface ConfirmDialogProps {
  title: string;
  description: string;
  confirmButtonLabel: string;
  isConfirmButtonLoading?: boolean;
  isConfirmButtonDisabled?: boolean;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog(props: ConfirmDialogProps) {
  const {
    title,
    description,
    confirmButtonLabel,
    isConfirmButtonLoading,
    isConfirmButtonDisabled,
    isOpen,
    onClose,
    onConfirm,
  } = props;

  return (
    <Portal>
      <Dialog visible={isOpen} onDismiss={onClose}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{description}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onClose}>Скасувати</Button>
          <Button
            onPress={onConfirm}
            loading={isConfirmButtonLoading}
            disabled={isConfirmButtonDisabled}
          >
            {confirmButtonLabel}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
