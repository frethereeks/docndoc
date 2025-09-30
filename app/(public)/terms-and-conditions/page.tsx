import { RiCheckboxCircleFill } from "react-icons/ri";
import Image from "next/image";
import { ASSETS_URL } from "@/app/assets";

export default function TermsAndConditions() {
    return (
        <section className='relative bg-backdrop pb-10 px-2'>
            <aside className='relative bg-backdrop pt-40 md:pt-48 px-4 -mx-2'>
                <Image src={ASSETS_URL['group_female_content']} alt="group_female_content" className="object-cover object-center absolute h-full w-full top-0 left-0" />
                <div className="z-10 bg-dark opacity-80 absolute h-full w-full top-0 left-0"></div>
            </aside>
            <article className="w-full md:max-w-3xl my-10 mx-auto bg-white rounded-xs overflow-hidden shadow-[0px_12px_15px_0px_#8c98a41a]">
                <div className="p-4 pt-7 pb-6 bg-primary text-white text-center">
                    <h6 className="text-xs font-semibold uppercase tracking-[3.5px] px-8 pb-2 border-b border-slate-100/20 w-max mx-auto">Have a Read</h6>
                    <h4 className="tracking-wide text-2xl md:text-2xl font-semibold">Terms & Conditions</h4>
                </div>
                <div className="py-6 pt-8 px-4 md:px-6 space-y-4">
                    <div className="space-y-1">
                        <h4 data-aos="fade-up" data-aos-delay="100" className="text-text text-base font-semibold">1. Payment Commitment</h4>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">The client agrees to a structured payment plan of ₦100,000 monthly for a period of 20 months, totalling ₦2,000,000. Payments must be made on or before the 5th day of each month to remain in good standing.</p>
                    </div>
                    <div className="space-y-1">
                        <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">2. Application Fee</h4>
                        <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">A non-refundable application fee of ₦10,000 is required upon submission of the application form. This fee covers administrative processing and verification.</p>
                    </div>
                    <div className="space-y-1">
                        <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">3. Default Clause</h4>
                        <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Failure to pay for three (3) consecutive months constitutes a breach of this agreement. The company reserves the right to:</p>
                        <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Revoke the land allocation,</p>
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Resell the plot after which,</p>
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Apply an administrative deduction of 30% from any amount already paid before any refund consideration,</p>
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Charge additional default penalties where applicable.</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 data-aos="fade-up" data-aos-delay="100" className="text-text text-base font-semibold">4. Allocation of Plot</h4>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Physical allocation of the land shall take place only after full payment of the purchase price and fulfillment of all obligations by the client.</p>
                    </div>
                    <div className="space-y-1">
                        <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">5. Documentation Upon Completion</h4>
                        <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Upon completion of payment, the following documents shall be issued to the client:</p>
                        <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Deed of Assignment & Power of Attorney</p>
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Survey Plan</p>
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Letter of Allocation</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 data-aos="fade-up" data-aos-delay="300" className="text-text text-base font-semibold">6. Change of Payment Plan</h4>
                        <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">Any variation from the agreed monthly payment structure must be:</p>
                        <div data-aos="fade-up" data-aos-delay="400" className="text-sm text-text">
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Formally requested in writing by the client</p>
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />Subject to approval by Oakyard Properties Limited</p>
                            <p className="flex gap-2 pl-4 py-1"><RiCheckboxCircleFill className="text-[.6rem] text-text translate-y-1.5 flex-shrink-0" />May attract a ₦20,000 restructuring fee</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 data-aos="fade-up" data-aos-delay="100" className="text-text text-base font-semibold">7. Legal Jurisdiction</h4>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-text/90 text-justify font-medium pl-4 leading-loose">This agreement shall be governed by the laws of the Federal Republic of Nigeria, and any legal disputes shall be addressed using alternative dispute resolution.</p>
                    </div>
                </div>
            </article>
        </section>
    )
}
