import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInDiv } from '../components/animations/FadeInDiv';
import Video from '../components/Video';

const Home = () => {
  let videoJam = (
    <section
      style={{ height: 'calc(100vh - 90px)' }}
      className="position-relative"
    >
      <div className="text-center position-absolute top-50 start-50 translate-middle">
        <span className="eyebrow text-white opacity-50">
          New Collection
        </span>
        <h1 className="display-1 text-white lh-sm fw-bold">
          Spring Jacket.
        </h1>
        <Link
          to=""
          className="btn btn-outline-white text-white opacity-50"
        >
          ByBye Collection
        </Link>
      </div>

      <Video />
    </section>
  );

  return (
    <FadeInDiv>
      <div className="d-flex w-100 justify-content-center bg-black">
        <small className="text-white eyebrow opacity-50 d-none d-sm-block">
          Limited Time Only -&nbsp;
          <span
            style={{
              padding: '0 5px',
              color: 'red',
              opacity: 1,
            }}
          >
            Jacket Only
          </span>{' '}
          -&nbsp; For Sale Now £197
        </small>
      </div>
      {videoJam}
    </FadeInDiv>
  );
};

export default Home;
