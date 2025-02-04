import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import { css } from "../../../../styled-system/css";
function Quotes() {
  const [randomQuote, setRandomQuote] = useState<any>({});
  const [random10Quotes, setRandom10Quotes] = useState<any>([]);
  const [noNet, setNoNet] = useState(false);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((res) => {
        setRandomQuote(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function generateTenQuotes() {
    axios
      .get("https://dummyjson.com/quotes/random/10")
      .then((res) => {
        setRandom10Quotes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Header />
      <div
        className={css({
          maxW: "600px",
          m: "auto",
          background: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          padding: "15px",
        })}>
        <h2
          className={css({ fontSize: "30px", fontWeight: "bold", mb: "30px" })}>
          Quote Of Today:
        </h2>
        {Object.keys(randomQuote).length ? (
          <>
            <p className={css({ mb: "15px" })}>{randomQuote.quote}</p>
            <p className={css({ mb: "15px" })}>— {randomQuote.author}</p>
          </>
        ) : (
          <div className={css({ mb: "15px" })}>
            {!noNet
              ? "Loading..."
              : "Loading... Check Your Internet Connection if it takes a lot of time and refresh."}
            <div style={{ display: "none" }}>
              {window.setTimeout(() => setNoNet(true), 1000)}
            </div>
          </div>
        )}

        <button
          onClick={generateTenQuotes}
          className={css({
            bgColor: "blue.900",
            color: "white",
            userSelect: "none",
            p: "5px 10px",
            mb: "20px",
            rounded: "lg",
            fontSize: "20px",
            cursor: "pointer",
            transition: "0.3s ease",
            _hover: { bgColor: "blue.700" },
          })}>
          Generate More Quotes
        </button>
        <div>
          {random10Quotes.length
            ? random10Quotes.map((quote: any) => {
                return (
                  <div
                    key={quote.id}
                    className={css({
                      "&:not(:last-child)": {
                        borderBottom: "1px solid #ccc",
                        mb: "20px",
                      },
                    })}>
                    <p className={css({ mb: "15px" })}>{quote.quote}</p>
                    <p className={css({ mb: "15px" })}>— {quote.author}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

export default Quotes;
