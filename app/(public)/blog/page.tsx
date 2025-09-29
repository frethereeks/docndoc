// export const cache = "dynamic"
import { ASSETS_URL } from '@/app/assets'
import BlogContainer from '@/app/modules/public/blog/BlogContainer'
import React from 'react'

export type TBlogProps = {
    id: string;
    title: string;
    slug: string;
    image: string;
    content: string;
    category: string;
    creator: {
        id: string;
        firstname: string;
        lastname: string;
        image: string;
    };
    createdAt: string;
}

export const blogData: TBlogProps[] = [
    {
        id: "x0x72zla72z7910",
        title: "Fundamental Rock and Material Understanding for Civil and Mining Engineer",
        slug: "fundamental-rock-and-material-understanding-for-civil-and-mining-engineer",
        image: ASSETS_URL['group_content'].src,
        content: "One of the most hardest solid material on earth is a rock. It can be found sapiente quas optio, asper ores repudiandae magnam molestiae qui sunt provident recusandae perferendis cum quidem, tempora laboriosam voluptate a fugiat laborum nulla! Ea earum odit molestias, voluptatum in tenetur accusantium numquam laudantium reprehenderit, magnam aperiam, ipsa tempore at rem. Qui animi veritatis vitae facilis perspiciatis ut pariatur magnam, repellendus magni expedita deleniti necessitatibus rem quam molestiae fugiat minus officia praesentium maiores eius hic similique dolore facere saepe at! Dignissimos eos quis labore iusto veritatis tempora earum similique harum, praesentium debitis facilis repudiandae necessitatibus dolore architecto porro incidunt impedit. Eos doloribus soluta odit. Veritatis facilis molestiae ullam natus! Quos cum facere corporis voluptate suscipit cumque, aliquam soluta animi modi, labore sit quia fugit velit deleniti pariatur neque assumenda repudiandae quisquam fugiat ullam amet! Sequi voluptas repellat distinctio quas esse. Beatae cupiditate laborum fugit aut reiciendis odio rerum magni. Possimus, earum vitae vel quia similique omnis cum molestias nulla nisi ipsam ut quos delectus veritatis ea quis exercitationem assumenda inventore, incidunt illo quasi impedit totam quam. Ducimus sint harum nulla nemo eaque quis distinctio consequatur doloribus soluta! maiores sequi autem illo distinctio velit fugiat fuga architecto, error cum officiis! Laborum, doloremque sint.",
        category: "General",
        creator: {id: "82x6l10zp2", firstname: "Andrew", lastname: "Iduguma", image: ASSETS_URL['male_content'].src},
        createdAt: "2025-09-29T14:22:20.088Z"
    },
    {
        id: "x0x72zla72z7911",
        title: "We need to Rethink our relationship with Water",
        slug: "we-need-to-rethink-our-relationship-with-water",
        image: ASSETS_URL['male_content'].src,
        content: "As with every gas molecules that is both present in the atmosphere and the human body, water is one of the mostly misunderstood liquid on the planet and of course, by those who needs it the most, humans. magnam molestiae qui sunt provident recusandae perferendis cum quidem, tempora laboriosam voluptate a fugiat laborum nulla! Ea earum odit molestias, voluptatum in tenetur accusantium numquam laudantium reprehenderit, magnam aperiam, ipsa tempore at rem. Qui animi veritatis vitae facilis perspiciatis ut pariatur magnam, repellendus magni expedita deleniti necessitatibus rem quam molestiae fugiat minus officia praesentium maiores eius hic similique dolore facere saepe at! Dignissimos eos quis labore iusto veritatis tempora earum similique harum, praesentium debitis facilis repudiandae necessitatibus dolore architecto porro incidunt impedit. Eos doloribus soluta odit. Veritatis facilis molestiae ullam natus! Quos cum facere corporis voluptate suscipit cumque, aliquam soluta animi modi, labore sit quia fugit velit deleniti pariatur neque assumenda repudiandae quisquam fugiat ullam amet! Sequi voluptas repellat distinctio quas esse. Beatae cupiditate laborum fugit aut reiciendis odio rerum magni. Possimus, earum vitae vel quia similique omnis cum molestias nulla nisi ipsam ut quos delectus veritatis ea quis exercitationem assumenda inventore, incidunt illo quasi impedit totam quam. Ducimus sint harum nulla nemo eaque quis distinctio consequatur doloribus soluta! maiores sequi autem illo distinctio velit fugiat fuga architecto, error cum officiis! Laborum, doloremque sint.",
        category: "Science",
        creator: {id: "82x6l10zp4", firstname: "Tope", lastname: "Akinkunmi", image: ASSETS_URL['male_chart_content'].src},
        createdAt: "2025-09-25T14:22:20.088Z"
    },
    {
        id: "x0x72zla72z7912",
        title: "National Library Service expands its connection and collection-base, welcomes new staff",
        slug: "national-library-service-expands-its-connection-and-collection-base-welcomes-new-staff",
        image: ASSETS_URL['female_chart_content'].src,
        content: "The Nigerian National Library on Thursday 20th October, 2025 announced its plan to broaden its reach into the most remote and sub-urban parts of the country in a bid to bring accessiblity to education and knowledge sourcing to all regardless of location in every part of the country. This initiative marks the tempora laboriosam voluptate a fugiat laborum nulla! Ea earum odit molestias, voluptatum in tenetur accusantium numquam laudantium reprehenderit, magnam aperiam, ipsa tempore at rem. Qui animi veritatis vitae facilis perspiciatis ut pariatur magnam, repellendus magni expedita deleniti necessitatibus rem quam molestiae fugiat minus officia praesentium maiores eius hic similique dolore facere saepe at! Dignissimos eos quis labore iusto veritatis tempora earum similique harum, praesentium debitis facilis repudiandae necessitatibus dolore architecto porro incidunt impedit. Eos doloribus soluta odit. Veritatis facilis molestiae ullam natus! Quos cum facere corporis voluptate suscipit cumque, aliquam soluta animi modi, labore sit quia fugit velit deleniti pariatur neque assumenda repudiandae quisquam fugiat ullam amet! Sequi voluptas repellat distinctio quas esse. Beatae cupiditate laborum fugit aut reiciendis odio rerum magni. Possimus, earum vitae vel quia similique omnis cum molestias nulla nisi ipsam ut quos delectus veritatis ea quis exercitationem assumenda inventore, incidunt illo quasi impedit totam quam. Ducimus sint harum nulla nemo eaque quis distinctio consequatur doloribus soluta! maiores sequi autem illo distinctio velit fugiat fuga architecto, error cum officiis! Laborum, doloremque sint.",
        category: "Lifestyle",
        creator: {id: "82x6l10zp5", firstname: "Stephanie", lastname: "Jones", image: ASSETS_URL['female_content'].src},
        createdAt: "2025-09-18T14:22:20.088Z"
    },
    {
        id: "x0x72zla72z7913",
        title: "World Health Organization (WHO) announces plan to deliver $200m free medication to East African countries in 2026",
        slug: "world-health-organization-who-announces-plan-to-deliver-200m-free-medication-to-east-african-countries-in-2026",
        image: ASSETS_URL['group_female_content'].src,
        content: "The president of World Health Organization (WHO) made the ground-breaking announcement in the last annual general meeting of all country leaders assembled in the capital of Uganda, Kampala and he cited the need to laboriosam voluptate a fugiat laborum nulla! Ea earum odit molestias, voluptatum in tenetur accusantium numquam laudantium reprehenderit, magnam aperiam, ipsa tempore at rem. Qui animi veritatis vitae facilis perspiciatis ut pariatur magnam, repellendus magni expedita deleniti necessitatibus rem quam molestiae fugiat minus officia praesentium maiores eius hic similique dolore facere saepe at! Dignissimos eos quis labore iusto veritatis tempora earum similique harum, praesentium debitis facilis repudiandae necessitatibus dolore architecto porro incidunt impedit. Eos doloribus soluta odit. Veritatis facilis molestiae ullam natus! Quos cum facere corporis voluptate suscipit cumque, aliquam soluta animi modi, labore sit quia fugit velit deleniti pariatur neque assumenda repudiandae quisquam fugiat ullam amet! Sequi voluptas repellat distinctio quas esse. Beatae cupiditate laborum fugit aut reiciendis odio rerum magni. Possimus, earum vitae vel quia similique omnis cum molestias nulla nisi ipsam ut quos delectus veritatis ea quis exercitationem assumenda inventore, incidunt illo quasi impedit totam quam. Ducimus sint harum nulla nemo eaque quis distinctio consequatur doloribus soluta! maiores sequi autem illo distinctio velit fugiat fuga architecto, error cum officiis! Laborum, doloremque sint.",
        category: "Health",
        creator: {id: "82x6l10zp4", firstname: "Tope", lastname: "Akinkunmi", image: ASSETS_URL['male_chart_content'].src},
        createdAt: "2025-08-18T14:22:20.088Z"
    },
]

export default function BlogPage() {
  return (
    <BlogContainer data={blogData} />
  )
}
