/* Import React and other libraries */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Portal } from 'react-portal';
import cx from 'classnames';
import { Message, Container } from 'semantic-ui-react';
import { getStatusConfig } from '@cybroplone/site-status/actions';
import './less/statusbanner.less';

/* Define the SiteStatusBanner component */
const SiteStatusBanner = ({ sitestatus, dispatch }) => {
  /* Get the status config */
  const StatusConfig = {
    ...sitestatus.config || {}
  };

  /* Get the config for the status banner */
  const confStatus = StatusConfig || {};
  const BannerData = confStatus.status_banner || {};

  /* Get the top node for the status banner */
  const [topNode, setTopNode] = React.useState('');

  /* Use useEffect to get the status config */
  useEffect(() => {
    dispatch(getStatusConfig());
  }, []);

  /* Use useEffect to set the top node */
  useEffect(() => {
    setTopNode(document.querySelector(BannerData.NodeSelector));
  }, [BannerData.NodeSelector]);

  /* Return the status banner */
  return (
    <>
      {BannerData.enabled && (
        <Portal node={topNode}>
          <div className="statusBanner">
            <Message className={cx(BannerData.type)} icon>
              <Container>
                <Message.Content>
                  <Message.Header>{BannerData.title}</Message.Header>
                  <p dangerouslySetInnerHTML={{ __html: BannerData.message }} />
                </Message.Content>
              </Container>
            </Message>
          </div>
        </Portal>
      )}
    </>
  );
};

/* Export the SiteStatusBanner component */
export default connect((state) => ({
  sitestatus: state.sitestatus
}))(SiteStatusBanner);
