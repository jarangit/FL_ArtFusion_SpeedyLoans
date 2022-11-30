import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoanForm from '../form/loanForm'
import { UserIcon } from '../icons'
import DataIcon from '../icons/data'
import LogoIcon from '../icons/logo'
import {IoIosLock} from 'react-icons/io'

const Banner = () => {
  const bannerImage = '/image/bg_banner.jpeg'
  const [dataForm, setDataForm] = useState({
    email: "",
    amount: "",
    ssn: ""
  })
  const navigate = useNavigate();
  const goToPosts = () => {
    navigate({
      pathname: '/form-loan',
      search: `apply?manual=1&=&requested_amount=${dataForm.amount}&email=${dataForm.email}&last4ssn=${dataForm.ssn}`,
    });
    window.location.reload();
  }
  const onChangeDataForm = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
    console.log(dataForm)
  }
  return (
    <div className={`w-full h-[900px] bg-cover relative`}
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
      <div className='w-full absolute h-[950px] lg:h-[900px] bg-cover' style={{ background: `linear-gradient(rgba(90,71,204,.75),#5a47cc)` }} />
      <div className='myContainer  !my-auto h-[900px] flex items-center overflow-hidden'>
        <div className='absolute grid grid-cols-2 w-full items-center gap-6  max-w-[1300px]'>
          <div className=' col-span-2 lg:col-span-1 p-6 '>
            <div className='mx-auto w-fit'>
              <div className='flex gap-6 items-center'>
                <div>
                  <LogoIcon color="#ffff" w={70} />
                </div>
                <div className='text-3xl text-white opacity-70'>
                  speedyloans-usa
                </div>
              </div>
              <div className=' text-2xl text-center lg:text-left mt-3 lg:text-5xl font-extrabold text-white max-w-[500px]'>
                Get Your Personal Loan Up To $5000
              </div>
            </div>
          </div>

          <div className=' col-span-2 lg:col-span-1  lg:block '>
            <div className='w-full justify-center lg:justify-start flex mx-auto px-3'>
              <LoanForm
                onChangeDataForm={onChangeDataForm}
                goToPosts={goToPosts}
                dataForm={dataForm}
              />
            </div>
            <div className='w-full lg:w-[50%] mx-auto flex flex-wrap justify-center gap-3 items-center mt-6 text-white opacity-90 text-sm'>
              <div className='flex gap-2 items-center w-1/2'>
                <div>
                  <DataIcon
                    color={"#FFFF"}
                    w={25}
                  />
                </div>
                <div>
                  <span className='font-bold mr-1'>
                    Data
                  </span>
                  protected</div>
              </div>
              <div className='flex gap-2 items-center'>
                <div>
                  <IoIosLock
                    color={"#FFFF"}
                    size={25}
                  />
                </div>
                <div>
                  <span className='font-bold mr-1'>
                    Data
                  </span>
                  protected</div>
              </div>
              <div className='flex gap-2 items-center'>
                <div>
                  <UserIcon
                    color={"#FFFF"}
                    w={25}
                  />
                </div>
                <div>
                  <span className='font-bold mr-1'>
                    Data
                  </span>
                  protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner