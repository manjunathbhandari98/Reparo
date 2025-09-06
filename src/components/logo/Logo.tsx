type ReparoLogoProps = {
  colour?: string; // optional prop
};

const ReparoLogo = ({ colour = "black" }: ReparoLogoProps) => {
  return (
    <div className="flex gap-1 items-center">
      <img src="/wrench.png" alt="Reparo Logo" className="w-8" />

      {/* Apply color safely */}
      <h2
        className={`font-bold text-2xl`}
        style={{ color: colour }}
      >
        Reparo
      </h2>
    </div>
  );
};

export default ReparoLogo;
