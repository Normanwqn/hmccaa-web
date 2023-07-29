import * as React from "react";

const ButtonArrow = () => (
  <svg
    className="w-8"
    viewBox="0 0 21 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        className="fill-Accent-500"
        d="M20.5303 7.03033C20.8232 6.73744 20.8232 6.26256 20.5303 5.96967L15.7574 1.1967C15.4645 0.903806 14.9896 0.903806 14.6967 1.1967C14.4038 1.48959 14.4038 1.96447 14.6967 2.25736L18.9393 6.5L14.6967 10.7426C14.4038 11.0355 14.4038 11.5104 14.6967 11.8033C14.9896 12.0962 15.4645 12.0962 15.7574 11.8033L20.5303 7.03033ZM0 7.25H20V5.75H0V7.25Z"
      />
    </g>
  </svg>
);

const RightAngleTriangle = ({ side }) => (
  <svg
    className="w-20"
    viewBox="0 0 80 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {
      {
        left: (
          <path
            className="fill-Primary-500"
            d="M-5.96046e-07 0V200H80L-5.96046e-07 0Z"
          />
        ),
        right: <path className="fill-Primary-500" d="M80 0V200H0L80 0Z" />,
      }[side]
    }
  </svg>
);

const Arrows = ({ width, viewBox, direction, size }) => (
  <svg
    className={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      {
        {
          north: {
            lg: (
              <path
                className="fill-Primary-500"
                d="M0.694312 86.0415C73.1324 56.8361 73.1324 28.4896 87.6725 0C101.049 28.9191 101.049 57.4087 171.715 86.0415L101.049 71.4388L87.6725 200L73.1324 71.4388L0.694312 86.0415Z"
              />
            ),
            sm: (
              <path
                className="fill-Primary-500"
                d="M0.816197 52.0536C44.279 34.5304 44.279 17.5225 53.0031 0.428711C61.0293 17.7802 61.0293 34.874 103.428 52.0536L61.0293 43.292L53.0031 120.429L44.279 43.292L0.816197 52.0536Z"
              />
            ),
          }[size],
          east: (
            <path
              className="fill-Primary-500"
              d="M113.958 0.408175C143.164 72.8462 171.51 72.8462 200 87.3864C171.081 100.763 142.591 100.763 113.958 171.429L128.561 100.763L-3.81978e-06 87.3864L128.561 72.8462L113.958 0.408175Z"
            />
          ),
          west: (
            <path
              d="M86.0415 171.021C56.8361 98.5825 28.4896 98.5825 1.04207e-06 84.0423C28.9191 70.6654 57.4087 70.6654 86.0415 0.000153614L71.4388 70.6654L200 84.0423L71.4388 98.5825L86.0415 171.021Z"
              className="fill-Primary-500"
            />
          ),
          all: (
            <g>
              <path
                d="M19.1633 34.8453C48.1385 23.1631 48.1385 11.8246 53.9546 0.428711C59.3053 11.9964 59.3053 23.3922 87.5714 34.8453L59.3053 29.0042L53.9546 80.4287L48.1385 29.0042L19.1633 34.8453Z"
                fill="#0047AB"
              />
              <path
                d="M36.0816 138.637C50.5692 132.796 50.5692 127.127 53.4773 121.429C56.1527 127.213 56.1527 132.91 70.2857 138.637L56.1527 135.716L53.4773 161.429L50.5692 135.716L36.0816 138.637Z"
                fill="#0047AB"
              />
              <path
                d="M82.3021 121.633C76.461 107.146 70.7917 107.146 65.0937 104.238C70.8776 101.562 76.5755 101.562 82.3021 87.4291L79.3815 101.562L105.094 104.238L79.3815 107.146L82.3021 121.633Z"
                fill="#0047AB"
              />
              <path
                d="M23.6979 87.5103C29.539 101.998 35.2083 101.998 40.9062 104.906C35.1224 107.581 29.4245 107.581 23.6979 121.714L26.6185 107.581L0.906249 104.906L26.6185 101.998L23.6979 87.5103Z"
                fill="#0047AB"
              />
            </g>
          ),
        }[direction]
      }
    </g>
  </svg>
);

const Chevron = ({ direction }) => (
  <svg
    className="w-8"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d={{ right: "M12 24L20 16L12 8" }[direction]}
        className="stroke-Accent-500 stroke-4 linecap-round linejoin-round"
      />
    </g>
  </svg>
);

const LaptopIcon = () => (
  <svg
    width="101"
    height="100"
    viewBox="0 0 101 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M91.125 65.625H88V28.125C88 25.6386 87.0123 23.254 85.2541 21.4959C83.496 19.7377 81.1114 18.75 78.625 18.75H22.375C19.8886 18.75 17.504 19.7377 15.7459 21.4959C13.9877 23.254 13 25.6386 13 28.125V65.625H9.875C9.0462 65.625 8.25134 65.9542 7.66529 66.5403C7.07924 67.1263 6.75 67.9212 6.75 68.75V75C6.75 77.4864 7.73772 79.871 9.49587 81.6291C11.254 83.3873 13.6386 84.375 16.125 84.375H84.875C87.3614 84.375 89.746 83.3873 91.5041 81.6291C93.2623 79.871 94.25 77.4864 94.25 75V68.75C94.25 67.9212 93.9208 67.1263 93.3347 66.5403C92.7487 65.9542 91.9538 65.625 91.125 65.625ZM19.25 28.125C19.25 27.2962 19.5792 26.5013 20.1653 25.9153C20.7513 25.3292 21.5462 25 22.375 25H78.625C79.4538 25 80.2487 25.3292 80.8347 25.9153C81.4208 26.5013 81.75 27.2962 81.75 28.125V65.625H19.25V28.125ZM88 75C88 75.8288 87.6708 76.6237 87.0847 77.2097C86.4987 77.7958 85.7038 78.125 84.875 78.125H16.125C15.2962 78.125 14.5013 77.7958 13.9153 77.2097C13.3292 76.6237 13 75.8288 13 75V71.875H88V75ZM59.875 34.375C59.875 35.2038 59.5458 35.9987 58.9597 36.5847C58.3737 37.1708 57.5788 37.5 56.75 37.5H44.25C43.4212 37.5 42.6263 37.1708 42.0403 36.5847C41.4542 35.9987 41.125 35.2038 41.125 34.375C41.125 33.5462 41.4542 32.7513 42.0403 32.1653C42.6263 31.5792 43.4212 31.25 44.25 31.25H56.75C57.5788 31.25 58.3737 31.5792 58.9597 32.1653C59.5458 32.7513 59.875 33.5462 59.875 34.375Z"
      fill="black"
    />
  </svg>
);

const MailIcon = ({ className = "scale-100" }) => (
  <svg
    className={className}
    viewBox="0 0 83 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M79 0.75H4C3.1712 0.75 2.37634 1.07924 1.79029 1.66529C1.20424 2.25134 0.875 3.0462 0.875 3.875V57C0.875 58.6576 1.53348 60.2473 2.70558 61.4194C3.87768 62.5915 5.4674 63.25 7.125 63.25H75.875C77.5326 63.25 79.1223 62.5915 80.2944 61.4194C81.4665 60.2473 82.125 58.6576 82.125 57V3.875C82.125 3.0462 81.7958 2.25134 81.2097 1.66529C80.6237 1.07924 79.8288 0.75 79 0.75ZM70.9648 7L41.5 34.0117L12.0352 7H70.9648ZM75.875 57H7.125V10.9805L39.3867 40.5547C39.9633 41.0839 40.7174 41.3776 41.5 41.3776C42.2826 41.3776 43.0367 41.0839 43.6133 40.5547L75.875 10.9805V57Z"
      fill="black"
    />
  </svg>
);

const InstaIcon = ({ className = "scale-100" }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M21.3338 15.9997V15.9984C21.3337 14.7646 
  20.9059 13.5689 20.1231 12.6151C19.3404 11.6613 18.2511 11.0085 17.041 
  10.7678C15.8308 10.527 14.5747 10.7133 13.4865 11.2949C12.3983 11.8765 
  11.5454 12.8174 11.0732 13.9573C10.601 15.0972 10.5386 16.3656 10.8966 
  17.5464C11.2547 18.7271 12.0111 19.7472 13.0369 20.4328C14.0628 21.1184 
  15.2946 21.4271 16.5225 21.3063C17.7505 21.1855 18.8985 20.6427 19.7711 
  19.7704C20.2662 19.2918 20.6598 18.7183 20.9283 18.0842C21.1968 17.4501 
  21.3347 16.7683 21.3338 16.0797L21.3325 15.9957V15.9997H21.3338ZM24.2138 
  15.9997C24.2074 17.891 23.5458 19.7216 22.3417 21.1801C21.1375 22.6385 
  19.4652 23.6346 17.6094 23.9989C15.7535 24.3632 13.8287 24.0731 12.1626 
  23.178C10.4966 22.283 9.19209 20.8383 8.47126 19.0897C7.75042 17.3412 7.65776 
  15.3969 8.20903 13.5877C8.76031 11.7786 9.92145 10.2163 11.4949 9.16689C13.0683
   8.11744 14.9567 7.64563 16.8388 7.83176C18.7209 8.01788 20.4804 8.85044 21.8178
    10.1877C22.5773 10.9247 23.1809 11.8068 23.5927 12.7816C24.0045 13.7565 24.2162
     14.8041 24.2151 15.8624L24.2138 16.0077V16.0011V15.9997ZM26.4631 7.4584V7.46107C26.4633
      7.90528 26.3094 8.3358 26.0277 8.67926C25.746 9.02273 25.3539 9.2579 24.9183 9.34469C24.4826
       9.43148 24.0303 9.36453 23.6385 9.15524C23.2467 8.94596 22.9396 8.60729 22.7695 8.19694C22.5994 
       7.78659 22.5768 7.32995 22.7056 6.90483C22.8345 6.47972 23.1067 6.11243 23.476 5.86554C23.8453 
       5.61866 24.2888 5.50746 24.7308 5.55089C25.1729 5.59433 25.5863 5.7897 25.9004 6.10374C26.2418 
       6.4384 26.4538 6.90507 26.4538 7.42107V7.45974V7.4584H26.4631ZM16.0098 2.87174L14.4165 2.86107C13.4511
        2.85396 12.7182 2.85396 12.2178 2.86107C11.7173 2.86818 11.0471 2.88907 10.2071 2.92374C9.42712 2.9504
         8.68712 3.02774 7.96312 3.1504L8.06045 3.13707C7.49378 3.2304 6.99112 3.36374 6.50978 3.54107L6.56712
          3.5224C5.88713 3.79576 5.26875 4.20251 4.74847 4.71866C4.22819 5.23482 3.81654 5.84994 3.53778
           6.52774L3.52445 6.56374C3.35331 7.03216 3.22653 7.51561 3.14578 8.00774L3.13912 8.05707C3.02053 
           8.75767 2.9497 9.46553 2.92712 10.1757L2.92578 10.2037C2.89112 11.0446 2.87023 11.7148 2.86312 
           12.2144C2.85601 12.714 2.85601 13.4468 2.86312 14.4131C2.87023 15.3793 2.87378 15.9104 2.87378 
           16.0064C2.87378 16.1024 2.87023 16.6335 2.86312 17.5997C2.85601 18.566 2.85601 19.2988 2.86312 
           19.7984C2.87023 20.298 2.89112 20.9682 2.92578 21.8091C2.95245 22.5891 3.02978 23.3291 3.15245 
           24.0531L3.13912 23.9557C3.23245 24.5224 3.36578 25.0251 3.54312 25.5064L3.52445 25.4491C3.7978 
           26.1291 4.20455 26.7474 4.72071 27.2677C5.23687 27.788 5.85199 28.1996 6.52978 28.4784L6.56578 
           28.4917C6.98978 28.6504 7.49245 28.7837 8.00978 28.8704L8.05912 28.8771C8.68445 28.9864 9.42445 
           29.0637 10.1765 29.0891L10.2045 29.0904C11.0453 29.1251 11.7156 29.146 12.2151 29.1531C12.7147 
           29.1602 13.4476 29.1602 14.4138 29.1531L15.9978 29.1211L17.5911 29.1317C18.5564 29.1388 19.2893
            29.1388 19.7898 29.1317C20.2902 29.1246 20.9605 29.1037 21.8005 29.0691C22.5805 29.0424 23.3205
             28.9651 24.0445 28.8424L23.9471 28.8557C24.5138 28.7624 25.0164 28.6291 25.4978 28.4517L25.4405
              28.4704C26.1204 28.1971 26.7388 27.7903 27.2591 27.2741C27.7794 26.758 28.191 26.1429 28.4698
               25.4651L28.4831 25.4291C28.6418 25.0051 28.7751 24.5024 28.8618 23.9851L28.8685 23.9357C28.9778
                23.3104 29.0551 22.5704 29.0805 21.8184L29.0818 21.7904C29.1165 20.9495 29.1373 20.2793 29.1445
                 19.7797C29.1516 19.2802 29.1516 18.5473 29.1445 17.5811C29.1373 16.6148 29.1338 16.0837 29.1338 
                 15.9877C29.1338 15.8917 29.1373 15.3606 29.1445 14.3944C29.1516 13.4282 29.1516 12.6953 29.1445 
                 12.1957C29.1373 11.6962 29.1165 11.026 29.0818 10.1851C29.0551 9.40507 28.9778 8.66507 28.8551 
                 7.94107L28.8685 8.0384C28.7839 7.50974 28.6486 6.99046 28.4645 6.48774L28.4831 6.54507C28.2098 
                 5.86508 27.803 5.24671 27.2869 4.72642C26.7707 4.20614 26.1556 3.79449 25.4778 3.51574L25.4418 3.5024C24.9734 3.33126 
                 24.4899 3.20448 23.9978 3.12374L23.9485 3.11707C23.2483 2.99854 22.5409 2.92771 21.8311 2.90507L21.8031 2.90374C20.9622 
                 2.86907 20.292 2.84818 19.7924 2.84107C19.2929 2.83396 18.56 2.83396 17.5938 2.84107L16.0098 2.87174ZM32.0005 15.9997C32.0005 19.1802 31.9649 21.3815 31.8938 22.6037C31.9568 23.8424 31.7589 25.0804 31.3128 26.2377C30.8668 27.395 30.1826 28.4456 29.3045 29.3215C28.4265 30.1974 27.3742 30.8791 26.2158 31.3223C25.0575 31.7655 23.8189 31.9604 22.5805 31.8944L22.6018 31.8957C21.3796 31.9668 19.1782 32.0024 15.9978 32.0024C12.8173 32.0024 10.616 31.9668 9.39378 31.8957C8.15514 31.9588 6.91708 31.7608 5.75982 31.3148C4.60256 30.8687 3.55193 30.1845 2.67601 29.3065C1.8001 28.4284 1.11844 27.3761 0.675211 26.2178C0.231983 25.0594 0.0370744 23.8209 0.103117 22.5824L0.101784 22.6037C0.0306727 21.3815 -0.00488281 19.1802 -0.00488281 15.9997C-0.00488281 12.8193 0.0306727 10.618 0.101784 9.39574C0.0387591 8.15709 0.236685 6.91903 0.682734 5.76177C1.12878 4.60451 1.81301 3.55388 2.69106 2.67797C3.56911 1.80205 4.62141 1.12039 5.77975 0.677164C6.93809 0.233936 8.17663 0.0390275 9.41512 0.10507L9.39378 0.103737C10.616 0.0326259 12.8173 -0.00292969 15.9978 -0.00292969C19.1782 -0.00292969 21.3796 0.0326259 22.6018 0.103737C23.8404 0.0407122 25.0785 0.238638 26.2357 0.684688C27.393 1.13074 28.4436 1.81496 29.3196 2.69301C30.1955 3.57106 30.8771 4.62336 31.3204 5.7817C31.7636 6.94004 31.9585 8.17859 31.8925 9.41707L31.8938 9.39574C31.9649 10.6171 32.0005 12.8184 32.0005 15.9997Z"
      fill="white"
    />
  </svg>
);

export {
  ButtonArrow,
  RightAngleTriangle,
  Arrows,
  Chevron,
  LaptopIcon,
  MailIcon,
  InstaIcon,
};
