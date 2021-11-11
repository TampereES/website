import Page from "../components/Page"
import Link from "next/link"
import Image from "next/image"
import { getPage } from "../services/content"

const HomePage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div className="pt-24 pb-32 xl:pt-40 xl:pb-72 relative">
        <div className="hidden xl:flex absolute justify-end right-0 top-0 py-12 pointer-events-none">
          <Image
            src={require("../assets/images/kube.png")}
            alt="Kube"
            className="w-10/12 2xl:w-full"
          />
        </div>

        <div className="section">
          <div className="max-w-2xl text-center xl:text-left mx-auto xl:mx-0">
            <h1 className="h1 mb-8" id="home-header-title">
              {content.header__title}
            </h1>
            <p className="lead mb-10" id="home-header-description">
              {content.header__description}
            </p>
            <Link href="/projects">
              <a
                href="/projects"
                id="home-page-button"
                className="btn btn-primary"
              >
                Learn about our projects
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-purple-800 pt-14 md:pt-20 pb-28 md:pb-36">
        <div className="section">
          <div className="max-w-2xl text-white">
            <h2 className="h1 mb-8">{content.section1__title}</h2>
            <div
              className="lead mb-10"
              dangerouslySetInnerHTML={{
                __html: content.section1__description
              }}
            />
            <Link href="/news">
              <a href="/news" className="btn btn-secondary">
                Read our news
              </a>
            </Link>
          </div>

          <div className="relative">
            <div className="max-w-4xl">
              <div
                className="
                                grid grid-cols-1
                                md:grid-cols-2
                                gap-10
                                text-center
                                mt-12
                                md:mt-16
                            "
              >
                <div className="bg-white rounded-lg shadow px-5 py-10">
                  <h3 className="h3 mb-5">Coding sauna</h3>
                  <p className="lead">Meet and grow with other developers</p>
                  <div className="py-20" />
                </div>
                <div className="bg-white rounded-lg shadow px-5 py-10">
                  <h3 className="h3 mb-5">Coding sauna</h3>
                  <p className="lead">Meet and grow with other developers</p>
                  <div className="py-20" />
                </div>
              </div>
            </div>

            <div className="hidden xl:flex items-center absolute top-0 right-0 mt-24 space-x-10 pointer-events-none">
              <div>
                <Image
                  src={require("../assets/images/shapes/ellipse.svg")}
                  alt="Ellipse shape"
                  width={100}
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/shapes/ellipse.svg")}
                  alt="Ellipse shape"
                  width={65}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export const getStaticProps = async () => {
  const content = getPage("index")

  return {
    props: { content }
  }
}

export default HomePage
