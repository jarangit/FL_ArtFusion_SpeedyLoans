import './App.css';
import LikeIcon from './components/icons/like';
import Banner from './components/layout/Banner'
import UserIcon from './components/icons/user'
import ClockIcon from './components/icons/clock';
import CupIcon from './components/icons/cup';
function App() {
  return (
    <>
      <Banner />
      {/* section 1 */}
      <div className='grid grid-cols-2 myContainer !my-16 items-center gap-10'>
        <div>
          <img src="/image/section1.png" alt="" />
        </div>
        <div className='p-3'>
          <div>
            <div className='text-3xl font-semibold text-black'>Advantages</div>
            <div className='text-black font-light leading-7'>Just fill out our smart request form, get connected with a lender and enjoy your extra cash!</div>

            <div className='grid grid-cols-2 gap-3 mt-6'>
              <div className='flex w-[100%] p-4 gap-3 items-center rounded-sm bg-gray-light font-light'>
                <div>
                  {<LikeIcon color="#5a47cc" w={25} />}
                </div>
                <div>Simple</div>
              </div>
              <div className='flex w-[100%] p-4 gap-3 items-center rounded-sm bg-gray-light font-light'>
                <div>
                  {<UserIcon color="#5a47cc" w={25} />}
                </div>
                <div>Secure</div>
              </div>
              <div className='flex w-[100%] p-4 gap-3 items-center rounded-sm bg-gray-light font-light'>
                <div>
                  {<ClockIcon color="#5a47cc" w={25} />}
                </div>
                <div>Fast</div>
              </div>
              <div className='flex w-[100%] p-4 gap-3 items-center rounded-sm bg-gray-light font-light'>
                <div>
                  {<CupIcon color="#5a47cc" w={25} />}
                </div>
                <div>Affordable</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
