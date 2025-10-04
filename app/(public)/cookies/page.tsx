import { ASSETS_URL } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function CookiesPage() {
  return (
    <section className='relative bg-backdrop pb-10 px-2'>
      <aside className='relative bg-white pt-40 md:pt-48 px-4 -mx-2'>
        <Image src={ASSETS_URL['group_content']} alt="group_content" className="object-cover object-center absolute h-full w-full top-0 left-0" />
        <div className="z-10 bg-primary opacity-80 absolute h-full w-full top-0 left-0"></div>
      </aside>
      <article className="w-full md:max-w-3xl my-10 mx-auto bg-white rounded-xs overflow-hidden shadow-[0px_12px_15px_0px_#8c98a41a]">
        <div className="p-4 pt-7 pb-6 bg-dark text-white text-center">
          <h6 className="text-xs font-semibold uppercase tracking-[3.5px] px-8 pb-2 border-b border-slate-100/20 w-max mx-auto">Read Our</h6>
          <h4 className="tracking-wide text-2xl md:text-2xl font-semibold">Cookie Usage Policy</h4>
        </div>
        <div className="py-6 pt-8 px-4 md:px-6 space-y-4">
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="100" className="text-text text-base font-semibold">1. Introduction</h4>
            <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Welcome to DocnDoc, a land acquisition platform provided by Fisibul Properties Ltd. (&quo;Fisibul,&quo; &quo;we,&quo; &quo;us,&quo; or &quo;our&quo;). At DocnDoc, we are committed to protecting your privacy and ensuring that your personal information is handled in a secure and responsible manner. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you access and use our platform for land acquisition and payment plans.</p>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="100" className="text-text text-base font-semibold">2. Information We Collect</h4>
            <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">To offer you a seamless experience in securing land ownership, we collect the following types of personal information:</p>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="100" className="text-text text-base font-semibold">3. Introduction</h4>
            <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose"></p>
            <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Personal Identification Information: Full name, phone number, email address, and residential address.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Payment Information: Billing details such as credit/debit card number, bank account information, and payment history.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Communication Data: Any correspondence between you and our customer support team.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Certain features of the website (such as site visits or geotagging).</p>
            </div>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="100" className="text-text text-base font-semibold">4. How We Use Your Information</h4>
            <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose"></p>
            <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Land Acquisition and Payment Plans: To process your land acquisition application and manage the payment plans for your chosen property.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Customer Support: To assist you with inquiries, provide technical support, and address any issues regarding your account or land acquisition process.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Payment Processing: To facilitate monthly payments, manage billing cycles, and track payments.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Personalized Services: To customize your experience based on your selected plan and provide personalized support and consultations.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Compliance with Legal Obligations: To ensure we meet all applicable legal, regulatory, and contractual obligations.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Marketing and Promotions (with consent): We may send you promotional offers, newsletters, and updates related to DocnDoc and Fisibul Properties. You can opt-out of receiving these communications at any time.</p>
            </div>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">5. Sharing of Information</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">We respect your privacy and will not sell or rent your personal information to third parties. However, we may share your data in the following situations:</p>
            <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />With Service Providers: We may share your personal information with trusted third-party service providers who help us process payments, provide customer support, or manage the website. These providers are obligated to handle your information in accordance with this Privacy Policy.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Legal and Regulatory Compliance: We may disclose your information when required by law or to protect the rights, property, and safety of DocnDoc, Fisibul Properties Ltd., and its users.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred to the new entity as part of the transaction.</p>
            </div>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">6. Data Security</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">We take the security of your personal information seriously and use industry-standard measures to protect it from unauthorized access, alteration, disclosure, or destruction. This includes the use of secure sockets layer (SSL) encryption for sensitive data and regular security audits of our systems. While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">7. Your Rights</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">You have the following rights regarding your personal information:</p>
            <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Access and Correction: You can request access to your personal data and ask us to correct any inaccuracies.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Deletion: You can request that we delete your personal data, subject to certain legal obligations and retention periods.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Opt-Out: You can opt out of marketing communications at any time by clicking the &quo;unsubscribe&quo; link in our emails or by contacting us directly.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Withdraw Consent: If you have given us consent to process your data, you can withdraw it at any time.</p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />To exercise any of these rights, please  <Link href={'mailto: admin@docndoc.com'} className="decoration-0 text-primary">contact us</Link>.</p>
            </div>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">8. Cookies and Tracking Technologies</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Our website uses cookies and similar tracking technologies to enhance your experience and provide personalized content. Cookies are small files stored on your device that allow us to remember your preferences and improve site performance.</p>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">9. Third-Party Links</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Our website may contain links to third-party websites that are not operated by us. We are not responsible for the content or privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party website before providing any personal information.</p>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">10. Children’s Privacy</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Our services are not intended for individuals under the age of 18, and we do not knowingly collect personal information from children. If you believe we have collected information from a child under 18, please contact us immediately, and we will take appropriate action to delete the data.</p>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">11. Updates to This Privacy Policy</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quo;Effective Date.&quo; We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
          </div>
          <div className="space-y-1">
            <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">12. Contact Us</h4>
            <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" /><Link href={'mailto: admin@Fisibulproperties.com'} className="decoration-0 text-primary">Our official mail</Link></p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" /><Link href={'tel: +2349088888733'} className="decoration-0 text-primary">Give us a call</Link></p>
              <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" /><Link href={'https://Fisibulproperties.com'} className="decoration-0 text-primary">Visit our Parent Company <LuArrowUpRight className="text-xs inline" /></Link></p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
