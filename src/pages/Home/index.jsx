import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { Header } from "./Header"
import { ContainerHome } from "./style"

export const Home = () => {
    
      return (
        <>
          <ContainerHome>
              <Header/>
              <BannerMaster/>
              <BannersSecondary/>
          </ContainerHome>
        </>
      )
  }