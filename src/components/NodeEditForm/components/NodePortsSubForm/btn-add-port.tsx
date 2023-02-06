interface BtnAddPortProps {
  onClick: () => void;
}

function BtnAddPort({ onClick }: BtnAddPortProps) {
  return (
    <span
      className='inline-block leading-4 p-2 w-6 h-6 ml-1 rotate-45 text-gray-500 text-sm cursor-pointer select-none'
      onClick={onClick}
    >
      ⨉
    </span>
  );
}

export default BtnAddPort;
