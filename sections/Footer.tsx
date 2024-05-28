interface Props {
  warning: string;
  address: string;
  newsletter: string;
}

const Text = ({ children }: { children: React.ReactNode }) => (
  <p class="rounded-mplus-1c font-normal text-white text-xs">{children}</p>
);

export default function Footer({ warning, address, newsletter }: Props) {
  return (
    <footer class="max-container-auto bg-[#00664F] mt-10">
      <div class="max-w-[470px] mx-auto flex flex-col items-center justify-center gap-5 py-8">
        <Text>{warning}</Text>
        <Text>{address}</Text>
        <Text>{newsletter}</Text>
      </div>
    </footer>
  );
}
