import MemoLogo from "./assets/Logo";

const Footer = () => {
  return (
    <div>
      <footer className=" text-sm text-center py-8">
        <div className="flex justify-center items-center ">
          <div> 2022 &copy;</div>
          <div>
            <MemoLogo height="30" />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
