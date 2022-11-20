import React from 'react'
import { LogoIcon } from '../icons'

const Footer = () => {
  return (
    <div className='bg-gray text-black-light p-3 px-6'>
      <div className='myContainer pb-6 pt-16 text-sm leading-6'>
        <p>
          Disclaimer: Speedyloans-usa is not an offer or solicitation to lend. We do not make any loan or credit decisions and are not representatives, brokers or agents of any lender. Participating lenders offer loans from $200 up to $5,000. Not all lenders can offer you amounts up to $5,000. Our service is not available in all states. Submission of a request through this website does not guarantee that you will receive a loan offer or an offer you’ll be satisfied with. Funds transfer time may vary depending on your lender and/or financial institution. If you have any questions about your loan, please contact your lеndеr directly. Credit checks may be performed with the three reporting credit bureaus: Experian, Equifax, and TransUnion. Submission of a request means you are authorizing the lenders to check your creditworthiness and your personal details.
        </p>
        <p>
          This service is not a solicitation for loan products and does not constitute a loan offer for any loan products that are prohibited by state law. This service is void where prohibited.
        </p>
        <p>
          State Availability: Not all lenders from our system operate in all US states. Residents of some US states may not be eligible for loan products in accordance with their legislation. By selecting your State at the start of our loan offer process, you shall be informed of any limitations regarding obtaining a loan if you reside in individual US states.
          This website collects personal information and transfers it to its third-party partners.
        </p>
        <p>
          The website contains links to third-party websites. Accessing them may result in a commission.
          Please note that personal loans should not be treated as financial cure-it-all. If you have major budget difficulties, consult specialists first.
        </p>
      </div>

      <div className=' mt-10 border-t border-border'>
        <div className='flex gap-3 myContainer py-6 justify-between items-center flex-wrap text-center'>
          <div className='flex items-center gap-3 w-full justify-center  text-center lg:w-auto'>
            <div>
              <LogoIcon
                w={50}
                color="#5a47cc"
              />
            </div>
            <div className='text-3xl'>speedyloans-usa</div>
          </div>

          <div className='text-center w-full lg:w-auto'>
            Email:contact@speedyloans-usa.com
          </div>

          <div>
            Copyright © 2022 speedyloans-usa.com All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer