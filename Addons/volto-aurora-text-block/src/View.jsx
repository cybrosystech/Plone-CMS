import React from 'react';

import './aurora.css';

const AuroraView = (props) => {
  const { data } = props;

  return (
    <>
      <div className="main-aurora" style={{ paddingTop: data.paddingTop, paddingBottom: data.paddingBottom }}>
        <div className="aurora-text width-stretch" style={{ height: data.height }}>
          <h1 className="title">
            <div dangerouslySetInnerHTML={{ __html: data.title }} />

            <div className="aurora">
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </div>
          </h1>
          <p className="subtitle">{data.subtitle}</p>
        </div>
      </div>
    </>
  );
};
export default AuroraView;
