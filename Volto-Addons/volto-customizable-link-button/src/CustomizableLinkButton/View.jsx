import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import './styles.less';


const CustomButtonView = (props) => {
  const { data } = props;

  if (data.BlockStretch){

  }

  return (
    <div className={`block highlight ${data.BlockStretch == true ? "full-width" : ""}`} style={{backgroundColor:data.BGColor}}>
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <h2 style={{color:data.titleTextColor}}>{data.title}</h2>
            <p className="description" style={{color:data.descriptionTextColor}}>{data.description}</p>
          </Grid.Column>
          <Grid.Column>
            {data.buttonLink?.length > 0 && data.buttonTitle && (
              <div className='buttons-area'>
              <UniversalLink
              style={{background: data.buttonColor,color:data.buttonTextColor}}
                href={data.buttonLink[0]['@id']}
                className="ui button">
                {data.buttonTitle}
              </UniversalLink>
              </div>
            )}
            <br />
            {data.otherLink?.length > 0 && data.otherLinkText && (
              <div className='buttons-area'>
              <UniversalLink
                href={data.otherLink[0]['@id']}
                className="other-link"
              >
                {data.otherLinkText}
              </UniversalLink>
              </div>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default CustomButtonView;
