import FooterPage from "../footer/FooterPage"
import NavbarPage from "../navbar/NavbarPage"


const LayoutPage = ({children}) => {
  return (
    <>
    <NavbarPage />
    {children}
    <FooterPage />
    </>
  )
}

export default LayoutPage