import { Modal } from 'antd';

export default function ModalLayout({
    children,
    width = '',
    height = '',
    setIsOpen,
    isOpen = false,
    closeIcon = false,
    outSideClick = true,
    onCancel = () => { },
}) {
    return (
        <Modal
            centered
            width={width}
            height={height}
            closeIcon={closeIcon}
            footer={null}
            open={isOpen}
            onOk={() => setIsOpen(false)}
            onCancel={outSideClick ? () => setIsOpen(false) : () => onCancel()}
        >
            {children}
        </Modal>
    );
}