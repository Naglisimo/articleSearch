import React, {useState}from 'react';
import './styles.css'

const SearchBar = () => {

    const [ fieldValue, setFieldValue ] = useState('Hello');
    const [ articleResponse, setArticleResponse ] = useState([]);

    const handleInputChange = (event) => {
        return setFieldValue(event.target.value);
    };

const handleClickEvent = () => {
  fetch(`https://gnews.io/api/v4/search?q=${fieldValue}&token=15a3755af1b276ce58c15a1b52991d66`)
  .then((response) => response.json())
  .then((data) => {
      setArticleResponse(data.articles);
    })
  .catch((error) => alert('error', error))
};

function AllArticles(props) {
    const articles = props.articles
    const ArticlesTitles = articles ? articles.slice(0,9).map((article, index) => 
        <section className="card" key={index}>
            <a href={article.url} target={article.url}>
            <div className="titleBox">
                    <img src={article.image} alt="kazkasBlet" />
                    <h1>{ article.title }</h1>
                    </div>
            <p>{ article.content }</p>
            </a>
        </section>    
    ) : 0;
    if (articleResponse === undefined) {
        return (
           <div><h1>Nothing to display yet...</h1></div>
        )
    } else {
        return (
            <div className="articleField">{ArticlesTitles}</div>
        )
    }
}

    return ( 
        <div className="inputComponentStyle">
            <h2 className="centeredContainer">Find any article you want!</h2>
            <div className="centeredContainer">
                <input className="inputStyle" type="text" onChange={handleInputChange}/>
                <button className="buttonStyle" onClick={handleClickEvent}>Search</button>
            </div>
            <AllArticles articles={ articleResponse } />
        </div>
     );
}


 
export default SearchBar;