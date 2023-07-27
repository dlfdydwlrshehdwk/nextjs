// app 안에 layout.js
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <div>
              <div className='logo'>오운완</div>
            </div>
            <div>
              <ul>
                <li>오운완인증</li>
                <li>정보공유</li>
                <li>자유게시판</li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
