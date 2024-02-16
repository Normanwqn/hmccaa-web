import React from "react";
import Layout from "../components/layout";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import {
  BookIcon,
  CalendarIcon,
  SeriesIcon,
  UserIcon,
} from "../components/svgs";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { mediaWrapper } from "../css/media.module.css";

const SermonPage = ({ data: { strapiSermon }, pageContext }) => {
  const {
    breadcrumb: { crumbs },
    baseURL,
    id,
  } = pageContext;

  const {
    Title: title,
    DatePreached: date,
    Preacher: { Prefix, Name },
    BiblePassage,
    Series: {
      Name: series,
      Background: {
        localFile: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
    Description: {
      data: { Description: description },
    },
    Audio: { url, mime },
    VideoLink,
  } = strapiSermon;
  const speaker = `${Prefix} ${Name}`;
  const passeges = BiblePassage.map(
    ({ Book, ChapterVerse }) => `${Book} ${ChapterVerse}`
  );
  const audioURL = `${baseURL}${url}`;
  const videoID = VideoLink.match(/\d+/).shift();

  return (
    <Layout>
      <div className="px-4 w-full flex items-center flex-col">
        <div className="max-w-container w-full flex flex-col py-[1.375rem] lg:pt-10 lg:pb-[22.8125rem] gap-y-[2.1875rem] lg:gap-y-[3.75rem] items-center">
          <div className="w-full pl-[2px] lg:pl-0">
            <Breadcrumb
              crumbs={crumbs.map(({ pathname, crumbLabel }) => {
                if (pathname === "/watch/sermons") {
                  return { pathname: "/watch", crumbLabel };
                } else if (crumbLabel === `${id}`) {
                  return {
                    crumbLabel: `${series}: ${title}`,
                    pathname,
                  };
                } else {
                  return {
                    pathname,
                    crumbLabel,
                  };
                }
              })}
              crumbSeparator=" > "
            />
          </div>
          <div className="flex flex-col gap-y-[0.75rem] lg:gap-y-[3.75rem] items-center max-w-[61.25rem] w-full pb-[3.98625rem] lg:pb-0">
            <h1 className="text-2xl lg:text-4xl leading-tighter font-semibold lg:font-bold mb-0">
              {title}
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-x-10 items-center pt-[0.9375rem] lg:pt-0 gap-y-5 lg:gap-y-0 lg:items-start">
              <div className="flex flex-col gap-y-1 lg:gap-y-10 text-base lg:text-xl font-medium w-full lg:w-auto">
                <div className="flex gap-x-2">
                  <CalendarIcon />
                  <div>{date}</div>
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-3">
                  <div className="flex gap-x-2">
                    <UserIcon />
                    <div>{speaker}</div>
                  </div>
                  <div className="flex gap-x-2">
                    <BookIcon />
                    <div>{passeges.join(", ")}</div>
                  </div>
                  <div className="flex gap-x-2">
                    <SeriesIcon />
                    <div>{series}</div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[45rem] flex-col flex gap-8">
                <div className="relative">
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt={title}
                    className="max-w-[45rem]"
                  />
                  <div className="flex justify-center absolute left-0 bottom-0 w-full">
                    <div className="flex-1">
                      <div className="subpixel-antialiased font-medium tabular-nums h-full leading-[1.7] max-w-full min-w-[12.5rem] relative overflow-hidden">
                        <audio
                          controls
                          preload="metadata"
                          className="block w-full"
                        >
                          <source src={audioURL} type={mime} />
                        </audio>
                      </div>
                    </div>
                  </div>
                </div>
                {videoID && (
                  <div className={`${mediaWrapper} w-full`}>
                    <div>
                      <iframe
                        src={`https://player.vimeo.com/video/${videoID}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                        allow="autoplay; fullscreen; picture-in-picture"
                      ></iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full pl-[5px] pt-2 lg:pt-0 max-w-[45rem] lg:max-w-none">
              <h3 className="text-xl lg:text-2xl font-semibold leading-tighter mb-[1.563rem] lg:mb-[1.576rem]">
                Details
              </h3>
              <p className="mb-0 text-base lg:text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({
  data: {
    strapiSermon: {
      Series: { Name },
      Title,
    },
  },
}) => <Seo title={`${Name} - ${Title} `} />;

export const pageQuery = graphql`
  query sermonPageQuery($id: Int!) {
    strapiSermon(strapi_id: { eq: $id }) {
      Title
      DatePreached(formatString: "MMMM  DD, YYYY")
      Preacher {
        Prefix
        Name
      }
      BiblePassage {
        Book
        ChapterVerse
      }
      Series {
        Name
        Background {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      VideoLink
      Audio {
        url
        mime
      }
      Description {
        data {
          Description
        }
      }
    }
  }
`;

export default SermonPage;
