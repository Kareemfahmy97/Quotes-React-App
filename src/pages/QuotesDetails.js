import React from 'react'
import { useParams } from 'react-router-dom';
import { Fragment, useEffect} from 'react';
import Comments from '../components/comments/Comments';
import { Route } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import useHttp from '../components/hooks/use-http';
import { getSingleQuote } from '../components/lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';



const QuotesDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!loadedQuote.text){
    return <p>No quotes found!</p>
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;