import {Link} from "react-router-dom";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">
      <div className="max_padd_container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* <Link to="/" className="mb-10 bold-20"></Link> */}
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=>(
                  <Link to="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p>{link.label}:</p><p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link)=>(
                    <Link to="https://www.linkedin.com/company/branding-displays/" key={link}><img src={link} alt="socialIcon" height={22} width={22}/></Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"></div>
        <p className="text-center regular-14 text-gray-30"> 2024 Branding Displays | All Rights Reserved.</p>
      </div>
    </footer>
  )
}

const FooterColumn =({title,children}) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer