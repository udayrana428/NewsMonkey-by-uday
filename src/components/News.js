// import React, { Component } from 'react'
// import Loading from './Loading'
// import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
//     articles = [
//         // {
//         //     "source": {
//         //     "id": null,
//         //     "name": "Euronews"
//         //     },
//         //     "author": null,
//         //     "title": "COVID pill 'cuts risk of death or hospitalisation by half,' says Merck - Euronews",
//         //     "description": "The company is to ask health officials in the US and around the world to authorise its use. If approved, it would be the first pill shown to treat COVID.",
//         //     "url": "https://www.euronews.com/next/2021/10/02/covid-19-pill-cuts-risk-of-death-or-hospitalisation-by-half-says-us-drugmaker-merck",
//         //     "urlToImage": "https://static.euronews.com/articles/stories/06/12/09/08/1000x563_cmsv2_c9933d5a-b183-576d-9cdf-bbec5bc68aaf-6120908.jpg",
//         //     "publishedAt": "2021-10-03T12:26:06Z",
//         //     "content": "Drugmaker Merck has said that its experimental pill for people sick with COVID-19 reduced hospitalisations and deaths by half, in a potential leap forward in the global fight against the pandemic.\r\nI… [+3200 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "cnn",
//         //     "name": "CNN"
//         //     },
//         //     "author": "Clarissa Ward, Tim Lister and Ehsan Popalzai, CNN",
//         //     "title": "Blast targeting Kabul mosque leaves 'a number of civilians dead,' Taliban say - CNN",
//         //     "description": "An explosion ripped through a crowd outside the entrance of a mosque in central Kabul on Sunday, leaving a number of civilians dead, a Taliban spokesman said.",
//         //     "url": "https://www.cnn.com/2021/10/03/asia/kabul-afghanistan-blast-intl/index.html",
//         //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211003085215-01-kabul-blast-1003-super-tease.jpg",
//         //     "publishedAt": "2021-10-03T12:23:00Z",
//         //     "content": null
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "politico",
//         //     "name": "Politico"
//         //     },
//         //     "author": "Andrew Yang",
//         //     "title": "When I Ran for President, It Messed With My Head - POLITICO",
//         //     "description": "We should worry about what the modern campaign process is doing to all of our leaders.",
//         //     "url": "https://www.politico.com/news/magazine/2021/10/03/andrew-yang-book-excerpt-campaigning-514967",
//         //     "urlToImage": "https://static.politico.com/7c/84/dc8d6322494b9b5e008908d6d172/voss-yang15.jpg",
//         //     "publishedAt": "2021-10-03T11:00:42Z",
//         //     "content": "Thats a bit of what it feels like, running for president. And it should worry us that all of our leaders are subject to it.\r\n***\r\nIn early 2019, still in the thick of the presidential campaign, Zach … [+10833 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "politico",
//         //     "name": "Politico"
//         //     },
//         //     "author": "Associated Press",
//         //     "title": "Trump asks judge to force Twitter to restore his account - POLITICO",
//         //     "description": "He was banned from the Jan. 6 Capitol riot.",
//         //     "url": "https://www.politico.com/news/2021/10/03/twitter-trump-restore-account-514969",
//         //     "urlToImage": "https://static.politico.com/16/06/ba5806824cd897243497fcae4337/mag-trump-twitter-coronavirus-773.jpg",
//         //     "publishedAt": "2021-10-03T10:48:29Z",
//         //     "content": "The company permanently banned Trump from its platform days after his followers violently stormed the Capitol building to try to block Congress from certifying Joe Bidens presidential win. Twitter ci… [+678 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "politico",
//         //     "name": "Politico"
//         //     },
//         //     "author": "Associated Press",
//         //     "title": "Chinese warplanes fly toward Taiwan for 2nd straight day - POLITICO",
//         //     "description": "Taiwan’s Defense Ministry said 39 aircraft entered Taiwan’s air defense identification zone.",
//         //     "url": "https://www.politico.com/news/2021/10/03/chinese-warplanes-fly-toward-taiwan-for-2nd-straight-day-514968",
//         //     "urlToImage": "https://static.politico.com/93/73/4f0de618481c8ed301caaf06f763/ap20304114304845.jpg",
//         //     "publishedAt": "2021-10-03T10:37:30Z",
//         //     "content": "Chinese President Xi Jinping speaks in Beijing on Oct 29, 2020. | Ju Peng/Xinhua via AP\r\nBy ASSOCIATED PRESS\r\n10/03/2021 06:37 AM EDT\r\nTAIPEI, Taiwan China flew more than 30 military planes toward Ta… [+620 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "SciTechDaily"
//         //     },
//         //     "author": null,
//         //     "title": "BepiColombo Captures Stunning Mercury Images During Close Gravity Assist Flyby - SciTechDaily",
//         //     "description": "The ESA/JAXA BepiColombo mission has captured its first views of its destination planet Mercury as it swooped past in a close gravity assist flyby last night. The closest approach took place at 23:34 UTC on October 1, 2021, at an altitude of 199 km from the p…",
//         //     "url": "https://scitechdaily.com/bepicolombo-captures-stunning-mercury-images-during-close-gravity-assist-flyby/",
//         //     "urlToImage": "https://scitechdaily.com/images/BepiColombo-First-Mercury-Flyby.gif",
//         //     "publishedAt": "2021-10-03T10:32:11Z",
//         //     "content": "ByEuropean Space Agency (ESA)October 3, 2021\r\nArtist impression of BepiColombo flying by Mercury on October 1, 2021. The spacecraft makes nine gravity assist maneuvers (one of Earth, two of Venus, an… [+4380 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "the-wall-street-journal",
//         //     "name": "The Wall Street Journal"
//         //     },
//         //     "author": "Peter Santilli",
//         //     "title": "China’s Evergrande Debt Crisis: Sizing Up a Big Mess - The Wall Street Journal",
//         //     "description": "The property behemoth’s potential default stands to be one of the largest ever",
//         //     "url": "https://www.wsj.com/articles/chinas-evergrande-debt-crisis-sizing-up-a-big-mess-11633253402",
//         //     "urlToImage": "https://images.wsj.net/im-408940/social",
//         //     "publishedAt": "2021-10-03T09:30:00Z",
//         //     "content": "China Evergrande Group last month missed a scheduled interest payment to overseas bondholders, raising the prospect that October could bring one of the largest defaults in years.\r\nInvestors have been… [+329 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "the-washington-post",
//         //     "name": "The Washington Post"
//         //     },
//         //     "author": "Rachel Pannett",
//         //     "title": "Dead birds and fish wash ashore as 13-square-mile oil spill reaches Southern California coast - The Washington Post",
//         //     "description": "Local officials are warning of a possible ecological disaster, as the Coast Guard and state and local response teams rush to contain the spill.",
//         //     "url": "https://www.washingtonpost.com/nation/2021/10/03/oil-spill-california-huntington-newport/",
//         //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TSVNWEBD4MI6ZKGZBAT2FJFZCU.jpg&w=1440",
//         //     "publishedAt": "2021-10-03T09:13:58Z",
//         //     "content": "Katrina Foley, an Orange County supervisor, tweeted that the oil spilled from Platform Elly, operated by Beta Offshore, a Long Beach, Calif., unit of Houstons Amplify Energy. She said birds and fish … [+2459 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "ESPN"
//         //     },
//         //     "author": "Adam Schefter",
//         //     "title": "If Tampa Bay Buccaneers' Tom Brady sets NFL all-time passing record, New England Patriots will pause to acknowledge, won't stop game - ESPN",
//         //     "description": "If Tom Brady sets the NFL all-time passing record Sunday night at New England, the Patriots will pause to acknowledge it but not stop the game for a ceremony, a team official told ESPN's Adam Schefter.",
//         //     "url": "https://www.espn.com/nfl/story/_/id/32327832/if-tampa-bay-buccaneers-tom-brady-sets-nfl-all-passing-record-new-england-patriots-pause-acknowledge-stop-game",
//         //     "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0909%2Fr906794_1296x729_16%2D9.jpg",
//         //     "publishedAt": "2021-10-03T09:06:55Z",
//         //     "content": "If Tampa Bay Buccaneers quarterback Tom Brady sets the NFL all-time passing record Sunday night against his former team, and he needs only 68 yards to do it, the New England Patriots will pause to ac… [+1728 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "New York Times"
//         //     },
//         //     "author": "Kurt Streeter",
//         //     "title": "The League of Megan Rapinoe and Alex Morgan Deserves Respect - The New York Times",
//         //     "description": "Players in the National Women’s Soccer League are demanding the respect all female athletes deserve but rarely get.",
//         //     "url": "https://www.nytimes.com/2021/10/03/sports/soccer/women-soccer-league-abuse.html",
//         //     "urlToImage": "https://static01.nyt.com/images/2021/10/02/us/02sot-streeter/02sot-streeter-facebookJumbo.jpg",
//         //     "publishedAt": "2021-10-03T09:00:09Z",
//         //     "content": "In an investigation published this week by The Athletic, current and former players accused North Carolina Courage manager Paul Riley of emotionally abusing players and coercing them into sex. Though… [+1385 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "nbc-news",
//         //     "name": "NBC News"
//         //     },
//         //     "author": "Sahil Kapur",
//         //     "title": "Sinema plugged as iconoclast in Arizona as she threatens Biden's agenda - NBC News",
//         //     "description": "Sinema plugged as iconoclast in Arizona as she threatens Biden's agenda",
//         //     "url": "https://www.nbcnews.com/politics/congress/sinema-plugged-iconoclast-arizona-she-threatens-biden-s-agenda-n1280600",
//         //     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_39/3509203/210929-kyrsten-sinema-se-438p.jpg",
//         //     "publishedAt": "2021-10-03T08:30:42Z",
//         //     "content": "WASHINGTON The mailers on behalf of Sen. Kyrsten Sinema, D-Ariz., being sent out to homes across Arizona paint a picture of a renegade politician who delivers results.\r\n\"Independent Leader.\" \"Straigh… [+5716 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "TMZ"
//         //     },
//         //     "author": "TMZ Staff",
//         //     "title": "Kanye West Files 'Donda' Trademark for Apparent Tech Line - TMZ",
//         //     "description": "Kanye West files 'Donda' trademark for apparent tech line.",
//         //     "url": "https://www.tmz.com/2021/10/03/kanye-west-files-donda-trademark-tech-line/",
//         //     "urlToImage": "https://imagez.tmz.com/image/d5/16by9/2021/09/30/d5ad4e0a77b44208a711a9cbd49aacff_xl.jpg",
//         //     "publishedAt": "2021-10-03T08:00:00Z",
//         //     "content": "Kanye West has always been obsessed with Apple, and his latest possible venture could put Yeezy in direct competition with the tech giant.\r\nAccording to legal docs, obtained by TMZ, Ye's company file… [+1210 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "cnn",
//         //     "name": "CNN"
//         //     },
//         //     "author": "Travis Caldwell, CNN",
//         //     "title": "'Every one of those deaths is unnecessary,' expert says of rising Covid-19 US death toll as tens of millions remain unvaccinated - CNN",
//         //     "description": "With a first-of-its-kind antiviral pill against Covid-19 potentially headed towards distribution, the health care community may soon have another tool to combat a virus that has claimed the lives of more than 700,000 Americans.",
//         //     "url": "https://www.cnn.com/2021/10/03/health/us-coronavirus-sunday/index.html",
//         //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211002235331-restricted-pfizer-covid-19-vaccine-alabama-08-28-2021-super-tease.jpg",
//         //     "publishedAt": "2021-10-03T07:43:00Z",
//         //     "content": "(CNN)With a first-of-its-kind antiviral pill against Covid-19 potentially headed towards distribution, the health care community may soon have another tool to combat a virus that has claimed the live… [+7342 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": "independent",
//         //     "name": "Independent"
//         //     },
//         //     "author": "Elizabeth Aubrey",
//         //     "title": "SNL: Pete Davidson’s Dog The Bounty Hunter impression causes controversy with reference to Brian Laundrie - The Independent",
//         //     "description": "The 47th season of Saturday Night Live began this evening in New York",
//         //     "url": "https://www.independent.co.uk/arts-entertainment/tv/news/snl-pete-davidson-dog-bounty-hunter-b1931343.html",
//         //     "urlToImage": "https://static.independent.co.uk/2021/10/03/05/Pete%20Davison%20Dog%20Bounty%20Hunter.jpg?width=1200&auto=webp&quality=75",
//         //     "publishedAt": "2021-10-03T07:09:33Z",
//         //     "content": "Fans on social media have been reacting to the season premiere of SNL tonight including Pete Davidsons impression of Dog The Bounty Hunter during an opening sketch.\r\nDavidsons character is at a schoo… [+1502 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "New York Times"
//         //     },
//         //     "author": "Amy Julia Harris",
//         //     "title": "Housing Boss Earns $1 Million to Run Shelters Despite a Troubled Past - The New York Times",
//         //     "description": "Some executives at nonprofit groups that operate New York City homeless shelters are benefiting from the plight of the people they serve.",
//         //     "url": "https://www.nytimes.com/2021/10/03/nyregion/jack-brown-homeless-nyc-core-services.html",
//         //     "urlToImage": "https://static01.nyt.com/images/2021/09/14/nyregion/00nyhomeless-top/00nyhomeless-top-facebookJumbo.jpg",
//         //     "publishedAt": "2021-10-03T07:00:13Z",
//         //     "content": "Last year, the New York attorney generals office opened a criminal investigation into Jenny Rivera, then the chief executive of another group, Aguila, on suspicion of bribery and money laundering, ac… [+2280 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "Sports Illustrated"
//         //     },
//         //     "author": "Richard Johnson",
//         //     "title": "Order Restored in College Football Rankings as Georgia, Alabama Dominate Opponents - CalBearsMaven",
//         //     "description": "The SEC powerhouses continue to separate themselves from the pack. Plus, why Coastal Carolina has jumped into SI's Top 10.",
//         //     "url": "https://www.si.com/college/2021/10/03/ncaa-college-football-rankings-order-restored-georgia-alabama",
//         //     "urlToImage": "https://www.si.com/.image/t_share/MTg0Mjk0MDQ2MDk5ODQyMDcz/georgia-arkansas-oct-2-ncaa-rankings.jpg",
//         //     "publishedAt": "2021-10-03T06:44:00Z",
//         //     "content": "Arkansas, Oregon and Florida each bit the dust as Top 10 teams in the AP poll went on the road to unfriendly confines. At least Arkansas was a 19-point underdog, the same cannot be said for the favor… [+5016 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "HuffPost"
//         //     },
//         //     "author": "Mary Papenfuss",
//         //     "title": "Owen Wilson Is Slacker Perfection In 'Saturday Night Live' Monologue - HuffPost",
//         //     "description": "“Put on your coziest flannel and maybe we just chill out for the next 90 minutes,\" says laid-back \"SNL\" host.",
//         //     "url": "https://www.huffpost.com/entry/owen-wilson-snl-monologue-slacker_n_61593ec0e4b05040d1dbaac1",
//         //     "urlToImage": "https://img.huffingtonpost.com/asset/61594baa280000140ea7281b.png?cache=pqZ2AL2nmj&ops=1778_1000",
//         //     "publishedAt": "2021-10-03T06:31:30Z",
//         //     "content": "An extremely laid-back Owen Wilson urged viewers on Saturday Night Lives Season 47 premiere monologue to put on your coziest flannel and maybe we just chill out for the next 90 minutes.\r\nHe quipped t… [+1079 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "Daily Mail"
//         //     },
//         //     "author": "Kristy Johnson",
//         //     "title": "Britney Spears says she still has 'a lot of healing to do' but has 'things to celebrate in my life' - Daily Mail",
//         //     "description": "Britney Spears has said that although she is celebrating recent changes in her life, she is going to take some time to 'slow down and breathe'. Spears made the announcement Saturday on Instagram.",
//         //     "url": "https://www.dailymail.co.uk/news/article-10053851/Britney-Spears-says-lot-healing-things-celebrate-life.html",
//         //     "urlToImage": "https://i.dailymail.co.uk/1s/2021/10/03/07/48696773-0-image-a-43_1633241218843.jpg",
//         //     "publishedAt": "2021-10-03T06:10:16Z",
//         //     "content": "Britney Spears has said that she has a lot of things to celebrate, but said there is still plenty of healing to be done in a post following end of father Jamie's $60million conservatorship.\r\nIn an In… [+14061 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "New York Post"
//         //     },
//         //     "author": "Ken Davidoff",
//         //     "title": "Every Yankees playoff scenario on what could be 'wild' final day - New York Post ",
//         //     "description": "The Yankees have placed themselves in quite a jam, with two straight losses to the Rays leaving them guaranteed of nothing beyond a 163rd regular-season game.",
//         //     "url": "https://nypost.com/2021/10/03/every-yankees-playoff-al-wild-card-scenario-on-final-day/",
//         //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/10/DSC_4118.jpg?quality=90&strip=all&w=1024",
//         //     "publishedAt": "2021-10-03T05:12:00Z",
//         //     "content": "The Yankees have placed themselves in quite a jam, with two straight losses to the Rays leaving them guaranteed of nothing beyond a 163rd regular-season game.\r\nBeat the Rays on Sunday and the Yankees… [+2390 chars]"
//         //     },
//         //     {
//         //     "source": {
//         //     "id": null,
//         //     "name": "Daily Mail"
//         //     },
//         //     "author": "Christina Coulter",
//         //     "title": "Donald Trump reveals he had Pfizer vaccine before he left office, and might get booster shot - Daily Mail",
//         //     "description": "Former President Donald Trump revealed he got Pfizer's COVID vaccine before leaving office and that he may get a booster shot if he 'feels it is necessary.'",
//         //     "url": "https://www.dailymail.co.uk/news/article-10053281/Donald-Trump-reveals-Pfizer-vaccine-left-office-booster-shot.html",
//         //     "urlToImage": "https://i.dailymail.co.uk/1s/2021/10/03/01/48690829-0-image-a-6_1633220575386.jpg",
//         //     "publishedAt": "2021-10-03T03:58:53Z",
//         //     "content": "Former President Donald Trump has revealed he got Pfizer's COVID vaccine before leaving office - and that he may get a booster shot if he thinks it is necessary.\r\nTrump had not previously announced w… [+4299 chars]"
//         //     }
//     ]
//     static defaultProps = {
//         country: "in",
//         pageSize: 10,
//         category: "general"
//     }
//     static defaultProps = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1)
//     }
//     constructor(props) {
//         super(props)
//         this.state = {
//             article: this.articles,
//             loading: true,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(props.category)}-NewsMonkey`
//     }
//     async updateNews() {
//         props.setProgress(0)
//         this.setState({ loading: true })
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`
//         props.setProgress(50)
//         let data = await fetch(url)
//         props.setProgress(70)
//         let parsedData = await data.json()
//         this.setState({ article: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
//         props.setProgress(100)
//     }
//     async componentDidMount() {
//         this.updateNews()
//     }
//     handleprev = async () => {
//         await this.setState({ page: page - 1 })
//         await this.updateNews()
//     }
//     handlenext = async () => {
//         await this.setState({ page: page + 1 })
//         await this.updateNews()
//     }
//     fetchMoreData =async () => {
//             this.setState({ page: page + 1 });
//             const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`
//             let data = await fetch(url)
//             let parsedData = await data.json()
//             console.log(parsedData)
//             this.setState({ article: article.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false })
//     };
//     render() {
//         return (
//             <>

//                 <h2 className="text-center">NewsMonkey - Top Headlines from {this.capitalizeFirstLetter(props.category)}</h2>
//                 {loading && <Loading />}
//                 <InfiniteScroll
//                     dataLength={article.length}
//                     next={this.fetchMoreData}
//                     hasMore={article.length !== totalResults}
//                     loader={<Loading />}
//                 >
//                     <div className="container">
//                         <div className="row">
//                             {!loading && article.map((element) => {
//                                 return <div className="col-md-4" key={element.url}>
//                                     <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
//                                 </div>
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>
//                 {/* <div className="pre-next d-flex justify-content-around">
//                     <button disabled={page <= 1} className="prev-btn btn btn-dark" onClick={this.handleprev}>&laquo; Previous</button>
//                     <button disabled={page + 2 > Math.ceil(totalResults / 10)} className="next-btn btn btn-dark" onClick={this.handlenext}>Next &raquo; </button>
//                 </div> */}
//             </>
//         )
//     }
// }

// export default News
import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const articles = [
        // {
        //     "source": {
        //     "id": null,
        //     "name": "Euronews"
        //     },
        //     "author": null,
        //     "title": "COVID pill 'cuts risk of death or hospitalisation by half,' says Merck - Euronews",
        //     "description": "The company is to ask health officials in the US and around the world to authorise its use. If approved, it would be the first pill shown to treat COVID.",
        //     "url": "https://www.euronews.com/next/2021/10/02/covid-19-pill-cuts-risk-of-death-or-hospitalisation-by-half-says-us-drugmaker-merck",
        //     "urlToImage": "https://static.euronews.com/articles/stories/06/12/09/08/1000x563_cmsv2_c9933d5a-b183-576d-9cdf-bbec5bc68aaf-6120908.jpg",
        //     "publishedAt": "2021-10-03T12:26:06Z",
        //     "content": "Drugmaker Merck has said that its experimental pill for people sick with COVID-19 reduced hospitalisations and deaths by half, in a potential leap forward in the global fight against the pandemic.\r\nI… [+3200 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "cnn",
        //     "name": "CNN"
        //     },
        //     "author": "Clarissa Ward, Tim Lister and Ehsan Popalzai, CNN",
        //     "title": "Blast targeting Kabul mosque leaves 'a number of civilians dead,' Taliban say - CNN",
        //     "description": "An explosion ripped through a crowd outside the entrance of a mosque in central Kabul on Sunday, leaving a number of civilians dead, a Taliban spokesman said.",
        //     "url": "https://www.cnn.com/2021/10/03/asia/kabul-afghanistan-blast-intl/index.html",
        //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211003085215-01-kabul-blast-1003-super-tease.jpg",
        //     "publishedAt": "2021-10-03T12:23:00Z",
        //     "content": null
        //     },
        //     {
        //     "source": {
        //     "id": "politico",
        //     "name": "Politico"
        //     },
        //     "author": "Andrew Yang",
        //     "title": "When I Ran for President, It Messed With My Head - POLITICO",
        //     "description": "We should worry about what the modern campaign process is doing to all of our leaders.",
        //     "url": "https://www.politico.com/news/magazine/2021/10/03/andrew-yang-book-excerpt-campaigning-514967",
        //     "urlToImage": "https://static.politico.com/7c/84/dc8d6322494b9b5e008908d6d172/voss-yang15.jpg",
        //     "publishedAt": "2021-10-03T11:00:42Z",
        //     "content": "Thats a bit of what it feels like, running for president. And it should worry us that all of our leaders are subject to it.\r\n***\r\nIn early 2019, still in the thick of the presidential campaign, Zach … [+10833 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "politico",
        //     "name": "Politico"
        //     },
        //     "author": "Associated Press",
        //     "title": "Trump asks judge to force Twitter to restore his account - POLITICO",
        //     "description": "He was banned from the Jan. 6 Capitol riot.",
        //     "url": "https://www.politico.com/news/2021/10/03/twitter-trump-restore-account-514969",
        //     "urlToImage": "https://static.politico.com/16/06/ba5806824cd897243497fcae4337/mag-trump-twitter-coronavirus-773.jpg",
        //     "publishedAt": "2021-10-03T10:48:29Z",
        //     "content": "The company permanently banned Trump from its platform days after his followers violently stormed the Capitol building to try to block Congress from certifying Joe Bidens presidential win. Twitter ci… [+678 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "politico",
        //     "name": "Politico"
        //     },
        //     "author": "Associated Press",
        //     "title": "Chinese warplanes fly toward Taiwan for 2nd straight day - POLITICO",
        //     "description": "Taiwan’s Defense Ministry said 39 aircraft entered Taiwan’s air defense identification zone.",
        //     "url": "https://www.politico.com/news/2021/10/03/chinese-warplanes-fly-toward-taiwan-for-2nd-straight-day-514968",
        //     "urlToImage": "https://static.politico.com/93/73/4f0de618481c8ed301caaf06f763/ap20304114304845.jpg",
        //     "publishedAt": "2021-10-03T10:37:30Z",
        //     "content": "Chinese President Xi Jinping speaks in Beijing on Oct 29, 2020. | Ju Peng/Xinhua via AP\r\nBy ASSOCIATED PRESS\r\n10/03/2021 06:37 AM EDT\r\nTAIPEI, Taiwan China flew more than 30 military planes toward Ta… [+620 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "SciTechDaily"
        //     },
        //     "author": null,
        //     "title": "BepiColombo Captures Stunning Mercury Images During Close Gravity Assist Flyby - SciTechDaily",
        //     "description": "The ESA/JAXA BepiColombo mission has captured its first views of its destination planet Mercury as it swooped past in a close gravity assist flyby last night. The closest approach took place at 23:34 UTC on October 1, 2021, at an altitude of 199 km from the p…",
        //     "url": "https://scitechdaily.com/bepicolombo-captures-stunning-mercury-images-during-close-gravity-assist-flyby/",
        //     "urlToImage": "https://scitechdaily.com/images/BepiColombo-First-Mercury-Flyby.gif",
        //     "publishedAt": "2021-10-03T10:32:11Z",
        //     "content": "ByEuropean Space Agency (ESA)October 3, 2021\r\nArtist impression of BepiColombo flying by Mercury on October 1, 2021. The spacecraft makes nine gravity assist maneuvers (one of Earth, two of Venus, an… [+4380 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "the-wall-street-journal",
        //     "name": "The Wall Street Journal"
        //     },
        //     "author": "Peter Santilli",
        //     "title": "China’s Evergrande Debt Crisis: Sizing Up a Big Mess - The Wall Street Journal",
        //     "description": "The property behemoth’s potential default stands to be one of the largest ever",
        //     "url": "https://www.wsj.com/articles/chinas-evergrande-debt-crisis-sizing-up-a-big-mess-11633253402",
        //     "urlToImage": "https://images.wsj.net/im-408940/social",
        //     "publishedAt": "2021-10-03T09:30:00Z",
        //     "content": "China Evergrande Group last month missed a scheduled interest payment to overseas bondholders, raising the prospect that October could bring one of the largest defaults in years.\r\nInvestors have been… [+329 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "the-washington-post",
        //     "name": "The Washington Post"
        //     },
        //     "author": "Rachel Pannett",
        //     "title": "Dead birds and fish wash ashore as 13-square-mile oil spill reaches Southern California coast - The Washington Post",
        //     "description": "Local officials are warning of a possible ecological disaster, as the Coast Guard and state and local response teams rush to contain the spill.",
        //     "url": "https://www.washingtonpost.com/nation/2021/10/03/oil-spill-california-huntington-newport/",
        //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TSVNWEBD4MI6ZKGZBAT2FJFZCU.jpg&w=1440",
        //     "publishedAt": "2021-10-03T09:13:58Z",
        //     "content": "Katrina Foley, an Orange County supervisor, tweeted that the oil spilled from Platform Elly, operated by Beta Offshore, a Long Beach, Calif., unit of Houstons Amplify Energy. She said birds and fish … [+2459 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "ESPN"
        //     },
        //     "author": "Adam Schefter",
        //     "title": "If Tampa Bay Buccaneers' Tom Brady sets NFL all-time passing record, New England Patriots will pause to acknowledge, won't stop game - ESPN",
        //     "description": "If Tom Brady sets the NFL all-time passing record Sunday night at New England, the Patriots will pause to acknowledge it but not stop the game for a ceremony, a team official told ESPN's Adam Schefter.",
        //     "url": "https://www.espn.com/nfl/story/_/id/32327832/if-tampa-bay-buccaneers-tom-brady-sets-nfl-all-passing-record-new-england-patriots-pause-acknowledge-stop-game",
        //     "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0909%2Fr906794_1296x729_16%2D9.jpg",
        //     "publishedAt": "2021-10-03T09:06:55Z",
        //     "content": "If Tampa Bay Buccaneers quarterback Tom Brady sets the NFL all-time passing record Sunday night against his former team, and he needs only 68 yards to do it, the New England Patriots will pause to ac… [+1728 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "New York Times"
        //     },
        //     "author": "Kurt Streeter",
        //     "title": "The League of Megan Rapinoe and Alex Morgan Deserves Respect - The New York Times",
        //     "description": "Players in the National Women’s Soccer League are demanding the respect all female athletes deserve but rarely get.",
        //     "url": "https://www.nytimes.com/2021/10/03/sports/soccer/women-soccer-league-abuse.html",
        //     "urlToImage": "https://static01.nyt.com/images/2021/10/02/us/02sot-streeter/02sot-streeter-facebookJumbo.jpg",
        //     "publishedAt": "2021-10-03T09:00:09Z",
        //     "content": "In an investigation published this week by The Athletic, current and former players accused North Carolina Courage manager Paul Riley of emotionally abusing players and coercing them into sex. Though… [+1385 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "nbc-news",
        //     "name": "NBC News"
        //     },
        //     "author": "Sahil Kapur",
        //     "title": "Sinema plugged as iconoclast in Arizona as she threatens Biden's agenda - NBC News",
        //     "description": "Sinema plugged as iconoclast in Arizona as she threatens Biden's agenda",
        //     "url": "https://www.nbcnews.com/politics/congress/sinema-plugged-iconoclast-arizona-she-threatens-biden-s-agenda-n1280600",
        //     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_39/3509203/210929-kyrsten-sinema-se-438p.jpg",
        //     "publishedAt": "2021-10-03T08:30:42Z",
        //     "content": "WASHINGTON The mailers on behalf of Sen. Kyrsten Sinema, D-Ariz., being sent out to homes across Arizona paint a picture of a renegade politician who delivers results.\r\n\"Independent Leader.\" \"Straigh… [+5716 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "TMZ"
        //     },
        //     "author": "TMZ Staff",
        //     "title": "Kanye West Files 'Donda' Trademark for Apparent Tech Line - TMZ",
        //     "description": "Kanye West files 'Donda' trademark for apparent tech line.",
        //     "url": "https://www.tmz.com/2021/10/03/kanye-west-files-donda-trademark-tech-line/",
        //     "urlToImage": "https://imagez.tmz.com/image/d5/16by9/2021/09/30/d5ad4e0a77b44208a711a9cbd49aacff_xl.jpg",
        //     "publishedAt": "2021-10-03T08:00:00Z",
        //     "content": "Kanye West has always been obsessed with Apple, and his latest possible venture could put Yeezy in direct competition with the tech giant.\r\nAccording to legal docs, obtained by TMZ, Ye's company file… [+1210 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "cnn",
        //     "name": "CNN"
        //     },
        //     "author": "Travis Caldwell, CNN",
        //     "title": "'Every one of those deaths is unnecessary,' expert says of rising Covid-19 US death toll as tens of millions remain unvaccinated - CNN",
        //     "description": "With a first-of-its-kind antiviral pill against Covid-19 potentially headed towards distribution, the health care community may soon have another tool to combat a virus that has claimed the lives of more than 700,000 Americans.",
        //     "url": "https://www.cnn.com/2021/10/03/health/us-coronavirus-sunday/index.html",
        //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211002235331-restricted-pfizer-covid-19-vaccine-alabama-08-28-2021-super-tease.jpg",
        //     "publishedAt": "2021-10-03T07:43:00Z",
        //     "content": "(CNN)With a first-of-its-kind antiviral pill against Covid-19 potentially headed towards distribution, the health care community may soon have another tool to combat a virus that has claimed the live… [+7342 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "independent",
        //     "name": "Independent"
        //     },
        //     "author": "Elizabeth Aubrey",
        //     "title": "SNL: Pete Davidson’s Dog The Bounty Hunter impression causes controversy with reference to Brian Laundrie - The Independent",
        //     "description": "The 47th season of Saturday Night Live began this evening in New York",
        //     "url": "https://www.independent.co.uk/arts-entertainment/tv/news/snl-pete-davidson-dog-bounty-hunter-b1931343.html",
        //     "urlToImage": "https://static.independent.co.uk/2021/10/03/05/Pete%20Davison%20Dog%20Bounty%20Hunter.jpg?width=1200&auto=webp&quality=75",
        //     "publishedAt": "2021-10-03T07:09:33Z",
        //     "content": "Fans on social media have been reacting to the season premiere of SNL tonight including Pete Davidsons impression of Dog The Bounty Hunter during an opening sketch.\r\nDavidsons character is at a schoo… [+1502 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "New York Times"
        //     },
        //     "author": "Amy Julia Harris",
        //     "title": "Housing Boss Earns $1 Million to Run Shelters Despite a Troubled Past - The New York Times",
        //     "description": "Some executives at nonprofit groups that operate New York City homeless shelters are benefiting from the plight of the people they serve.",
        //     "url": "https://www.nytimes.com/2021/10/03/nyregion/jack-brown-homeless-nyc-core-services.html",
        //     "urlToImage": "https://static01.nyt.com/images/2021/09/14/nyregion/00nyhomeless-top/00nyhomeless-top-facebookJumbo.jpg",
        //     "publishedAt": "2021-10-03T07:00:13Z",
        //     "content": "Last year, the New York attorney generals office opened a criminal investigation into Jenny Rivera, then the chief executive of another group, Aguila, on suspicion of bribery and money laundering, ac… [+2280 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Sports Illustrated"
        //     },
        //     "author": "Richard Johnson",
        //     "title": "Order Restored in College Football Rankings as Georgia, Alabama Dominate Opponents - CalBearsMaven",
        //     "description": "The SEC powerhouses continue to separate themselves from the pack. Plus, why Coastal Carolina has jumped into SI's Top 10.",
        //     "url": "https://www.si.com/college/2021/10/03/ncaa-college-football-rankings-order-restored-georgia-alabama",
        //     "urlToImage": "https://www.si.com/.image/t_share/MTg0Mjk0MDQ2MDk5ODQyMDcz/georgia-arkansas-oct-2-ncaa-rankings.jpg",
        //     "publishedAt": "2021-10-03T06:44:00Z",
        //     "content": "Arkansas, Oregon and Florida each bit the dust as Top 10 teams in the AP poll went on the road to unfriendly confines. At least Arkansas was a 19-point underdog, the same cannot be said for the favor… [+5016 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "HuffPost"
        //     },
        //     "author": "Mary Papenfuss",
        //     "title": "Owen Wilson Is Slacker Perfection In 'Saturday Night Live' Monologue - HuffPost",
        //     "description": "“Put on your coziest flannel and maybe we just chill out for the next 90 minutes,\" says laid-back \"SNL\" host.",
        //     "url": "https://www.huffpost.com/entry/owen-wilson-snl-monologue-slacker_n_61593ec0e4b05040d1dbaac1",
        //     "urlToImage": "https://img.huffingtonpost.com/asset/61594baa280000140ea7281b.png?cache=pqZ2AL2nmj&ops=1778_1000",
        //     "publishedAt": "2021-10-03T06:31:30Z",
        //     "content": "An extremely laid-back Owen Wilson urged viewers on Saturday Night Lives Season 47 premiere monologue to put on your coziest flannel and maybe we just chill out for the next 90 minutes.\r\nHe quipped t… [+1079 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Daily Mail"
        //     },
        //     "author": "Kristy Johnson",
        //     "title": "Britney Spears says she still has 'a lot of healing to do' but has 'things to celebrate in my life' - Daily Mail",
        //     "description": "Britney Spears has said that although she is celebrating recent changes in her life, she is going to take some time to 'slow down and breathe'. Spears made the announcement Saturday on Instagram.",
        //     "url": "https://www.dailymail.co.uk/news/article-10053851/Britney-Spears-says-lot-healing-things-celebrate-life.html",
        //     "urlToImage": "https://i.dailymail.co.uk/1s/2021/10/03/07/48696773-0-image-a-43_1633241218843.jpg",
        //     "publishedAt": "2021-10-03T06:10:16Z",
        //     "content": "Britney Spears has said that she has a lot of things to celebrate, but said there is still plenty of healing to be done in a post following end of father Jamie's $60million conservatorship.\r\nIn an In… [+14061 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "New York Post"
        //     },
        //     "author": "Ken Davidoff",
        //     "title": "Every Yankees playoff scenario on what could be 'wild' final day - New York Post ",
        //     "description": "The Yankees have placed themselves in quite a jam, with two straight losses to the Rays leaving them guaranteed of nothing beyond a 163rd regular-season game.",
        //     "url": "https://nypost.com/2021/10/03/every-yankees-playoff-al-wild-card-scenario-on-final-day/",
        //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/10/DSC_4118.jpg?quality=90&strip=all&w=1024",
        //     "publishedAt": "2021-10-03T05:12:00Z",
        //     "content": "The Yankees have placed themselves in quite a jam, with two straight losses to the Rays leaving them guaranteed of nothing beyond a 163rd regular-season game.\r\nBeat the Rays on Sunday and the Yankees… [+2390 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Daily Mail"
        //     },
        //     "author": "Christina Coulter",
        //     "title": "Donald Trump reveals he had Pfizer vaccine before he left office, and might get booster shot - Daily Mail",
        //     "description": "Former President Donald Trump revealed he got Pfizer's COVID vaccine before leaving office and that he may get a booster shot if he 'feels it is necessary.'",
        //     "url": "https://www.dailymail.co.uk/news/article-10053281/Donald-Trump-reveals-Pfizer-vaccine-left-office-booster-shot.html",
        //     "urlToImage": "https://i.dailymail.co.uk/1s/2021/10/03/01/48690829-0-image-a-6_1633220575386.jpg",
        //     "publishedAt": "2021-10-03T03:58:53Z",
        //     "content": "Former President Donald Trump has revealed he got Pfizer's COVID vaccine before leaving office - and that he may get a booster shot if he thinks it is necessary.\r\nTrump had not previously announced w… [+4299 chars]"
        //     }
    ]
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const [article, setarticle] = useState(articles)
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const updateNews = async () => {
        props.setProgress(0)
        setloading(true)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`
        props.setProgress(30)
        let data = await fetch(url)
        props.setProgress(50)
        let parsedData = await data.json()
        setarticle(parsedData.articles)
        settotalResults(parsedData.totalResults)
        props.setProgress(70)
        setloading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        updateNews()
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
        // eslint-disable-next-line
    }, [])
    // const handleprev = async () => {
    //     await setpage(page - 1)
    //     await updateNews()
    // }
    // const handlenext = async () => {
    //     await setpage(page + 1)
    //     await updateNews()
    // }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page + 1}&pagesize=${props.pageSize}`
        setpage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        setarticle(article.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setloading(false)
    };
    return (
        <>

            <h2 className="text-center" style={{margin:"20px 0",marginTop:'70px'}}>NewsMonkey - Top Headlines from {capitalizeFirstLetter(props.category)}</h2>
            {loading && <Loading />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResults}
                loader={<Loading />}
            >
                <div className="container">
                    <div className="row">
                        {!loading && article.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="pre-next d-flex justify-content-around">
                    <button disabled={page <= 1} className="prev-btn btn btn-dark" onClick={this.handleprev}>&laquo; Previous</button>
                    <button disabled={page + 2 > Math.ceil(totalResults / 10)} className="next-btn btn btn-dark" onClick={this.handlenext}>Next &raquo; </button>
                </div> */}
        </>
    )
}
News.defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general"
}
News.defaultProps = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
