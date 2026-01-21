import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children } : { children : React.ReactNode}) => {
  return (
    <main className='auth-layout'>
        <section className='auth-left-section scrollbar-hide-default border-5 border-blue-500'>
            <Link href="/" className="auth-logo border-4 border-red-500"> 
                <Image src="assets/icons/logo.svg" alt="Signalist logo" width = {140} height = {32} className="h-8 w-auto"/>
            </Link>
            <div className='pb-6 lg:pb-8 flex-1 border-4 border-green-500'>
                {children}
            </div>
        </section>
        <section className='auth-right-section border-5 border-purple-500'>
            <div className='z-10 relative lg:mt-4 lg:mb-16'>
                <blockquote className='auth-blockquote'>
                    The comments someone made about the app and its functionalities. A very long message could fit here...
                </blockquote>
                <div className='flex items-center justify-between'>
                    <div>
                        <cite className='auth-testimonial-author'>Fabi</cite>
                        <p className='max-md:text-xs text-gray-500'>Expert Investor</p>
                    </div>
                    <div className='flex items-center gap-0.5'>
                        { [1,2,3,4,5].map((star) => (<Image src="/assets/icons/star.svg" alt="Star" key={star} width={20} height={20} className='w-5 h-5'/>)) }
                    </div>
                </div>
            </div>
            <div className='flex-1 relative'>
                <Image src = "/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className='auth-dashboard-preview absolute top-0'/>
            </div>
        </section>
    </main>
  )
}

export default Layout