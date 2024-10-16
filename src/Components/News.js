import React, { useState, useEffect } from "react";
import axios from "axios";
import loader from "../Components/loader.gif";
import Mylogo from "../Components/Mylogo.png";
function News() {
  const [data, setData] = useState(
    [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post"
      },
      author: "Amudalat Ajasa, Silvia Foster-Frau",
      title: "In landmark move, EPA requires removal of all U.S. lead pipes in a decade - The Washington Post",
      description: "The Environmental Protection Agency rule finalized Tuesday could eliminate a toxic threat to U.S. children and is projected to cost tens of billions of dollars.",
      url: "https://www.washingtonpost.com/climate-solutions/2024/10/08/epa-lead-pipe-removal-rule-drinking-water/",
      urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EJLWUIL23FERXH7B2L3O7C4JEA_size-normalized.jpg&w=1440",
      publishedAt: "2024-10-08T10:31:25Z",
      content: "The Environmental Protection Agency finalized a rule Tuesday requiring water utilities to replace all lead pipes within a decade, a move aimed at eliminating a toxic threat that continues to affect t… [+9559 chars]"
    },
    {
      source: {
        id: null,
        name: "CNBC"
      },
      author: "Amelia Lucas",
      title: "PepsiCo trims revenue outlook as North American snacking, key international markets lag - CNBC",
      description: "PepsiCo lowered its full-year outlook for organic revenue but reiterated its forecast for its earnings growth.",
      url: "https://www.cnbc.com/2024/10/08/pepsico-pep-q3-2024-earnings.html",
      urlToImage: "https://image.cnbcfm.com/api/v1/image/107370400-1707330442016-gettyimages-1244279527-zawrzel-truckdel221021_np8Nw.jpeg?v=1707330758&w=1920&h=1080",
      publishedAt: "2024-10-08T10:17:39Z",
      content: "PepsiCo on Tuesday lowered its full-year outlook for organic revenue after its second straight quarter of weaker-than-expected sales.\r\nThe repercussions of the Quaker Foods North America recalls, wea… [+2530 chars]"
    },
    {
      source: {
        id: null,
        name: "NBCSports.com"
      },
      author: "Michael David Smith",
      title: "Derek Carr will have an MRI on Tuesday, unsure if he can play Sunday vs. Buccaneers - NBC Sports",
      description: "Carr suffered an oblique injury during Monday's loss to the Chiefs and said he couldn't throw a football afterward.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/derek-carr-will-have-an-mri-on-tuesday-unsure-if-he-can-play-sunday-vs-buccaneers",
      urlToImage: "https://nbcsports.brightspotcdn.com/dims4/default/8f3df2d/2147483647/strip/true/crop/3784x2129+0+198/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fe1%2F83%2F530ff69c4f09b14df4adc54ae874%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2177336322",
      publishedAt: "2024-10-08T09:09:06Z",
      content: "Saints quarterback Derek Carr left Monday nights loss early with an oblique injury and said afterward that he wanted to keep playing but physically couldnt throw a football.\r\nNot good, but well get a… [+978 chars]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Kathleen Magramo, Sana Noor Haq",
      title: "Israel strikes Lebanon and Gaza as wars with Hamas and Hezbollah rage on: Live updates - CNN",
      description: "Israel will “continue to fight,” Prime Minister Benjamin Netanyahu vowed on the anniversary of the October 7 Hamas attacks.",
      url: "https://www.cnn.com/world/live-news/israel-gaza-lebanon-war-10-08-24-intl-hnk/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/c-2024-10-04t181442z-2011717188-rc2jdaalw9cc-rtrmadp-3-israel-palestinians-lebanon.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-10-08T08:29:00Z",
      content: "On the anniversary of the October 7 Hamas attacks, Gazas north was hit with more Israeli strikes, with no end in sight to the war devastating the enclave. Israels objective of defeating Hamas still s… [+2189 chars]"
    },
    {
      source: {
        id: null,
        name: "CNBC"
      },
      author: "Lim Hui Jie",
      title: "China rally loses steam as authorities disappoint markets; Hong Kong stocks plunge more than 9% - CNBC",
      description: "Household spending in Japan fell 1.9% year-on-year in August, a softer fall compared to the 2.6% decline expected by a Reuters poll of economists.",
      url: "https://www.cnbc.com/2024/10/08/asia-markets.html",
      urlToImage: "https://image.cnbcfm.com/api/v1/image/108040874-1727707108673-gettyimages-2173990659-cfoto-chinasto240927_np79X.jpeg?v=1728351817&w=1920&h=1080",
      publishedAt: "2024-10-08T08:16:00Z",
      content: "SINGAPORE The rally in Chinese markets lost steam on Tuesday after a briefing from the country's National Development and Reform Commission provided few details on further stimulus.\r\nWhile mainland C… [+1958 chars]"
    },
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: "Nidal Al-Mughrabi, Ali Sawafta",
      title: "Hamas faces dissent in Gaza as heavy toll weakens support for war, a year on - Reuters",
      description: "Samira, a mother of two, yearns for her old life when she was an Arabic teacher and had a comfortable home - before the attack by Hamas on Israel a year ago plunged Gaza into suffering and chaos.",
      url: "https://www.reuters.com/world/middle-east/year-after-oct-7-hamas-faces-dissent-gaza-war-takes-toll-2024-10-08/",
      urlToImage: "https://www.reuters.com/resizer/v2/QQPNGAOQDBJKFC4K6ZBCBMVZE4.jpg?auth=06af58f7476ac6d58f6d803a4d3f4d5934508eace0352cbd623b33527fd9417a&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-10-08T07:24:27Z",
      content: null
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press"
      },
      author: "THE ASSOCIATED PRESS",
      title: "What to know about Hurricane Milton as it moves toward Florida’s Gulf Coast - The Associated Press",
      description: "Not even two weeks after Hurricane Helene swamped the Florida coastline, Milton has strengthened into a major hurricane on a path toward the state. Milton is expected to hit the densely populated Tampa metro area, which has about 3.3 million people. Traffic w…",
      url: "https://apnews.com/article/milton-florida-hurricane-d40b1e47fd78844bf1ed528bab5099f1",
      urlToImage: "https://dims.apnews.com/dims4/default/5be5f0d/2147483647/strip/true/crop/3500x1969+0+182/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F04%2F18%2Fc9c8d4895776ecb00a44e3a79a5e%2Ff5db12c55e1a45a3abfd59f6084e7b07",
      publishedAt: "2024-10-08T06:46:00Z",
      content: "Not even two weeks after Hurricane Helene swamped the Florida coastline, Milton has strengthened rapidly into a major hurricane on a path toward the state. \r\nThe system is threatening the densely pop… [+3318 chars]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Kate Sullivan",
      title: "Trump vows to ‘remove the Jew haters’ if reelected during event commemorating October 7 attacks - CNN",
      description: "Former President Donald Trump on Monday said he would “remove the Jew haters” if reelected as he participated in an event commemorating the first anniversary of the October 7 Hamas attacks in Israel.",
      url: "https://www.cnn.com/2024/10/08/politics/trump-remove-jew-haters-october-7-event/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2176596602.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-10-08T06:27:00Z",
      content: "Former President Donald Trump said Monday he would remove the Jew haters if reelected, speaking at an event commemorating the first anniversary of the October 7 Hamas attacks in Israel.\r\nI will defen… [+2718 chars]"
    },
    {
      source: {
        id: null,
        name: "Hindustan Times"
      },
      author: "Mohsin Khan",
      title: "Hezbollah Scares US Military, Big Attack On IDF Base Amid CentCom Chief's Israel Visit | Lebanon - Hindustan Times",
      description: "Iran-backed Hezbollah fired non-stop rockets to target Israeli military bases in north and central Israel on the first anniversary of October 7 on Monday. The Lebanese armed group fired volleys of rockets and missiles at Israeli troops in Shlomi, Hanita, and …",
      url: "https://www.hindustantimes.com/videos/world-news/hezbollah-scares-us-military-big-attack-on-idf-base-amid-centcom-chiefs-israel-visit-lebanon-101728365563339.html",
      urlToImage: "https://www.hindustantimes.com/ht-img/img/2024/10/08/1600x900/hqdefault_1728365558545_1728365584623.jpg",
      publishedAt: "2024-10-08T05:33:55Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "[Removed]"
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-10-08T05:30:00Z",
      content: "[Removed]"
    },
    {
      source: {
        id: null,
        name: "BBC News"
      },
      author: null,
      title: "Israel marks year since Hamas attacks as fighting rages - BBC.com",
      description: "Vigils have been held across Israel including at the festival where hundreds were killed last October.",
      url: "https://www.bbc.com/news/articles/c4g57q20l1vo",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/df8d/live/1209d000-84fd-11ef-a819-555f47c527fd.jpg",
      publishedAt: "2024-10-08T05:02:28Z",
      content: "In Tel Aviv, people gathered to support families of hostages held by Hamas in the Gaza Strip\r\nIsrael has held ceremonies to remember the victims of the mass killings and abductions carried out by Ham… [+5578 chars]"
    },
    {
      source: {
        id: null,
        name: "New York Post"
      },
      author: "Dan Martin",
      title: "Carlos Rodon’s wife reveals ‘disgusting’ online threats after Yankees ALDS start sours - New York Post ",
      description: "Carlos Rodon and his family were forced to deal with online threats after his start in Game 2 oft he ALDS for the Yankees.",
      url: "https://nypost.com/2024/10/08/sports/carlos-rodons-wife-reveals-online-threats-after-yankees-start-sours/",
      urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2024/10/newspress-collage-atbr4hx5g-1728361793131.jpg?quality=75&strip=all&1728347489&w=1024",
      publishedAt: "2024-10-08T04:47:00Z",
      content: "Carlos Rodon had to deal with his slider disappearing in the fourth inning and after a 4-2 loss to Kansas City in the ALDS in The Bronx, the left-hander and his family were forced to deal with online… [+2894 chars]"
    },
    {
      source: {
        id: null,
        name: "Billboard"
      },
      author: "Jessica Lynch",
      title: "Nell Smith, Flaming Lips Collaborator, Dies at 17 - Billboard",
      description: "During a Flaming Lips concert on Oct. 6, frontman Wayne Coyne shared the sad news with fans, explaining that Nell had been in a car accident.",
      url: "http://www.billboard.com/music/music-news/flaming-lips-collaborator-nell-smith-dead-1235795417/",
      urlToImage: "https://www.billboard.com/wp-content/uploads/2024/10/nell-smith-1548-billboard.jpg?w=1024",
      publishedAt: "2024-10-08T04:39:58Z",
      content: "Nell Smith, the young Canadian singer-songwriter who captured the hearts of many with her collaboration with The Flaming Lips, has died at just 17 years old. \r\nHer death on Oct. 5 was confirmed by he… [+4380 chars]"
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment"
      },
      author: "Jordan Shusterman",
      title: "MLB playoffs 2024: Kerry Carpenter's 9th-inning home run off Emmanuel Clase launches Tigers to victory in ALDS Game 2 - Yahoo Sports",
      description: "The best closer in baseball allowed just five runs in the regular season. With one swing, Carpenter tagged him for three.",
      url: "https://sports.yahoo.com/mlb-playoffs-2024-kerry-carpenters-9th-inning-home-run-off-emmanuel-clase-launches-tigers-to-victory-in-alds-game-2-040426796.html",
      urlToImage: "https://s.yimg.com/ny/api/res/1.2/S.zuMSA85GZ963AjyTz0IA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/cecd6240-8527-11ef-bf7f-44d9ae77032a",
      publishedAt: "2024-10-08T04:04:00Z",
      content: "CLEVELAND Following one of the most remarkable campaigns weve ever seen from a relief pitcher, it was hard not to get excited about the first time Guardians closer Emmanuel Clase would enter a postse… [+9346 chars]"
    },
    {
      source: {
        id: null,
        name: "[Removed]"
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-10-08T03:55:36Z",
      content: "[Removed]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Eric Bradner, Priscilla Alvarez, Ebony Davis",
      title: "5 takeaways from Kamala Harris’ one-on-one interview with ‘60 Minutes’ - CNN",
      description: "Vice President Kamala Harris faced tough questions about how she’d pay for her economic plans, whether Democrats were too slow to enact border security measures, how she’d confront Russia over its war in Ukraine and more in a wide-ranging “60 Minutes” intervi…",
      url: "https://www.cnn.com/2024/10/07/politics/takeaways-kamala-harris-60-minutes/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2175688585.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-10-08T03:55:00Z",
      content: "Vice President Kamala Harris faced tough questions about how shed pay for her economic plans, whether Democrats were too slow to enact border security measures, how shed confront Russia over its war … [+6587 chars]"
    },
    {
      source: {
        id: "espn",
        name: "ESPN"
      },
      author: "Alden Gonzalez",
      title: "Roberts: Machado's throw into dugout 'unsettling' - ESPN",
      description: "Dave Roberts said Monday that he reviewed footage from Sunday's game of Padres third baseman Manny Machado throwing a ball into the L.A. dugout, seemingly in the Dodgers manager's direction: \"If it was intended at me ... it's pretty disrespectful.\"",
      url: "https://www.espn.com/mlb/story/_/id/41672538/dodgers-manager-dave-roberts-questions-padres-third-baseman-manny-machado-throw-la-dugout",
      urlToImage: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1008%2Fr1397762_1296x729_16%2D9.jpg",
      publishedAt: "2024-10-08T03:33:00Z",
      content: "SAN DIEGO -- The baseball that San Diego Padres third baseman Manny Machado threw toward the Dodgers' dugout Sunday night -- triggering another heated back-and-forth between him and Los Angeles pitch… [+4357 chars]"
    },
    {
      source: {
        id: null,
        name: "New York Post"
      },
      author: "Christian Arnold",
      title: "Taylor Swift’s dad Scott joins her in suite for Travis Kelce’s Chiefs game - New York Post ",
      description: "Taylor Swift wasn’t alone in her return to Arrowhead Stadium to see her beau Travis Kelce and the Chiefs.",
      url: "https://nypost.com/2024/10/07/sports/taylor-swifts-dad-scott-joins-her-for-travis-kelces-chiefs-game/",
      urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2024/10/taylor-swift-seen-attendance-game-91213760_028fc6.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-10-08T02:55:00Z",
      content: "Taylor Swift wasnt alone in her return to Arrowhead Stadium to see her beau Travis Kelce and the Chiefs. \r\nThe pop icon was with her father, Scott Swift, as she looked on from a suite inside the stad… [+2188 chars]"
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg"
      },
      author: "Yoolim Lee",
      title: "Samsung Issues Rare Apology for Weak Results During AI Boom - Bloomberg",
      description: "Samsung Electronics Co. issued an apology to investors for disappointing results, admitting that the once-dominant memory chip giant is grappling with a potential crisis after losing its way.",
      url: "https://www.bloomberg.com/news/articles/2024-10-07/samsung-results-disappoint-as-ai-chip-gap-with-rivals-persists",
      urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iT4eQMBBfAWk/v0/1200x800.jpg",
      publishedAt: "2024-10-08T02:49:00Z",
      content: "Samsung Electronics Co. issued an apology to investors for disappointing results, admitting that the once-dominant memory chip giant is grappling with a potential crisis after losing its way.\r\nJun Yo… [+449 chars]"
    },
    {
      source: {
        id: null,
        name: "KCRA Sacramento"
      },
      author: "Maricela De La Cruz",
      title: "Overdose deaths down in Sacramento County, as San Joaquin County sees increase - KCRA Sacramento",
      description: "The U.S. is experiencing a 10% decrease in the number of fatal overdoses this year.",
      url: "https://www.kcra.com/article/overdose-deaths-down-sacramento-county/62535780",
      urlToImage: "https://kubrick.htvapps.com/vidthumb/86803620-7518-409e-a1cc-f5b98bdd2fc4/22521e32-96f4-4593-8f46-c04d5d235319.jpg?crop=0.793xw:0.791xh;0,0&resize=1200:*",
      publishedAt: "2024-10-08T02:25:00Z",
      content: "SACRAMENTO, Calif. —October is National Substance Use Prevention Month and Sacramento County officials are still pushing their \"Just one pill can kill\r\n,\" campaign as opioid overdose deaths have clai… [+2772 chars]"
    }
  ]
  );
  const [news,setNews]=useState([])
  const [latNews,setLatNews]=useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
//   const apiUrl =
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=c9165c72651c48f687d9ed5f85e5f4a7";
 
const newsApiUrl ="https://newsdata.io/api/1/news?apikey=pub_557360a97618261c6bfc1a5c905e95207183e&q=news&country=in&language=en&category=crime,education,health,top,world"

const urlApi="https://newsdata.io/api/1/news?apikey=pub_557360a97618261c6bfc1a5c905e95207183e&q=news&country=in&language=en&category=other,environment,lifestyle,politics,technology"

  useEffect(() => {
    // newS()
    // Fetch data when the component is mounted
    axios
      .get(newsApiUrl)
      .then((response) => {
        // Handle the response
        setLatNews(response.data.results);
        console.log("response", response.data.results);
      })
      .catch((error) => {
        // Handle error
        setError(error);
        setLoading(false);
      });
  }, []);
//  const newS =() =>{
//   axios
//   .get(urlApi)
//   .then((response) => {
//     // Handle the response
//     setNews(response.data.results);
//     console.log("response", response.data.results);
//   })
//   .catch((error) => {
//     // Handle error
//     setError(error);
//     setLoading(false);
//   });
//  }

  return (<>{
    loading ?  <div className='text-center'>
      <img className='my-3' src={loader} alt="loading" />
      <h3>loading...</h3>
      </div> :  <div className="bg-white">
      <div className=" my-3 bg-white" >
        <div className="row">
         {news.map((box) => (
          <div className=" col-md-3" key={box.id}>
              <div className="card">
                <img
                  src={box.image_url ? box.image_url : Mylogo}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {box.title ? box.title.slice(0, 50) : "."}...
                    <span className="badge text-bg-success">
                      {box.source_name}
                    </span>
                  </h5>
                  <p className="card-text">{box.description ? box.description.slice(0, 100):"."}.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      By:-{box.author ? box.author : "GymaloverDeepak"} . On
                      :- {new Date(box.pubDate).toGMTString()}
                    </small>
                  </p>
                  <a
                    href={box.link}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            
          </div>
          ))}
        </div>
         {latNews.map((box) => (
          <div className=" col-md-3" key={box.id}>
              <div className="card">
                <img
                  src={box.image_url ? box.image_url : Mylogo}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {box.title ? box.title.slice(0, 50) : "."}...
                    <span className="badge text-bg-success">
                      {box.source_name}
                    </span>
                  </h5>
                  <p className="card-text">{box.description ? box.description.slice(0, 100):"."}.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      By:-{box.author ? box.author : "GymaloverDeepak"} . On
                      :- {new Date(box.pubDate).toGMTString()}
                    </small>
                  </p>
                  <a
                    href={box.link}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            
          </div>
          ))}
        {/* <div className="row">
         {data.map((item) => (
          <div className=" col-md-3" key={item.id}>
              <div className="card">
                <img
                  src={item.urlToImage ? item.urlToImage : Mylogo}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.title ? item.title.slice(0, 50) : "."}...
                    <span className="badge text-bg-success">
                      {item.source.name}
                    </span>
                  </h5>
                  <p className="card-text">{item.description ? item.description.slice(0, 100):"."}.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      By:-{item.author ? item.author : "GymaloverDeepak"} . On
                      :- {new Date(item.publishedAt).toGMTString()}{" "}
                    </small>
                  </p>
                  <a
                    href={item.url}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            
          </div>
          ))}
        </div> */}
      </div>
      {news.length ===0 ?  <h2 className='text-center'> No Data Found !! </h2> : ""}
     
      
    </div> }
   
    </>
  );
}

export default News;
