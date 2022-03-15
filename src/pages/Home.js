import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { FadeInDiv } from '../components/animations/FadeInDiv';
// asset
import Video from '../components/Video';

const Home = () => {
  let videoJam = (
    <section
      style={{ height: 'calc(100vh - 90px)' }}
      className="position-relative"
    >
      <div className="text-center position-absolute top-50 start-50 translate-middle">
        <span className="eyebrow fs-4 text-white opacity-50">
          New Collection
        </span>
        <h1 className="display-1 text-white lh-sm fw-bold">Spring Jacket.</h1>
        <Link
          to=""
          className="btn btn-outline-white text-white fs-5 opacity-50"
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
        <small
          style={{ borderTop: '1px solid #909090' }}
          className="eyebrow text-white opacity-75 d-none d-sm-block"
        >
          Limited Time Only -&nbsp;
          <span
            style={{
              padding: '0 5px',
              color: '#ff5722',
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
