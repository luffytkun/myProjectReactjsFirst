import { Link } from "react-router-dom";
import { images } from "~/assets/images";

function Header() {
  const listHeader = ["Home", "About", "Contact"];
  return (
    <>
      <div className="container mx-auto  py-4 border-b border-black border-solid outline-1 flex justify-between items-center">
        <div className="ml-4">
          <a href="!#" className="flex justify-between text-center">
            <img
              src={images.logo}
              alt="Tukun"
              className="w-12 rounded-full mr-2"
            />
            <span className="mt-1 text-cyan-500 font-bold text-xl"> TKun</span>
          </a>
        </div>
        <div className="box-border flex flex-row ml-12 justify-center">
          {listHeader.map((item, index) => {
            return (
              <Link to={`/${item}`} key={index} className="block ">
                <div className="px-4">
                  <p className="text-black text-lg  hover:opacity-40 font-bold  ">
                    {item}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className=" font-bold flex  items-center">
          <a
            href="!#"
            title="Đăng nhập"
            className="mr-4 hover:text-red-600 cursor-pointer"
          >
            <span>Đăng nhập</span>
          </a>
          <a
            href="!#"
            title="Đăng ký"
            className=" hover:bg-red-500 rounded-xl hover:text-white cursor-pointer inline-block px-4 py-2 border-2 "
          >
            <span>Đăng ký</span>
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;
