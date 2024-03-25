import { useQuery } from "@tanstack/react-query";
import map from "../assets/photos/map.png";
import axios from "axios";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { data } = useQuery({
    queryKey: ["basicData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/data/info-get"
        );

        return response.data?.data;
      } catch (error) {
        // Handle errors here
        throw new Error("Network response was not ok");
      }
    },
  });

  const { data: sData } = useQuery({
    queryKey: ["socialData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/data/social-get"
        );

        return response.data?.data;
      } catch (error) {
        // Handle errors here
        throw new Error("Network response was not ok");
      }
    },
  });
  return (
    <>
      <footer className="px-4 bg-black text-white font-ubuntu w-auto max-w-[1920px] mx-auto">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3 md:mr-[110px]">
            <a rel="noopener noreferrer" href="#" className="">
              <div className="w-auto">
                <img
                  src={data?.logo}
                  alt=""
                  className="w-fit h-8 md:h-[58px]"
                />
              </div>
              <span className="block self-center text-sm leading-[25px] font-ubuntu mt-5">
                {data?.details}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 text-sm gap-x-[110px] gap-y-8 lg:w-2/3 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                Sales Office
              </h3>
              <div className="space-y-[25px]">
                <div>
                  <a rel="noopener noreferrer" href="#">
                    {data?.address}
                  </a>
                </div>
                <div className="flex">
                  <svg
                    width="41"
                    height="42"
                    viewBox="0 0 41 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mr-2"
                  >
                    <rect
                      x="0.5"
                      y="0.96875"
                      width="40"
                      height="40"
                      rx="20"
                      stroke="white"
                    />
                    <path
                      d="M25.8351 23.5475C25.3428 23.1034 24.6945 22.8727 24.0324 22.9057C23.3702 22.9387 22.7482 23.2329 22.3026 23.7238L21.7588 24.3275C21.5279 24.5807 21.3528 24.8797 21.2451 25.205L21.1963 25.3513L21.0538 25.295C18.6346 24.3361 16.6561 22.5152 15.5001 20.1838L15.4251 20.03L15.5901 19.9813C16.0227 19.8482 16.4114 19.6007 16.7151 19.265L17.2588 18.665C17.7033 18.1727 17.9341 17.5239 17.9003 16.8615C17.8666 16.199 17.5711 15.5771 17.0788 15.1325L16.1638 14.3038C15.9205 14.083 15.636 13.9123 15.3267 13.8017C15.0173 13.691 14.6891 13.6425 14.361 13.6588C14.0328 13.6752 13.7111 13.7562 13.4143 13.8971C13.1175 14.038 12.8514 14.2361 12.6313 14.48L12.0876 15.08C12.0152 15.1587 11.9488 15.2427 11.8888 15.3312L11.8626 15.3612C11.3488 15.8 10.9138 16.8613 11.1651 18.1775C11.7428 21.1535 13.2693 23.8622 15.5158 25.8978C17.7623 27.9334 20.6079 29.1863 23.6263 29.4688C24.3718 29.5524 25.1245 29.3961 25.7751 29.0225C25.9996 28.8836 26.2018 28.7117 26.3751 28.5125L26.9188 27.9088C27.3629 27.417 27.5943 26.7695 27.5627 26.1077C27.5311 25.4459 27.239 24.8234 26.7501 24.3763L25.8351 23.5475ZM20.3413 11.4688C20.1947 11.4805 20.058 11.547 19.9582 11.6551C19.8585 11.7632 19.8031 11.9048 19.8031 12.0519C19.8031 12.1989 19.8585 12.3406 19.9582 12.4486C20.058 12.5567 20.1947 12.6232 20.3413 12.635C22.306 12.637 24.1896 13.4183 25.5788 14.8075C26.968 16.1967 27.7493 18.0804 27.7513 20.045C27.7631 20.1916 27.8296 20.3284 27.9377 20.4281C28.0457 20.5278 28.1874 20.5832 28.3344 20.5832C28.4815 20.5832 28.6231 20.5278 28.7312 20.4281C28.8393 20.3284 28.9058 20.1916 28.9176 20.045C28.9146 17.7714 28.0101 15.5917 26.4023 13.984C24.7946 12.3762 22.615 11.4717 20.3413 11.4688Z"
                      fill="white"
                    />
                    <path
                      d="M24.8973 20.1385C24.909 20.2851 24.9756 20.4219 25.0836 20.5216C25.1917 20.6213 25.3333 20.6767 25.4804 20.6767C25.6274 20.6767 25.7691 20.6213 25.8772 20.5216C25.9852 20.4219 26.0518 20.2851 26.0635 20.1385C26.0615 18.5966 25.4481 17.1183 24.3578 16.028C23.2675 14.9377 21.7892 14.3243 20.2473 14.3223C20.1709 14.3223 20.0954 14.3373 20.0248 14.3665C19.9543 14.3957 19.8902 14.4385 19.8363 14.4925C19.7823 14.5465 19.7395 14.6106 19.7103 14.6811C19.6811 14.7516 19.666 14.8272 19.666 14.9035C19.666 14.9798 19.6811 15.0554 19.7103 15.126C19.7395 15.1965 19.7823 15.2605 19.8363 15.3145C19.8902 15.3685 19.9543 15.4113 20.0248 15.4405C20.0954 15.4697 20.1709 15.4848 20.2473 15.4848C21.4806 15.4868 22.6627 15.9778 23.5344 16.8502C24.4062 17.7227 24.8963 18.9052 24.8973 20.1385Z"
                      fill="white"
                    />
                  </svg>

                  <div>
                    <h1 className="text-[#CDCDCD] uppercase leading-[26px]">
                      call us 24/7
                    </h1>
                    <h2 className="font-[500] text-[18px] leading-[26px]">
                      +880244806615
                    </h2>
                    <h2 className="font-[500] text-[18px] leading-[26px]">
                      +8801332533454
                    </h2>
                    <h2 className="font-[500] text-[18px] leading-[26px]">
                      +8801332533442
                    </h2>
                    <h2 className="font-[500] text-[18px] leading-[26px]">
                      +8801332533441
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                Our Office
              </h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/sLF5BzkBKLbKfVA5A"
              >
                <img src={map} alt="" />
              </a>
            </div>
            <div className="space-y-3">
              <h3 className="text-[18px] font-[600] leading-[28px]">
                Follow Us On
              </h3>
              <div className="flex justify-start space-x-3">
                {/* facebook  */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={sData?.facebook}
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.0449" r="12" fill="#A8223B" />
                    <path
                      d="M13.808 7.32985H15.312V4.78585C14.5838 4.71013 13.8521 4.67274 13.12 4.67385C10.944 4.67385 9.456 6.00185 9.456 8.43385V10.5298H7V13.3778H9.456V20.6738H12.4V13.3778H14.848L15.216 10.5298H12.4V8.71385C12.4 7.87385 12.624 7.32985 13.808 7.32985Z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* twitter  */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={sData?.twitter}
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.3945" r="12" fill="#A8223B" />
                    <path
                      d="M20 7.83221C19.4363 8.07256 18.8401 8.23144 18.23 8.30392C18.8736 7.92605 19.356 7.3316 19.5875 6.63083C18.9827 6.98466 18.3206 7.23395 17.63 7.36787C17.1684 6.87595 16.5537 6.5485 15.8824 6.43688C15.211 6.32525 14.5209 6.43578 13.9203 6.75111C13.3198 7.06644 12.8427 7.56874 12.5639 8.17924C12.2852 8.78974 12.2205 9.4739 12.38 10.1244C11.1571 10.0636 9.96083 9.75071 8.86899 9.20596C7.77715 8.66122 6.81413 7.89685 6.0425 6.9625C5.77185 7.42696 5.62964 7.95296 5.63 8.48818C5.62904 8.98523 5.75316 9.4748 5.99132 9.91331C6.22947 10.3518 6.57426 10.7256 6.995 11.0015C6.50598 10.9884 6.02741 10.8595 5.6 10.6256V10.6625C5.60367 11.3589 5.852 12.0327 6.30299 12.5699C6.75398 13.1071 7.37994 13.4748 8.075 13.6106C7.80744 13.6907 7.52966 13.7329 7.25 13.7359C7.05642 13.7337 6.86332 13.7165 6.6725 13.6844C6.87043 14.2834 7.25347 14.807 7.76831 15.1821C8.28315 15.5573 8.90418 15.7654 9.545 15.7776C8.4629 16.6143 7.12691 17.071 5.75 17.0748C5.4993 17.0756 5.2488 17.0608 5 17.0305C6.40582 17.9226 8.04411 18.3961 9.7175 18.3941C10.8723 18.4059 12.0179 18.1914 13.0873 17.7632C14.1568 17.335 15.1288 16.7017 15.9464 15.9003C16.764 15.0988 17.411 14.1453 17.8494 13.0954C18.2879 12.0455 18.509 10.9202 18.5 9.78538C18.5 9.66008 18.5 9.52742 18.5 9.39475C19.0885 8.96344 19.5961 8.43469 20 7.83221Z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* linkedin  */}
                <a
                  rel="noopener noreferrer"
                  href={sData?.linkedin}
                  title="Instagram"
                  className="flex items-center p-1"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.0449" r="12" fill="#A8223B" />
                    <path
                      d="M19 19.0445V13.6287C19 10.7267 17.5195 9.37638 15.5455 9.37638C13.9526 9.37638 13.2386 10.2932 12.8409 10.9368V9.59838H9.83963C9.87944 10.485 9.83963 19.0445 9.83963 19.0445H12.8409V13.7692C12.8409 13.4877 12.8601 13.2053 12.9398 13.0039C13.1563 12.4395 13.6503 11.8554 14.4789 11.8554C15.5652 11.8554 15.9992 12.7214 15.9992 13.9912V19.0449L19 19.0445ZM6.67781 8.30896C7.72388 8.30896 8.37619 7.58301 8.37619 6.67626C8.35694 5.74982 7.72431 5.04492 6.69794 5.04492C5.67156 5.04492 5 5.74936 5 6.67626C5 7.58301 5.65144 8.30896 6.659 8.30896H6.67781ZM8.17844 19.0445V9.59838H5.17763V19.0445H8.17844Z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* whatsApp  */}
                <a
                  rel="noopener noreferrer"
                  href={sData?.whatsapp}
                  title="whatsApp"
                  className="flex items-center p-1"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.3945" r="12" fill="#A8223B" />
                    <g clipPath="url(#clip0_889_6825)">
                      <path
                        d="M12.002 5.07227H11.998C7.58701 5.07227 4.00001 8.44921 4.00001 12.6017C3.99727 14.1876 4.53066 15.7332 5.52301 17.0149L4.52601 19.812L7.60101 18.8869C8.90538 19.7013 10.4367 20.1342 12.002 20.1311C16.413 20.1311 20 16.7532 20 12.6017C20 8.45015 16.413 5.07227 12.002 5.07227Z"
                        fill="white"
                      />
                      <path
                        d="M16.305 16.0266C16.112 16.5395 15.346 16.965 14.735 17.0892C14.317 17.1729 13.771 17.2398 11.933 16.5226C9.582 15.6059 8.068 13.3574 7.95 13.2115C7.837 13.0657 7 12.0209 7 10.9405C7 9.86001 7.583 9.33389 7.818 9.10801C8.011 8.9226 8.33 8.83789 8.636 8.83789C8.735 8.83789 8.824 8.8426 8.904 8.84636C9.139 8.85577 9.257 8.86895 9.412 9.21813C9.605 9.65577 10.075 10.7362 10.131 10.8473C10.188 10.9584 10.245 11.1089 10.165 11.2548C10.09 11.4054 10.024 11.4722 9.906 11.6002C9.788 11.7282 9.676 11.8261 9.558 11.9635C9.45 12.0831 9.328 12.2111 9.464 12.4322C9.6 12.6487 10.07 13.3706 10.762 13.9504C11.655 14.6986 12.379 14.9377 12.638 15.0393C12.831 15.1146 13.061 15.0967 13.202 14.9555C13.381 14.7739 13.602 14.4727 13.827 14.1762C13.987 13.9635 14.189 13.9372 14.401 14.0125C14.617 14.0831 15.76 14.6148 15.995 14.7249C16.23 14.836 16.385 14.8887 16.442 14.9819C16.498 15.0751 16.498 15.5127 16.305 16.0266Z"
                        fill="#A8223B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_889_6825">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(4 4.74414)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <hr className="opacity-[50%]" />
        </div>
        <div className="py-6 text-sm text-center text-white">
          © {currentYear} DG Bangla. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
