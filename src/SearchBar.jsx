import React, {useState}from 'react';
import './styles.css'


// const myObject = [
//     {
//         "title": "Irish Weather - Met Eireann predict fog with sunny spells as temperatures set to reach 25C",
//         "description": "MET EIREANN predict a mainly dry day with sunny spells in the south of Ireland, with scattered patches of light rain and drizzle affecting Connacht an",
//         "content": "MET EIREANN predict a mainly dry day with sunny spells in the south of Ireland, with scattered patches of light rain and drizzle affecting Connacht and Ulster today.\nAs the week kicks off, highest temperatures are set to reach between 20C to 25C acro... [2880 chars]",
//         "url": "https://www.thesun.ie/news/7556618/irish-weather-met-eireann-fog-sunny-spells/",
//         "image": "https://www.thesun.ie/wp-content/uploads/sites/3/2021/09/Copy-of-woodies_comp-10.png?strip=all&quality=100&w=1200&h=800&crop=1",
//         "publishedAt": "2021-09-06T08:04:06Z",
//         "source": {
//             "name": "The Irish Sun",
//             "url": "https://www.thesun.ie"
//         }
//     },
//     {
//         "title": "Japan's COVID minister Kono popular with voters for PM, may get heavyweight backing - media",
//         "description": "Kono has long been a favoured candidate among voters for prime minister and has made no secret of wanting the job, but party elders are wary of him for his outspokenness and reputation as a maverick. Others feel he is still too young for the job, though media reported at the weekend he had secured Suga's backing.",
//         "content": "Taro Kono, Japan's minister in charge of fighting COVID-19 and a top choice of voters for Japanese prime minister, may also pick up the backing of a popular ruling party heavyweight in the race for party leader, broadcaster TV Asahi said on Monday. P... [3555 chars]",
//         "url": "https://www.devdiscourse.com/article/politics/1719372-japans-covid-minister-kono-popular-with-voters-for-pm-may-get-heavyweight-backing---media",
//         "image": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/27_05_2019_12_11_15_3417518.jpg?width=920&format=jpeg",
//         "publishedAt": "2021-09-06T08:03:18Z",
//         "source": {
//             "name": "Devdiscourse",
//             "url": "https://www.devdiscourse.com"
//         }
//     },
//     {
//         "title": "Mais de 150 líderes progressistas do mundo alertam para tentativa de golpe no Brasil em 7 de Setembro",
//         "description": "Em carta, mais de 150 lideranças progressistas pelo mundo, entre estas ex-presidentes e parlamentares, dizem que as manifestações de 7 de setembro convocadas por Jair Bolsonaro podem desencadear uma insurreição antidemocrática no Brasil",
//         "content": "Em carta, mais de 150 lideranças progressistas pelo mundo, entre estas ex-presidentes e parlamentares, dizem que as manifestações de 7 de setembro convocadas por Jair Bolsonaro podem desencadear uma insurreição antidemocrática no Brasil edit\nApoie o ... [3455 chars]",
//         "url": "https://www.brasil247.com/brasil/mais-de-150-lideres-progressistas-do-mundo-alertam-para-tentativa-de-golpe-no-brasil-em-7-de-setembro",
//         "image": "https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-brasil247/swp/jtjeq9/media/20210712110752_92fadf60-1484-461e-ad5b-f6ad01150fe4.jpg",
//         "publishedAt": "2021-09-06T08:02:12Z",
//         "source": {
//             "name": "Brasil 247",
//             "url": "https://www.brasil247.com"
//         }
//     },
//     {
//         "title": "Gable Steveson was 'scared' of Brock Lesnar in first meeting with former UFC champion",
//         "description": "Gable Steveson heaps praise on Brock Lesnar as a mentor and hopes to follow in his footsteps.",
//         "content": "Once you have subscribed we will use the email you provided to send you the newsletter. You can unsubscribe at any time by clicking the unsubscribe link at the bottom of the newsletter email.\nBrock Lesnar is one of the few beings on the planet who ca... [2861 chars]",
//         "url": "https://www.givemesport.com/1748398-gable-steveson-was-scared-of-brock-lesnar-in-first-meeting-with-former-ufc-champion",
//         "image": "https://site-cdn.givemesport.com/images/21/09/06/b8bb8030b7981c8e1876bc26b6f069f5/1200.jpg",
//         "publishedAt": "2021-09-06T08:01:51Z",
//         "source": {
//             "name": "GIVEMESPORT",
//             "url": "https://www.givemesport.com"
//         }
//     },
//     {
//         "title": "Live updates as major road closed by police after accident",
//         "description": "Drivers are being urged to find alternative routes this morning",
//         "content": "We'll be bringing you the latest updates as a crash has led to a road closure in Speke this morning.\nSpeke Boulevard and Penketh Drive, into the city centre, are closed following the incident.\nThe closure has caused disruption to public transport inc... [675 chars]",
//         "url": "https://www.liverpoolecho.co.uk/news/liverpool-news/live-updates-major-road-closed-21491391",
//         "image": "https://i2-prod.liverpoolecho.co.uk/incoming/article21491422.ece/ALTERNATES/s1200/0_LEC_EKR_060921_SPEKE.jpg",
//         "publishedAt": "2021-09-06T08:01:21Z",
//         "source": {
//             "name": "Liverpool Echo",
//             "url": "https://www.liverpoolecho.co.uk"
//         }
//     },
//     {
//         "title": "FlexiSpot BS9 office chair review: Simple but comfortable",
//         "description": "FlexiSpot is making a name for itself as one of the go-to places for some of the best office equipment on the market. I've reviewed a number of their electronic standing desks over the last year, and I've come away impressed with every single one. So, when FlexiSpot offered their BS9 office chair to review, I was excited to see how well it would hold up.",
//         "content": "FlexiSpot is making a name for itself as one of the go-to places for some of the best office equipment on the market. I've reviewed a number of their electronic standing desks over the last year, and I've come away impressed with every single one. So... [4578 chars]",
//         "url": "https://www.windowscentral.com/flexispot-bs9-office-chair-review",
//         "image": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/09/flexispot-bs9-seat.jpg",
//         "publishedAt": "2021-09-06T08:00:02Z",
//         "source": {
//             "name": "Windows Central",
//             "url": "https://www.windowscentral.com"
//         }
//     },
//     {
//         "title": "Lionel Messi fury as Brazil vs Argentina is abandoned over quarantine row",
//         "description": "Lionel Messi voiced his anger as his side’s World Cup qualifier with Brazil was abandoned amid farcical scenes in Sao Paulo after health officials invaded the pitch in an attempt to deport Argentina players who were accused of breaking coronavirus restrictions.",
//         "content": "L ionel Messi voiced his anger as his side’s World Cup qualifier with Brazil was abandoned amid farcical scenes in Sao Paulo after health officials invaded the pitch in an attempt to deport Argentina players who were accused of breaking coronavirus r... [3041 chars]",
//         "url": "https://www.standard.co.uk/sport/football/lionel-messi-brazil-argentina-quarantine-abandoned-b953836.html",
//         "image": "https://static.standard.co.uk/2021/09/06/08/newFile-1.jpg?width=1200&width=1200&auto=webp&quality=75",
//         "publishedAt": "2021-09-06T07:59:52Z",
//         "source": {
//             "name": "Evening Standard",
//             "url": "https://www.standard.co.uk"
//         }
//     },
//     {
//         "title": "Live updates as M1 closed between junction 24 and junction 25 after serious crash",
//         "description": "Police from across the East Midlands have been called out",
//         "content": "A stretch of the M1 is closed near East Midlands Airport after a collision involving multiple vehicles.\nThe southbound carriageway of the motorway is shut between junction 24 (for the A453 and East Midlands Airport) and junction 25 (for the A52 Notti... [673 chars]",
//         "url": "https://www.nottinghampost.com/news/local-news/live-updates-m1-closed-between-5876248",
//         "image": "https://i2-prod.nottinghampost.com/incoming/article5615032.ece/ALTERNATES/s1200/1_M1-junction-24-southbound-July-6-2021PNG.png",
//         "publishedAt": "2021-09-06T07:57:43Z",
//         "source": {
//             "name": "Nottinghamshire Live",
//             "url": "https://www.nottinghampost.com"
//         }
//     },
//     {
//         "title": "Sarah Harding's joy as she reached number one with solo single before tragic death",
//         "description": "Sarah Harding beamed she was ‘so so happy’ after making it to Number 1 on iTunes in her last Instagram post earlier this year after vowing to raise money for the Christie NHS foundation",
//         "content": "The video will auto-play soon 8 Cancel\nGet daily headlines and breaking news alerts for FREE by signing up to our newsletter Invalid Email Something went wrong, please try again later. Sign up! Thank you for subscribing We have more newsletters Show ... [2817 chars]",
//         "url": "https://www.irishmirror.ie/showbiz/celebrity-news/sarah-hardings-joy-reached-number-24916969",
//         "image": "https://i2-prod.mirror.co.uk/incoming/article24916876.ece/ALTERNATES/s1200/1_Sarah-Harding-Performs-At-O2-Islington-Academy-In-London.jpg",
//         "publishedAt": "2021-09-06T07:49:28Z",
//         "source": {
//             "name": "Irish Mirror",
//             "url": "https://www.irishmirror.ie"
//         }
//     },
//     {
//         "title": "Agent slams 'bad news' at Man Utd, amid reveal about client's ruined exit",
//         "description": "The agent of Manchester United midfielder Donny van de Beek has labelled Cristiano Ronaldo's return to Old Trafford as \"bad news\" for his client.",
//         "content": "The agent of Manchester United midfielder Donny van de Beek has labelled Cristiano Ronaldo’s return to Old Trafford as “bad news” for his client.\nUnited capped off a successful summer transfer window with the shock move to bring the Portuguese back. ... [2253 chars]",
//         "url": "https://www.teamtalk.com/news/van-de-beek-agent-bad-news-ronaldo-man-utd-ruined-everton-transfer",
//         "image": "https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2021/02/11165925/PA.57711289.jpg",
//         "publishedAt": "2021-09-06T07:48:45Z",
//         "source": {
//             "name": "Teamtalk.com",
//             "url": "https://www.teamtalk.com"
//         }
//     }
// ]






const SearchBar = () => {

    const [ fieldValue, setFieldValue ] = useState('Hello');
    const [ articleResponse, setArticleResponse ] = useState([]);
    const [ loading, setLoading] = useState(true);

    const handleInputChange = (event) => {
        return setFieldValue(event.target.value);
    };

const handleClickEvent = () => {
    setLoading(false);
       console.log('hi')
  fetch(`https://gnews.io/api/v4/search?q=${fieldValue}&token=15a3755af1b276ce58c15a1b52991d66`)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
        console.log(data);
      setArticleResponse(data.articles);
      console.log(data);
      setLoading(true);
  });

};

function AllArticles(props) {
    const articles = props.articles
    const ArticlesTitles = articles.slice(0,9).map((article) => 
        <section className="card">
            <a href={article.url}>
            <div className="titleBox">
                    <img src={article.image} alt="kazkasBlet" />
                    <h1>{ article.title }</h1>
                    </div>
            <p>{ article.content }</p>
            </a>
        </section>    
    );
    if (!loading) {
        return (
           <div><h1>Loading...</h1></div>
        )

    } else {
        return (
            <div className="articleField">{ArticlesTitles}</div>
        )
    }

    
}
// const Search = () => {
   
//     if (!loading) {
//         return <h3>Loading</h3>;
//     } else {
//         return <h3> Results: </h3>
//     }


// };

// const InputComponent = () => {
//     return (


//     )
// }

    return ( 
        
        <div>  
            <div className="inputComponentStyle">
                <input type="text" onChange={handleInputChange}/>
                <button onClick={handleClickEvent}>Search for it</button>
            </div>

            {/* <Search />  */}
            <AllArticles articles={ articleResponse } />
        </div>
     );
}


 
export default SearchBar;