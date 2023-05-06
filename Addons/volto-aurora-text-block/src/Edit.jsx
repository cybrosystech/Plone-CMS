import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import AuroraData from './Data';
import AuroraView from './View';

const AuroraEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <AuroraView {...props} />
      <SidebarPortal selected={selected}>
        <AuroraData
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

export default withBlockExtensions(AuroraEdit);
