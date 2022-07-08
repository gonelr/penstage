import Image from "next/image";
import DesignerPic from "../public/designerpic.png";
const about = () => {
  return (
    <div className="mx-auto flex justify-center flex-col space-y-5 ">
      <Image src={DesignerPic} objectFit="contain" alt="designer" />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold">
          We are a Miami based creative agency
        </h1>
        <p>
          We are a Miami based creative agency that specializes in creating
          unique, beautiful, and functional websites. We design and build
          websites that are user friendly, and easy to use. We also create
          responsive websites that are optimized for mobile devices. We do
          graphic design for works for print, and we also create logos and
          graphics for our clients. We do all of this for you, so you can focus
          on your business. we do social media marketing for you, stories and
          campaigns to help you grow businesses.
        </p>
      </div>
    </div>
  );
};

export default about;
