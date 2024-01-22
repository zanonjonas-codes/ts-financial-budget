import { Header } from '@/components/layout/Header'
import { MainContent } from '@/components/layout/MainContent'
// import { Menu } from '@/components/Menu'
import { Footer } from '@/components/layout/Footer'

export default function Home(): JSX.Element {
  return (
    <main>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">
          {/* <Menu>The Menu</Menu> */}
          <MainContent className="flex-1 bg-indigo-100">
            The Main Content
          </MainContent>
        </div>
        <Footer className="">The Footer</Footer>
      </div>
    </main>
  )
}
