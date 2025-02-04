export const items = [
  {
    id: 1,
    // color: "from-red-300 to-blue-300",
    color: "",
    title: "DevExchange App",
    desc: () => (
      <div>
        DevExchange Frontend is a sleek, responsive web application that brings
        the familiar look and feel of Stack Overflow to life. With its intuitive
        design and seamless user experience, it’s built to keep developers
        engaged and productive. Explore it live and dive into a dynamic platform
        for sharing knowledge and solving problems together!
      </div>
    ),
    tools: [
      "Vite",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "RTK Query",
      "React Router",
      "DevExhchange API",
      "React Icons",
      "Formik",
      "Flowbite-React",
      "Quill",
      "Vercel",
    ],
    img: "/logo-long.svg",
    link: "https://dev-exchange-dk5n.vercel.app",
    repo: "https://github.com/aneldanza/dev-exchange",
  },
  {
    id: 2,
    // color: "from-blue-300 to-violet-300",
    color: "",
    title: "DevExchange API",
    desc: () => (
      <div>
        DevExchange API is a powerful and secure Rails backend, built with
        PostgreSQL, designed to fuel an engaging, Stack Overflow-inspired
        platform. With seamless Devise-JWT authentication enabled by HTTP-only
        cookies, it ensures top-notch security for users. This API empowers
        frontend clients with rich features, including user profiles, dynamic
        question and answer interactions, versatile tagging, lively comment
        threads, and intuitive voting capabilities—all the essential tools to
        create a vibrant and collaborative Q&A community.
      </div>
    ),
    tools: [
      "Ruby on Rails",
      "PostgreSQL",
      "Devise-JWT",
      "Kaminari",
      "Jsonapi-Serializer",
      "PG Search",
    ],
    img: "https://digital-image-assets.s3.us-east-2.amazonaws.com/portfolio/devexchange-api.webp",
    link: "https://github.com/aneldanza/dev-exchange-api",
    repo: "https://github.com/aneldanza/dev-exchange-api",
  },
  {
    id: 3,
    // color: "from-violet-300 to-purple-300",
    color: "",
    title: "Bubble Party",
    desc: () => (
      <div>
        Bubble Party is a fun, vibrant web app built with vanilla JavaScript,
        packed with playful Spongebob-inspired images and sounds. Dive into a
        bubbly, immersive experience where every click and interaction brings
        the joy of the underwater world to life. Perfect for a burst of
        nostalgia and entertainment!
      </div>
    ),
    tools: ["Javascript", "Github Pages"],
    img: "/bubble-party.webp",
    link: "https://aneldanza.github.io/Bubble-Party",
    repo: "https://github.com/aneldanza/Bubble-Party",
  },
  {
    id: 4,
    // color: "from-purple-300 to-red-300",
    color: "",
    title: "Littelfuse Selection Guide",
    desc: () => (
      <div className="flex flex-col gap-6">
        <p>
          The DC-Contactor plugin is a game-changing tool for Littelfuse,
          revolutionizing distributor link management. Designed for seamless
          updates and additions, it centralizes all product URL references in an
          easy-to-use CSV file.
        </p>

        <div>
          <p className="mb-2">Key Features:</p>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Streamlined Updates</span>:
              Quickly modify distributor and datasheet links, along with unique
              product features.
            </li>
            <li>
              <span className="font-semibold">Effortless Expansion</span>: Add
              new distributors with ease as the network grows.
            </li>
            <li>
              <span className="font-semibold">CSV Integration</span>: Enjoy
              efficient organization and management of product links in one
              centralized location.
            </li>
          </ul>
        </div>
        {/* <p>
          This plugin simplifies workflows and enhances productivity for
          Littelfuse’s product management.
        </p> */}
      </div>
    ),
    tools: ["Javascript", "CerosSDK", "Papa Parse"],
    img: "/dc-contactor.png",
    link: "https://info.littelfuse.com/dc-contactor-selectionguide-mouser",
    repo: "https://github.com/aneldanza/ceros-freelance-projects/tree/main/littelfuse/dc-contactor",
  },
];
