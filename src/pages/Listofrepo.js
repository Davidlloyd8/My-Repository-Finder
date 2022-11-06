import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import "../css/listofrepo.css";

function Listofrepos() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    // `https://randomuser.me/api/?results=40&seed=abc`
    `https://api.github.com/users/Davidlloyd8/repos`
  );
  console.log(data);
  const PER_PAGE = 6;
  const total = data?.results?.length;
  const pages = Math.ceil(total / PER_PAGE);
  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }
  return (
    <>
      <h1>LIST OF REPOSITORIES</h1>
      <div className="box">
        {data?.results
          .slice((page - 1) * PER_PAGE, page * PER_PAGE)
          .map((each, index) => {
            const reponame = `${each.name}`;
            return (
              <div className="card-box">
                <div className="rainbow">{`${index + 1}.${reponame}`}</div>
              </div>
            );
          })}
      </div>
      <div className="pagination-container">
        <ul className="pagination">
          {
            <button
              className="prev"
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
          }
          {Array.from({ length: pages }, (_, index) => index + 1).map(
            (each) => (
              <li onClick={() => setPage(each)}>{each}</li>
            )
          )}
          {
            <button
              className="next"
              disabled={page >= pages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          }
        </ul>
      </div>
    </>
  );
}

function Listofrepo() {
  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }
  return (
    <>
      <Navigation />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        //onReset={() => UsersLists.setPage(1)}
        // reset the state of your app so the error doesn't happen again
        //resetKeys={[UsersLists.page]}
      >
        <Listofrepos />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default Listofrepo;
