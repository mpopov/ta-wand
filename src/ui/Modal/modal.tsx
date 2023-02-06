interface ModalProps {
  children: JSX.Element;
  className?: string;
  onClose?: () => void;
}

function Modal({ children, className, onClose }: ModalProps) {
  return (
    <div
      className={`absolute inset-y-5 right-8 w-80 p-5 border rounded drop-shadow-sm break-words overflow-y-auto ${
        className || ''
      }`}
    >
      {onClose && (
        <span onClick={onClose} className='p-2 absolute right-0 top-0 leading-3 cursor-pointer text-gray-600'>
          ⨉
        </span>
      )}
      {children}
    </div>
  );
}

export default Modal;
