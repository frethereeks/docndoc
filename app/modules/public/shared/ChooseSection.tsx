"use client"
import { usePathname } from 'next/navigation'
import { LuArrowUpRight } from 'react-icons/lu'
import { RiAwardLine, RiBuildingLine, RiGovernmentLine, RiMedal2Line, RiPresentationFill, RiScales3Line } from 'react-icons/ri'

export default function ChooseSection() {
    const pathname = usePathname()

    const recognitionData = [
        {
            id: "8206asxz610",
            title: "Nigeria Developers Association",
            icon: <RiAwardLine />,
        },
        {
            id: "8206asxz611",
            title: "Top 10 Estate Managers in Abuja",
            icon: <RiMedal2Line />,
        },
        {
            id: "8206asxz612",
            title: "Real Estate Association, Abuja",
            icon: <RiBuildingLine />,
        },
        {
            id: "8206asxz613",
            title: "Best Lawyers for Business Facilitation",
            icon: <RiScales3Line />,
        },
        {
            id: "8206asxz614",
            title: "Government Registered",
            icon: <RiGovernmentLine />,
        },
        {
            id: "8206asxz615",
            title: "Real People and Real Project",
            icon: <RiPresentationFill />,
        },
    ]

    const projectResultData = [
        // {
        //     id: "8asxz610",
        //     title: "Jahi Resettlement Plan",
        //     result: "Faciltited the acquistion of over 30 properties in Jahi",
        //     total: 10.5,
        // },
        {
            id: "8asxz611",
            title: "Kyami Housing Plan",
            result: "A 30-month contributory project that attracted over 56 investors",
            total: 10.7,
        },
        {
            id: "8asxz612",
            title: "Katampe Extension Housing Plan",
            result: "An initiative that turned over 29 investors into house-owners",
            total: 21.07,
        },
    ]

    return (
        <article className='relative overflow-hidden py-10 md:py-20'>
            <div className="h-60 w-60 md:h-96 md:w-96 rounded-full bg-[#dadfef] opacity-20 scale-x-125 absolute right-[80%] top-[75%]"></div>
            <div className="container mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
                <aside className="p-4 flex flex-col justify-center relative">
                    <div className="space-y-0 max-w-2xl mx-auto">
                        <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-2xl text-primary font-semibold">Why Choose Flexipay</h2>
                        <h4 data-aos="fade-up" data-aos-delay="500" className="text-dark text-2xl md:text-4xl font-bold relative before:absolute before:h-10 before:w-10 md:before:h-12 md:before:w-12 before:border-2 md:before:border-4 before:border-backdrop before:bg-primary before:-top-14 before:left-3/4 before:rounded-full">Land Acquisition Plan?</h4>
                        <p data-aos="fade-up" data-aos-delay="1000" className="text-base text-text font-medium leading-relaxed py-4">We are geared towards elevating the real-estate standard, house ownership plans by providing comprehensive solutions tailored to your unique project needs to ensure quality, efficient and an incredible level of client satisfaction every step of the way.</p>
                        <a data-aos="fade-right" data-aos-delay="1500" href={`${pathname}#contact`} className="relative flex gap-2 items-center self-center w-max mt-2 px-6 md:px-8 py-1.5 h-max border border-primary hover:bg-transparent bg-primary hover:text-primary text-white text-base font-semibold rounded-sm">Get Started <LuArrowUpRight className="text-xs" /></a>
                    </div>
                </aside>
                <aside className="bg-light-grey rounded-sm p-4 md:p-5 space-y-2">
                    <h3 data-aos="fade-up" data-aos-delay="1500" className="text-base md:text-lg text-dark font-semibold">Recognition & Membership</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5">
                        {
                            recognitionData.map((el,i) => (
                                <figure data-aos="fade-up" data-aos-delay={i*300} key={el.id} className="bg-white p-4 pt-6 rounded-md grid place-items-center shadow-lg text-3xl text-primary space-y-3">
                                    {el.icon}
                                    <p className="text-[.7rem] text-dark text-center font-semibold">{el.title}</p>
                                </figure>
                            ))
                        }
                    </div>
                    <h3 data-aos="fade-up" data-aos-delay="1000" className="text-base md:text-lg text-dark font-semibold mt-6 md:mt-12">Recent Projects & Results</h3>
                    <div className="space-y-4">
                        {
                            projectResultData.map((el, i) => (
                                <figure data-aos="fade-up" data-aos-delay={((i*50)+1000)} key={el.id} className="bg-white p-4 pt-2.5 rounded-md shadow-md hover:shadow-lg">
                                    <h4 className="flex justify-between items-center gap-4 text-base md:text-base text-dark font-semibold">{el.title} <span className="text-primary text-sm">&#8358;{el.total}B</span></h4>
                                    <p className="text-[.7rem] text-text font-medium">{el.result}</p>
                                </figure>
                            ))
                        }
                    </div>
                </aside>
            </div>
        </article>
    )
}
