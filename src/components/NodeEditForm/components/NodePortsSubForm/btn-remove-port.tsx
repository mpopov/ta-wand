interface BtnRemovePortProps {
  onClick: () => void;
}

function BtnRemovePort({ onClick }: BtnRemovePortProps) {
  return (
    <span className='inline-block leading-4 p-2 w-6 h-6 text-gray-500 text-sm cursor-pointer select-none' onClick={onClick}>
      ⨉
    </span>
  );
}

export default BtnRemovePort;
