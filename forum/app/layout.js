import Link from 'next/link'
import './globals.css'
import LogInbtn from './LogInbtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogOutBtn from './LogOutBtn'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  // console.log(session)
  return (
    <html lang="ko">
      <body
      //  className={inter.className}
       >
        <header>
          <nav className='nav'>
            <div className='logo'>
              <Link href='/'>
                <img src='../images/logo.png'/>
              </Link>
            
            </div>
            <div>
              <ul>
                <li>
                  <Link href='/list'>글목록</Link>
                </li>
                <li>
                  <Link href='/write'>글쓰기</Link>
                </li>
                {
                session ? 
                <>
                  <li>
                      <LogOutBtn />
                  </li>
                  <li>
                    <Link href='/mypage'>마이페이지</Link>
                  </li>
                </>
                :
                <>
                <li>
                  <LogInbtn />
                </li>
                <li>
                <Link href='/register'>회원가입</Link>
                </li>
                </>

                }
              </ul>
            </div>
          </nav>
        </header>


        
        {children}</body>
    </html>
  )
}
