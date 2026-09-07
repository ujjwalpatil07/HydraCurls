function WaveDivider() {
     return (
          <div
               className="absolute bottom-[-1px] left-0 w-full pointer-events-none"
               style={{
                    height: 'clamp(70px,9vw,150px)'
               }}
               aria-hidden="true"
          >
               <svg
                    className="block w-full h-full"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
               >
                    <path
                         d="M0 84C149 129 280 148 449 132C643 113 714 31 907 22C1109 13 1223 82 1440 0V160H0V84Z"
                         fill="#00d5fd"
                    />
               </svg>
          </div>
     )
}

export default WaveDivider