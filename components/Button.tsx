interface Props {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return (
    <button class="bg-[#D35F8C] hover:bg-[#D35F8C]/90 px-5 py-4 text-white text-xl rounded-md shadow-[5px_5px_0_0_#001514] transition-all duration-300 rounded-mplus-1c font-normal">
      {children}
    </button>
  );
}
