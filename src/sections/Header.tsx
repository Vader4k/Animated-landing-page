import ArrowRight from '@/assets/arrow-right.svg';

export const Header = () => {
  return (
    <nav>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <p>Get started for free</p>
        <ArrowRight />
      </div>
    </nav>
  )
};
