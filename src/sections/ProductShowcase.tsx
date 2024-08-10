import Image from "next/image";
import productImage from '@/assets/product-image.png'
import pyramid from '@/assets/pyramid.png';
import tube from '@/assets/tube.png';

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">A more effective way to track your progress</h2>
          <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
            <Image 
              src={productImage} 
              alt="product image" 
              className="mt-10"
            />
            <Image 
              src={pyramid} 
              alt="pyramid image" 
              height={262}
              width={262}
              className="hidden md:block absolute -right-36 -top-32" 
            />
            <Image 
              src={tube} 
              alt="tube image" 
              height={248}
              width={248}
              className="hidden md:block absolute -left-36 bottom-24" 
            />
          </div>
      </div>
    </section>
  );
};
