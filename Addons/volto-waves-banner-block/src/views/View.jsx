import React from 'react';
import './styles.css';

const View = (props) => {
    const { data } = props;
    return (
    <>

      <section className="waves-container full-width">
        <div className="header">
          <div className="inner-header" style={{ height: data.height }}>
            <div>
              <h1 className="waves-header-h1">{data.title}</h1>
              <p className="waves-subtitle-p">{data.subtitle}</p>
            </div>
          </div>
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};
export default View;
