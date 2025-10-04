import { ASSETS_URL } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TfiBlackboard } from "react-icons/tfi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

export default function HomeContainer() {

    const testimonials = [
        { id: "81zx610", name: "James Adebola", role: "Financial Analyst", image: ASSETS_URL['male_content'], content: "The clean design on DocnDoc interface had met finding my feet within minutes. I was able to explain my needs and the team was able to capture it so aptly." },
        { id: "81zx611", name: "Edith Silas", role: "Digital Creator", image: ASSETS_URL['female_content'], content: "I used to think the personal research I embark on was sufficient and impressive, until I got my mind absolutely blown off when a professional hand handled my contents for me for the first time." },
        { id: "81zx612", name: "Daniel Frederick", role: "UX Designer", image: ASSETS_URL['group_male_content'], content: "My work brief usually consist of a lot articles that takes a great deal of time and effort to conjure up, these guys unburdened it for me like it's nothing. Totally recommend them for anyone in my field who is struggling or spends unnecessary time on this." },
        { id: "81zx613", name: "Olumide Anyanwu", role: "Startup Founder", image: ASSETS_URL['male_chart_content'], content: "I got started with the platform in under 5 minutes - no paperwork, no KYC, nothing complicated. I topped up my balance and requested for the package I wanted and everything just went smoothly. Honestly the easiest I have gotten a request handled." },
        { id: "81zx614", name: "Mary Panshak", role: "Product Manager", image: ASSETS_URL['group_female_content'], content: "My group was building an MVP and we needed contents that not only speak towards the theme of the product but also captivates the attention of the users without overwhelming them; DocnDoc did it!" },
        { id: "81zx615", name: "Abdullahi Musa", role: "Consultant", image: ASSETS_URL['group_content'], content: "Literally, one of the hardest part of my job was coming up with contents that expresses my professional opinion about organizations I consult with. The guys at DocnDoc conceptualize my notes so easily." },
    ];

    return (
        <main className="relative">
            <section className="px-4 bg-primary">
                {/* <div className="container mx-auto">
                    <article className="relative grid md:grid-cols-2 gap-4 md:gap-10">
                        <aside className="relative z-20 w-full md:max-w-lg flex flex-col justify-center gap-4 md:gap-5 py-20 md:py-36 text-white">
                            <p className="leading-2 flex items-center gap-1 text-base md:text-lg uppercase"> <FaCaretRight /> Introduction </p>
                            <h2 className="text-3xl md:text-5xl font-primary font-bold">Develop your Contents with DocnDoc</h2>
                            <p className="leading-loose text-base md:text-lg text-justify font-normal">Get customized world class contents enshrined in human-curated structure and wordings that converts, attract sales and outsmart competitors in your niche.</p>
                        </aside>
                        <aside className="md:relative">
                            <Image src={ASSETS_URL['male_chart_content']} alt={'male_chart_content'} className="object-cover" fill />
                        </aside>
                    </article>
                </div> */}
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
            <section className="bg-white pb-10 pt-16 md:py-20 px-0">
                <div className="bg-powder w-full container mx-auto space-y-6 md:space-y-8 rounded-2xl px-6 py-10 md:px-16 md:py-20">
                    <div className="grid place-items-center gap-2">
                        <p className="leading-2 flex items-center justify-center gap-1 text-sm md:text-base uppercase"> <FaCaretRight /> Advantages </p>
                        <h2 className="max-w-xl mx-auto text-center text-primary text-2xl md:text-4xl font-primary font-bold">What our Happy Customer are saying about DocnDoc</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-10">
                        {
                            [...Array(Math.ceil(testimonials.length / 2))].map((_, i) => {
                                const pair = testimonials.slice(i * 2, i * 2 + 2);
                                return (
                                    <div key={i} className="flex flex-col gap-4 md:gap-6">
                                        {
                                            pair.map(el => (
                                                <aside key={el.id} className={`bg-white p-4 md:p-6 rounded-md shadow-xl space-y-4 md:space-y-2`}>
                                                    <div className="flex gap-2 md:gap-4">
                                                        <figure className="relative h-10 w-10 md:h-12 md:w-12 bg-dark rounded-full overflow-hidden">
                                                            <Image src={el.image} alt={el.name} fill />
                                                        </figure>
                                                        <div className="flex flex-col justify-center">
                                                            <h4 className="leading-5 text-dark text-lg md:text-lg font-semibold font-primary">{el.name}</h4>
                                                            <p className="leading-4 text-primary/60 text-sm md:text-sm font-medium">{el.role}</p>
                                                        </div>
                                                    </div>
                                                    <p className="leading-snug text-text text-sm md:text-base text-justify font-normal">{el.content}</p>
                                                </aside>
                                            ))
                                        }
                                    </div>
                                )
                            })
                        }
                        <div className="flex flex-col gap-4">

                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-20 px-4 bg-white">
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
