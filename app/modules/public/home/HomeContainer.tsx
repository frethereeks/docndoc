import { ASSETS_URL } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TfiBlackboard } from "react-icons/tfi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

export default function HomeContainer() {
    return (
        <main className="relative">
            <section className="py-10 md:py-20 px-4">

            </section>
            <section className="bg-white py-14 md:py-20 px-4">
                <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
                    <aside className="flex-1 min-h-60 md:h-auto relative bg-white rounded-md overflow-hidden">
                        <Image src={ASSETS_URL['female_chart_content']} alt={'female_chart_content'} className='object-cover' fill />
                    </aside>
                    <aside className="flex-1 flex flex-col justify-center gap-4 md:py-10">
                        <p className="flex items-center gap-1 text-dark text-sm md:text-base uppercase -mb-3">
                            <FaCaretRight /> Best AI Writer Tool
                        </p>
                        <h2 className="sm:max-w-md md:max-w-lg text-primary text-3xl md:text-5xl font-primary font-bold">Transform your Content Creation with DocnDoc</h2>
                        <div className="py-4 md:pt-6 space-y-4 text-text text-justify">
                            <p className="sm:max-w-md md:max-w-lg text-lg md:text-lg font-primary font-medium">With DocnDoc, you can maximize your marketing with contents that outperforms the competition, every time!</p>
                            <p className="sm:max-w-md md:max-w-lg text-lg md:text-lg font-primary font-medium">Our developers take into account many factors arrived that from extensive research on strength and competitors in your niche, and with that, we formulate and develop that is both human and algorithm compliant that ranks higher as well as boost your marketing reach.</p>
                        </div>
                    </aside>
                </div>
            </section>
            <section className="py-10 md:py-20 px-4 bg-powder/20">
                <div className="container mx-auto space-y-10">
                    <h2 className="relative after:bg-primary after:absolute after:flex after:h-1 after:w-20 after:bottom-0 after:left-1/2 after:-translate-x-1/2 mx-auto sm:max-w-lg text-3xl md:text-4xl text-center text-text font-primary font-bold pb-5 mb-4">How we deliver game-changing contents</h2>
                    <div className="md:max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-10">
                        {
                            [
                                { id: "810z52z82z270", icon: <TfiBlackboard />, title: "Free online consultation", text: "No uncomfortable visits, no harsh judements, no time wated in waiting rooms" },
                                { id: "810z52z82z271", icon: <VscGitPullRequestGoToChanges />, title: "Proven Lead & Conversion", text: "No uncomfortable visits, no harsh judements, no time wated in waiting rooms" },
                                { id: "810z52z82z272", icon: <LiaPeopleCarrySolid />, title: "Regular follow-up & Updates", text: "No uncomfortable visits, no harsh judements, no time wated in waiting rooms" },
                            ].map((el, i) => (
                                <Link href={"/about"} key={el.id} className={`group hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-[0_0_14px_-2px_#0002] p-5 sm:p-6 ${i === 1 ? 'hover:bg-white bg-primary hover:text-text text-white' : 'bg-white hover:bg-primary text-text hover:text-white'}  rounded-sm space-y-4`}>
                                    <span className={`text-3xl md:text-4xl ${i === 1 ? 'group-hover:text-primary text-white' : 'text-primary group-hover:text-white'} w-10 h-10 grid place-items-center`}>{el.icon}</span>
                                    <div className="flex-1 space-y-4">
                                        <h4 className="text-xl md:text-2xl font-semibold">{el.title}</h4>
                                        <p className="text-base leading-tight">{el.text}</p>
                                        <p className="flex items-center gap-2 mt-auto self-end mb-2">Read more <FaCaretRight className="mt-0.5" /></p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}
