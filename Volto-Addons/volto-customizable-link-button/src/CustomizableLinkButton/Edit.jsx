import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import LinkData from './Data';
import CustomButtonView from './View';
import './styles.less';

const CustomButtonEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <CustomButtonView {...props} />
      <SidebarPortal selected={selected}>
        <LinkData
          key={block}
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(CustomButtonEdit);